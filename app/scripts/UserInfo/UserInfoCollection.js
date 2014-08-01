/* UserInfo */

(function(module) {

    module.Collection = Backbone.Collection.extend({
		
        initialize: function(user_id) {
            this.url = "/projects/for-user/" + user_id;
            this.fetch();			
        }

    });

})(app.UserInfo);

