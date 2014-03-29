'use strict'

describe 'Controller: KyleCtrl', () ->

  # load the controller's module
  beforeEach module 'ericruisApp'

  KyleCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    KyleCtrl = $controller 'KyleCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
