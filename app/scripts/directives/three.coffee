'use strict'

angular.module('ericruisApp')
  .directive 'three', ($parse, $location, $rootScope) ->
    template: '<div id="canvas-container"></div>'
    restrict: 'E'
    replace: true
    scope: 
      data: '='
    link: (scope, element, attrs)->
      #VARS
      totalNodes = 30
      radius = totalNodes * 15
      nodes = []
      positions = []
      startingDuration = 500;
      pulseSpeed = .0007
      breathing = []
      instructorInsertionIndex = 0
      insertionJump = null
      instructors = null
      isDragging = false

      scope.$watch 'data', (newValue)->
        if newValue?
          instructors = newValue
          insertionJump = Math.floor(totalNodes / instructors.length)
          addInstructorNodes(newValue)


      camera = new THREE.PerspectiveCamera 75, 1, 1, 100 
      camera.position.z = 1200
      
      #SCENE
      scene = new THREE.Scene()

      #RENDERER
      renderer = new THREE.CSS3DRenderer()
      renderer.setSize element.width(), element.width()
      # renderer.domElement.style.position = 'absolute';
      element.append renderer.domElement


      #CONTROLS
      controls = new THREE.TrackballControls camera, renderer.domElement
      controls.rotateSpeed = 0.5


      sprite = document.createElement 'img'
      sprite.src = 'images/test.png'

      sprite.addEventListener 'load', (event)->

        for i in [0...totalNodes]
          makeNode(sprite)
        spherify()
        breathe()

      makeNode = (sprite, onclick, debug)->
        canvas = document.createElement 'canvas'

        size = Math.min sprite.height, sprite.width
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

      addInstructorNodes = (instructors)->
        _.each instructors, (instructor)->
          sprite = document.createElement 'img'
          sprite.src = instructor.get('imageURL')
          sprite.addEventListener 'load', onload(sprite, instructor)


      onload = (sprite, instructor)->
        return ()->
          node = nodes[instructorInsertionIndex]
          canvas = node.element
          instructorInsertionIndex+=insertionJump
          canvas.width = 240
          canvas.height = 240
          context = canvas.getContext('2d');
          context.drawImage(sprite, 0, 0);

          nameLabel = instructor.get('firstName') + ' ' + instructor.get('lastName')
          element = document.createElement 'h2'
          $(element).text(nameLabel)
          nameNode = new THREE.CSS3DSprite( element );
          #Keep a reference to nameNode so we can place it
          node.nameNode = nameNode
          nameNode.position.y -= 150
          node.add nameNode


 

          $(canvas).on 'mousedown', ()->
            $(canvas).on 'mousemove', ()->
              isDragging = true
              console.log 'hm'
              $(canvas).unbind('mousemove')
          $(canvas).on 'mouseup', ()->
            wasDragging = isDragging
            isDragging = false
            $(canvas).unbind('mousemove')
            if !wasDragging
              $rootScope.$apply ->
                $location.path '/instructor/' + instructor.id
      
      window.onresize = ->
        console.log 'resize'
        camera.aspect = 1
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

      spherify = ->
        j = 0
        i = 0
        for node in nodes
          
          new TWEEN.Tween(node.position).to(
            x: positions[j]
            y: positions[j+1]
            z: positions[j+2]
          , Math.random() * startingDuration + startingDuration)
          # .onComplete(
          #   do (node)->
          #     console.log 'da'
          #     ->
          #       if node.nameNode?
          #         node.nameNode.position.y -= 25
          #         node.add node.nameNode
          # )
          .start()
            
          j+=3
          i++


      breathe = ->
        for node in nodes
          new TWEEN.Tween(node.scale).to(
            x: 1.1
            y: 1.1
            z: 1.1
          , 4000)
          .repeat(Infinity)
          .delay(2000)
          .yoyo(true)
          .start()



      animate = =>

        requestAnimationFrame animate

        controls.update()
        TWEEN.update();
        time = Date.now()
        #: 4 seconds inhale, 2 seconds pause, 4 seconds exhale, 2 seconds pause
        renderer.render scene, camera
      animate()
