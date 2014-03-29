'use strict'

describe 'Service: Parse', () ->

  # load the service's module
  beforeEach module 'ericruisApp'

  # instantiate service
  Parse = {}
  beforeEach inject (_Parse_) ->
    Parse = _Parse_

  it 'should do something', () ->
    expect(!!Parse).toBe true
