'use strict'

describe 'Controller: RequestCtrl', () ->

  # load the controller's module
  beforeEach module 'ericruisApp'

  RequestCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    RequestCtrl = $controller 'RequestCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
