'use strict'

angular.module('ericruisApp')
  .controller 'MainCtrl', ($scope, instructors) ->
    instructors.then (response)->
      instructors = response
      $scope.instructors= instructors
