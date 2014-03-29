'use strict'

describe 'Service: Instructors', () ->

  # load the service's module
  beforeEach module 'ericruisApp'

  # instantiate service
  Instructors = {}
  beforeEach inject (_Instructors_) ->
    Instructors = _Instructors_

  it 'should do something', () ->
    expect(!!Instructors).toBe true
