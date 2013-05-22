angular.module("app").factory('AuthenticationService', function($http) {
  // these routes are configured in config/server.js
  return {
    login: function(credentials) {
      return $http.post('/login', credentials);
    },
    logout: function() {
      return $http.post('/logout');
    }
  };
});
