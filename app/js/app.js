angular.module("app", ["ngRoute", "some", "other"]);

angular.module("some", []).factory('greet', function(name) {
  return function() {
    return 'Hi ' + name + '!';
  };
});

angular.module("other", []).value('name', 'example');






















