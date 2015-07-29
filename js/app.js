var $test = {};
var firstapp = angular.module('firstapp', [
    'ui.router',
    'angular-flexslider',
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
        .state('venue', {
            url: "/venue",
            templateUrl: "views/template.html",
            controller: 'VenueCtrl'
        }) 
        .state('schoolprofile', {
            url: "/schoolprofile",
            templateUrl: "views/template.html",
            controller: 'SchoolprofileCtrl'
        })
    $urlRouterProvider.otherwise("/home");

})


.directive('hovericon', function ($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'views/directive/hovericon.html',
        scope: {
            game: '='
        },
        link: function (scope, element, attr) {

        
            console.log(attr);
            var ishover;
            var $element = $(element);
            $test = $element;
            $element.ready(function () {
                var $top = $element.children(".top");
                var $bottom = $element.children(".bottom");
                $bottom.width($top.width());

                $element.hover(function () {
                    $element.addClass("bigger");
                }, function () {
                    $element.removeClass("bigger");
                    $bottom.width($top.width());
                });

            });

        }

    }
});
