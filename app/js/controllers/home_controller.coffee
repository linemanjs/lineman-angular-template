angular.module("app").controller "HomeController", ($scope, $location, AuthenticationService) ->
  $scope.title = "Home"
  $scope.message = "Mouse Over these images to see a directive at work"
  onLogoutSuccess = (response) ->
    $location.path "/login"

  $scope.logout = ->
    AuthenticationService.logout().success onLogoutSuccess

