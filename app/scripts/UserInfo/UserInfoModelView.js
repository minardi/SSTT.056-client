/* UserInfo */

(function(module) {
        
    module.ModelView = Backbone.View.extend({   

        tagName: "div",	

        template: {
		    "user_info": JST['app/scripts/UserInfo/UserInfoTpl.ejs'],
			"user_project_info": JST['app/scripts/UserInfo/UserProjectInfoTpl.ejs']
        },
		
		initialize: function () {
		    var id;
		    if (this.model.get("user_id")){
			    id = this.model.get("user_id");
			} else {
			    id = this.model.id;
			};
			
		    this.collection = new module.Collection(id);
			
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
