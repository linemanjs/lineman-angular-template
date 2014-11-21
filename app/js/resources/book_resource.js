angular.module("app").factory("BookResource", function($q, $resource) {
  return $resource('/list-of-books');
});
