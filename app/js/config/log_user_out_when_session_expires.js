angular.module("app").config(function($httpProvider) {

  var logsOutUserOn401 = function($location, $q, SessionService, FlashService) {
    return {
      responseError: function(rejection) {
        if(rejection.status === 401) {
          SessionService.unset('authenticated');
          $location.path('/login');
          FlashService.show(rejection.data.flash);
          return $q.reject(rejection);
        } else {
          return rejection;
        }
      }
    };
  };

  $httpProvider.interceptors.push(logsOutUserOn401);

});
