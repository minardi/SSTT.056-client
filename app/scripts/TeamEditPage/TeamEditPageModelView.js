/* TeamEditPage */

(function(module, sstt) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
        
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #techleads": "showTeachLeads",
            "click #ok_btn": "hideConfirm"
        },

        subscriptions: {         
            "Team:TeamOpened": "render",
            "ContextMenu:Back": "removeTeamPage",
            "ContextMenu:BackFromTeamEditPage": "removeTeamPage"
        }, 

        render: function(team_id) {     
            this.$el.append(this.template());           
            mediator.pub("TeamEditPage:Open", { element: this.$el, 
                                                team_id: team_id 
                                                });            
            this.showDevelopers();

            return this;
        },       

        showWatchers: function() {            
            mediator.pub("TeamEditPage:RoleSetUp", "watcher");
            $("#watchers").css("background-color", "white");
            $("#developers").css("background-color", "none");
            $("#techleads").css("background-color", "none");
        },

        showDevelopers: function() {
            mediator.pub("TeamEditPage:RoleSetUp", "developer");
            $("#watchers").css("background-color", "none");
            $("#developers").css("background-color", "white");
            $("#techleads").css("background-color", "none");
        },

        showTeachLeads: function() {
            mediator.pub("TeamEditPage:RoleSetUp", "techlead");
            $("#watchers").css("background-color", "none");
            $("#developers").css("background-color", "none");
            $("#techleads").css("background-color", "white");
        },

        hideConfirm: function() {
            this.$el.find("#save_confirm").addClass("hidden");
        },
               
        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
        
    });

})(app.TeamEditPage, sstt);
