angular.module("app").factory "BookResource", ($q, $resource) ->
  $resource "/books"

