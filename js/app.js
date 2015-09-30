var $test = {};
var firstapp = angular.module('firstapp', [
    'ui.router',
    'angular-flexslider',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
]);

firstapp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "./views/template.html",
        controller: 'HomeCtrl'
    })
    .state('profile', {
        url: "/profile",
        templateUrl: "./views/template.html",
        controller: 'ProfileCtrl'
    })
        .state('sports', {
            url: "/sports",
            templateUrl: "./views/template.html",
            controller: 'SportsCtrl'
        })
        .state('media', {
            url: "/media",
            templateUrl: "./views/template.html",
            controller: 'MediaCtrl'
        })
        .state('schedule', {
            url: "/schedule",
            templateUrl: "./views/template.html",
            controller: 'ScheduleCtrl'
        })
			.state('commingsoon', {
            url: "/commingsoon",
            templateUrl: "./views/template.html",
            controller: 'CommingsoonCtrl'
        })
        .state('score', {
            url: "/score",
            templateUrl: "./views/template.html",
            controller: 'ScoreCtrl'
        }) 
        .state('schoollanding', {
            url: "/schoollanding",
            templateUrl: "./views/template.html",
            controller: 'SchoollandingCtrl'
        }).
    state('studentlanding', {
            url: "/studentlanding",
            templateUrl: "./views/template.html",
            controller: 'StudentlandingCtrl'
        })
    .state('handball', {
            url: "/handball",
            templateUrl: "./views/template.html",
            controller: 'HandballCtrl'
        })  
        .state('basketball', {
            url: "/basketball",
            templateUrl: "./views/template.html",
            controller: 'BasketballCtrl'
        }) 
        .state('squash', {
            url: "/squash",
            templateUrl: "./views/template.html",
            controller: 'SquashCtrl'
        }) 
        .state('tabletennis', {
            url: "/tabletennis",
            templateUrl: "./views/template.html",
            controller: 'TabletennisCtrl'
        })  
        .state('batminton', {
            url: "/batminton",
            templateUrl: "./views/template.html",
            controller: 'BatmintonCtrl'
        })  
        .state('vollyball', {
            url: "/vollyball",
            templateUrl: "./views/template.html",
            controller: 'VollyballCtrl'
        })
        .state('aquatic', {
            url: "/aquatic",
            templateUrl: "./views/template.html",
            controller: 'AquaticCtrl'
        }) 
        .state('tennis', {
            url: "/tennis",
            templateUrl: "./views/template.html",
            controller: 'TennisCtrl'
        })
        .state('venue', {
            url: "/venue",
            templateUrl: "./views/template.html",
            controller: 'VenueCtrl'
        })
        .state('schoolprofile', {
            url: "/schoolprofile",
            templateUrl: "./views/template.html",
            controller: 'SchoolprofileCtrl'
        })
        .state('schoolregistration', {
            url: "/schoolregistration",
            templateUrl: "./views/template.html",
            controller: 'SchoolregistrationCtrl'
        })  
        .state('contact', {
            url: "/contact",
            templateUrl: "./views/template.html",
            controller: 'ContactCtrl'
        }) 
        .state('landing', {
            url: "/landing",
            templateUrl: "./views/template.html",
            controller: 'LandingCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "./views/template.html",
            controller: 'AboutCtrl'
        }) 
        .state('partner', {
            url: "/partner",
            templateUrl: "./views/template.html",
            controller: 'PartnerCtrl'
        })
        .state('studentprofile', {
            url: "/studentprofile",
            templateUrl: "./views/template.html",
            controller: 'StudentprofileCtrl'
        })
    $urlRouterProvider.otherwise("/home");

})


.directive('hovericon', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './views/directive/hovericon.html',
        scope: {
            game: '='
        },
        link: function(scope, element, attr) {



            console.log(attr);
            var ishover;
            var $element = $(element);
            $test = $element;
            $element.ready(function() {

                if (scope.game.grey) {
                    $element.addClass("grey");
                } else {
                    var $top = $element.children(".top");
                    var $bottom = $element.children(".bottom");
                    $bottom.width($top.width());

                    $element.hover(function() {
                        $element.addClass("bigger");
                    }, function() {
                        $element.removeClass("bigger");
                        $bottom.width($top.width());
                    });
                }

            });

        }

    }
});

firstapp.filter('serverimage', function() {
    return function(image) {
        return imgpath + image;
    };
});
//fancybox directive
function partitionarray(myarray, number) {
            var arrlength = myarray.length;
            var newarray = [];
            var j = -1;
            for (var i = 0; i < arrlength; i++) {
                if (i % number == 0) {
                    j++;
                    newarray[j] = [];
                }
                newarray[j].push(myarray[i]);
            }
            return newarray;
        };
firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function($scope, element, attrs) {

            $scope.$watch(function() {
                return element.attr('openbox')
            }, function(openbox) {
                if (openbox == 'show') {

                    var options = $parse(attrs.options)($scope) || {};

                    if (!options.href && !options.content) {

                        options.content = angular.element(element.html());

                        $compile(options.content)($scope);

                    }

                    var onClosed = options.onClosed || function() {};

                    options.onClosed = function() {
                        $scope.$apply(function() {
                            onClosed();
                            element.attr('openbox', 'hide');
                        });
                    };

                    $.fancybox(options);
                }
            });
        }
    };
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            console.log(attrs.noloading);
            console.log(!attrs.noloading);
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});