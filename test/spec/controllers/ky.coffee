'use strict'

describe 'Controller: KyCtrl', () ->

  # load the controller's module
  beforeEach module 'ericruisApp'

  KyCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    KyCtrl = $controller 'KyCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
