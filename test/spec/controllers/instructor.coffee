'use strict'

describe 'Controller: InstructorCtrl', () ->

  # load the controller's module
  beforeEach module 'ericruisApp'

  InstructorCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    InstructorCtrl = $controller 'InstructorCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3
