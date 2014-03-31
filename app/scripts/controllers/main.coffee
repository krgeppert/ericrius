'use strict'

angular.module('ericruisApp')
  .controller 'MainCtrl', ($scope, $rootScope, instructors) ->
    $rootScope.$on '$locationChangeStart', ()->
      console.log 'yaaa'
    instructors.then (response)->
      instructors = response
      $scope.instructors = instructors
