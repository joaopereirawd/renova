sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("renova.controller.App", {
            onInit: function () {

                //Set Global Mock Data
                const oModel = new JSONModel("../api/items.json");
                this.getView().setModel(oModel, "dataModel");

                console.log(oModel);
            },

        });
    });
