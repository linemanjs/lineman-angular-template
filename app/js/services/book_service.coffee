angular.module("app").factory "BookService", ($q, $http) ->
  getBooks = ->
    $http.get "/books"

  getBooks: getBooks

