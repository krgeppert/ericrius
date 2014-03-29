'use strict'

angular.module('ericruisApp')
  .directive 'three', () ->
    template: '<canvas id="sphere" width="1000px" height="1000px"></canvas>'
    restrict: 'E'
    replace: true
    controller: ->
      camera = new THREE.PerspectiveCamera 75, 1, 1, 100 
      scene = new THREE.Scene()
      renderer = new THREE.CSS3DRenderer $scope.element
      animate = =>
        requestAnimationFrame animate
        renderer.render scene, camera
    compile: ->
      pre : (scope, element, attrs)->
        scope.element = element
