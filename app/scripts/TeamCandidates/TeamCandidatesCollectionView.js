/* TeamCandidates*/

(function(module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/TeamCandidates/TeamCandidatesCollectionTpl.ejs'],
		
		subscriptions: {
			"TeamEditPage:Open": "initTeamCandidates",
			"TeamMembers:DeleteRole": "deleteRole"
		},

		initTeamCandidates: function(data) {             
            this.$el = data["element"].find('.candidates'); 
            this.collection = new module.Collection(data["team_id"]);
            this.collection.on('sync', this.render, this);
			this.collection.fetch();
        },

        render: function() {
            this.$el.append(this.template());
            this.$users_list = this.$(".users-list");
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(user_model) {
            var user = new module.ModelView({
                    model: user_model
                });

            this.$users_list.append(user.render().el);
        },
        
        deleteRole: function (user_id) { 
            this.collection.each(function(model) {
                this.model = model;
                    
                    if(user_id === model.id){
                        this.model.set("role", " "); 
                    };

            }, this);  
        }
    });

})(app.TeamCandidates);

