/* Userinfo */

(function(module) {

    module.Model = Backbone.Model.extend({       

	    url: "/roles/for-user/",
	
        defaults: {
            first_name: "",
            last_name: "",
            role: ""
        }

    });

})(app.UserInfo);
