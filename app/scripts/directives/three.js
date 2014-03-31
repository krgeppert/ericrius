// Generated by CoffeeScript 1.7.1
'use strict';
angular.module('ericruisApp').directive('three', function($parse, $location, $rootScope) {
  return {
    template: '<div id="canvas-container"></div>',
    restrict: 'E',
    replace: true,
    scope: {
      data: '='
    },
    link: function(scope, element, attrs) {
      var addInstructorNodes, animate, breathe, breathing, camera, clickedCanvasUuid, controls, insertionJump, instructorInsertionIndex, instructors, isDragging, makeNode, nodes, onload, positions, pulseSpeed, radius, scene, spherify, sprite, startingDuration, totalNodes, wasDragging;
      totalNodes = 30;
      isDragging = false;
      wasDragging = false;
      radius = totalNodes * 15;
      nodes = [];
      positions = [];
      startingDuration = 500;
      pulseSpeed = .0007;
      breathing = [];
      instructorInsertionIndex = 0;
      insertionJump = null;
      instructors = null;
      clickedCanvasUuid = null;
      camera = new THREE.PerspectiveCamera(75, 1, 1, 100);
      camera.position.z = 1200;
      scene = new THREE.Scene();
      $rootScope.renderer = $rootScope.renderer || new THREE.CSS3DRenderer();
      $rootScope.renderer.setSize(element.width(), element.width());
      $rootScope.renderer.domElement.style.position = 'absolute';
      element.append($rootScope.renderer.domElement);
      controls = new THREE.TrackballControls(camera, $rootScope.renderer.domElement);
      controls.rotateSpeed = 0.5;
      sprite = document.createElement('img');
      sprite.src = 'images/whiteSphereTransparent.png';
      sprite.addEventListener('load', function(event) {
        var i, _i;
        for (i = _i = 0; 0 <= totalNodes ? _i < totalNodes : _i > totalNodes; i = 0 <= totalNodes ? ++_i : --_i) {
          makeNode(sprite);
        }
        scope.$watch('data', function(newValue) {
          console.log(newValue);
          if (newValue != null) {
            console.log('aa');
            instructors = newValue;
            insertionJump = Math.floor(totalNodes / instructors.length);
            return addInstructorNodes(newValue);
          }
        });
        spherify();
        return breathe();
      });
      makeNode = function(sprite, onclick, debug) {
        var canvas, context, i, node, phi, size, theta, _i, _results;
        canvas = document.createElement('canvas');
        size = Math.min(sprite.height, sprite.width);
        canvas.width = size;
        canvas.height = size;
        context = canvas.getContext('2d');
        context.drawImage(sprite, 0, 0);
        node = new THREE.CSS3DSprite(canvas);
        node.position.x = Math.random() * 4000 - 2000;
        node.position.y = Math.random() * 4000 - 2000;
        node.position.z = Math.random() * 4000 - 2000;
        nodes.push(node);
        scene.add(node);
        _results = [];
        for (i = _i = 0; 0 <= totalNodes ? _i < totalNodes : _i > totalNodes; i = 0 <= totalNodes ? ++_i : --_i) {
          phi = Math.acos(-1 + (2 * i) / totalNodes);
          theta = Math.sqrt(totalNodes * Math.PI) * phi;
          _results.push(positions.push(radius * Math.cos(theta) * Math.sin(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(phi)));
        }
        return _results;
      };
      addInstructorNodes = function(instructors) {
        return _.each(instructors, function(instructor) {
          sprite = document.createElement('img');
          sprite.src = instructor.get('imageWithLabelUrl');
          return sprite.addEventListener('load', onload(sprite, instructor));
        });
      };
      onload = function(sprite, instructor) {
        return function() {
          var canvas, context, node;
          node = nodes[instructorInsertionIndex];
          canvas = node.element;
          instructorInsertionIndex += insertionJump;
          canvas.width = sprite.width;
          canvas.height = sprite.height;
          $(canvas).data('uuid', node.uuid);
          context = canvas.getContext('2d');
          context.drawImage(sprite, 0, 0);
          $(canvas).on('mousedown', function(event) {
            clickedCanvasUuid = $(canvas).data('uuid');
            return $(canvas).on('mousemove', function() {
              isDragging = true;
              return $(canvas).unbind('mousemove');
            });
          });
          return $(canvas).on('mouseup', function() {
            wasDragging = isDragging;
            console.log('wasDragging', wasDragging);
            isDragging = false;
            $(canvas).unbind('mousemove');
            if (!wasDragging && $(canvas).data('uuid') === clickedCanvasUuid) {
              $rootScope.$apply(function() {
                return $location.path('/instructor/' + instructor.id);
              });
            }
            return clickedCanvasUuid = null;
          });
        };
      };
      window.onresize = function() {
        console.log('resize');
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        return $rootScope.renderer.setSize(window.innerWidth, window.innerHeight);
      };
      spherify = function() {
        var i, j, node, _i, _len, _results;
        j = 0;
        i = 0;
        _results = [];
        for (_i = 0, _len = nodes.length; _i < _len; _i++) {
          node = nodes[_i];
          new TWEEN.Tween(node.position).to({
            x: positions[j],
            y: positions[j + 1],
            z: positions[j + 2]
          }, Math.random() * startingDuration + startingDuration).start();
          j += 3;
          _results.push(i++);
        }
        return _results;
      };
      breathe = function() {
        var node, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = nodes.length; _i < _len; _i++) {
          node = nodes[_i];
          _results.push(new TWEEN.Tween(node.scale).to({
            x: 1.1,
            y: 1.1,
            z: 1.1
          }, 4000).repeat(Infinity).delay(2000).yoyo(true).start());
        }
        return _results;
      };
      animate = (function(_this) {
        return function() {
          var time;
          requestAnimationFrame(animate);
          controls.update();
          TWEEN.update();
          time = Date.now();
          return $rootScope.renderer.render(scene, camera);
        };
      })(this);
      return animate();
    }
  };
});
