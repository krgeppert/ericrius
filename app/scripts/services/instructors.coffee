'use strict'

angular.module('ericruisApp')
  .factory 'instructors', ($q, parse) ->
    User = parse.Object.extend('User')
    query = new parse.Query User
    query.exists('imageURL').equalTo('isTeacher', true).find().then (response)->
      deferred.resolve response
    deferred = $q.defer()
    deferred.promise
