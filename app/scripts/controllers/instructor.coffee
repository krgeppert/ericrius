'use strict'

angular.module('ericruisApp')
  .controller 'InstructorCtrl', ($q, $scope, $sce, Instructor, Teachers) ->
    scope = $scope
    $q.all([Instructor, Teachers]).then (response)->
      init response[0], response[1]

    init = (instructors, teachers)->
      instructorInfo = instructors[0]
      _.each ['name', 'coverPhotoUrl', 'teacherBio', 'firstName'], (attr)->
        scope[attr] = instructorInfo.get attr
      scope.videoUrl = $sce.trustAsResourceUrl embeddedVersion(instructorInfo.get 'videoUrl')
      scope.teachers = teachers

    embeddedVersion = (url)->
      if _(url).contains('youtube') and not _(url).contains('embed')
        url.replace 'watch?v=', 'embed/'
      else url
