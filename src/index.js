/// <reference path="./_references.d.ts" />
require("angular");
require("angular-ui-router");
require("angular-bootstrap");

require("d3");
require("nvd3");
require("angular-nvd3");

exports.Module = angular.module("component-bower-ng-test", ["ui.router", "ui.bootstrap", "nvd3"]);

exports.Module.config([
    "$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider.state("pie", {
            url: "/pie",
            template: require("./pie/pie-view.html"),
            controller: require("./pie/pie-controller"),
            controllerAs: "cx"
        });

        // $stateProvider.state("cal", {
        //     url: "/cal",
        //     template: require("./cal/cal-view.html"),
        //     controller: require("./cal/cal-controller"),
        //     controllerAs: "cx"
        // });
        $urlRouterProvider.otherwise("/");
    }]);
//# sourceMappingURL=index.js.map
