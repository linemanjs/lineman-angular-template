app = angular.module 'app'

  # needed to get things to work in angular 1.2 which deprecated the implicit
  # unwrapping behaviour
  # https://github.com/angular/angular.js/commit/5dc35b527b3c99f6544b8cb52e93c6510d3ac577

app.config ($parseProvider) ->
  $parseProvider.unwrapPromises(true)
