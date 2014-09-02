describe('my angular app', function () {

  var bookRows;

  describe('visiting the books page', function () {
    beforeEach(function () {
      browser.get('/$resource/list-of-books');
      bookRows = element.all(by.repeater('book in books'));
    });

    it('should show me a list of books', function() {
      expect(bookRows.count()).toEqual(3);
      expect(bookRows.get(0).getText()).toEqual('Great Expectations by Dickens');
      expect(bookRows.get(1).getText()).toEqual('Foundation Series by Asimov');
      expect(bookRows.get(2).getText()).toEqual('Treasure Island by Stephenson');
    });
  });
});
