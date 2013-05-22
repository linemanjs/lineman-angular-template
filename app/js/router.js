angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'angular/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'angular/home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
