/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nested-components-test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
