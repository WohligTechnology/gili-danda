var test1 = {};
var school = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngDialog', 'ngSanitize', 'angular-flexslider', 'angular-loading-bar'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    TemplateService.header = "./views/header.html";

    TemplateService.keywords = "Inter school sports, Sports tournaments, Inter school sports in Mumbai, Sports for kids";
    TemplateService.description = "Sports For All (SFA) is an inter-school sporting platform for school children to play, compete and grow in various sports.";
    $scope.navigation = NavigationService.getnav();
    var getbannersliderscallback = function(data, status) {
        $scope.homeslide = data;
        //		        $scope.slides = _.pluck($scope.homeslide, "image");
        //		$scope.slides = [
        //			"../img/slider/1.jpg",
        //				"../img/slider/2.jpg",
        //				"../img/slider/3.jpg"
        //			];
        //		$scope.smallslides = _.pluck($scope.homeslide, "icon");
        //        _.each($scope.homeslide, function(n){
        //            n.image = imgpath +"image?name="+n.image +"&width=500";
        //        });
    }
    NavigationService.getbannersliders(getbannersliderscallback);


    $scope.flex = {
        demo: true
    };
    $scope.clickonslider = function(data) {
        window.location.href = data.link;
    };
    //    $scope.homeslide = [{
    //        image: "img/slider/slide1.jpg",
    //        icon: "img/submenu/tabletennis.png",
    //        zoom: 1,
    //        link: "http://www.wohlig.com",
    //        caption: "table tennis",
    //        captions: "Circular Junior Nationals 2015"
    //    }, {
    //        image: "img/slider/slide2.jpg",
    //        icon: "img/submenu/tennis.png",
    //        zoom: 1,
    //        caption: "tennis",
    //        captions: "Circular Junior Nationals 2015"
    //
    //    }];


    $scope.changeslider = function() {
        var homelen = $scope.homeslide.length;
        var flexi = $scope.flex.demo.data('flexslider');
        //		for (var i = 0; i < $scope.homeslide.length; i++) {
        //			var x = Math.abs(i - flexi.currentSlide);
        //			var taninverse = Math.atan(x);
        //			taninverse = taninverse / Math.PI * 2;
        //			$scope.homeslide[i].zoom = 1 - taninverse / 1.8;
        //			console.log(1 - taninverse);
        //		}

    };
    $scope.iconclick = function(element) {
        var indexele = $scope.homeslide.indexOf(element);
        $scope.flex.demo.flexslider(indexele);
    };

    ga('send', 'pageview', {
        'title': 'Home Page'
    });

    $scope.rn = // JavaScript Document
        [{
            "image": "img/homegallery/1.jpg"

        }, {
            "image": "img/homegallery/2.jpg"
        }, {
            "image": "img/homegallery/3.jpg"
        }, {
            "image": "img/homegallery/4.jpg"
        }, {
            "image": "img/homegallery/5.jpg"
        }, {
            "image": "img/homegallery/6.jpg"
        }, {
            "image": "img/homegallery/7.jpg"
        }, {
            "image": "img/homegallery/8.jpg"
        }, {
            "image": "img/homegallery/9.jpg"
        }, {
            "image": "img/homegallery/1.jpg"
        }, {
            "image": "img/homegallery/2.jpg"
        }, {
            "image": "img/homegallery/3.jpg"
        }, {
            "image": "img/homegallery/4.jpg"
        }, {
            "image": "img/homegallery/5.jpg"
        }, {
            "image": "img/homegallery/6.jpg"
        }];


    $scope.newsletter = {
        show: true,
    };

    function closeNewsletter() {
        $scope.newsletter.show = false;
    }

    $scope.validEmail = function(email) {
        if (email) {
            $scope.newsletter.emaildis = "";
        } else {
            $scope.newsletter.emaildis = "error-red";
        }
    };
    $scope.savenewsletter = function(email) {
        if ($scope.newsletter.emaildis == "" && $scope.newsletter.email) {
            NavigationService.savenewsletter(email, closeNewsletter);
        }
    }

})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("profile");
        $scope.menutitle = NavigationService.makeactive("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Profile Page'
        });

    })
    .controller('EnquiryCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog, $window) {
        $scope.template = TemplateService.changecontent("enquiry");
        $scope.menutitle = NavigationService.makeactive("Enquiry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        TemplateService.header = "./views/header2.html";
        TemplateService.footer = "./views/footer2.html";

        $scope.fireConversion = function() {
            $window.google_trackConversion({
                google_conversion_id: 948280784,
                google_conversion_language: "en",
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_label: "P0AbCLScv2EQ0LuWxAM",
                google_is_call: true,
                google_conversion_value: 0,
                google_remarketing_only: false
            });
        }

        var getbannersliderscallback = function(data, status) {
            $scope.homeslide = data;
        }
        NavigationService.getbannersliders(getbannersliderscallback);

        NavigationService.getschoolnames(function(data) {
            $scope.schoolNames = _.chunk(data, data.length / 2);
            $scope.schoolHalf = $scope.schoolNames[0].length;
        });

        $scope.schoolProfile = function(school) {
            $location.path("schoolprofile/" + school.id);
        }

        $scope.viewmore = false;

        $scope.enquire = {};
        $scope.enquire.person = "Student";

        var usercontactcallback = function(data, status) {
            if (data) {
                $scope.msgsuccess = "Kudos! We will get back to you soon!";
                $scope.msg = "";
                clearvalidation($scope.allvalidation);
                $scope.enquire = {};
                $scope.enquire.person = "Student";
                ngDialog.open({
                    template: './views/content/enquiry-thanks.html'
                });
                $scope.fireConversion();
            } else {
                $scope.msg = "Please re-verify the data you've entered!";
                $scope.msgsuccess = "";
            }
        };

        $scope.submitEnquiry = function(enquire) {
            $scope.allvalidation = [{
                field: $scope.enquire.name,
                validation: ""
            }, {
                field: $scope.enquire.email,
                validation: ""
            }];

            var check = formvalidation($scope.allvalidation);

            if (check) {
                NavigationService.createEnquiries(enquire, usercontactcallback);
            } else {
                $scope.msg = "Please fill mandatory fields!!";
                $scope.msgsuccess = "";
            };

        };

    })

.controller('SchoolCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog, $location) {
    $scope.template = TemplateService.changecontent("school");
    $scope.menutitle = NavigationService.makeactive("School");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


    NavigationService.getschoolnames(function(data) {
        $scope.schoolNames = _.chunk(data, data.length / 2);
        $scope.schoolHalf = $scope.schoolNames[0].length;
    });

    $scope.schoolProfile = function(school) {
        $location.path("schoolprofile/" + school.id);
    }

    $scope.getSearchById = function(id) {

    }

    ga('send', 'pageview', {
        'title': 'School Page'
    });

})

.controller('StudentCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog, $location) {
    $scope.template = TemplateService.changecontent("student");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.title = $scope.menutitle;
    TemplateService.keywords = "SFA students registration for sports, SFA sports registration for students, SFA student registration, Registration for students in SFA";
    TemplateService.description = "SFA provides student registration that allows them to participate and compete with students from various schools across Mumbai.";
    $scope.navigation = NavigationService.getnav();

    ga('send', 'pageview', {
        'title': 'Student Page'
    });

    $scope.idSearch = {};
    $scope.idSearch.search = '';
    $scope.searchById = {};
    $scope.searchById.search = '';
    $scope.searchById.pageno = 1;
    $scope.searchCount = 0;
    $scope.searchResults = [];

    $scope.searchByName = {};
    $scope.searchByName.school = '';
    $scope.searchByName.student = '';
    $scope.searchByName.pageno = 1;

    $scope.pages = {};
    $scope.pages.beforeCurrent = [];
    $scope.pages.afterCurrent = [];
    $scope.hideLast = false;
    $scope.showNoResults = false;

    var lastpage = 1;

    $scope.getSearchById = function(val) {
        console.log(val);
        if (val.indexOf("SFAST") == -1) {
            $scope.searchById.search = parseInt(val);
            NavigationService.studentSearchById($scope.searchById, function(data) {
                if (data) {
                    if (data != "false") {
                        $scope.showNoResults = false;
                        $location.url("/studentprofile/" + data.id);
                    } else {
                        $scope.showNoResults = true;
                        $scope.searchCount = 0;
                        $scope.searchById = {};
                        $scope.searchById.search = '';
                        $scope.searchById.pageno = 1;
                        $scope.searchByName = {};
                        $scope.searchByName.school = '';
                        $scope.searchByName.student = '';
                        $scope.searchByName.pageno = 1;
                        $scope.idSearch = {};
                        $scope.idSearch.search = '';
                    }
                    console.log(data);
                }
            })
        } else {
            $scope.searchById.search = parseInt(val.substr(5));
            if (val.substr(0, 5) == "sfast" || val.substr(0, 5) == "SFAST") {
                NavigationService.studentSearchById($scope.searchById, function(data) {
                    if (data) {
                        if (data != "false") {
                            $scope.showNoResults = false;
                            $location.url("/studentprofile/" + data.id);
                        } else {
                            $scope.showNoResults = true;
                            $scope.searchCount = 0;
                            $scope.searchById = {};
                            $scope.searchById.search = '';
                            $scope.searchById.pageno = 1;
                            $scope.searchByName = {};
                            $scope.searchByName.school = '';
                            $scope.searchByName.student = '';
                            $scope.searchByName.pageno = 1;
                            $scope.idSearch = {};
                            $scope.idSearch.search = '';
                        }
                        console.log(data);
                    }
                })
            }
        }
    }

    $scope.getSearchByName = function() {
        console.log($scope.searchByName);
        NavigationService.studentSearchByName($scope.searchByName, function(data) {
            if (data) {
                $scope.pages = {};
                $scope.pages.beforeCurrent = [];
                $scope.pages.afterCurrent = [];
                console.log(data);
                $scope.searchCount = data.totalvalues;
                $scope.searchResults = data.queryresult;
                lastpage = data.lastpage;

                if (data.queryresult.length > 0) {
                    $scope.hideLast = false;
                    $scope.showNoResults = true;
                    $scope.pages.lastpage = data.lastpage;
                    $scope.pages.currentpage = data.pageno;

                    // $scope.pages.lastpage = 50;
                    // $scope.pages.currentpage = 47;

                    if ($scope.pages.lastpage == $scope.pages.currentpage)
                        $scope.hideLast = true;

                    if ($scope.pages.currentpage == 2) {
                        $scope.pages.beforeCurrent[0] = 1;
                    }
                    if ($scope.pages.currentpage > 2) {
                        $scope.pages.beforeCurrent[0] = $scope.pages.currentpage - 2;
                        $scope.pages.beforeCurrent[1] = $scope.pages.currentpage - 1;
                    }
                    if (($scope.pages.lastpage - $scope.pages.currentpage) >= 2) {
                        $scope.pages.afterCurrent[0] = $scope.pages.currentpage + 1;
                        $scope.pages.afterCurrent[1] = $scope.pages.currentpage + 2;
                        if ($scope.pages.afterCurrent[1] == $scope.pages.lastpage) {
                            $scope.hideLast = true;
                        }
                    }
                    if (($scope.pages.lastpage - $scope.pages.currentpage) == 1) {
                        $scope.pages.afterCurrent[0] = $scope.pages.currentpage + 1;
                        $scope.hideLast = true;
                    }

                } else {
                    if (data.queryresult.length == 0 && $scope.searchResults.length == 0) {
                        $scope.showNoResults = true;
                        $scope.searchById = {};
                        $scope.searchById.search = '';
                        $scope.searchById.pageno = 1;
                        $scope.searchByName = {};
                        $scope.searchByName.school = '';
                        $scope.searchByName.student = '';
                        $scope.searchByName.pageno = 1;
                        $scope.idSearch = {};
                        $scope.idSearch.search = '';
                    }
                }

            }
        })
    }

    $scope.getPaginationResults = function(val) {
        if (val == 'next') {
            $scope.searchByName.pageno++;
        } else if (val == 'prev') {
            $scope.searchByName.pageno--;
        } else {
            $scope.searchByName.pageno = val;
        }
        $scope.getSearchByName();
    }

    $scope.goToProfile = function(id) {
        $location.url("/studentprofile/" + id);
    }

})

.controller('SchoolRegistrationCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    $scope.template = TemplateService.changecontent("schoolregistration");
    $scope.menutitle = NavigationService.makeactive("School Registration");
    TemplateService.title = $scope.menutitle;
    TemplateService.keywords = "School registration for SFA, SFA registration for schools, SFA registration for championship, School registration for championship in SFA";
    TemplateService.description = "Register your school for SFA inter-school championship in sports.";
    $scope.navigation = NavigationService.getnav();

    ga('send', 'pageview', {
        'title': 'SchoolRegistration Page'
    });

})

.controller('HandballCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("handball");
        $scope.menutitle = NavigationService.makeactive("Handball");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        ga('send', 'pageview', {
            'title': 'Handball Page'
        });
    })
    .controller('VolleyballCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("volleyball");
        $scope.menutitle = NavigationService.makeactive("Volleyball");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Volleyball Page'
        });

    })
    .controller('SwimmingCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("swimming");
        $scope.menutitle = NavigationService.makeactive("Swimming");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Handball Page'
        });

    })
    .controller('BasketballCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("basketball");
        $scope.menutitle = NavigationService.makeactive("basketball");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        ga('send', 'pageview', {
            'title': 'Basketball Page'
        });
    })
    .controller('BadmintonCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("badminton");
        $scope.menutitle = NavigationService.makeactive("badminton");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Handball Page'
        });

    })
    .controller('TabletennisCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("tabletennis");
        $scope.menutitle = NavigationService.makeactive("Table Tennis");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Tabletennis Page'
        });

    })

.controller('SquashCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("squash");
        $scope.menutitle = NavigationService.makeactive("Squash");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Squash Page'
        });

    })
    .controller('JudoCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("judo");
        $scope.menutitle = NavigationService.makeactive("Judo");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Judo Page'
        });

    })
    .controller('TennisCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("tennis");
        $scope.menutitle = NavigationService.makeactive("Tennis");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        ga('send', 'pageview', {
            'title': 'Handball Page'
        });
    })
    .controller('ComingsoonCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("comingsoon");
        $scope.menutitle = NavigationService.makeactive("Comingsoon");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('TermsconditionCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("termscondition");
        $scope.menutitle = NavigationService.makeactive("T&C");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = "./views/header2.html";
        TemplateService.keywords = "SFA terms and conditions, Terms and conditions for participates, SFA terms and conditions for schools, Terms and conditions for students";
        TemplateService.description = "Read the entire terms and conditions for Sports For All (SFA).";
        $scope.navigation = NavigationService.getnav();
        ga('send', 'pageview', {
            'title': 'Termsandcondition Page'
        });

    })
    .controller('EnquirenowCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog, $filter) {
        $scope.template = TemplateService.changecontent("enquirenow");
        $scope.menutitle = NavigationService.makeactive("Enquirenow");
        //        $scope.showForm = false;
        //        $scope.openForm = function () {
        //            $scope.showForm = true;
        //        };
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //		$scope.viewform = false;
        var getsportsnamecallback = function(data, status) {
            $scope.sportsname = partitionarray(data, 4);
        }
        NavigationService.getsportsname(getsportsnamecallback);

        //submit registration form
        $scope.school = {};
        $scope.school.sports = [];
        $scope.sportsflag = "";
        $scope.school.establishdate = new Date();
        var submitschoolregistrationcallback = function(data, status) {
            if (data == 1) {
                $scope.school = {};
                ngDialog.open({
                    template: './views/content/thankyou.html',
                    scope: $scope
                });
            }
        }
        $scope.submitschoolregistration = function(school) {
            $scope.school = school;
            NavigationService.submitschoolregistration($scope.school, submitschoolregistrationcallback);
        }

        //		$scope.showform = function () {
        //			$scope.viewform = true;
        //		}

        $scope.pushorpop = function(flag) {
            var index = $scope.school.sports.indexOf(flag);
            if (index == -1) {
                $scope.school.sports.push(flag);
            } else {
                $scope.school.sports.splice(index, 1);
            }
        }
        ga('send', 'event', 'Enquiry', 'Submit');
        ga('send', 'pageview', {
            'title': 'Enquiry Page'
        });

    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = "./views/header2.html";
        TemplateService.keywords = "SFA contact address, SFA contact number, SFA business address, Contact address for SFA";
        TemplateService.description = "View the contact details of Sports For All (SFA).";
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Contact Page'
        });

    })
    .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = "./views/header2.html";
        TemplateService.keywords = "SFA sports, SFA interschool championship, SFA school competitions, SFA tournaments";
        TemplateService.description = "Sports For All (SFA) aims to revolutionize school sports in Mumbai and across India by motivating, guiding and enhancing the playing skills of children and building a sustainable environment for sports.";
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'About Page'
        });

    })
    .controller('LandingCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("landing");
        $scope.menutitle = NavigationService.makeactive("Landing");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ga('send', 'pageview', {
            'title': 'Handball Page'
        });

    })
    .controller('FaqsCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("faqs");
        $scope.menutitle = NavigationService.makeactive("FAQ");
        TemplateService.title = $scope.menutitle;
        TemplateService.keywords = "Queries about sports, Queries about competitions, FAQ for SFA, SFA FAQ";
        TemplateService.description = "Check out the frequently asked questions about Sports For All (SFA).";
        $scope.navigation = NavigationService.getnav();

        $scope.oneAtATime = true;
        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        ga('send', 'pageview', {
            'title': 'Faqs Page'
        });
    })
    .controller('PartnerCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("partner");
        $scope.menutitle = NavigationService.makeactive("Partner");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        var getsponsorscallback = function(data, status) {
            $scope.sponsors = data.queryresult;
        }
        NavigationService.getsponsors(getsponsorscallback);

        ga('send', 'pageview', {
            'title': 'Handball Page'
        });
    })
    .controller('VenueCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
        $scope.template = TemplateService.changecontent("venue");
        $scope.menutitle = NavigationService.makeactive("Venue");
        TemplateService.title = $scope.menutitle;
        TemplateService.description = "SFA will be conducted at D. Y. Patil Sports Academy which is located at Sion-Panvel Expressway in Nerul, Navi Mumbai.";
        TemplateService.keywords = "Venue for SFA, SFA venue, SFA venue in Mumbai, Venue for SFA in Mumbai";
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
                "url": "tabletennis",
                "game": "table tennis"
            }, {
                "icon": "img/bluemenu/tennis.png",
                "icon2": "img/bluemenu/tennisor.png",
                "url": "tennis",
                "game": "tennis"
            }, {
                "icon": "img/bluemenu/batminton.png",
                "icon2": "img/bluemenu/batmintonor.png",
                "url": "badminton",
                "game": "badminton"
            }, {
                "icon": "img/bluemenu/squash.png",
                "icon2": "img/bluemenu/sqaushor.png",
                "url": "squash",
                "game": "squash"
            }, {
                "icon": "img/bluemenu/aqua.png",
                "icon2": "img/bluemenu/aquaticsor.png",
                "url": "swimming",
                "game": "swimming"
            }, {
                "icon": "img/bluemenu/basketball.png",
                "icon2": "img/bluemenu/basketballor.png",
                "url": "basketball",
                "game": "basketball"
            }, {
                "icon": "img/bluemenu/vollyball.png",
                "icon2": "img/bluemenu/volleyballor.png",
                "url": "volleyball",
                "game": "volleyball"
            }, {
                "icon": "img/bluemenu/handball.png",
                "icon2": "img/bluemenu/handballor.png",
                "url": "handball",
                "game": "Handball"
            }, {
                "icon": "img/bluemenu/judo.png",
                "icon2": "img/bluemenu/judoor.png",
                "url": "judo",
                "game": "JUDO"
            }];

        $scope.demo = 111;
        $scope.checkthis = function() {};

        $scope.makeactive = function(game) {
            _.each($scope.games, function(n) {
                n.active = false;
            });
            game.active = true;
            $scope.tab = game.game;
        };
        //        $scope.makeactive($scope.games[6]);
        ga('send', 'pageview', {
            'title': 'Venue Page'
        });

    })

.controller('MediaCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("media");
        $scope.menutitle = NavigationService.makeactive("Media");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.medias = [{
            image: "img/print/print1.png",
            name: "SACHIN SUPPORTS SFA - Hindustan Times"


        }, {
            image: "img/print/print2.png",
            name: "Little Sania Makes Her School Proud"


        }, {
            image: "img/print/print3.png",
            name: "SFA made me reach the Goal: Amrish Patel"

        }, {
            image: "img/print/print4.png",
            name: "The well Equipped venue ever for inter school.."

        }, {
            image: "img/print/print5.png",
            name: "Felt Like I was Playing on international Venue"

        }, {
            image: "img/print/print6.png",
            name: "The game that Made a World Record"

        }];
        ga('send', 'pageview', {
            'title': 'Media Page'
        });

    })
    .controller('DrawCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("draw");
        $scope.menutitle = NavigationService.makeactive("Draw");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.filter = {};
        $scope.filter.category = "1";
        $scope.filter.sport = "1";
        $scope.filter.gender = "1";
        $scope.filter.agegroup = "1";
        // $scope.filter.category = "";
        // $scope.filter.sport = "";
        // $scope.filter.gender = "";
        // $scope.filter.agegroup = "";
        $scope.sportselected = "";
        $scope.result = [];
        $scope.schedule = {};
        $scope.match = [];

        NavigationService.isStudentSports(function(data) {
            $scope.sports = data;
        });

        $scope.sportChange = function() {
            console.log($scope.filter.sportid.split(','));
            $scope.sportselected = $scope.filter.sportid.split(',')[1];
            $scope.filter.sport = $scope.filter.sportid.split(',')[0];

            NavigationService.getSportsCategory("", $scope.filter.sport, "", function(data) {
                $scope.category = data;
            })
            $scope.categoryChange();
        }

        $scope.categoryChange = function() {
            NavigationService.scheduleAgeGroup($scope.filter.category, $scope.filter.sport, $scope.filter.gender, function(data) {
                $scope.agegroup = data;
            })
        }

        $scope.genderChange = function() {
            $scope.categoryChange();
        }

        $scope.round = [];
        $scope.rounds = [];

        $scope.getDraw = function() {
            // $scope.filter.category = "1";
            NavigationService.getDraw($scope.filter, function(data) {
                $scope.match = data;
                var data2 = data.splice(1);
                _.each(data2, function(n) {
                    $scope.round = [];
                    _.each(n.match, function(m) {
                        _.each(m.player, function(k) {
                            $scope.round.push(k);
                        })
                    })
                    $scope.rounds.push($scope.round);
                })
                _.each(data2[data2.length - 1].match, function(n) {
                    _.each(n.player, function(m) {
                        if (m.result == "1") {
                            var arr = [];
                            arr.push(m)
                            $scope.rounds.push(arr);
                        }
                    })
                })
            });
        }
  $scope.getDraw();
        $scope.r1 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"


            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"


            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"


            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"


            }];

        $scope.r1 = _.chunk($scope.r1, 2);

        $scope.r2 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }];

        $scope.r3 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }, {
                "studentname": "Rizwan Mirza",
                "schoolname": "Bombay British School"

            }];
        $scope.r4 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }];
        $scope.r5 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }, {
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }];
        $scope.r6 = // JavaScript Document
            [{
                "studentname": "Viraj Kale",
                "schoolname": "Dhirubhai Ambani International School"

            }];
    })

.controller('StudentprofileCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $filter, $state) {
    $scope.template = TemplateService.changecontent("studentprofile");
    $scope.menutitle = NavigationService.makeactive("Student Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.checkmenu = false;
    $scope.result = [];
    $scope.sportsId = 0;
    $scope.pagenum = 1;
    $scope.allresult = [];
    $scope.msg = "Loading";
    $scope.showLoadmore = true;
    $scope.years = [];
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

    $scope.openModal = function(gal) {

        $scope.zoomposition = $scope.gallery.indexOf(gal);

        ngDialog.open({
            disableAnimation: true,
            template: './views/directive/zoomimage.html',
            scope: $scope

        });
    };

    $scope.makeactive = function(game) {

        if (!game.grey) {
            _.each($scope.games, function(n) {
                n.active = false;
            });
            game.active = true;
            $scope.tab = game.game;
            $scope.result = [];
            $scope.allresult = [];
            $scope.studentStats = {
                "medals": [],
                "matches": []
            };
            $scope.selectedGame = game;
            $scope.sportsId = game.id;
            $scope.pagenum = 1;
            $scope.loadStudents();
            $scope.gallobj.pagenum = 1;
            $scope.loadStudentsGallery();
            $scope.loadStudentStats();
        }

    };

    $scope.yearClicked = function(year) {
        // console.log($scope.years);
        var foundindex = _.indexOf($scope.gallobj.year, year);
        if (foundindex == -1) {
            $scope.gallobj.year.push(year);
        } else {
            $scope.gallobj.year.splice(foundindex, 1);
        }
        $scope.loadStudentsGallery();
    }

    NavigationService.getstudentprofile($stateParams.id, function(data) {
        _.each(data.sportsparticipated, function(n, key1) {
            _.each($scope.games, function(m, key2) {
                if ($filter('lowercase')(n.name) == $filter('lowercase')(m.game)) {
                    m.grey = false;
                    m.id = n.id;
                    if (!$scope.tab) {
                        $scope.makeactive(m);
                        $scope.sportsId = n.id;
                    }
                } else {
                    if (m.grey != false) {
                        m.grey = true;
                    }
                }
            });
            if (key1 == data.sportsparticipated.length - 1) {
                if (data.sportsparticipated != '') {
                    $scope.checkmenu = true;
                }
                demo = 1;
                //					$scope.loadStudents();
            }
        });
        $scope.student = data;
        _.each(data.sportsparticipated, function(n, key) {
            console.log(n);
            if (key == 0) {
                $scope.sportsnames = n.name;
            } else {
                $scope.sportsnames = $scope.sportsnames + ", " + n.name;
            }

        });
        _.each(data.sportname, function(n, key) {
            //lodash
            //console.log(n);
            //console.log(n.name + ', ' + key);
            //console.log(n.id + ', ' + key);
            //console.log(n.icon + ', ' + key);
        });
    });

    $scope.loadStudents = function() {
        // NavigationService.getschoolgallery($stateParams.id, $scope.sportsId, $scope.pagenum, function(data) {
        //
        //     if (data.queryresult != '') {
        //         _.each(data.queryresult, function(n) {
        //             $scope.allresult.push(n);
        //         });
        //     } else {
        //         $scope.showLoadmore = false;
        //     }
        //     if ($scope.allresult == "") {
        //         $scope.msg = "No data";
        //     }
        //
        // });
    }

    $scope.gallobj = {};
    $scope.gallobj.year = [];
    $scope.gallobj.schoolid = '';
    $scope.gallobj.studentid = $stateParams.id;
    $scope.gallobj.sportid = '';
    $scope.gallobj.sportscategory = $scope.sportsId;
    $scope.gallobj.agegroup = [];
    $scope.loadStudentsGallery = function() {
        $scope.gallobj.studentid = $stateParams.id;
        $scope.gallobj.sportscategory = $scope.sportsId;
        NavigationService.getschoolgallerynew($scope.gallobj, function(data) {
            if (data.length > 0) {
                var galleryArray = [];
                _.each(data, function(n) {
                    if (n.url)
                        galleryArray.push(n);
                })
                if (galleryArray.length > 0)
                    $scope.allresult = _.chunk(galleryArray, 3);
                else {
                    $scope.allresult = [];
                    $scope.msg = "No data";
                }
            } else {
                $scope.allresult = [];
                $scope.msg = "No data";
            }
            console.log($scope.allresult);
        });
    }


    $scope.loadStudentStats = function() {
        $scope.statobj = {};
        $scope.statobj.schoolid = '';
        $scope.statobj.studentid = $stateParams.id;
        $scope.statobj.sportscategory = $scope.sportsId;
        NavigationService.getStats($scope.statobj, function(data) {
            console.log(data);
            var statsobj = {};
            var medalsArray = [];
            if (data.medals) {
                _.each(data.medals, function(n) {
                    if (n.year) {
                        medalsArray.push(n);
                    }
                });
            }
            var matchesArray = [];
            if (data.matches) {
                _.each(data.matches, function(n) {
                    if (n.year) {
                        var finalscore = "";
                        if (n.score) {
                            finalscore += n.score;
                        }
                        if (n.opponentscore) {
                            finalscore += "-" + n.opponentscore;
                        }
                        n.score = finalscore;
                        matchesArray.push(n);
                    }
                });
            }
            statsobj.medals = medalsArray;
            statsobj.matches = matchesArray;
            // $scope.schoolStats = statsobj;
            $scope.studentStats = statsobj;
            // if (data.length > 0)
            //     $scope.allresult = _.chunk(data, 3);
            // else {
            //     $scope.allresult = [];
            //     $scope.msg = "No data";
            // }
            // console.log($scope.allresult);
        });
    }

    $scope.loadMore = function() {
        $scope.pagenum = $scope.pagenum + 1;
        $scope.loadStudents();
    }

    $scope.nextImage = function(oldposition) {
        if (oldposition == ($scope.gallery.length - 1)) {
            $scope.zoomposition = 0;
        } else {
            $scope.zoomposition++;
        }
    };

    $scope.previousImage = function(oldposition) {
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

    $scope.tabchange1 = function(tab, a) {
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

    $scope.tab2 = "statics";
    //    tab change
    $scope.active = '';
    $scope.actives = 'active';

    $scope.tabchange = function(tab, a) {
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

    $scope.openBox = function(id) {
        $(id).attr('openbox', 'show');
    }

    $scope.add = function(term) {
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
            "game": "tennis",
            "grey": true
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
            "game": "swimming",
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
        }, {
            "icon": "img/bluemenu/handball.png",
            "icon2": "img/bluemenu/handballor.png",
            "game": "handball",
            "grey": true
        }, {
            "icon": "img/bluemenu/judo.png",
            "icon2": "img/bluemenu/judoor.png",
            "game": "judo",
            "grey": true
        }];

    $scope.demo = 111;
    $scope.checkthis = function() {};

    //		$scope.makeactive($scope.games[0]);
    ga('send', 'pageview', {
        'title': 'StudentProfile Page'
    });

})

.controller('SchoolprofileCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $timeout, $filter) {
    $scope.template = TemplateService.changecontent("schoolprofile");
    $scope.menutitle = NavigationService.makeactive("Schoolprofile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.checkmenu = false;
    $scope.sportsId = 0;
    $scope.pagenum = 1;
    $scope.result = [];
    $scope.allresult = [];
    $scope.showLoadmore = true;
    $scope.msg = "Loading";
    $scope.category = "";
    $scope.ageSelected = "";
    $scope.checkstart = true;
    $scope.getage = function() {

    }
    $scope.getage();
    $scope.makeactive = function(state, game) {
        console.log(game);
        if (state == 0) {
            $scope.checkstart = true;
        } else {
            $scope.checkstart = false;
        }

        if (!game.grey) {
            _.each($scope.games, function(n) {
                n.active = false;
            });
            if (state == 0) {
                game.active = true;
            }

            $scope.result = [];
            $scope.allresult = [];
            $scope.schoolStats = {
                "medals": [],
                "matches": []
            };
            //					$scope.selectedGame = game;

            $scope.sportsId = game.id;
            $scope.pagenum = 1;
            if ($scope.tab2 == "squad") {
                $scope.loadSportStudent();
            } else if ($scope.tab2 == "gallerymain") {
                $scope.loadGallery();
            }
            $scope.tab = game.game;
            $scope.loadSchoolGallery();
            $scope.loadSchoolStats();
            $scope.getSchoolStudents();
            $scope.loadSportStudent();
        }
    };
    NavigationService.getAllSports(function(data) {});
    $scope.school = {};
    var check = 0;

    $scope.loadMore = function() {
        $scope.pagenum = $scope.pagenum + 1;
        $scope.loadSportStudent();
    }
    $scope.loadMoreGallery = function() {
        $scope.pagenum = $scope.pagenum + 1;
        $scope.loadGallery();
    }
    $timeout(function() {
        if ($scope.result == "") {
            $scope.msg = "No data";
        }
    }, 4000);

    $scope.yearClicked = function(year) {
        // console.log($scope.years);
        var foundindex = _.indexOf($scope.gallobj.year, year);
        if (foundindex == -1) {
            $scope.gallobj.year.push(year);
        } else {
            $scope.gallobj.year.splice(foundindex, 1);
        }
        $scope.loadSchoolGallery();
    }

    $scope.ageClicked = function(age) {
        console.log($scope.agegroups);
        var foundindex = _.indexOf($scope.gallobj.agegroup, age);
        if (foundindex == -1) {
            $scope.gallobj.agegroup.push(age);
        } else {
            $scope.gallobj.agegroup.splice(foundindex, 1);
        }
        $scope.loadSchoolGallery();
    }

    $scope.gallobj = {};
    $scope.gallobj.year = [];
    $scope.gallobj.pagenum = 1;
    $scope.gallobj.schoolid = $stateParams.id;
    $scope.gallobj.studentid = '';
    $scope.gallobj.sportid = '';
    $scope.gallobj.sportscategory = $scope.sportsId;
    $scope.gallobj.agegroup = [];
    $scope.loadSchoolGallery = function() {
        $scope.gallobj.schoolid = $stateParams.id;
        $scope.gallobj.sportscategory = $scope.sportsId;
        NavigationService.getschoolgallerynew($scope.gallobj, function(data) {
            if (data.length > 0) {
                var galleryArray = [];
                _.each(data, function(n) {
                    if (n.url)
                        galleryArray.push(n);
                })
                if (galleryArray.length > 0)
                    $scope.schoolgallery = _.chunk(galleryArray, 3);
                else {
                    $scope.schoolgallery = [];
                    $scope.msg = "No data";
                }
            } else {
                $scope.schoolgallery = [];
                $scope.msg = "No data";
            }
            console.log($scope.schoolgallery);
        });
    }
    $scope.statobj = {};
    $scope.statobj.gender = '';
    $scope.statobj.agegroup = '';
    $scope.loadSchoolStats = function() {
        $scope.statobj.studentid = '';
        $scope.statobj.schoolid = $stateParams.id;
        $scope.statobj.sportscategory = $scope.sportsId;
        NavigationService.getStats($scope.statobj, function(data) {
            console.log(data);
            var statsobj = {};
            var medalsArray = [];
            if (data.medals) {
                _.each(data.medals, function(n) {
                    if (n.year) {
                        medalsArray.push(n);
                    }
                });
            }
            var matchesArray = [];
            if (data.matches) {
                _.each(data.matches, function(n) {
                    if (n.year) {
                        var finalscore = "";
                        if (n.score) {
                            finalscore += n.score;
                        }
                        if (n.opponentscore) {
                            finalscore += "-" + n.opponentscore;
                        }
                        n.score = finalscore;

                        // if (n.score && n.opponentscore) {
                        //     n.score = n.score + "-" + n.opponentscore;
                        // } else {
                        //     n.score = "";
                        // }
                        matchesArray.push(n);
                    }
                });
            }

            function groupBy(array, f) {
                var groups = {};
                array.forEach(function(o) {
                    var group = JSON.stringify(f(o));
                    groups[group] = groups[group] || [];
                    groups[group].push(o);
                });
                return Object.keys(groups).map(function(group) {
                    return groups[group];
                })
            }
            var result = groupBy(medalsArray, function(item) {
                return [item.agegroup, item.sport, item.sportscategory, item.year, item.gender];
            });
            console.log(result);
            var groupmedals = [];
            _.each(result, function(group) {
                var medalCount = {
                    gold: 0,
                    silver: 0,
                    bronze: 0
                }
                _.each(group, function(n) {
                    if (n.medal == '1') {
                        medalCount.gold++;
                    }
                    if (n.medal == '2') {
                        medalCount.silver++;
                    }
                    if (n.medal == '3') {
                        medalCount.bronze++;
                    }
                });
                groupmedals.push({
                    gold: medalCount.gold,
                    silver: medalCount.silver,
                    bronze: medalCount.bronze,
                    agegroup: group[0].agegroup,
                    sport: group[0].sport,
                    sportscategory: group[0].sportscategory,
                    gender: group[0].gender,
                    year: group[0].year
                });
            });
            console.log(groupmedals);
            statsobj.medals = groupmedals;
            statsobj.matches = matchesArray;
            $scope.schoolStats = statsobj;
            // if (data.length > 0)
            //     $scope.allresult = _.chunk(data, 3);
            // else {
            //     $scope.allresult = [];
            //     $scope.msg = "No data";
            // }
            // console.log($scope.allresult);
        });
    }

    $scope.studentListObj = {};
    $scope.studentListObj.school = $stateParams.id;
    $scope.studentListObj.sport = $scope.sportsId;
    $scope.studentListObj.agegroup = "";
    $scope.studentListObj.gender = "";
    $scope.getSchoolStudents = function() {
        $scope.studentListObj.school = $stateParams.id;
        $scope.studentListObj.sport = $scope.sportsId;
        NavigationService.getSchoolStudents($scope.studentListObj, function(data) {
            console.log(data);
            if (data.length > 0) {
                $scope.result = _.chunk(data, parseInt(data.length / 2));
                $scope.msgStud = "";
                if ($scope.result[2]) {
                    $scope.result[0].push($scope.result[2][0]);
                }
            } else {
                $scope.msgStud = "No Players";
                $scope.result = [];
            }
        });
    }


    // Get school detail
    $scope.loadStudents = function() {
        // NavigationService.getsport($stateParams.id, $scope.sportsId, $scope.ageSelected, $scope.category, function(data) {
        //     console.log(data);
        //     if (data != '') {
        //         $scope.allresult = data;
        //         $scope.msg = "";
        //         $scope.result = _.chunk($scope.allresult, parseInt($scope.allresult.length / 2));
        //         if ($scope.result[2]) {
        //             $scope.result[0].push($scope.result[2][0]);
        //         }
        //         console.log($scope.result);
        //     }
        //     if ($scope.allresult == "") {
        //         $scope.msg = "No data";
        //     }
        // });
    }

    $scope.loadCategory = function() {
        NavigationService.getSportsCategory($stateParams.id, $scope.sportsId, $scope.ageSelected, function(data, status) {
            $scope.sportsCategory = data;
            if ($scope.category = "") {
                $scope.category = "";
            }
            $scope.loadStudents();
        });
    }

    $scope.loadSportStudent = function() {
        console.log("in load sportstudent");
        NavigationService.getAgeGroup($stateParams.id, $scope.sportsId, function(data, status) {
            $scope.agegroups = data;
            if ($scope.ageSelected == "") {
                $scope.ageSelected = "";
            }
            $scope.loadCategory();
        });
    }

    $scope.loadGallery = function() {
        // NavigationService.getgalleryimage($stateParams.id, $scope.sportsId, $scope.pagenum, function(data) {
        //     if (data.queryresult != '') {
        //         _.each(data.queryresult, function(n) {
        //             $scope.allresult.push(n);
        //         });
        //     } else {
        //         $scope.showLoadmore = false;
        //     }
        //     if ($scope.allresult == "") {
        //         $scope.msg = "No data";
        //     }
        // });
    }

    NavigationService.getschoolprofile($stateParams.id, function(data) {

        if (data.sportname != '') {
            _.each(data.sportname, function(n, key1) {
                _.each($scope.games, function(m, key2) {
                    if ($filter('lowercase')(n.name) == $filter('lowercase')(m.game) || m.game == "all") {
                        m.grey = false;
                        m.id = n.id;
                        if (!$scope.tab) {
                            $scope.makeactive(1, m);
                        }
                    } else {
                        if (m.grey != false) {
                            m.grey = true;
                        }
                    }
                });
                if (key1 == data.sportname.length - 1) {
                    $scope.checkmenu = true;
                    demo = 1;
                    //                    $scope.loadStudents();
                }


            });
        } else {
            $scope.checkmenu = true;
        }
        $scope.school = data;


        $scope.sportid = [];
        _.each(data.sportname, function(n, key) {
            $scope.sportid.push(n.id);
        });
        console.log($scope.sportid);
        //            NavigationService.filterGames($scope.sportid, function (data) {
        //                $scope.schoolSports = data;
        //            });

    });
    $scope.loadSportsCategory = function() {

    }

    $scope.games = // JavaScript Document
        [{
            "icon": "img/bluemenu/tabletennis.png",
            "icon2": "img/bluemenu/tabletennisor.png",
            "game": "table tennis",
            "grey": true
        }, {
            "icon": "img/bluemenu/tennis.png",
            "icon2": "img/bluemenu/tennisor.png",
            "game": "tennis",
            "grey": true
        }, {
            "icon": "img/bluemenu/batminton.png",
            "icon2": "img/bluemenu/batmintonor.png",
            "game": "badminton",
            "grey": true
        }, {
            "icon": "img/bluemenu/squash.png",
            "icon2": "img/bluemenu/sqaushor.png",
            "game": "squash",
            "grey": true
        }, {
            "icon": "img/bluemenu/aqua.png",
            "icon2": "img/bluemenu/aquaticsor.png",
            "game": "swimming",
            "grey": true
        }, {
            "icon": "img/bluemenu/basketball.png",
            "icon2": "img/bluemenu/basketballor.png",
            "game": "basketball",
            "grey": true
        }, {
            "icon": "img/bluemenu/vollyball.png",
            "icon2": "img/bluemenu/volleyballor.png",
            "game": "volleyball",
            "grey": true
        }, {
            "icon": "img/bluemenu/handball.png",
            "icon2": "img/bluemenu/handballor.png",
            "game": "handball",
            "grey": true
        }, {
            "icon": "img/bluemenu/judo.png",
            "icon2": "img/bluemenu/judoor.png",
            "game": "judo",
            "grey": true
        }];

    $scope.zoomposition = 0;

    $scope.openModal = function(gal) {

        $scope.zoomposition = $scope.gallery.indexOf(gal);

        ngDialog.open({
            template: './views/directive/zoomimage.html',
            scope: $scope
        });
    };

    $scope.nextImage = function(oldposition) {
        if (oldposition == ($scope.gallery.length - 1)) {
            $scope.zoomposition = 0;
        } else {
            $scope.zoomposition++;
        }
    };

    $scope.previousImage = function(oldposition) {
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

    $scope.tabchange1 = function(tab, a) {
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
    $scope.tab2 = "squad";
    //    tab change
    $scope.active = 'active';
    $scope.actives = '';
    $scope.activess = '';

    $scope.tabchange = function(tab, a) {
        $scope.result = [];
        $scope.allresult = [];
        $scope.tab2 = tab;
        if (a == 1) {
            $scope.active = "active";
            $scope.actives = '';
            $scope.activess = '';
            $scope.allresult = [];
            $scope.pagenum = 0;
            $scope.loadMore();

        } else if (a == 2) {
            $scope.active = '';
            $scope.actives = "active";
            $scope.activess = '';
            $scope.allresult = [];
            $scope.pagenum = 0;
            $scope.loadMoreGallery();

        } else {
            $scope.active = '';
            $scope.actives = '';
            $scope.activess = "active";

        }
    };

    //    end

    //under tab

    $scope.tab3 = "under11";


    $scope.line = 'col-class';
    $scope.line1 = '';
    $scope.line2 = '';

    $scope.tabchanges = function(age) {
        $scope.result = [];
        $scope.allresult = [];

        $scope.ageSelected = age;
        $scope.result = [];
        $scope.pagenum = 1;
        $scope.loadCategory();
    };

    $scope.categorychanges = function(category) {
        $scope.result = [];
        $scope.allresult = [];
        $scope.category = category;
        $scope.result = [];
        $scope.pagenum = 1;
        $scope.loadStudents();
    };

    //    end

    $scope.foo = "World";
    $scope.list = [];

    $scope.image = "https://www.google.com/images/srpr/logo11w.png";

    $scope.openBox = function(id) {
        $(id).attr('openbox', 'show');
    }

    $scope.add = function(term) {
        $scope.list.push(term);
    }


    $scope.demo = 111;
    $scope.checkthis = function() {};

    //		$scope.makeactive($scope.games[0]);
    ga('send', 'pageview', {
        'title': 'SchoolProfile Page'
    });

})

.controller('SportsCtrl', function($scope, TemplateService, NavigationService, $location) {

    $scope.goto = function(data) {
        $location.path(data);
    };

    $scope.template = TemplateService.changecontent("sports");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    TemplateService.keywords = "Sports competitions, Interschool champion ship, Sports for schools, Inter school sports competition";
    TemplateService.description = "SFA is currently conducting sports competitions in Table Tennis, Tennis, Badminton, Squash, Swimming, Basketball, Volleyball, Handball and Judo.";
    $scope.navigation = NavigationService.getnav();

    $scope.games = // JavaScript Document
        [
            //        {
            //        "icon": "img/bluemenu/overall.png",
            //        "icon2": "img/bluemenu/overallor.png",
            //        "game": "overall"
            //        },
            {
                "icon": "img/bluemenu/tabletennis.png",
                "icon2": "img/bluemenu/tabletennisor.png",
                "game": "table tennis",
                "url": "tabletennis"
            }, {
                "icon": "img/bluemenu/tennis.png",
                "icon2": "img/bluemenu/tennisor.png",
                "url": "tennis",
                "game": "tennis"
            }, {
                "icon": "img/bluemenu/batminton.png",
                "icon2": "img/bluemenu/batmintonor.png",
                "url": "badminton",
                "game": "badminton"
            }, {
                "icon": "img/bluemenu/squash.png",
                "icon2": "img/bluemenu/sqaushor.png",
                "url": "squash",
                "game": "squash"
            }, {
                "icon": "img/bluemenu/aqua.png",
                "icon2": "img/bluemenu/aquaticsor.png",
                "url": "swimming",
                "game": "swimming"
            }, {
                "icon": "img/bluemenu/basketball.png",
                "icon2": "img/bluemenu/basketballor.png",
                "url": "basketball",
                "game": "basketball"
            }, {
                "icon": "img/bluemenu/vollyball.png",
                "icon2": "img/bluemenu/volleyballor.png",
                "url": "volleyball ",
                "game": "volleyball"
            }, {
                "icon": "img/bluemenu/handball.png",
                "icon2": "img/bluemenu/handballor.png",
                "url": "handball",
                "game": "Handball"
            }, {
                "icon": "img/bluemenu/judo.png",
                "icon2": "img/bluemenu/judoor.png",
                "url": "judo",
                "game": "Judo"
            }
        ];

    $scope.demo = 111;
    $scope.checkthis = function() {};

    //	$scope.makeactive = function (game) {
    //		_.each($scope.games, function (n) {
    //			n.active = false;
    //		});
    //		game.active = true;
    //		$scope.tab = game.game;
    //	};
    //	$scope.makeactive($scope.games[6]);

    ga('send', 'pageview', {
        'title': 'Sports Page'
    });
})

.controller('ScoreCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("score");
    $scope.menutitle = NavigationService.makeactive("Score");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.filter = {};
    $scope.filter.category = "";
    $scope.filter.sport = "";
    $scope.filter.gender = "";
    $scope.filter.agegroup = "";
    $scope.sportselected = "";
    $scope.agegroupselected = "";
    $scope.result = [];
    $scope.scores = [];
    $scope.schedule = {};

    NavigationService.isStudentSports(function(data) {
        $scope.sports = data;
    });

    $scope.agechange = function() {
        $scope.agegroupselected = $scope.filter.agegroup.split(',')[1];
        $scope.filter.agegroupid = $scope.filter.agegroup.split(',')[0];
    }

    $scope.sportChange = function() {
        console.log($scope.filter.sportid.split(','));
        $scope.sportselected = $scope.filter.sportid.split(',')[1];
        $scope.filter.sport = $scope.filter.sportid.split(',')[0];

        NavigationService.getSportsCategory("", $scope.filter.sport, "", function(data) {
            $scope.category = data;
        })
        $scope.categoryChange();
    }

    $scope.categoryChange = function() {
        NavigationService.scheduleAgeGroup($scope.filter.category, $scope.filter.sport, $scope.filter.gender, function(data) {
            $scope.agegroup = data;
        })
    }

    $scope.genderChange = function() {
        $scope.categoryChange();
    }

    $scope.getScore = function() {
        $scope.scores = [];
        NavigationService.getScore($scope.filter, function(data) {
            $scope.scores = data.queryresult;
            _.each($scope.scores, function(n) {
                console.log(n.players[0].result);
                console.log(n.players[1].result);
                if (n.players[0].result > n.players[1].result) {
                    n.result = n.players[0].name;
                } else {
                    n.result = n.players[1].name;
                }
                console.log(n.result);
            })
        });
    }

    $scope.demo = 111;
    $scope.checkthis = function() {};

    $scope.makeactive = function(game) {
        _.each($scope.games, function(n) {
            n.active = false;
        });
        game.active = true;
        $scope.tab = game.game;
    };
    //    $scope.makeactive($scope.games[6]);
    ga('send', 'pageview', {
        'title': 'Score Page'
    });


})

.controller('ScheduleCtrl', function($scope, TemplateService, NavigationService, $moment, $filter) {
        $scope.template = TemplateService.changecontent("schedule");
        $scope.menutitle = NavigationService.makeactive("Schedule");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.filter = {};
        $scope.filter.category = "";
        $scope.filter.sport = "";
        $scope.filter.gender = "";
        $scope.filter.agegroup = "";
        $scope.sportselected = "";
        $scope.result = [];
        $scope.schedule = {};

        //    $scope.oneAtATime = true;
        //    $scope.oneAtATimes = false;
        //
        //      $scope.status = {
        //    isFirstOpen: true,
        //    isFirstDisabled: false
        //  };
        NavigationService.isStudentSports(function(data) {
            $scope.sports = data;
        });

        $scope.sportChange = function() {
            console.log($scope.filter.sportid.split(','));
            $scope.sportselected = $scope.filter.sportid.split(',')[1];
            $scope.filter.sport = $scope.filter.sportid.split(',')[0];

            NavigationService.getSportsCategory("", $scope.filter.sport, "", function(data) {
                $scope.category = data;
            })
            $scope.categoryChange();
        }

        $scope.categoryChange = function() {
            NavigationService.scheduleAgeGroup($scope.filter.category, $scope.filter.sport, $scope.filter.gender, function(data) {
                $scope.agegroup = data;
            })
        }

        $scope.genderChange = function() {
            $scope.categoryChange();
        }

        $scope.getSchedule = function() {
            $scope.result = [];

            if ($scope.sportselected == 'Swimming') {
                console.log($scope.sportselected);
                NavigationService.getAllSwimmingMatch($scope.filter, function(data) {
                    _.each(data.queryresult, function(n) {
                        $scope.schedule = {};
                        $scope.schedule.matchdate = n.matchdate;
                        $scope.schedule.matchresult = n.matchresult;
                        $scope.schedule.starttime = n.starttime;
                        if (n.studentid && n.studentid != '') {
                            $scope.schedule.team = n.studentname;
                            $scope.schedule.teamsfa = n.studentsfaid;
                        }
                        if (n.teamid && n.teamid != '') {
                            $scope.schedule.team = n.teamname;
                            $scope.schedule.teamsfa = n.teamsfaid;
                        }
                        $scope.result.push($scope.schedule);
                    });
                });
            } else {
                NavigationService.getschedule($scope.filter, function(data) {
                    _.each(data.queryresult, function(n) {
                        $scope.schedule = {};
                        $scope.schedule.matchdate = n.matchdate;
                        $scope.schedule.matchresult = n.matchresult;
                        $scope.schedule.starttime = n.starttime;

                        if (n.players[0].studentname && n.players[0].studentname != '') {
                            $scope.schedule.team1 = n.players[0].studentname;
                            $scope.schedule.school1 = n.players[0].schoolname;
                        }
                        if (n.players[0].teamname && n.players[0].teamname != '') {
                            $scope.schedule.team1 = n.players[0].teamname;
                            $scope.schedule.school1 = n.players[0].teamsfaid;
                        }

                        if (n.players[1]) {
                            if (n.players[1].studentname && n.players[1].studentname != '') {
                                $scope.schedule.team2 = n.players[1].studentname;
                                $scope.schedule.school2 = n.players[1].schoolname;
                            }
                        }
                        if (n.players[1]) {
                            if (n.players[1].teamname && n.players[1].teamname != '') {
                                $scope.schedule.team2 = n.players[1].teamname;
                                $scope.schedule.school2 = n.players[1].teamsfaid;
                            }
                        }
                        //					console.log(moment.formate(n.matchdate,'YYYY MMM'));
                        $scope.result.push($scope.schedule);
                    });
                    console.log($scope.result);
                });
            }
        }

        //		$scope.result = [{
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "Rizwan won",
        //				point1: "4-6",
        //				point2: "5-6",
        //				point3: "1-6",
        //				play: true
        //			}
        //    }, {
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "to be played",
        //				point1: "",
        //				point2: "",
        //				point3: "",
        //				play: false
        //			}
        //    }, {
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "to be played",
        //				point1: "",
        //				point2: "",
        //				point3: "",
        //				play: false
        //			}
        //    }, {
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "to be played",
        //				point1: "",
        //				point2: "",
        //				point3: "",
        //				play: false
        //			}
        //    }, {
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "to be played",
        //				point1: "",
        //				point2: "",
        //				point3: "",
        //				play: false
        //			}
        //    }, {
        //			player1: {
        //				name: "Viraj Kale",
        //				school: "Dhirubhai Ambani International School"
        //			},
        //			player2: {
        //				name: "Rizwan Mirza",
        //				school: "Bombay British School"
        //			},
        //			time: {
        //				time: "10:15 AM",
        //				day: "25",
        //				month: "DEC",
        //				nd: "nd",
        //				year: "2015"
        //			},
        //			result: {
        //				status: "to be played",
        //				point1: "",
        //				point2: "",
        //				point3: "",
        //				play: false
        //			}
        //    }];


        $scope.games = // JavaScript Document
            [{
                "icon": "img/orangemenu/tabletennis.png",
                "icon2": "img/orangemenu/tabletennisbl.png",
                "url": "tabletennis",
                "game": "table tennis"
            }, {
                "icon": "img/orangemenu/tennis.png",
                "icon2": "img/orangemenu/tennisbl.png",
                "url": "tennis",
                "game": "tennis"
            }, {
                "icon": "img/orangemenu/batminton.png",
                "icon2": "img/orangemenu/batmintonbl.png",
                "url": "badminton",
                "game": "badminton"
            }, {
                "icon": "img/orangemenu/squash.png",
                "icon2": "img/orangemenu/squashbl.png",
                "url": "squash",
                "game": "squash"
            }, {
                "icon": "img/orangemenu/aquash.png",
                "icon2": "img/orangemenu/aquashbl.png",
                "url": "swimming",
                "game": "swimming"
            }, {
                "icon": "img/orangemenu/basketball.png",
                "icon2": "img/orangemenu/basketballbl.png",
                "url": "basketball",
                "game": "basketball"
            }, {
                "icon": "img/orangemenu/volleyball.png",
                "icon2": "img/orangemenu/volleyballbl.png",
                "url": "volleyball",
                "game": "volleyball"
            }];

        $scope.demo = 111;
        $scope.checkthis = function() {};

        $scope.makeactive = function(game) {
            _.each($scope.games, function(n) {
                n.active = false;
            });
            game.active = true;
            $scope.tab = game.game;
        };
        $scope.makeactive($scope.games[6]);

        $scope.jqueryScrollbarOptions = {
            "onScroll": function(y, x) {
                if (y.scroll == y.maxScroll) {
                    alert('Scrolled to bottom');
                }
            }
        };
        ga('send', 'pageview', {
            'title': 'Schedule Page'
        });
    })

    .controller('TrainingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("training");
        $scope.menutitle = NavigationService.makeactive("Training & Development");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
      })

    .controller('headerctrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
    })
    .controller('footerCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.newsletter = {
            show: true,
        };

        function closeNewsletter() {
            $scope.newsletter.show = false;
        }

        $scope.validEmail = function(email) {
            if (email) {
                $scope.newsletter.emaildis = "";
            } else {
                $scope.newsletter.emaildis = "error-red";
            }
        };
        $scope.savenewsletter = function(email) {
            if ($scope.newsletter.emaildis == "" && $scope.newsletter.email) {
                NavigationService.savenewsletter(email, closeNewsletter);
            }
        }

        $scope.games = // JavaScript Document
            [{
                "img": "img/footer/s1.jpg",
                "href": "http://www.mbasso.in",
                "game": "badminton"
            }, {
                "img": "img/footer/s2.jpg",
                "href": "",
                "game": "handball"
            }, {
                "img": "img/footer/s3.jpg",
                "href": "",
                "game": "Judo"
            }, {
                "img": "img/footer/s4.jpg",
                "href": "http://www.ispsquash.com/",
                "game": "squash"
            }, {
                "img": "img/footer/s5.jpg",
                "href": "http://www.mbtaworld.com/",
                "game": "Tennis"
            }, {
                "img": "img/footer/s6.jpg",
                "href": "http://www.msdtta.org/",
                "game": "table Tennis"
            }, {
                "img": "img/footer/s7.jpg",
                "href": "http://www.swimmingfederation.in/",
                "game": "swimming"
            }, {
                "img": "img/footer/s8.jpg",
                "href": "",
                "game": "volleyball"
            }, {
                "img": "img/footer/s9.jpg",
                "href": "http://www.maharashtrabasketball.com/",
                "game": "basket ball"
            }];

    })

;
