app = angular.module 'app'

app.classy.controller

  name: 'LoginController'
  inject: ['$scope', '$location', 'AuthenticationService']

  init: ->
    @$.credentials =
      username: ""
      password: ""

  login: ->
    @AuthenticationService.login(@$.credentials).success(@_redirect)

  _redirect: ->
    @$location.path '/home'
