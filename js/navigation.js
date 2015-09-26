var adminlink="http://wohlig.co.in/sfabackend/";
var admin_url = adminlink+"index.php/";
//var admin_url = "http://localhost/sfabackend/index.php/";
var imgpath = adminlink+"uploads/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        link: "#/home",
        subnav: []
    }, {
        name: "Features",
        active: "",
        link: "#/feature",
        classis: "active",
        subnav: []
    }, {
        name: "Infinite Scroll",
        active: "",
        link: "#/infinite",
        classis: "active",
        subnav: []
    }];

    return {
        getbannersliders: function(callback){
         return $http.get(admin_url + 'json/getbannersliders', {}).success(callback);
        }, 
        getsponsors: function(callback){
         return $http.get(admin_url + 'json/getsponsors', {}).success(callback);
        },   
           submitschoolregistration: function (school, callback) {
               console.log(school);
            return $http({
                url: admin_url + "json/registerschool",
                method: "POST",
                data: {
                    'name': school.name,
                    'address': school.address,
                    'establishdate': school.establishdate,
                    'contactperson': school.contactperson,
                    'type': school.type,
                    'email': school.email,
                    'mobile': school.mobile,
                    'landline': school.landline,
                    'sports': school.sports
                }
            }).success(callback);
        },
      
        getsportsname: function(callback){
         return $http.get(admin_url + 'json/getregistrationsports', {}).success(callback);
        },
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    }
});