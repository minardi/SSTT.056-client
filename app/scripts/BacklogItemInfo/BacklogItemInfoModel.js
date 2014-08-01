/* BacklogItemInfo */

(function(module) {

    module.Model = Backbone.Model.extend({       

        defaults: {
            title: "",
            description: "",
            estimation: "",
            parent: "",
            status: "",
            item_type: "",
			info: ""
        }
    });

})(app.BacklogItemInfo);