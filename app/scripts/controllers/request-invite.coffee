'use strict'

angular.module('ericruisApp')
.controller 'RequestInviteCtrl', ($scope, $modal) ->
  $scope.open = ->
    modalInstance = $modal.open
      template: 'request.html'


      
