app = angular.module 'app'

# with $resource
app.classy.controller

  name: 'BooksController'
  inject: ['$scope', 'BookResource']

  init: ->
    # because the stubbed endpoint returns an array of results, .query() is used
    # if the endpoint returned an object, you would use .get()
    @$.books = @BookResource.query()

# with $http
# app.classy.controller

#   name: 'BooksController'
#   inject: ['$scope', 'BookService']

#   init: ->
#     @$.books = @BookService.getBooks()
