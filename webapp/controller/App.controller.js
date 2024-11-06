sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nestedcomponentstest.controller.App", {
        onInit: function() {
        },

        onItemSelect(oEvent) {
          const sKey = oEvent.getParameter("item").getKey();
          console.log(sKey);
          this.getOwnerComponent().getRouter().navTo(sKey);
        }
      });
    }
  );
  