/* UserInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    

        template: {
			"user_info": JST['app/scripts/UserInfo/UserInfoTpl.ejs'],
			"user_project_info": JST['app/scripts/UserInfo/UserProjectInfoTpl.ejs']
        },       
         
		el: $(".main"),
		 
		initialize: function () {
		    this.render();
		},
		
        render: function(model, type) {
            var template = this.template[type];
				
            this.$el.html(template(model.toJSON()));
			
			model.on("sync", this.renderProjectRoles, this);
			model.fetch();
			
            return this;
        },
		
        renderProjectRoles: function (model, type) {

		    var template = this.template[type];

            this.$el.append(template(model.toJSON()));
            return this;
		}
	
  });
    
})(app.UserInfo);
