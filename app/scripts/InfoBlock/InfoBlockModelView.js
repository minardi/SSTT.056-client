/* InfoBlock */

(function(module) {

    module.ModelView = Backbone.View.extend({    
		currentBlock: {},
		
        subscriptions: {
			"ScrumBoard:TaskClick": "infoTask",
			"ProjectPage:ProjectChecked": "infoProject",
			"ProductBacklog:SelectedStory": "infoBacklogItem",
			"Team:TeamSelected": "teamInfo",
 			"module:deselectAllUnits" : "changeInfo"
		},
			
		showInfo: function (instance) {
		    this.currentBlock.remove && this.currentBlock.remove();
			this.currentBlock = instance;
			this.$el.html(this.currentBlock.render().el);
		},
		
		teamInfo: function (info_model) {
			this.currentBlock.remove && this.currentBlock.remove();
			
			this.currentBlock = new app.TeamInfo.ModelView ({
				model: info_model
			});
			
			this.$el.html(this.currentBlock.render().el);
		},
		
		infoTask: function (info_model) {
			
			this.currentBlock = new app.TaskInfo.ModelView ({
				model: info_model,
			});
			
			mediator.pub("TaskInfo: getSprintName");
			
			this.$el.html(this.currentBlock.render().el);
		},
		
		infoProject: function (info_model) {
			this.showInfo(new app.ProjectInfo.ModelView ({
				model: info_model
			}));
		}, 
		
		infoBacklogItem: function (info_model) {
			this.showInfo(new app.BacklogItemInfo.ModelView ({
				model: info_model
			}));
		},
		
		changeInfo: function() {
		    this.$el.html("Please select item");
		}		

  });
    
})(app.InfoBlock);