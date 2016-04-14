 var adminlink = "http://wohlig.co.in/sfabackend/";
 var admin_url = adminlink + "index.php/";
 var imgpath = adminlink + "uploads/";
 var navigationservice = angular.module('navigationservice', [])

 .factory('NavigationService', function($http) {
     var navigation = [{
         name: "Home",
         classis: "active",
         link: "home",
         subnav: []
     }, {
         name: "Features",
         active: "",
         link: "feature",
         classis: "active",
         subnav: []
     }, {
         name: "Infinite Scroll",
         active: "",
         link: "infinite",
         classis: "active",
         subnav: []
     }];

     return {
         getbannersliders: function(callback) {
             return $http.get(admin_url + 'json/getbannersliders', {}).success(callback);
         },
         getschoolnames: function(callback) {
             return $http.get(admin_url + 'json/getschoolnames', {}).success(callback);
         },
         getsponsors: function(callback) {
             return $http.get(admin_url + 'json/getsponsors', {}).success(callback);
         },
         isStudentSports: function(callback) {
             return $http.get(admin_url + 'json/isStudentSports', {}).success(callback);
         },
         getschoolprofile: function(id, callback) {
             return $http.get(admin_url + 'json/getschoolprofile?id=' + id, {}).success(callback);
         },
         filterGames: function(games, callback) {
             return $http.get(admin_url + 'json/filtergames?games=' + games, {}).success(callback);
         },
         getstudentprofile: function(id, callback) {
             return $http.get(admin_url + 'json/getstudentprofile?id=' + id, {}).success(callback);
         },
         submitschoolregistration: function(school, callback) {
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
         createEnquiries: function(enquire, callback) {
             return $http.get(admin_url + 'json/createEnquiries?name=' + enquire.name + '&email=' + enquire.email + '&mobile=' + enquire.mobile + '&person=' + enquire.person, {}).success(callback);
         },
         getsport: function(id, sportid, ageid, category, callback) {
             return $http.get(admin_url + 'json/getSchoolSports?id=' + id + '&sport=' + sportid + '&agegroup=' + ageid + '&category=' + category, {}).success(callback);
         },
         getgallery: function(id, sportid, pagenum, callback) {
             return $http.get(admin_url + 'json/getgalleryimageforstudentprofile?id=' + id + '&sport=' + sportid + '&pageno=' + pagenum + '&maxrow=100', {}).success(callback);
         },
         getschoolgallery: function(id, sportid, pagenum, callback) {
             return $http.get(admin_url + 'json/getschoolgallery?id=' + id + '&sport=' + sportid + '&pageno=' + pagenum + '&maxrow=100', {}).success(callback);
         },
         getschoolgallerynew: function(obj, callback) {
             return $http.get(admin_url + 'json/getschoolgallery?schoolid=' + obj.schoolid + '&sportid=' + obj.sportid + '&studentid=' + obj.studentid + '&year=' + obj.year + '&agegroup=' + obj.agegroup + '&sportscategory=' + obj.sportscategory + '&pageno=' + obj.pagenum + '&maxrow=100', {}).success(callback);
         },
         getAgeGroup: function(id, sportid, callback) {
             return $http.get(admin_url + 'json/getAgeGroup?id=' + id + '&sport=' + sportid, {}).success(callback);
         },
         getgalleryimage: function(id, sportid, pagenum, callback) {
             return $http.get(admin_url + 'json/getgalleryimage?id=' + id + '&sport=' + sportid + '&pageno=' + pagenum + '&maxrow=100', {}).success(callback);
         },
         getschedule: function(filter, callback) {
             return $http.get(admin_url + 'json/getschedule?sport=' + filter.sport + '&sportscategory=' + filter.category + '&agegroup=' + filter.agegroup + '&gender=' + filter.gender, {}).success(callback);
         },
         getDraw: function(filter, callback) {
             return $http.get(admin_url + 'json/getDraw?sport=' + filter.sport + '&sportscategory=' + filter.category + '&agegroup=' + filter.agegroup + '&gender=' + filter.gender, {}).success(callback);
         },
         getScore: function(filter, callback) {
             return $http.get(admin_url + 'json/getScore?sport=' + filter.sport + '&sportscategory=' + filter.category + '&agegroup=' + filter.agegroupid + '&gender=' + filter.gender, {}).success(callback);
         },
         getAllSwimmingMatch: function(filter, callback) {
             return $http.get(admin_url + 'json/getAllSwimmingMatch?sport=' + filter.sport + '&sportscategory=' + filter.category + '&agegroup=' + filter.agegroup + '&gender=' + filter.gender, {}).success(callback);
         },
         getSportsCategory: function(id, sportid, agegroup, callback) {
             return $http.get(admin_url + 'json/getSportsCategory?id=' + id + '&sport=' + sportid + '&agegroup=' + agegroup, {}).success(callback);
         },
         scheduleAgeGroup: function(category, sport, gender, callback) {
             return $http.get(admin_url + 'json/scheduleAgeGroup?category=' + category + '&sport=' + sport + '&gender=' + gender, {}).success(callback);
         },
         getAllSports: function(callback) {
             return $http.get(admin_url + 'json/getAllSports').success(callback);
         },
         getsportsname: function(callback) {
             return $http.get(admin_url + 'json/getregistrationsports', {}).success(callback);
         },
         getallagegroups: function(callback) {
             return $http.get(admin_url + 'json/getallagegroups', {}).success(callback);
         },
         studentSearchById: function(studentId, callback) {
             return $http.get(admin_url + 'json/studentSearchById?id=' + studentId.search + '&pageno=' + studentId.pageno, {}).success(callback);
         },
         studentSearchByName: function(name, callback) {
             return $http.get(admin_url + 'json/studentSearchByName?studentname=' + name.student + '&pageno=' + name.pageno + '&school=' + name.school, {}).success(callback);
         },
         getStats: function(obj, callback) {
             return $http.get(admin_url + 'json/getStatistics?schoolid=' + obj.schoolid + '&studentid=' + obj.studentid + '&sportscategory=' + obj.sportscategory + "&gender=" + obj.gender + "&agegroup=" + obj.agegroup, {}).success(callback);
         },
         getSchoolStudents: function(obj, callback) {
             return $http.get(admin_url + 'json/getSchoolSports?id=' + obj.school + '&sport=' + obj.sport + '&agegroup=' + obj.agegroup + '&gender=' + obj.gender, {}).success(callback);
         },
         getnav: function() {
             return navigation;
         },
         savenewsletter: function(email, callback) {
             return $http.get("http://wohlig.co.in/sfabackend/index.php/json/getnewsletter?email=" + email).success(callback);
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

     };
 });
