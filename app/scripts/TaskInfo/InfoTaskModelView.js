/* TaskInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    
       
        template: JST['app/scripts/TaskInfo/InfoTaskTpl.ejs'],
		
        render: function() {
			this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
		
  });
    
})(app.TaskInfo);