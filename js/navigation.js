var adminlink = "http://wohlig.co.in/sfabackend/";
//var adminlink = "http://localhost/sfabackend/";
var admin_url = adminlink + "index.php/";
var imgpath = adminlink + "uploads/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
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
        getbannersliders: function (callback) {
            return $http.get(admin_url + 'json/getbannersliders', {}).success(callback);
        },
        getschoolnames: function (callback) {
            return $http.get(admin_url + 'json/getschoolnames', {}).success(callback);
        },
        getsponsors: function (callback) {
            return $http.get(admin_url + 'json/getsponsors', {}).success(callback);
        },
        getschoolprofile: function (id, callback) {
            return $http.get(admin_url + 'json/getschoolprofile?id=' + id, {}).success(callback);
        },
        filterGames: function (games, callback) {
            return $http.get(admin_url + 'json/filtergames?games=' + games, {}).success(callback);
        },
        getstudentprofile: function (id, callback) {
            return $http.get(admin_url + 'json/getstudentprofile?id=' + id, {}).success(callback);
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
        createEnquiries: function (enquire, callback) {
            return $http.get(admin_url + 'json/createEnquiries?name=' + enquire.name + '&email=' + enquire.email + '&mobile=' + enquire.mobile + '&person=' + enquire.person, {}).success(callback);
        },
        getsport: function (id, sportid, ageid, pagenum, callback) {
            return $http.get(admin_url + 'json/getSchoolSports?id=' + id + '&sport=' + sportid + '&agegroup=' + ageid + '&pageno=' + pagenum + '&maxrow=10', {}).success(callback);
        },
        getgallery: function (id, sportid, pagenum, callback) {
            return $http.get(admin_url + 'json/getgalleryimageforstudentprofile?id=' + id + '&sport=' + sportid + '&pageno=' + pagenum + '&maxrow=10', {}).success(callback);
        },
        getgalleryimage: function (id, sportid, pagenum, callback) {
            return $http.get(admin_url + 'json/getgalleryimage?id=' + id + '&sport=' + sportid + '&pageno=' + pagenum + '&maxrow=10', {}).success(callback);
        },
        getAllSports: function (callback) {
            return $http.get(admin_url + 'json/getAllSports').success(callback);
        },
        getsportsname: function (callback) {
            return $http.get(admin_url + 'json/getregistrationsports', {}).success(callback);
        },
        getallagegroups: function (callback) {
            return $http.get(admin_url + 'json/getallagegroups', {}).success(callback);
        },
        getnav: function () {
            return navigation;
        },
        savenewsletter: function (email, callback) {
            return $http.get("http://wohlig.co.in/sfabackend/index.php/json/getnewsletter?email=" + email).success(callback);
        },
        makeactive: function (menuname) {
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