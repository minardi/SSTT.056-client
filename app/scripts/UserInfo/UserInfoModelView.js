/* UserInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({   

        tagName: "div",	

        template: {
		    "user_info": JST['app/scripts/UserInfo/UserInfoTpl.ejs'],
			"user_project_info": JST['app/scripts/UserInfo/UserProjectInfoTpl.ejs']
        },
		
		initialize: function () {
		    this.collection = new module.Collection(this.model.id);
			
            this.collection.on('add', this.renderOne, this);
		},
		
        render: function() {
            this.$el.html(this.template["user_info"](this.model.toJSON()));
	
			return this;
        },
			
		renderOne: function (user) {	
          			
            this.$el.append(this.template["user_project_info"](user.toJSON()));
			
		return this;
        }
	
  });
    
})(app.UserInfo);
