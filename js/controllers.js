var test1 = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



    $scope.flex = {
        demo: true
    };
    $scope.clickonslider = function (data) {
        window.location.href = data.link;
    };
    $scope.homeslide = [{
        image: "img/slider/slide1.jpg",
        icon: "img/submenu/tabletennis.png",
        zoom: 1,
        link: "http://www.wohlig.com",
        caption: "table tennis",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide2.jpg",
        icon: "img/submenu/tennis.png",
        zoom: 1,
        caption: "tennis",
        captions: "Circular Junior Nationals 2015"

    }, {
        image: "img/slider/slide3.jpg",
        icon: "img/submenu/batminton.png",
        zoom: 1,
        caption: "badminton",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide4.jpg",
        icon: "img/submenu/sqaush.png",
        zoom: 1,
        caption: "sqaush",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide5.jpg",
        icon: "img/submenu/tabletennis.png",
        zoom: 1,
        caption: "table tennis",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide6.jpg",
        icon: "img/submenu/tennis.png",
        zoom: 1,
        caption: "tennis",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide7.jpg",
        icon: "img/submenu/batminton.png",
        zoom: 1,
        caption: "badminton",
        captions: "Circular Junior Nationals 2015"
    }, {
        image: "img/slider/slide8.jpg",
        icon: "img/submenu/sqaush.png",
        zoom: 1,
        caption: "sqaush",
        captions: "Circular Junior Nationals 2015"
    }];

    $scope.slides = _.pluck($scope.homeslide, "image");
    $scope.smallslides = _.pluck($scope.homeslide, "icon");
    $scope.changeslider = function () {
        var homelen = $scope.homeslide.length;
        var flexi = $scope.flex.demo.data('flexslider');
        console.log(flexi);
        for (var i = 0; i < $scope.homeslide.length; i++) {
            var x = Math.abs(i - flexi.currentSlide);
            var taninverse = Math.atan(x);
            taninverse = taninverse / Math.PI * 2;
            $scope.homeslide[i].zoom = 1 - taninverse / 1.8;
            console.log(1 - taninverse);
        }

    };
    $scope.iconclick = function (element) {
        var indexele = $scope.homeslide.indexOf(element);
        $scope.flex.demo.flexslider(indexele);
    };



})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
        $scope.template = TemplateService.changecontent("profile");
        $scope.menutitle = NavigationService.makeactive("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();



    })
    .controller('VenueCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
        $scope.template = TemplateService.changecontent("venue");
        $scope.menutitle = NavigationService.makeactive("Venue");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        //        $scope.slides = [
        //    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        //    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        //    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        //    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        //            
        //   ];

        $scope.venuslide = [{
            image: "img/venuegal/g1.jpg"


        }, {
            image: "img/venuegal/g2.jpg"


        }, {
            image: "img/venuegal/g3.jpg"

        }, {
            image: "img/venuegal/g4.jpg"

        }, {
            image: "img/venuegal/g5.jpg"

        }, {
            image: "img/venuegal/g6.jpg"

        }, {
            image: "img/venuegal/g7.jpg"

        }, {
            image: "img/venuegal/g8.jpg"

        }];

        $scope.slides = _.pluck($scope.venuslide, "image");

        $scope.games = // JavaScript Document
            [{
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

.controller('MediaCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("media");
        $scope.menutitle = NavigationService.makeactive("Media");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('StudentprofileCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
        $scope.template = TemplateService.changecontent("studentprofile");
        $scope.menutitle = NavigationService.makeactive("Studentprofile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.gallery = [{
            image: "img/schoolgallery/g1.jpg"
        }, {
            image: "img/schoolgallery/g2.jpg"
        }, {
            image: "img/schoolgallery/g3.jpg"
        }, {
            image: "img/schoolgallery/g4.jpg"
        }, {
            image: "img/schoolgallery/g5.jpg"
        }, {
            image: "img/schoolgallery/g6.jpg"
        }];
        $scope.zoomposition = 0;

        $scope.openModal = function (gal) {

            $scope.zoomposition = $scope.gallery.indexOf(gal);

            ngDialog.open({
                template: 'views/directive/zoomimage.html',
                scope: $scope
            });
        };

        $scope.nextImage = function (oldposition) {
            if (oldposition == ($scope.gallery.length - 1)) {
                $scope.zoomposition = 0;
            } else {
                $scope.zoomposition++;
            }
        };

        $scope.previousImage = function (oldposition) {
            if (oldposition == 0) {
                $scope.zoomposition = ($scope.gallery.length - 1);
            } else {
                $scope.zoomposition--;
            }
        };


        $scope.tab1 = "gallery";
        //    tab change
        $scope.class = 'act';
        $scope.classb = '';

        console.log($scope.tab);
        $scope.tabchange1 = function (tab, a) {
            //        console.log(tab);
            $scope.tab1 = tab;
            if (a == 1) {
                $scope.class = "act";
                $scope.classb = '';

            } else if (a == 2) {
                $scope.class = '';
                $scope.classb = "act";

            }
        };

        //    end

        $scope.tab2 = "gallerymain";
        //    tab change
        $scope.active = 'active';
        $scope.actives = '';

        console.log($scope.tab);
        $scope.tabchange = function (tab, a) {
            //        console.log(tab);
            $scope.tab2 = tab;
            if (a == 1) {
                $scope.active = "active";
                $scope.actives = '';

            } else if (a == 2) {
                $scope.active = '';
                $scope.actives = "active";

            }
        };

        //    end

        $scope.foo = "World";
        $scope.list = [];

        $scope.image = "https://www.google.com/images/srpr/logo11w.png";

        $scope.openBox = function (id) {
            $(id).attr('openbox', 'show');
        }

        $scope.add = function (term) {
            $scope.list.push(term);
        }
        $scope.games = // JavaScript Document
            [{
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
                "game": "aquatics",
                "grey": true
            }, {
                "icon": "img/bluemenu/basketball.png",
                "icon2": "img/bluemenu/basketballor.png",
                "game": "basketball",
            }, {
                "icon": "img/bluemenu/vollyball.png",
                "icon2": "img/bluemenu/volleyballor.png",
                "game": "volleyball",
                "grey": true
            }];

        $scope.demo = 111;
        $scope.checkthis = function () {
            console.log("Android");
        };

        $scope.makeactive = function (game) {
            if (!game.grey) {
                _.each($scope.games, function (n) {
                    n.active = false;
                });
                game.active = true;
                $scope.tab = game.game;
            }
        };
        $scope.makeactive($scope.games[0]);

    })
    .controller('SchoolprofileCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
        $scope.template = TemplateService.changecontent("schoolprofile");
        $scope.menutitle = NavigationService.makeactive("Schoolprofile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        $scope.gallery = [{
            image: "img/schoolgallery/g1.jpg"
        }, {
            image: "img/schoolgallery/g2.jpg"
        }, {
            image: "img/schoolgallery/g3.jpg"
        }, {
            image: "img/schoolgallery/g4.jpg"
        }, {
            image: "img/schoolgallery/g5.jpg"
        }, {
            image: "img/schoolgallery/g6.jpg"
        }];
        $scope.zoomposition = 0;

        $scope.openModal = function (gal) {

            $scope.zoomposition = $scope.gallery.indexOf(gal);

            ngDialog.open({
                template: 'views/directive/zoomimage.html',
                scope: $scope
            });
        };

        $scope.nextImage = function (oldposition) {
            if (oldposition == ($scope.gallery.length - 1)) {
                $scope.zoomposition = 0;
            } else {
                $scope.zoomposition++;
            }
        };

        $scope.previousImage = function (oldposition) {
            if (oldposition == 0) {
                $scope.zoomposition = ($scope.gallery.length - 1);
            } else {
                $scope.zoomposition--;
            }
        };


        $scope.tab1 = "gallery";
        //    tab change
        $scope.class = 'act';
        $scope.classb = '';

        console.log($scope.tab);
        $scope.tabchange1 = function (tab, a) {
            //        console.log(tab);
            $scope.tab1 = tab;
            if (a == 1) {
                $scope.class = "act";
                $scope.classb = '';

            } else if (a == 2) {
                $scope.class = '';
                $scope.classb = "act";

            }
        };

        //    end

        $scope.tab2 = "gallerymain";
        //    tab change
        $scope.active = 'active';
        $scope.actives = '';

        console.log($scope.tab);
        $scope.tabchange = function (tab, a) {
            //        console.log(tab);
            $scope.tab2 = tab;
            if (a == 1) {
                $scope.active = "active";
                $scope.actives = '';

            } else if (a == 2) {
                $scope.active = '';
                $scope.actives = "active";

            }
        };

        //    end

        $scope.foo = "World";
        $scope.list = [];

        $scope.image = "https://www.google.com/images/srpr/logo11w.png";

        $scope.openBox = function (id) {
            $(id).attr('openbox', 'show');
        }

        $scope.add = function (term) {
            $scope.list.push(term);
        }
        $scope.games = // JavaScript Document
            [{
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
                "game": "aquatics",
                "grey": true
            }, {
                "icon": "img/bluemenu/basketball.png",
                "icon2": "img/bluemenu/basketballor.png",
                "game": "basketball",
            }, {
                "icon": "img/bluemenu/vollyball.png",
                "icon2": "img/bluemenu/volleyballor.png",
                "game": "volleyball",
                "grey": true
            }];

        $scope.demo = 111;
        $scope.checkthis = function () {
            console.log("Android");
        };

        $scope.makeactive = function (game) {
            if (!game.grey) {
                _.each($scope.games, function (n) {
                    n.active = false;
                });
                game.active = true;
                $scope.tab = game.game;
            }
        };
        $scope.makeactive($scope.games[0]);

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

    $scope.games = // JavaScript Document
        [{
            "icon": "img/bluemenu/overall.png",
            "icon2": "img/bluemenu/overallor.png",
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
                "icon": "img/orangemenu/tabletennis.png",
                "icon2": "img/orangemenu/tabletennisbl.png",
                "game": "table tennis"
            }, {
                "icon": "img/orangemenu/tennis.png",
                "icon2": "img/orangemenu/tennisbl.png",
                "game": "tennis"
            }, {
                "icon": "img/orangemenu/batminton.png",
                "icon2": "img/orangemenu/batmintonbl.png",
                "game": "badminton"
            }, {
                "icon": "img/orangemenu/squash.png",
                "icon2": "img/orangemenu/squashbl.png",
                "game": "squash"
            }, {
                "icon": "img/orangemenu/aquash.png",
                "icon2": "img/orangemenu/aquashbl.png",
                "game": "aquatics"
            }, {
                "icon": "img/orangemenu/basketball.png",
                "icon2": "img/orangemenu/basketballbl.png",
                "game": "basketball"
            }, {
                "icon": "img/orangemenu/volleyball.png",
                "icon2": "img/orangemenu/volleyballbl.png",
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
