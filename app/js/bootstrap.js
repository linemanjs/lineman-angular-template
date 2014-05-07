(function() {

  var $injector = angular.injector(['ng']);

  $injector.invoke(function($http, $rootScope) {
    // this works!
    $rootScope.$apply(function() {
      $http.get("/auth/csrf_token").then(function(response) {
        angular.module("app").constant("CSRF_TOKEN", response.data.csrf_token);
        angular.bootstrap(document, ['app']);
      });
    });
  });

})();
