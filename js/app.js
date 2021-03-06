var $test = {};
var demo = 0;


var firstapp = angular.module('firstapp', [
    'ui.router',
    'angular-flexslider',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'angular-momentjs'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.spinnerTemplate = '<div class="loading-bar"><img src="img/load.gif" style="width:125px"></div>';
    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "./views/template.html",
            controller: 'HomeCtrl'
        })
        .state('showvideo', {
            url: "/showvideo",
            templateUrl: "./views/template.html",
            controller: 'HomeCtrl'
        })
        .state('schoolregistration', {
            url: "/schoolregistration",
            templateUrl: "./views/template.html",
            controller: 'SchoolRegistrationCtrl'
        })
        .state('draw', {
            url: "/draw",
            templateUrl: "./views/template.html",
            controller: 'DrawCtrl'
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
        .state('comingsoon', {
            url: "/comingsoon",
            templateUrl: "./views/template.html",
            controller: 'ComingsoonCtrl'
        })
        .state('termscondition', {
            url: "/termscondition",
            templateUrl: "./views/template.html",
            controller: 'TermsconditionCtrl'
        })
        .state('score', {
            url: "/score",
            templateUrl: "./views/template.html",
            controller: 'ScoreCtrl'
        })
        .state('school', {
            url: "/school",
            templateUrl: "./views/template.html",
            controller: 'SchoolCtrl'
        }).
    state('student', {
            url: "/student",
            templateUrl: "./views/template.html",
            controller: 'StudentCtrl'
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
        .state('enquiry', {
            url: "/enquire",
            templateUrl: "./views/template.html",
            controller: 'EnquiryCtrl'
        })
        .state('badminton', {
            url: "/badminton",
            templateUrl: "./views/template.html",
            controller: 'BadmintonCtrl'
        })
        .state('faqs', {
            url: "/faqs",
            templateUrl: "./views/template.html",
            controller: 'FaqsCtrl'
        })
        .state('volleyball', {
            url: "/volleyball",
            templateUrl: "./views/template.html",
            controller: 'VolleyballCtrl'
        })
        .state('swimming', {
            url: "/swimming",
            templateUrl: "./views/template.html",
            controller: 'SwimmingCtrl'
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
            url: "/schoolprofile/:id",
            templateUrl: "./views/template.html",
            controller: 'SchoolprofileCtrl'
        })
        .state('enquirenow', {
            url: "/enquirenow",
            templateUrl: "./views/template.html",
            controller: 'EnquirenowCtrl'
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
        .state('judo', {
            url: "/judo",
            templateUrl: "./views/template.html",
            controller: 'JudoCtrl'
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
            url: "/studentprofile/:id",
            templateUrl: "./views/template.html",
            controller: 'StudentprofileCtrl'
          })
        .state('training', {
            url: "/training",
            templateUrl: "./views/template.html",
            controller: 'TrainingCtrl'
          })
          .state('pre-registration', {
              url: "/pre-registration",
              templateUrl: "./views/template.html",
              controller: 'PreRegistrationCtrl'
          })
          .state('registration-form', {
              url: "/registrationform",
              templateUrl: "./views/template.html",
              controller: 'RegistrationFormCtrl'
          });
    if (isproduction) {
        $locationProvider.html5Mode(true);
    }

    $urlRouterProvider.otherwise("/home");
});


firstapp.directive('hovericon', function($document) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './views/directive/hovericon.html',
        scope: {
            game: '='
        },
        link: function(scope, element, attr) {

            scope.$watch('demo', function() {
                //			   console.log(demo);

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
            })

        }

    }
});

firstapp.filter('serverimage', function() {
    return function(image) {
        if (image && image != "") {
            return adminlink + "uploads/" + image;
        } else {
            return adminlink + "assets/img/noimage.png";
        }
    };
});
firstapp.filter('serverimageschool', function() {
    return function(image) {
        if (image && image != "") {
            return adminlink + "uploads/" + image;
        } else {
            return adminlink + "assets/img/noimage.png";
        }
    };
});
firstapp.filter('splitset', function() {
    return function(score) {
        if (score && score != "") {
            if (score.indexOf('s1') != -1 && score.indexOf('-') == -1) {
                return "";
            }
            if (score.indexOf('s00') != -1) {
                return "";
            }
            if (score.indexOf('s1') != -1 && score.length > 10) {
                score = score.split('-').join(' ');
                var splited = score;
                for (var i = 1; i <= 10; i++) {
                    if (i == 1) {
                        splited = splited.split("s" + i).join('set' + i + '-');
                    } else {
                        splited = splited.split("s" + i).join(' set' + i + '-');
                    }
                }
                splited = splited.split(" ");
                var final = "";
                var arrLength = splited.length;
                for (var i = 0; i < splited.length; i++) {
                    if (splited[i] && splited[(arrLength / 2) + i]) {
                        var moresplit1 = splited[i].split('-');
                        var moresplit2 = splited[(arrLength / 2) + i].split('-');
                        if (i == 0)
                            final += "GAME " + (i + 1) + " : " + moresplit1[1] + "/" + moresplit2[1];
                        else
                            final += " GAME " + (i + 1) + " : " + moresplit1[1] + "/" + moresplit2[1];
                    }
                }
                return final;
            } else if (score.indexOf('s1') != -1 && score.indexOf('s2') == -1 && score.indexOf('s3') == -1) {
                score = score.split('-').join('');
                var splited = score.split('s1');
                var final = "GAME : " + splited[1] + "/" + splited[2];
                return final;
            } else {
                return score;
            }
        }
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


firstapp.directive('fancybox2', function($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function($scope, element, attrs) {

            $(".fancybox2").fancybox({
                openEffect: 'none',
                closeEffect: 'none'
            });


        }
    };
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('giveitmargin', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            var i = 0;

            function addmarginleft(j) {
                $("ul.menu-list").css("margin-left", 0);
                var windowwidth = $(window).width();
                var navigationlogowidth = $(".logoli").width();
                var leftcomp = $(".logoli").position();
                var marginleft = ((windowwidth - navigationlogowidth) / 2) - leftcomp.left;
                if (j == i) {

                    $("ul.menu-list").css("margin-left", marginleft);
                }
            }
            $element.find("img").load(function() {
                addmarginleft(++i);
            });
            $(window).resize(function() {
                addmarginleft(++i);
            });
        }
    };
});

firstapp.directive('click', '.dropdown-menu li', function($event) {

    var $target = $($event.currentTarget);

    $target.closest('.btn-group')
        .find('[data-bind="label"]').text($target.text())
        .end()
        .children('.dropdown-toggle').dropdown('toggle');

    return false;

});

firstapp.filter('numberFixedLen', function() {
    return function(n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
});

firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('fancyboxButton', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
                $(".varies").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
var $abc = "";

firstapp.directive('schoolsports', function() {
    return {
        templateUrl: function(elem, attr) {
            console.log(attr.json);
            //      return 'customer-'+attr.jso+'.html';
        }
    };
});
firstapp.directive('mycircle', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var amount = 1;
            var myinterval = {};
            $element.ready(function() {
                console.log("DEMO");

                $element.hover(function() {
                    clearInterval(myinterval);
                }, function() {


                    myinterval = setInterval(function() {
                        var $element = $(element);
                        var $elementli = $element.children("li");
                        $abc = $elementli;



                        amount++;
                        var elewidth = $elementli.eq(0).width();
                        //                        console.log(elewidth);
                        var num = amount % elewidth;
                        if (num == 0 && amount > 0) {
                            amount = -15;
                            //                            console.log(amount);
                            var $firstelement = $elementli.eq(0);
                            $element.append("<li>" + $firstelement.html() + "</li>");
                            $firstelement.eq(0).remove();
                        }



                        for (var i = 0; i < $elementli.length; i++) {
                            $elementli.eq(i).css("transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-webkit-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-moz-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-ms-transform", "translateX(" + (-1 * amount) + "px)");
                            $elementli.eq(i).css("-o-transform", "translateX(" + (-1 * amount) + "px)");
                        }

                    }, 10);

                });

                $element.trigger("mouseleave");


            });

        }
    };
});

var formvalidation = function(allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
        console.log("checking");
        if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
            allvalidation[i].validation = "ng-invalid";
            isvalid2 = false;
        }
    }
    return isvalid2;
};

var clearvalidation = function(allvalidation) {
    for (var i = 0; i < allvalidation.length; i++) {
        allvalidation[i].validation = "";
    }
};

firstapp.directive('smartGallery', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            var width;

            function changeSqaure() {
                width = $(window).width() / attrs.smartGallery;
                $(".monsanry .mimage").width(width);
                $(".monsanry .mimage").height(width);
            }
            changeSqaure();
            $(window).resize(function() {
                changeSqaure();
            });
        }
    };
});

$(document).ready(function() {
 $('#downloadAllButton').click(function() {
   $('a.download_file > img').trigger( "click" );

   return true;
 });
});
