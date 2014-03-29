'use strict'

describe 'Directive: three', () ->

  # load the directive's module
  beforeEach module 'ericruisApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<three></three>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the three directive'
