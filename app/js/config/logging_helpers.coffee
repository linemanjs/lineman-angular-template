app = angular.module 'app'

app.run ($rootScope) ->
  # adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = (thing) ->
    console.log(thing)

  $rootScope.alert = (thing) ->
    alert(thing)
