angular.module("app").controller("BooksController", function ($scope, BookService) {
  $scope.books = BookService.getBooks();
});
