/* InfoBlock */

(function(module) {
        
    module.ModelView = Backbone.View.extend({
		currentBlock: {},
		
        subscriptions: {
			"ScrumBoard:TaskClick": "taskInfo",
			"Team:TeamSelected": "teamInfo"
        },
		
		taskInfo: function (info_model) {
		    this.currentBlock.remove && this.currentBlock.remove();
			
			this.currentBlock = new app.TaskInfo.ModelView ({
				model: info_model
			});
			
			this.$el.html(this.currentBlock.render().el);
		},

		teamInfo: function (info_model) {
			this.currentBlock.remove && this.currentBlock.remove();
			
			this.currentBlock = new app.TeamInfo.ModelView ({
				model: info_model
			});
			
			this.$el.html(this.currentBlock.render().el);
		}
  });
    
})(app.InfoBlock);