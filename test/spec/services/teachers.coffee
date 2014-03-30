'use strict'

describe 'Service: Teachers', () ->

  # load the service's module
  beforeEach module 'ericruisApp'

  # instantiate service
  Teachers = {}
  beforeEach inject (_Teachers_) ->
    Teachers = _Teachers_

  it 'should do something', () ->
    expect(!!Teachers).toBe true
