angular.module("app").factory("BookService", function($http) {

  var getBooks = function() {
    return $http.get('/books');
  };

  return { getBooks: getBooks };
});
