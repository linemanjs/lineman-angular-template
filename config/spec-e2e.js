exports.config = {
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar',
  seleniumArgs: [],
  specs: [
    '../spec-e2e/**/*spec.{js,coffee}'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8000',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
};
