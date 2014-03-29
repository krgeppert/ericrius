'use strict'

angular.module('ericruisApp')
  .directive('three', () ->
    template: '<div></div>'
    restrict: 'E'
    link: (scope, element, attrs) ->
      element.text 'this is the three directive'
  )
