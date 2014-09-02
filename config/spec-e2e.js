exports.config = {
  chromeOnly: true,
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  specs: [
    '../spec-e2e/**/*spec.{js,coffee}'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8000',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
