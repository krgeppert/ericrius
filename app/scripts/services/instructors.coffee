'use strict'

angular.module('ericruisApp')
  .factory 'instructors', ($q, Parse) ->
    User = Parse.Object.extend('User')
    query = new Parse.Query User
    query.exists('imageURL').equalTo('isTeacher', true).find().then (response)->
      deferred.resolve response
    deferred = $q.defer()
    deferred.promise
