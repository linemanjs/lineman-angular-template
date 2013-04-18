window.app = _(angular.module("app", [])).tap(function(app) {
  // adds some basic utilities to the $rootScope for debugging purposes
  app.run(function($rootScope) {
    $rootScope.log = function(thing) {
      console.log(thing);
    };

    $rootScope.alert = function(thing) {
      alert(thing);
    };
  });
});
