describe("controller: LoginController ($httpBackend.expect().respond, vanilla jasmine, javascript)", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope, $location, AuthenticationService, $httpBackend) {
    this.$location = $location;
    this.$httpBackend = $httpBackend;
    this.scope = $rootScope.$new();
    this.redirect = spyOn($location, 'path');
    $controller('LoginController', {
      $scope: this.scope,
      $location: $location,
      AuthenticationService: AuthenticationService
    });
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  describe("successfully logging in", function() {
    it("should redirect you to /home", function() {
      this.$httpBackend.expectPOST('/login', this.scope.credentials).respond(200);
      this.scope.login();
      this.$httpBackend.flush();
      expect(this.redirect).toHaveBeenCalledWith('/home');
    });
  });
});
