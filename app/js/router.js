angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'angular/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'angular/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/books', {
    templateUrl: 'angular/books.html',
    controller: 'BooksController'
    // resolve: {
    //   books : function(BookService) {
    //     return BookService.get();
    //   }
    // }
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
