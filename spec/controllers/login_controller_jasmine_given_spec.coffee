describe "controller: LoginController ($httpBackend.when().respond, jasmine-given, coffeescript)", ->

  Given -> module("app")

  Given inject ($controller, $rootScope, $location, AuthenticationService, @$httpBackend) ->
    @scope    = $rootScope.$new()
    @redirect = spyOn($location, 'path')
    $controller('LoginController', {$scope: @scope, $location, AuthenticationService})

  Invariant ->
    @$httpBackend.verifyNoOutstandingRequest()
    @$httpBackend.verifyNoOutstandingExpectation()

  describe "when a user successfully logs in", ->
    Given -> @$httpBackend.whenPOST('/login', @scope.credentials).respond(200)
    When  -> @scope.login()
    When  -> @$httpBackend.flush()
    Then "LoginController should redirect you to /home", ->
      expect(@redirect).toHaveBeenCalledWith('/home')
