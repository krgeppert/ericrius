'use strict'
angular.module('ericruisApp')
  .factory 'requestInviteModal', (btfModal) ->
    btfModal
      controller: -> 
        @name = 'World'
      controllerAs: 'ctrl'
      template: '<div class="btf-modal">Hello {{ctrl.name}}</div>'
    
