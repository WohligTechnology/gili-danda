angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.myInterval = 3000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'img/slider/slide1.jpg',
           
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



})

.controller('MediaCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

   
})

.controller('SportsCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("sports");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

   
})
.controller('ScheduleCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("schedule");
    $scope.menutitle = NavigationService.makeactive("Schedule");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.oneAtATime = true;
    $scope.oneAtATimes = true;
    
      $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
   
     $scope.jqueryScrollbarOptions = {
        "onScroll":function(y, x){
            if(y.scroll == y.maxScroll){
                alert('Scrolled to bottom');
            }
        }
    };
})
.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

;