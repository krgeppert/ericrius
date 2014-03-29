'use strict'

angular.module('ericruisApp')
  .directive 'three', () ->
    template: '<div id="canvas-container"></div>'
    restrict: 'E'
    replace: true
    link: (scope, element, attrs)->
      camera = new THREE.PerspectiveCamera 75, 1, 1, 100 
      camera.position.z = 500
      
      #SCENE
      scene = new THREE.Scene()

      #RENDERER
      renderer = new THREE.CSS3DRenderer()
      renderer.setSize window.innerWidth, window.innerHeight
      renderer.domElement.style.position = 'absolute';

      #CONTROLS
      controls = new THREE.TrackballControls camera, renderer.domElement
      controls.rotateSpeed = 0.5


      sprite = document.createElement 'img'
      sprite.src = 'images/yantra.png'

      sprite.addEventListener 'load', (event)->
        canvas = document.createElement 'canvas'
        canvas.width = sprite.width
        canvas.height = sprite.height

        context = canvas.getContext '2d'
        context.drawImage sprite, 0, 0

        object = new THREE.CSS3DSprite canvas

        scene.add object



      element.append renderer.domElement
      animate = =>
        requestAnimationFrame animate

        controls.update()
        renderer.render scene, camera
      animate()
