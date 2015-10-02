<!DOCTYPE html><html lang="en" ng-app="firstapp"><head ng-controller="headerctrl"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content=""><meta name="author" content=""><title ng-bind="'SFA - '+template.title">SFA</title><link rel="shortcut icon" href="img/favicon.ico"><link rel="stylesheet" type="text/css" href="p/w.min.css"><script src="p/w.min.js"></script><!--[if IE]><script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script><![endif]--></head><body><div class="repeated-item" ui-view></div><script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=1589474464632854";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script></body></html>