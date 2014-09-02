require 'jasmine-given'

describe "my angular app", ->
  describe "visiting the login page", ->
    Given -> browser.get "/"

    describe "when a user logs in", ->
      Given -> element(By.model("credentials.username")).sendKeys "Ralph"
      Given -> element(By.model("credentials.password")).sendKeys "Wiggum"
      When  -> element(By.id("log-in")).click()
      Then  -> expect(element(By.binding("message")).getText()).toEqual("Mouse Over these images to see a directive at work")




