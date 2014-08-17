/* TeamCandidates*/

(function(module) {

    module.ModelView = Backbone.View.extend({	

        tagName: "div",

        className: "user-box ",
        
        role: "developer", 

        template: JST['app/scripts/TeamCandidates/TeamCandidatesTpl.ejs'],   
		
		subscriptions: {
            "TeamEditPage:RoleSetUp": "setRole"
        },
		
		events: {
            "dblclick": "setTeamMember",
			"click": "showUserInfo"
        },

        initialize: function() {
            this.model.on("change", this.render, this);
        },
		
		render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
		
		renderUser: function () {
		    this.template(this.model.toJSON());
            return this;
		},

        setTeamMember: function() {
            this.model.set("role", this.role);
            mediator.pub("TeamCandidates:SetTeamMember", this.model.formTeamMember()); 
		},

        setRole: function(current_role) { 
            this.role = current_role;
        },
		
		showUserInfo: function () {
			mediator.pub("TeamMember:Selected", this.model);
		}		

    });

})(app.TeamCandidates);
