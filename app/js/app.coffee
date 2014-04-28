app = angular.module 'app', ['classy', 'ngResource', 'ui.router']

app.run ($rootScope) ->
  # adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = (thing) ->
    console.log(thing)

  $rootScope.alert = (thing) ->
    alert(thing)
