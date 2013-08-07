describe "controller: ExamplesController", ->

  Given -> @subject = new BatmanApp.ExamplesController

  describe "routingKey", ->
    Then -> @subject.routingKey is 'examples'

  describe "#index", ->
    Then -> @subject.index instanceof Function
