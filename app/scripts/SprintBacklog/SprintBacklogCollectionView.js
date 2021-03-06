/* SprintBacklog */

(function(module, sstt) {
        
    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/SprintBacklog/SprintBacklogCollectionTpl.ejs'],  

        stories_with_tasks: [],

        subscriptions: {
            "ProductBacklog:MovedStory": "addBacklogItem",
            "PlanningBoard:InitSprintBacklog": "initSprintBacklog",
            "SprintBacklog:RestoreStory": "restoreStory",
            "BacklogItemEdit:TryToCreateSprint": "findActiveSprint",
            "BacklogItemEdit:StopSprintConfirmed": "stopSprint",
            "BacklogItemEdit:SavedChanges": "saveSprint",
			"BacklogItemEdit:TaskCreated": "addBacklogItem",	
            "ScrumBoard:SprintWasStoped" : "stopSprint"
        },

        initialize: function() {
            this.sprint = new module.Model();
        },

        initSprintBacklog: function (el) {
            this.setElement(el);
            this.$el.append(this.template());
            this.$list = this.$(".sprintstory-list");

            _.bindAll(this, "restoreStory");

            this.collection = new module.Collection();
			
            this.collection.on("add remove", this.checkFilling, this);

            this.sprint = new module.Model({}, {
                urlRoot: "backlog_items/get_active_sprint/" +  sstt.current_project
            });
            this.sprint.fetch();

        },

        stopSprint: function() {
            this.sprint.save({status: "failed"});
        },

        saveSprint: function(sprint) {
            mediator.pub("SprintBacklog:SprintWasReplaced", this.sprint);

            if (sprint.get("item_type") === 'sprint') {

                sprint.save()
                    .success(_.bind(this.sprintWasSaved, this, sprint));
            }
        },

        sprintWasSaved: function (sprint) {
            this.sprint.clear()
                .on("change", function () { this.saveAllStories(sprint); }, this)
                .fetch();
        },

        saveAllStories: function (sprint) {
            var story_parent_id = sprint.get("id");
            
            this.sprint.off("change");
			
            this.collection.each(function (model) {
			
				if (model.get("item_type") === "story") {
					model.set("parent_id", story_parent_id);

                    if(this.stories_with_tasks[model.id]){
					   model.set("status", "sprint");
                    } else {
                        model.set("status", "todo");
                    }
				}
				
				model.save(null,{
					success: _.bind(this.restoreStory, this)
				});
            }, this);

            this.$list.empty();
        },
		
        addBacklogItem: function (item) {
		
            this.collection.add(item);
			
			if (item.get("item_type") === "story") {
				this.renderOne(item);
			} else {
                if(item.get("item_type") === "task" && !this.stories_with_tasks[item.get("parent_id")]) {
                    this.stories_with_tasks[item.get("parent_id")] = true;
                }
            }
        },
		
        renderOne: function (item) {
            var backlogItemView = new module.ModelView({
                    model: item
                });

			this.$list.append(backlogItemView.render().el);
        },

        restoreStory: function(story) {
            this.collection.remove(story);
        },

        checkFilling: function() {
            var pub_map = {
                true: "SprintBacklog:EmptySprintBacklog",
                false: "SprintBacklog:FilledSprintBacklog"
            };

            mediator.pub(pub_map[this.collection.isEmpty()]);
        },

        findActiveSprint: function(attributes) {
            if (this.sprint.get("status") === "active") {
                mediator.pub("SprintBacklog:ActiveSprintWasFound", attributes);
            } else {
                mediator.pub("SprintBacklog:NoActiveSprints", attributes);
            }
        }

    });

})(app.SprintBacklog, sstt);
