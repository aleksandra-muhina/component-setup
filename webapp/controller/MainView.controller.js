sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("nestedcomponentstest.controller.MainView", {
        onInit: function () {

        },
        routing() {
            this.getOwnerComponent().getRouter().navTo("component1");
        },
        routingTwo() {
            this.getOwnerComponent().getRouter().navTo("componentTWO");
        }
    });
});
