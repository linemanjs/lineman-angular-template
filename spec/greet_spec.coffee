describe "greet", ->

  Given ->
    module 'some', ($provide) =>
      @provide = $provide
      null

    inject ($injector) =>
      @injector = $injector

  describe "name bob", ->
    Given ->
      @provide.value('name', 'Bob')

    Then ->
      expect(@injector.get('greet')()).toBe('Hi Bob!')

  describe "name biff", ->
    Given ->
      @provide.value('name', 'Biff')

    Then ->
      expect(@injector.get('greet')()).toBe('Hi Biff!')






















