'use strict'

describe 'Service: Instructor', () ->

  # load the service's module
  beforeEach module 'ericruisApp'

  # instantiate service
  Instructor = {}
  beforeEach inject (_Instructor_) ->
    Instructor = _Instructor_

  it 'should do something', () ->
    expect(!!Instructor).toBe true
