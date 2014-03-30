'use strict'

angular.module('ericruisApp')
  .service 'Teachers', ($q, Parse, Instructor) ->
    Instructor.then (response)->
      instructor = response[0]
      SFLineage = Parse.Object.extend "SFLineage"
      query = new Parse.Query SFLineage
      query.equalTo('student', instructor).find().then (relations)->
        teachers = []
        _.each relations, (relation)->
          relation.get('teacher').fetch().then (teacher)->
            teachers.push teacher
            if teachers.length is relations.length then deferred.resolve teachers

    deferred = $q.defer()
    deferred.promise
