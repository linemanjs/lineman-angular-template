var protractor = require('protractor');
require('protractor/jasminewd');

describe('my angular app', function () {
  var ptor;

  describe('visiting the login page', function () {
    ptor = protractor.getInstance();

    beforeEach(function () {
      ptor.get('/');
    });

    describe('when a user logs in', function() {
      it('should redirect me to the home page and I should see a message', function() {
        ptor.findElement(protractor.By.input('credentials.username')).sendKeys('Ralph');
        ptor.findElement(protractor.By.input('credentials.password')).sendKeys('Wiggum');

        ptor.findElement(protractor.By.id('log-in')).click()
        var message = ptor.findElement(protractor.By.binding('{{ message }}')).getText().then(function(text) {
          expect(text).toEqual('Mouse Over these images to see a directive at work');
        });
      });
    });
  });
});
