/* infoBlock */

(function(module) {
        
    module.ModelView = Backbone.View.extend({    

        el: $(".main"),
        
        template: {
			"user_info": JST['app/scripts/Projectinfo/UserInfoTpl.ejs']
        },       
        
        subscriptions: {
			"TeamMember:Selected" : "selectUserBlock"
        },

		selectUserBlock: function (model) {
		    var view = new UserInfo({model: model})
		}
 
  });
    
})(app.InfoBlock);
