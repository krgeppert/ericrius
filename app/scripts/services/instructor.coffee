'use strict'

angular.module('ericruisApp')
  .service 'Instructor', ($q,$routeParams, Parse) ->
    instructorId = $routeParams.instructorId
    User = Parse.Object.extend('User')
    query = new Parse.Query(User)
    query.equalTo 'objectId', instructorId
    query.find().then (response)->
      deferred.resolve response
    deferred = $q.defer()
    return deferred.promise