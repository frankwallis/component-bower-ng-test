/// <reference path="./_references.d.ts" />

require("angular");
require("angular-ui-router");
require("angular-bootstrap");
require("angular-cookies");

require("d3");
require("nvd3");
require("angular-nvd3");

export var Module: ng.IModule = angular.module("component-bower-ng-test", 
    	[ "ui.router", "ui.bootstrap", "nvd3", "ngCookies" ]);

Module.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => {
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
