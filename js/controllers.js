var test1 = {};
var school = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngDialog', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("home");
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var getbannersliderscallback = function (data, status) {
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
	$scope.clickonslider = function (data) {
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


	$scope.changeslider = function () {
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
	$scope.iconclick = function (element) {
		var indexele = $scope.homeslide.indexOf(element);
		$scope.flex.demo.flexslider(indexele);
	};

	ga('send', 'pageview', {
		'title': 'Home Page'
	});

})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("profile");
		$scope.menutitle = NavigationService.makeactive("Profile");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Profile Page'
		});

	})
	.controller('EnquiryCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog, $window) {
		$scope.template = TemplateService.changecontent("enquiry");
		$scope.menutitle = NavigationService.makeactive("Enquiry");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		TemplateService.header = "./views/header2.html";
		TemplateService.footer = "./views/footer2.html";

		$scope.fireConversion = function () {
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

		var getbannersliderscallback = function (data, status) {
			$scope.homeslide = data;
		}
		NavigationService.getbannersliders(getbannersliderscallback);

		NavigationService.getschoolnames(function (data) {
			$scope.schoolNames = _.chunk(data, data.length / 2);
			$scope.schoolHalf = $scope.schoolNames[0].length;
		});

		$scope.schoolProfile = function (school) {
			$location.path("schoolprofile/" + school.id);
		}

		$scope.viewmore = false;

		$scope.enquire = {};
		$scope.enquire.person = "Student";

		var usercontactcallback = function (data, status) {
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

		$scope.submitEnquiry = function (enquire) {
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

.controller('SchoolCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog, $location) {
	$scope.template = TemplateService.changecontent("school");
	$scope.menutitle = NavigationService.makeactive("School");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();


	NavigationService.getschoolnames(function (data) {
		$scope.schoolNames = _.chunk(data, data.length / 2);
		$scope.schoolHalf = $scope.schoolNames[0].length;
	});

	$scope.schoolProfile = function (school) {
		$location.path("schoolprofile/" + school.id);
	}

	ga('send', 'pageview', {
		'title': 'School Page'
	});

})

.controller('StudentCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog, $location) {
	$scope.template = TemplateService.changecontent("student");
	$scope.menutitle = NavigationService.makeactive("Student");
	TemplateService.title = $scope.menutitle;
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

	$scope.getSearchById = function (val) {
		$scope.searchById.search = parseInt(val.substr(5));
		if (val.substr(0, 5) == "sfast" || val.substr(0, 5) == "SFAST") {
			NavigationService.studentSearchById($scope.searchById, function (data) {
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

	$scope.getSearchByName = function () {
		console.log($scope.searchByName);
		NavigationService.studentSearchByName($scope.searchByName, function (data) {
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

	$scope.getPaginationResults = function (val) {
		if (val == 'next') {
			$scope.searchByName.pageno++;
		} else if (val == 'prev') {
			$scope.searchByName.pageno--;
		} else {
			$scope.searchByName.pageno = val;
		}
		$scope.getSearchByName();
	}

	$scope.goToProfile = function (id) {
		$location.url("/studentprofile/" + id);
	}

})

.controller('SchoolRegistrationCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
	$scope.template = TemplateService.changecontent("schoolregistration");
	$scope.menutitle = NavigationService.makeactive("Schoolregistration");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	ga('send', 'pageview', {
		'title': 'SchoolRegistration Page'
	});

})

.controller('HandballCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("handball");
		$scope.menutitle = NavigationService.makeactive("Handball");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();


		ga('send', 'pageview', {
			'title': 'Handball Page'
		});
	})
	.controller('VolleyballCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("volleyball");
		$scope.menutitle = NavigationService.makeactive("Volleyball");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Volleyball Page'
		});

	})
	.controller('SwimmingCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("swimming");
		$scope.menutitle = NavigationService.makeactive("Swimming");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Handball Page'
		});

	})
	.controller('BasketballCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("basketball");
		$scope.menutitle = NavigationService.makeactive("basketball");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();


		ga('send', 'pageview', {
			'title': 'Basketball Page'
		});
	})
	.controller('BadmintonCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("badminton");
		$scope.menutitle = NavigationService.makeactive("badminton");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Handball Page'
		});

	})
	.controller('TabletennisCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("tabletennis");
		$scope.menutitle = NavigationService.makeactive("Tabletennis");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Tabletennis Page'
		});

	})
	.controller('SquashCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("squash");
		$scope.menutitle = NavigationService.makeactive("Squash");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Squash Page'
		});

	})
	.controller('JudoCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("judo");
		$scope.menutitle = NavigationService.makeactive("Judo");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Judo Page'
		});

	})
	.controller('TennisCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("tennis");
		$scope.menutitle = NavigationService.makeactive("Tennis");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		ga('send', 'pageview', {
			'title': 'Handball Page'
		});
	})
	.controller('ComingsoonCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("comingsoon");
		$scope.menutitle = NavigationService.makeactive("Comingsoon");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

	})
	.controller('TermsconditionCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("termscondition");
		$scope.menutitle = NavigationService.makeactive("Termscondition");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		ga('send', 'pageview', {
			'title': 'Termsandcondition Page'
		});

	})
	.controller('EnquirenowCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog, $filter) {
		$scope.template = TemplateService.changecontent("enquirenow");
		$scope.menutitle = NavigationService.makeactive("Enquirenow");
		//        $scope.showForm = false;
		//        $scope.openForm = function () {
		//            $scope.showForm = true;
		//        };
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		//		$scope.viewform = false;
		var getsportsnamecallback = function (data, status) {
			$scope.sportsname = partitionarray(data, 4);
		}
		NavigationService.getsportsname(getsportsnamecallback);

		//submit registration form
		$scope.school = {};
		$scope.school.sports = [];
		$scope.sportsflag = "";
		$scope.school.establishdate = new Date();
		var submitschoolregistrationcallback = function (data, status) {
			if (data == 1) {
				$scope.school = {};
				ngDialog.open({
					template: './views/content/thankyou.html',
					scope: $scope
				});
			}
		}
		$scope.submitschoolregistration = function (school) {
			$scope.school = school;
			NavigationService.submitschoolregistration($scope.school, submitschoolregistrationcallback);
		}

		//		$scope.showform = function () {
		//			$scope.viewform = true;
		//		}

		$scope.pushorpop = function (flag) {
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
	.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("contact");
		$scope.menutitle = NavigationService.makeactive("Contact");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Contact Page'
		});

	})
	.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("about");
		$scope.menutitle = NavigationService.makeactive("About");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'About Page'
		});

	})
	.controller('LandingCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("landing");
		$scope.menutitle = NavigationService.makeactive("Landing");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		ga('send', 'pageview', {
			'title': 'Handball Page'
		});

	})
	.controller('FaqsCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("faqs");
		$scope.menutitle = NavigationService.makeactive("Faqs");
		TemplateService.title = $scope.menutitle;
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
	.controller('PartnerCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
		$scope.template = TemplateService.changecontent("partner");
		$scope.menutitle = NavigationService.makeactive("Partner");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		var getsponsorscallback = function (data, status) {
			$scope.sponsors = data.queryresult;
		}
		NavigationService.getsponsors(getsponsorscallback);

		ga('send', 'pageview', {
			'title': 'Handball Page'
		});
	})
	.controller('VenueCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
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
		$scope.checkthis = function () {};

		$scope.makeactive = function (game) {
			_.each($scope.games, function (n) {
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

.controller('MediaCtrl', function ($scope, TemplateService, NavigationService) {
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
	.controller('DrawCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService.changecontent("draw");
		$scope.menutitle = NavigationService.makeactive("Draw");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		$scope.r1 = // JavaScript Document
      [{
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"

      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"

      }, {
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"

      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"

      }, {
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"


      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"


      }, {
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"

      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"


      }];

		$scope.r1 = _.chunk($scope.r1, 2);

		$scope.r2 = // JavaScript Document
      [{
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"

      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"

      }, {
				"name": "Viraj Kale",
				"school": "Dhirubhai Ambani International School"

      }, {
				"name": "Rizwan Mirza",
				"school": "Bombay British School"

      }];

	})
	.controller('StudentprofileCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, $filter) {
		$scope.template = TemplateService.changecontent("studentprofile");
		$scope.menutitle = NavigationService.makeactive("Studentprofile");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.checkmenu = false;
		$scope.result = [];
		$scope.sportsId = 0;
		$scope.pagenum = 1;
		$scope.allresult = [];
		$scope.msg = "Loading";
		$scope.showLoadmore = true;
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
				disableAnimation: true,
				template: './views/directive/zoomimage.html',
				scope: $scope

			});
		};

		$scope.makeactive = function (game) {

			if (!game.grey) {
				_.each($scope.games, function (n) {
					n.active = false;
				});
				game.active = true;
				$scope.tab = game.game;
				$scope.result = [];
				$scope.allresult = [];
				$scope.selectedGame = game;
				$scope.sportsId = game.id;
				$scope.pagenum = 1;
				$scope.loadStudents();
			}

		};


		NavigationService.getstudentprofile($stateParams.id, function (data) {
			_.each(data.sportsparticipated, function (n, key1) {
				_.each($scope.games, function (m, key2) {
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
			_.each(data.sportsparticipated, function (n, key) {
				console.log(n);
				if (key == 0) {
					$scope.sportsnames = n.name;
				} else {
					$scope.sportsnames = $scope.sportsnames + ", " + n.name;
				}

			});
			_.each(data.sportname, function (n, key) {
				//lodash
				//console.log(n);
				//console.log(n.name + ', ' + key);
				//console.log(n.id + ', ' + key);
				//console.log(n.icon + ', ' + key);
			});
		});

		$scope.loadStudents = function () {
			NavigationService.getgallery($stateParams.id, $scope.sportsId, $scope.pagenum, function (data) {

				if (data.queryresult != '') {
					_.each(data.queryresult, function (n) {
						$scope.allresult.push(n);
					});
				} else {
					$scope.showLoadmore = false;
				}
				if ($scope.allresult == "") {
					$scope.msg = "No data";
				}

			});
		}


		$scope.loadMore = function () {
			$scope.pagenum = $scope.pagenum + 1;
			$scope.loadStudents();
		}

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

		$scope.tabchange1 = function (tab, a) {
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

		$scope.tabchange = function (tab, a) {
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
		$scope.checkthis = function () {};

		//		$scope.makeactive($scope.games[0]);
		ga('send', 'pageview', {
			'title': 'StudentProfile Page'
		});

	})
	.controller('SchoolprofileCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, $timeout, $filter) {
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
		$scope.getage = function () {

		}
		$scope.getage();
		$scope.makeactive = function (game) {
			if (!game.grey) {
				_.each($scope.games, function (n) {
					if(n.game != "all")
					n.active = false;
				});
				game.active = true;

				$scope.result = [];
				$scope.allresult = [];
				$scope.selectedGame = game;
				$scope.sportsId = game.id;
				console.log(game);
				$scope.pagenum = 1;
				//                NavigationService.getallagegroups(function (data) {
				//                    $scope.agegroups = data;
				//                    $scope.ageSelected = $scope.agegroups[0].id;
				if ($scope.tab2 == "squad") {
					if(game.game == "all"){
						$scope.sportsId=0;
						$scope.ageSelected=0;
						$scope.category=0;
						$scope.loadStudents();
					}
					$scope.loadSportStudent();
				} else if ($scope.tab2 == "gallerymain") {
					$scope.loadGallery();
				}
				//                });


				$scope.tab = game.game;
			}
		};
		NavigationService.getAllSports(function (data) {});
		$scope.school = {};
		var check = 0;

		$scope.loadMore = function () {
			$scope.pagenum = $scope.pagenum + 1;
			$scope.loadSportStudent();
		}
		$scope.loadMoreGallery = function () {
			$scope.pagenum = $scope.pagenum + 1;
			$scope.loadGallery();
		}
		$timeout(function () {
			if ($scope.result == "") {
				$scope.msg = "No data";
			}
		}, 4000);

		// Get school detail
		$scope.loadStudents = function () {
			NavigationService.getsport($stateParams.id, $scope.sportsId, $scope.ageSelected, $scope.category, function (data) {
				console.log(data);
				if (data != '') {
					$scope.allresult = data;
					$scope.msg = "";
					$scope.result = _.chunk($scope.allresult, parseInt($scope.allresult.length / 2));
					if ($scope.result[2]) {
						$scope.result[0].push($scope.result[2][0]);
					}
					console.log($scope.result);
				}
				if ($scope.allresult == "") {
					$scope.msg = "No data";
				}
			});
		}
		
		$scope.loadCategory = function(){
			NavigationService.getSportsCategory($stateParams.id, $scope.sportsId, $scope.ageSelected, function (data, status) {
						$scope.sportsCategory = data;
						if (data != '') {
							$scope.category = data[0].id;
							$scope.loadStudents();
						}
					});
		}

		$scope.loadSportStudent = function () {
			NavigationService.getAgeGroup($stateParams.id, $scope.sportsId, function (data, status) {
				$scope.agegroups = data;
				if (data[0]) {
					$scope.ageSelected = data[0].agegroup;
					$scope.loadCategory();
				}
			});
		}

		$scope.loadGallery = function () {
			NavigationService.getgalleryimage($stateParams.id, $scope.sportsId, $scope.pagenum, function (data) {
				if (data.queryresult != '') {
					_.each(data.queryresult, function (n) {
						$scope.allresult.push(n);
					});
				} else {
					$scope.showLoadmore = false;
				}
				if ($scope.allresult == "") {
					$scope.msg = "No data";
				}
			});
		}

		NavigationService.getschoolprofile($stateParams.id, function (data) {

			if (data.sportname != '') {
				_.each(data.sportname, function (n, key1) {
					_.each($scope.games, function (m, key2) {
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
			_.each(data.sportname, function (n, key) {
				$scope.sportid.push(n.id);
			});
			console.log($scope.sportid);
			//            NavigationService.filterGames($scope.sportid, function (data) {
			//                $scope.schoolSports = data;
			//            });

		});
		$scope.loadSportsCategory = function () {

		}

		$scope.games = // JavaScript Document
      [{
				"icon": "img/bluemenu/tabletennis.png",
				"icon2": "img/bluemenu/tabletennisor.png",
				"game": "all",
				"grey": true
      },{
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

		$scope.openModal = function (gal) {

			$scope.zoomposition = $scope.gallery.indexOf(gal);

			ngDialog.open({
				template: './views/directive/zoomimage.html',
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
		$scope.tab2 = "squad";
		//    tab change
		$scope.active = 'active';
		$scope.actives = '';
		$scope.activess = '';

		$scope.tabchange = function (tab, a) {
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

		$scope.tabchanges = function (age) {
			$scope.result = [];
			$scope.allresult = [];
			_.each($scope.agegroups, function (n) {
				n.line = "";
			})
			age.line = "col-class";
			$scope.ageSelected = age.agegroup;
			$scope.result = [];
			$scope.pagenum = 1;
			$scope.loadCategory();
		};
	
		$scope.categorychanges = function (category) {
			$scope.result = [];
			$scope.allresult = [];
			_.each($scope.agegroups, function (n) {
				n.line = "";
			})
			category.line = "col-class";
			$scope.category = category.id;
			$scope.result = [];
			$scope.pagenum = 1;
			$scope.loadStudents();
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


		$scope.demo = 111;
		$scope.checkthis = function () {};

		//		$scope.makeactive($scope.games[0]);
		ga('send', 'pageview', {
			'title': 'SchoolProfile Page'
		});

	})

.controller('SportsCtrl', function ($scope, TemplateService, NavigationService, $location) {

	$scope.goto = function (data) {
		$location.path(data);
	};

	$scope.template = TemplateService.changecontent("sports");
	$scope.menutitle = NavigationService.makeactive("Sports");
	TemplateService.title = $scope.menutitle;
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
	$scope.checkthis = function () {};

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
			"url": "badminton",
			"game": "badminton"
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
    }];

	$scope.demo = 111;
	$scope.checkthis = function () {};

	$scope.makeactive = function (game) {
		_.each($scope.games, function (n) {
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
		$scope.result = [{
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "Rizwan won",
				point1: "4-6",
				point2: "5-6",
				point3: "1-6",
				play: true
			}
    }, {
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "to be played",
				point1: "",
				point2: "",
				point3: "",
				play: false
			}
    }, {
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "to be played",
				point1: "",
				point2: "",
				point3: "",
				play: false
			}
    }, {
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "to be played",
				point1: "",
				point2: "",
				point3: "",
				play: false
			}
    }, {
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "to be played",
				point1: "",
				point2: "",
				point3: "",
				play: false
			}
    }, {
			player1: {
				name: "Viraj Kale",
				school: "Dhirubhai Ambani International School"
			},
			player2: {
				name: "Rizwan Mirza",
				school: "Bombay British School"
			},
			time: {
				time: "10:15 AM",
				day: "25",
				month: "DEC",
				nd: "nd",
				year: "2015"
			},
			result: {
				status: "to be played",
				point1: "",
				point2: "",
				point3: "",
				play: false
			}
    }];


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
		$scope.checkthis = function () {};

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
		ga('send', 'pageview', {
			'title': 'Schedule Page'
		});
	})
	.controller('headerctrl', function ($scope, TemplateService) {
		$scope.template = TemplateService;
		$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			$(window).scrollTop(0);
		});
	})
	.controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout) {

		$scope.newsletter = {
			show: true,
		};

		function closeNewsletter() {
			$scope.newsletter.show = false;
		}

		$scope.validEmail = function (email) {
			if (email) {
				$scope.newsletter.emaildis = "";
			} else {
				$scope.newsletter.emaildis = "error-red";
			}
		};
		$scope.savenewsletter = function (email) {
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