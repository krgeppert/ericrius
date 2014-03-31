'use strict'

angular.module('ericruisApp')
  .directive 'three', ($parse, $location, $rootScope) ->
    restrict: 'AE'
    scope: false
    link: (scope, e, attrs)->
      unless _(attrs).has 'data'
        throw new Error 'directive "three" is missing data.'
      #VARS
      canvasContainer = $('[three]')
      totalNodes = 30
      isDragging = false
      wasDragging = false
      radius = totalNodes * 15
      nodes = []
      positions = []
      startingDuration = 500;
      pulseSpeed = .0007
      breathing = []
      instructorInsertionIndex = 0
      insertionJump = null
      instructors = null
      clickedCanvasUuid = null
      isDragging = false

      scope.$watch attrs.data, (newValue)->
        if newValue?
          instructors = newValue
          insertionJump = Math.floor totalNodes / instructors.length
          addInstructorNodes newValue


      camera = new THREE.PerspectiveCamera 75, 1, 1, 100 
      camera.position.z = 1200

      #SCENE
      scene = new THREE.Scene()

      #RENDERER
      $rootScope.renderer = $rootScope.renderer or new THREE.CSS3DRenderer()
      $rootScope.renderer.setSize 1000, 1000
      $rootScope.renderer.domElement.style.position = 'absolute';
      canvasContainer.append $rootScope.renderer.domElement
      

      #CONTROLS
      controls = new THREE.TrackballControls camera, $rootScope.renderer.domElement
      controls.rotateSpeed = 0.5


      #SPRITE
      sprite = document.createElement 'img'
      sprite.src = 'images/whiteSphereTransparent.png'

      sprite.addEventListener 'load', (event)->

        for i in [0...totalNodes]
          makeNode(sprite)
        scope.$watch 'data', (newValue)->
          console.log newValue
          if newValue?
            console.log 'aa'
            instructors = newValue
            insertionJump = Math.floor(totalNodes / instructors.length)
            addInstructorNodes(newValue)
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
          sprite.src = instructor.get('imageWithLabelUrl')
          sprite.addEventListener 'load', onload(sprite, instructor)


      onload = (sprite, instructor)->
        return ()->
          node = nodes[instructorInsertionIndex]
          canvas = node.element
          instructorInsertionIndex+=insertionJump
          canvas.width = sprite.width
          canvas.height = sprite.height
          $(canvas).data('uuid', node.uuid)
          context = canvas.getContext('2d');
          context.drawImage(sprite, 0, 0);

          # 
          # JORDY commenting out name label for now because we are now using teacher images which include the name label
          # 
          # nameLabel = instructor.get('firstName') + ' ' + instructor.get('lastName')
          # element = document.createElement 'h2'
          # $(element).text(nameLabel)
          # nameNode = new THREE.CSS3DSprite( element );
          # #Keep a reference to nameNode so we can place it
          # node.nameNode = nameNode
          # nameNode.position.y -= 150
          # node.add nameNode

          $(canvas).on 'mousedown', (event)->
            clickedCanvasUuid = $(canvas).data('uuid')
            $(canvas).on 'mousemove', ()->
              isDragging = true
              $(canvas).unbind('mousemove')
          $(canvas).on 'mouseup', ()->
            wasDragging = isDragging
            console.log 'wasDragging',wasDragging
            isDragging = false
            $(canvas).unbind('mousemove')
            if !wasDragging and $(canvas).data('uuid') is clickedCanvasUuid
              $rootScope.$apply ->
                $location.path '/instructor/' + instructor.id
            clickedCanvasUuid = null
      
      window.onresize = ->
        camera.aspect = 1
        camera.updateProjectionMatrix();
        $rootScope.renderer.setSize(window.innerWidth, window.innerHeight);

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
        $rootScope.renderer.render scene, camera
      animate()
