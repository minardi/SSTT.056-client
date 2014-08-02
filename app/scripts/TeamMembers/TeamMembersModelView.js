/* TeamMembers */

(function(module) {

    module.ModelView = Backbone.View.extend({

        className: "user-box",
        
        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],
        
        initialize: function() {
            this.model.on("change", this.show, this);
            this.model.once("sync", this.saveRole, this);
            this.show();
        },

        subscriptions: {
            "TeamEditPage:roleSetUp": "setRole"
        },
        
        events: {
            "dblclick" : "deleteRole",
			//"click": "showUserInfo"
        },
       
        show: function() {
            this.canRender() ? this.$el.removeClass('hide'): 
                                this.$el.addClass('hide');
        },

        saveRole: function() {
            mediator.pub("TeamMembers:Saved");
            mediator.pub("TeamMembers:ChangeRole");
        },

        canRender: function() {
            return (this.model.get("role") === this.role);  
        },

        setRole: function(new_role) {
            this.role = new_role;
            this.show();
        },
        
        deleteRole: function () {
            mediator.pub("TeamMembers:DeleteRole", this.model.get("user_id"));
            this.model.destroy();
            this.$el.addClass('hide');
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.show();

            return this;
        },
		
		showUserInfo: function () {
			//this.model.id = this.model.get("user_id");
			mediator.pub("TeamMember:Selected", this.model);
		}

    });
    
})(app.TeamMembers);
