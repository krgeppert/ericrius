'use strict'

angular.module('ericruisApp')
  .directive 'three', ($parse) ->
    template: '<div id="canvas-container"></div>'
    restrict: 'E'
    replace: true
    scope: 
      data: '='
    link: (scope, element, attrs)->
      scope.$watch 'data', (newValue)->
        if newValue?
          addNodes(newValue)
      totalNodes = 60
      radius = totalNodes * 15
      nodes = []
      positions = []
      startingDuration = 500;
      pulseSpeed = .0007
      breathing = true
      time = 0

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

        for i in [0...totalNodes]
          makeNode(sprite)

        spherify()
        breathe()

      element.append renderer.domElement

      makeNode = (sprite)->
        canvas = document.createElement 'canvas'
        size = Math.min sprite.width, sprite.height
        canvas.width = size
        canvas.height = size

        context = canvas.getContext '2d'
        context.drawImage sprite, 0, 0

        node = new THREE.CSS3DSprite canvas
        node.position.x = Math.random() * 4000 - 2000
        node.position.y = Math.random() * 4000 - 2000
        node.position.z = Math.random() * 4000 - 2000
        nodes.push node
        scene.add node

        #Set positions of sphere
        for i in [0...totalNodes]
          phi = Math.acos( -1 + ( 2 * i ) /totalNodes );
          theta = Math.sqrt(totalNodes * Math.PI ) * phi;
          positions.push(
            radius * Math.cos( theta ) * Math.sin( phi ),
            radius * Math.sin( theta ) * Math.sin( phi ),
            radius * Math.cos( phi )
          )

      addNodes = (instructors)->
        _.each instructors, (instructor)->
          sprite = document.createElement 'img'
          sprite.src = instructor.get('coverPhotoUrl')

          sprite.addEventListener 'load', onload(sprite)


      onload = (sprite)->
        return ()->
          makeNode(sprite)


      spherify = ->
        j = 0
        for node in nodes

          new TWEEN.Tween(node.position).to(
            x: positions[j]
            y: positions[j+1]
            z: positions[j+2]
          , Math.random() * startingDuration + startingDuration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start()
          j+=3

      breathe = ->
        setTimeout(()=>
          console.log 'breath'
          breathe()
          breathing = !breathing
        2000)

      animate = =>

        requestAnimationFrame animate

        controls.update()
        TWEEN.update();

        #: 4 seconds inhale, 2 seconds pause, 4 seconds exhale, 2 seconds pause
        if breathing
          time += 10
          for node in nodes
            scale = Math.sin((Math.floor(node.position.x) + time) * pulseSpeed) * 0.1 + 1.0
            node.scale.set scale, scale, scale
        renderer.render scene, camera
      animate()
