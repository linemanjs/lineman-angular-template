angular.module("app", ["ngResource"]).run ($rootScope) ->

  # adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = (thing) ->
    console.log thing

  $rootScope.alert = (thing) ->
    alert thing

