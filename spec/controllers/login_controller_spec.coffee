describe "controller: LoginController ($httpBackend.expect().respond, vanilla jasmine, coffeescript)", ->

  beforeEach -> module("app")

  beforeEach inject ($controller, $rootScope, @$location, AuthenticationService, @$httpBackend) ->
    @scope    = $rootScope.$new()
    @redirect = spyOn($location, 'path')
    $controller('LoginController', {$scope: @scope, $location, AuthenticationService})

  afterEach ->
    @$httpBackend.verifyNoOutstandingRequest()
    @$httpBackend.verifyNoOutstandingExpectation()

  describe "successfully logging in", ->
    it "should redirect you to /home", ->
      @$httpBackend.expectPOST('/login', @scope.credentials).respond(200)
      @scope.login()
      @$httpBackend.flush()
      expect(@redirect).toHaveBeenCalledWith('/home')
