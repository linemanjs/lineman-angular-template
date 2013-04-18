window.app.controller('LoginController', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLoginSuccess = function(response) {
    alert(response.message);
    $location.path('/home');
  };

  var onLogoutSuccess = function(response) {
    alert(response.message);
    $location.path('/login');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
