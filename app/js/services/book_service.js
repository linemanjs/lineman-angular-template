angular.module("app").factory("BookService", function($q, $http) {

  var getBooks = function() {
    return $http.get('/list-of-books');
  };

  return { getBooks: getBooks };
});
