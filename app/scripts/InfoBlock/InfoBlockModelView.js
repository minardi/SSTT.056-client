/* InfoBlock */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
		currentBlock: {},
		
        subscriptions: {
			"ScrumBoard:TaskClick": "infoTask",
			
        },
	
		infoTask: function (model) {
			mediator.pub("TaskInfo: getSprintName");

			this.currentBlock = new app.TaskInfo.ModelView ({
				model: model,
			});
			
			mediator.pub("TaskInfo: getSprintName");
			
			this.$el.html(this.currentBlock.render().el);
		}
  });
    
})(app.InfoBlock);