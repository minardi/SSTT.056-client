/* TaskInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
       
        template: JST['app/scripts/TaskInfo/InfoTaskTpl.ejs'],
		
		subscriptions: {		
			"ScrumBoard: getSprintName": "setSprintName"
		},
		
		setSprintName: function (sprint_name) {
			console.log("Works!");
			this.model.set("sprint_name", sprint_name);
		},
		
        render: function() {
			this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
		
  });
    
})(app.TaskInfo);