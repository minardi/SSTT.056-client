/* InfoBlock */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
		currentBlock: {},
		
        subscriptions: {
			"ScrumBoard:TaskClick": "infoTask",
			"ProjectPage:ProjectChecked": "infoProject",
			"ProductBacklog:SelectedStory": "infoBacklogItem",
 			"module:deselectAllUnits" : "changeInfo"
		},
		
		showInfo: function (instance) {
		    this.currentBlock.remove && this.currentBlock.remove();
			this.currentBlock = instance;
			this.$el.html(this.currentBlock.render().el);
		},
		
		infoTask: function (info_model) {
			this.showInfo(new app.TaskInfo.ModelView ({
				model: info_model
			}));
		}, 
		
		infoProject: function (info_model) {
			this.showInfo(new app.ProjectInfo.ModelView ({
				model: info_model
			}));
		}, 
		
		infoBacklogItem: function (info_model) {
			this.showInfo(new app.BacklogItemInfo.ModelView ({
				model: info_model
			}));
		},
		
		changeInfo: function() {
		    this.$el.html("Please select item");
		}		
  });
    
})(app.InfoBlock);