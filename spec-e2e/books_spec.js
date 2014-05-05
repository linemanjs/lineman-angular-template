describe('my angular app', function () {
  describe('visiting the books page', function () {

    beforeEach(function () {
      browser.get('/list-of-books');
    });

    it('should show me a list of books', function() {
      var row1Text = element(by.repeater('book in books').row(0)).getText()
      expect(row1Text).toEqual('Great Expectations by Dickens');

      var row2Text = element(by.repeater('book in books').row(1)).getText()
      expect(row2Text).toEqual('Foundation Series by Asimov');

      var row3Text = element(by.repeater('book in books').row(2)).getText()
      expect(row3Text).toEqual('Treasure Island by Stephenson');
    });
  });
});
