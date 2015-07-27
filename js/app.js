// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',

]);

firstapp.config(function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    //Turn the spinner on or off
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        // .state('profile', {
        //        url: "/profile",
        //        templateUrl: "views/template.html",
        //        controller: 'ProfileCtrl'
        //    })
        .state('profile', {
            url: "/profile",
            templateUrl: "views/template.html",
            controller: 'ProfileCtrl'
        })
        .state('sports', {
            url: "/sports",
            templateUrl: "views/template.html",
            controller: 'SportsCtrl'
        })
        .state('media', {
            url: "/media",
            templateUrl: "views/template.html",
            controller: 'MediaCtrl'
        })
        .state('schedule', {
            url: "/schedule",
            templateUrl: "views/template.html",
            controller: 'ScheduleCtrl'
        })
        .state('score', {
            url: "/score",
            templateUrl: "views/template.html",
            controller: 'ScoreCtrl'
        })
    $urlRouterProvider.otherwise("/home");

})


.directive('hovericon', function ($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'views/directive/hovericon.html',
        link: function (scope, element, attr) {
            console.log("hover element");
            console.log(element);
            console.log("hover attr");
            console.log(attr);
            console.log("Hover Scope");
            console.log(scope);

            scope.iconBlue = attr.icon;
            scope.game = attr.game;

        }

    }
});
