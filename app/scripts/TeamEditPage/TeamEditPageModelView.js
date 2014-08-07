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
            $("#watchers").css("font-weight", "700");
            $("#developers").css("font-weight", "200");
            $("#techleads").css("font-weight", "200");
        },

        showDevelopers: function() {
            mediator.pub("TeamEditPage:RoleSetUp", "developer");
            $("#watchers").css("font-weight", "200");
            $("#developers").css("font-weight", "700");
            $("#techleads").css("font-weight", "200");
        },

        showTeachLeads: function() {
            mediator.pub("TeamEditPage:RoleSetUp", "techlead");
               $("#watchers").css("font-weight", "200");
            $("#developers").css("font-weight", "200");
            $("#techleads").css("font-weight", "700");
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
