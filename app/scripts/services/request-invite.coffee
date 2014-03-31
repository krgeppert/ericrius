'use strict'
angular.module('ericruisApp')
  .factory 'requestInviteModal', (btfModal) ->
    btfModal
      controller: 'RequestInviteCtrl'
      controllerAs: 'modal'
      templateUrl: '/views/request.html'
  
  .controller 'RequestInviteCtrl', ($scope, requestInviteModal)->
    $scope.closeMe = requestInviteModal.deactivate
  
  .controller 'NavCtrl', ($scope, requestInviteModal)->
    #Why do we need to do this on scope?
    $scope.showModal = requestInviteModal.activate
