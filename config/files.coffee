module.exports = (lineman) ->
  js:
    vendor: [
      "vendor/bower/angular/angular.js"
      "vendor/bower/angular-resource/angular-resource.js"
      "vendor/bower/angular-ui-router/release/angular-ui-router.js"
      "vendor/bower/angular-classy/angular-classy.js"
      "vendor/bower/underscore/underscore.js"
      "vendor/js/**/*.js"
    ]

    app: [
      "app/js/app.js"
      "app/js/**/*.js"
    ]

  css:
    vendor: [
      "vendor/bower/normalize-css/normalize.css"
      "vendor/bower/foundation/css/foundation.css"
      "vendor/css/**/*.css"
    ]
