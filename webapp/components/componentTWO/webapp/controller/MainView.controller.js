sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("componentTWO.controller.MainView", {
        onInit: function () {
            console.log("main view controller component TWO");
        }
    });
});
