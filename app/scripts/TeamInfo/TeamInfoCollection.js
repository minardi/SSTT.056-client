/* TeamInfo */

(function(module) {

    module.Collection = Backbone.Collection.extend({

        initialize: function(team_id) {
        	this.url = "/users/for-team/" + team_id;
            this.fetch();
        }

    });
    
})(app.TeamInfo);