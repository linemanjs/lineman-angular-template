angular.module("app").controller('LoginController', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLoginSuccess = function(response) {
    $location.path('/home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
