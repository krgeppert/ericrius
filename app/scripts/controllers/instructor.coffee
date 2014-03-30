'use strict'

angular.module('ericruisApp')
  .controller 'InstructorCtrl', ($scope, $sce, Instructor) ->
    scope = $scope
    Instructor.then (response)->
      init response[0]

    init = (teacherInfo)->
      _.each ['name', 'coverPhotoUrl', 'teacherBio'], (attr)->
        scope[attr] = teacherInfo.get attr
      scope.videoUrl = $sce.trustAsResourceUrl embeddedVersion(teacherInfo.get 'videoUrl')

    embeddedVersion = (url)->
      if _(url).contains('youtube') and not _(url).contains('embed')
        url.replace 'watch?v=', 'embed/'
      else url
