// with $resource
angular.module("app").controller("BooksResourceController", function ($scope, BookResource) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.books = BookResource.query();
});

// with $http
angular.module("app").controller("BooksHttpController", function ($scope, books) {
  $scope.books = books;
});
