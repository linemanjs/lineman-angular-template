app = angular.module 'app'

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  $locationProvider.html5Mode(true)

  $stateProvider.state 'login',
    url: '/login'
    templateUrl: 'login.html'
    controller: 'LoginController'

  $stateProvider.state 'home',
    url: '/home'
    templateUrl: 'home.html'
    controller: 'HomeController'

  $stateProvider.state 'list-of-books',
    url: '/list-of-books'
    templateUrl: 'books.html'
    controller: 'BooksController'
    # uncomment if you want to see an example of a route that resolves a request prior to rendering
    # resolve:
    #   books : (BookService) ->
    #     BookService.get()

  $urlRouterProvider.otherwise '/login'
