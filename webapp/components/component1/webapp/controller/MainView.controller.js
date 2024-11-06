sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("component1.controller.MainView", {
        onInit: function () {
            console.log("Main View controller component ONE")
        }
    });
});
