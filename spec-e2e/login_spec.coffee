# 'by' is a reserved word in coffeescript
pby = global.by

describe "my angular app", ->
  describe "visiting the login page", ->
    it "shows a message", ->
      browser.get "/"
      element(pby.input("credentials.username")).sendKeys "Ralph"
      element(pby.input("credentials.password")).sendKeys "Wiggum"
      element(pby.id("log-in")).click()
      expect(element(pby.binding("{{ message }}")).getText()).toEqual "Mouse Over these images to see a directive at work"
