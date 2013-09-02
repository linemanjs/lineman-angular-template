protractor = require("protractor")
require "protractor/jasminewd"

describe "my angular app", ->
  ptor = undefined
  describe "visiting the login page", ->
    ptor = protractor.getInstance()
    beforeEach ->
      ptor.get "/"

    describe "when a user logs in", ->
      it "should redirect me to the home page and I should see a message", ->
        ptor.findElement(protractor.By.input("credentials.username")).sendKeys "Ralph"
        ptor.findElement(protractor.By.input("credentials.password")).sendKeys "Wiggum"
        ptor.findElement(protractor.By.id("log-in")).click()
        message = ptor.findElement(protractor.By.binding("{{ message }}")).getText().then (text) ->
          expect(text).toEqual "Mouse Over these images to see a directive at work"




