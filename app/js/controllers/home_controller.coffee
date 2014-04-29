app = angular.module 'app'

app.classy.controller

  name: 'HomeController'
  inject: ['$scope', '$location', 'AuthenticationService']

  init: ->
    @$.title = 'Home'
    @$.message = "Mouse over these images to see a directive at work"

  logout: ->
    @AuthenticationService.logout().success(@_redirect)

  _redirect: ->
    @$location.path '/login'
