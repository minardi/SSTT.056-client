/* infoBlock */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
        
		currentBlock: {},
		
        subscriptions: {
			"TeamMember:TeamMemberSelected" : "userInfo",
			"ScrumBoard:TaskSelected": "taskInfo",
			"Team:TeamSelected": "teamInfo"
        },

		userInfo: function (infoModel) {
		    this.currentBlock.remove && this.currentBlock.remove();
		
		    this.currentBlock = new app.UserInfo.ModelView({
			    model: infoModel, 
				});
				
		    this.$el.html(this.currentBlock.render().el);
		},
		
        taskInfo: function (infoModel) {
		    this.currentBlock.remove && this.currentBlock.remove();
			
			this.currentBlock = new app.TaskInfo.ModelView ({
				model: infoModel
			});
			
			this.$el.html(this.currentBlock.render().el);
		},
		
		teamInfo: function (infoModel) {
		    this.currentBlock.remove && this.currentBlock.remove();
			
			this.currentBlock = new app.TaskInfo.ModelView ({
				model: infoModel
			});
			
			this.$el.html(this.currentBlock.render().el);
		}
		
  });
    
})(app.InfoBlock);
		
		
		
		
		