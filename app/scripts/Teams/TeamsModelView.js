/* Teams */

(function(module) {

    module.ModelView = Backbone.View.extend({

        tagName: "div",
        
        className: "box", 

        template: JST['app/scripts/Teams/TeamsTpl.ejs'],
        
        events: {
            "dblclick": "openTeam",
			"click": "selectTeam"
        },
		
		selectTeam: function() {
			mediator.pub("Team:TeamSelected", this.model, "team");
		},

        openTeam: function() {
            mediator.pub("Team:TeamOpened", this.model.id);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})(app.Teams);
