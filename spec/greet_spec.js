    describe("greet", function() {

      var provide = injector = greet = undefined;

      beforeEach(function() {
        module('app', function($provide) {
          provide = $provide;
        });
        inject(function($injector) {
          injector = $injector;
        });
        greet = function() {
          return injector.get('greet')();
        };
      });

      describe("#greet", function() {
        it("says Hi Bob", function() {
          var greet = injector.get('greet');
          provide.value('name', 'Bob');
          expect(greet()).toBe('Hi Bob!');

          provide.value('name', 'Dave');
          expect(greet()).toBe('Hi Dave!');
        });

        it("says Hi Biff", function() {
          provide.value('name', 'Biff');
          expect(greet()).toBe('Hi Biff!');
        });
      });

    });
