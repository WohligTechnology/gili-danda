// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
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
    $urlRouterProvider.otherwise("/home");

});