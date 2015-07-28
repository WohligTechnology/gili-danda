angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myInterval = 3000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'img/slider/slide1.jpg',

        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



})

.controller('MediaCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('SportsCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("sports");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.games = // JavaScript Document
[{
            "icon": "img/bluemenu/overall.png",
            "icon2": "img/bluemenu/tabletennisor.png",
            "game": "overall"
        }, {
            "icon": "img/bluemenu/tabletennis.png",
            "icon2": "img/bluemenu/tabletennisor.png",
            "game": "table tennis"
        }, {
            "icon": "img/bluemenu/tennis.png",
            "icon2": "img/bluemenu/tennisor.png",
            "game": "tennis"
        }, {
            "icon": "img/bluemenu/batminton.png",
            "icon2": "img/bluemenu/batmintonor.png",
            "game": "badminton"
        }, {
            "icon": "img/bluemenu/squash.png",
            "icon2": "img/bluemenu/sqaushor.png",
            "game": "squash"
        }, {
            "icon": "img/bluemenu/aqua.png",
            "icon2": "img/bluemenu/aquaticsor.png",
            "game": "aquatics"
        }, {
            "icon": "img/bluemenu/basketball.png",
            "icon2": "img/bluemenu/basketballor.png",
            "game": "basketball"
        }, {
            "icon": "img/bluemenu/vollyball.png",
            "icon2": "img/bluemenu/volleyballor.png",
            "game": "volleyball"
        }];

    $scope.demo = 111;
    $scope.checkthis = function () {
        console.log("Android");
    };

    $scope.makeactive = function (game) {
        _.each($scope.games, function (n) {
            n.active = false;
        });
        game.active = true;
        $scope.tab = game.game;
    };
    $scope.makeactive($scope.games[6]);
})

.controller('ScoreCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("score");
    $scope.menutitle = NavigationService.makeactive("Score");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('ScheduleCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("schedule");
        $scope.menutitle = NavigationService.makeactive("Schedule");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        //    $scope.oneAtATime = true;
        //    $scope.oneAtATimes = false;
        //    
        //      $scope.status = {
        //    isFirstOpen: true,
        //    isFirstDisabled: false
        //  };
    
        $scope.games = // JavaScript Document
[{
            "icon": "img/bluemenu/overall.png",
            "icon2": "img/bluemenu/tabletennisor.png",
            "game": "overall"
        }, {
            "icon": "img/bluemenu/tabletennis.png",
            "icon2": "img/bluemenu/tabletennisor.png",
            "game": "table tennis"
        }, {
            "icon": "img/bluemenu/tennis.png",
            "icon2": "img/bluemenu/tennisor.png",
            "game": "tennis"
        }, {
            "icon": "img/bluemenu/batminton.png",
            "icon2": "img/bluemenu/batmintonor.png",
            "game": "badminton"
        }, {
            "icon": "img/bluemenu/squash.png",
            "icon2": "img/bluemenu/sqaushor.png",
            "game": "squash"
        }, {
            "icon": "img/bluemenu/aqua.png",
            "icon2": "img/bluemenu/aquaticsor.png",
            "game": "aquatics"
        }, {
            "icon": "img/bluemenu/basketball.png",
            "icon2": "img/bluemenu/basketballor.png",
            "game": "basketball"
        }, {
            "icon": "img/bluemenu/vollyball.png",
            "icon2": "img/bluemenu/volleyballor.png",
            "game": "volleyball"
        }];

    $scope.demo = 111;
    $scope.checkthis = function () {
        console.log("Android");
    };

    $scope.makeactive = function (game) {
        _.each($scope.games, function (n) {
            n.active = false;
        });
        game.active = true;
        $scope.tab = game.game;
    };
    $scope.makeactive($scope.games[6]);

        $scope.jqueryScrollbarOptions = {
            "onScroll": function (y, x) {
                if (y.scroll == y.maxScroll) {
                    alert('Scrolled to bottom');
                }
            }
        };
    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
    })

;
