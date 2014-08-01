/* TeamInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
        template: JST['app/scripts/TeamInfo/TeamInfoTpl.ejs'],

        member_template: JST['app/scripts/TeamInfo/TeamMembersTpl.ejs'],
		
		initialize: function() {
			this.collection = new module.Collection(this.model.id);
			
			this.collection.on("add", this.renderMember, this);
		},

        render: function () {
			this.$el.html(this.template(this.model.toJSON()));
		
            return this;
        },

        renderMember: function (team_member) {
			this.$el.append(this.member_template(team_member.toJSON()));
        }
  });
    
})(app.TeamInfo);