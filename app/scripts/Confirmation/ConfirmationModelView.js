/* Confirmation */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
		
        template: {
            "confirm": JST['app/scripts/Confirmation/ConfirmationConfirmTpl.ejs'],
            "popup": JST['app/scripts/Confirmation/ConfirmationPopUpTpl.ejs'],
            "alert": JST['app/scripts/Confirmation/ConfirmationAlertTpl.ejs']
        },

        events: {
            "click .confirm" : "confirmAction",
            "click .decline" : "declineAction"
        },

        render: function() {
			$(".cover").removeClass("hidden");
            this.$el.removeClass("hidden");
        },

        popup: function(attributes) {
            this.$el.html(this.template["popup"](attributes));
            this.$el.removeClass("hidden");

            _.delay(_.bind(this.hideDialog, this), 1500);
        },

        confirm: function(attributes) {
            this.params = attributes;

            this._dialog("confirm");
        },

        alert: function(attributes) {
            this.params = attributes;

            this._dialog("alert");
        },

        _dialog: function(type) {
            this.$el.html(this.template[type](this.params));
            this.render();
        },

        confirmAction: function() {
            this.hideDialog();

            if(this.params.confirmCallback) {
                this.params.confirmCallback();  
            }
        },

        declineAction: function() {
            this.hideDialog();

            if(this.params.declineCallback) {
                this.params.declineCallback();
            }
        },

        hideDialog: function() {
            this.$el.addClass("hidden");
            $(".cover").addClass("hidden");
        }		

    });

})(app.Confirmation);
