describe "directive: showsMessageWhenHovered", ->

  html = scope = elem = directiveMessage = originalMessage = null

  Given -> module("app")

  Given inject ($rootScope, $compile) ->
    directiveMessage = 'ralph was here'
    html = "<div shows-message-when-hovered message='#{directiveMessage}'></div>"
    scope = $rootScope.$new()
    scope.message = originalMessage = 'things are looking grim'
    elem = $compile(html)(scope)

  describe "mouseenter shows the message from the markup", ->
    When -> elem.triggerHandler('mouseenter')
    Then -> scope.message == directiveMessage

  describe "mouseleave shows the original message from the scope", ->
    When -> elem.triggerHandler('mouseleave')
    Then -> scope.message == originalMessage


