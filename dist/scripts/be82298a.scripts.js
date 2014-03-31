(function(){"use strict";angular.module("ericruisApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/instructor/:instructorId",{templateUrl:"views/instructor.html",controller:"InstructorCtrl"}).when("/request",{templateUrl:"views/request.html",controller:"RequestCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),angular.module("ericruisApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/instructor/:instructorId",{templateUrl:"views/instructor.html",controller:"InstructorCtrl"}).otherwise({redirectTo:"/"})}]),function(){"use strict";angular.module("ericruisApp").controller("MainCtrl",["$scope","instructors",function(a,b){return b.then(function(c){return b=c,a.instructors=b})}])}.call(this),angular.module("ericruisApp").controller("MainCtrl",["$scope","instructors",function(a,b){return b.then(function(c){return b=c,a.instructors=b})}]),function(){"use strict";angular.module("ericruisApp").directive("three",["$parse","$location","$rootScope",function(a,b,c){return{template:'<div id="canvas-container"></div>',restrict:"E",replace:!0,scope:{data:"="},link:function(a,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return z=30,t=15*z,p=[],r=[],y=500,s=7e-4,h=[],l=0,k=null,m=null,n=!1,a.$watch("data",function(a){return null!=a?(m=a,k=Math.floor(z/m.length),e(a)):void 0}),i=new THREE.PerspectiveCamera(75,1,1,100),i.position.z=1200,v=new THREE.Scene,u=new THREE.CSS3DRenderer,u.setSize(d.width(),d.width()),u.domElement.style.position="absolute",d.append(u.domElement),j=new THREE.TrackballControls(i,u.domElement),j.rotateSpeed=.5,x=document.createElement("img"),x.src="images/test.png",x.addEventListener("load",function(){var a,b;for(a=b=0;z>=0?z>b:b>z;a=z>=0?++b:--b)o(x);return w(),g()}),o=function(a){var b,c,d,e,f,g,h,i,j;for(b=document.createElement("canvas"),g=Math.min(a.height,a.width),b.width=g,b.height=g,c=b.getContext("2d"),c.drawImage(a,0,0),e=new THREE.CSS3DSprite(b),e.position.x=4e3*Math.random()-2e3,e.position.y=4e3*Math.random()-2e3,e.position.z=4e3*Math.random()-2e3,p.push(e),v.add(e),j=[],d=i=0;z>=0?z>i:i>z;d=z>=0?++i:--i)f=Math.acos(-1+2*d/z),h=Math.sqrt(z*Math.PI)*f,j.push(r.push(t*Math.cos(h)*Math.sin(f),t*Math.sin(h)*Math.sin(f),t*Math.cos(f)));return j},e=function(a){return _.each(a,function(a){return x=document.createElement("img"),x.src=a.get("imageURL"),x.addEventListener("load",q(x,a))})},q=function(a,e){return function(){var f,g,h,i,j;return j=p[l],f=j.element,l+=k,f.width=240,f.height=240,g=f.getContext("2d"),g.drawImage(a,0,0),h=e.get("firstName")+" "+e.get("lastName"),d=document.createElement("div"),$(d).text(h),i=new THREE.CSS3DObject(d),i.position.set(j.position.x,j.position.y,j.position.z),v.add(i),$(f).on("mousedown",function(){return $(f).on("mousemove",function(){return n=!0,console.log("hm"),$(f).unbind("mousemove")})}),$(f).on("mouseup",function(){var a;return a=n,n=!1,$(f).unbind("mousemove"),a?void 0:c.$apply(function(){return b.path("/instructor/"+e.id)})})}},window.onresize=function(){return console.log("resize"),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)},w=function(){var a,b,c,d,e;for(a=0,e=[],c=0,d=p.length;d>c;c++)b=p[c],new TWEEN.Tween(b.position).to({x:r[a],y:r[a+1],z:r[a+2]},Math.random()*y+y).easing(TWEEN.Easing.Exponential.InOut).start(),e.push(a+=3);return e},g=function(){var a,b,c,d;for(d=[],b=0,c=p.length;c>b;b++)a=p[b],d.push(new TWEEN.Tween(a.scale).to({x:1.1,y:1.1,z:1.1},4e3).repeat(1/0).delay(2e3).yoyo(!0).start());return d},(f=function(){var a;return requestAnimationFrame(f),j.update(),TWEEN.update(),a=Date.now(),u.render(v,i)})()}}}])}.call(this),angular.module("ericruisApp").directive("three",function(){return{template:'<div id="canvas-container"></div>',restrict:"E",replace:!0,link:function(a,b){var c,d,e,f,g;return d=new THREE.PerspectiveCamera(75,1,1,100),d.position.z=500,f=new THREE.Scene,e=new THREE.CSS3DRenderer,e.setSize(window.innerWidth,window.innerHeight),e.domElement.style.position="absolute",g=document.createElement("img"),g.src="images/yantra.png",g.addEventListener("load",function(){var a,b,c;return a=document.createElement("canvas"),a.width=g.width,a.height=g.height,b=a.getContext("2d"),b.drawImage(g,0,0),c=new THREE.CSS3DSprite(a),f.add(c)}),b.append(e.domElement),(c=function(){return function(){return requestAnimationFrame(c),e.render(f,d)}}(this))()}}}),THREE.CSS3DObject=function(a){THREE.Object3D.call(this),this.element=a,this.element.style.position="absolute",this.addEventListener("removed",function(a){if(null!==this.element.parentNode){this.element.parentNode.removeChild(this.element);for(var b=0,c=this.children.length;c>b;b++)this.children[b].dispatchEvent(a)}})},THREE.CSS3DObject.prototype=Object.create(THREE.Object3D.prototype),THREE.CSS3DSprite=function(a){THREE.CSS3DObject.call(this,a)},THREE.CSS3DSprite.prototype=Object.create(THREE.CSS3DObject.prototype),THREE.CSS3DRenderer=function(){console.log("THREE.CSS3DRenderer",THREE.REVISION);var a,b,c,d,e=new THREE.Matrix4,f=document.createElement("div");f.style.overflow="hidden",f.style.WebkitTransformStyle="preserve-3d",f.style.MozTransformStyle="preserve-3d",f.style.oTransformStyle="preserve-3d",f.style.transformStyle="preserve-3d",this.domElement=f;var g=document.createElement("div");g.style.WebkitTransformStyle="preserve-3d",g.style.MozTransformStyle="preserve-3d",g.style.oTransformStyle="preserve-3d",g.style.transformStyle="preserve-3d",f.appendChild(g),this.setClearColor=function(){},this.setSize=function(e,h){a=e,b=h,c=a/2,d=b/2,f.style.width=e+"px",f.style.height=h+"px",g.style.width=e+"px",g.style.height=h+"px"};var h=function(a){return Math.abs(a)<1e-6?0:a},i=function(a){var b=a.elements;return"matrix3d("+h(b[0])+","+h(-b[1])+","+h(b[2])+","+h(b[3])+","+h(b[4])+","+h(-b[5])+","+h(b[6])+","+h(b[7])+","+h(b[8])+","+h(-b[9])+","+h(b[10])+","+h(b[11])+","+h(b[12])+","+h(-b[13])+","+h(b[14])+","+h(b[15])+")"},j=function(a){var b=a.elements;return"translate3d(-50%,-50%,0) matrix3d("+h(b[0])+","+h(b[1])+","+h(b[2])+","+h(b[3])+","+h(-b[4])+","+h(-b[5])+","+h(-b[6])+","+h(-b[7])+","+h(b[8])+","+h(b[9])+","+h(b[10])+","+h(b[11])+","+h(b[12])+","+h(b[13])+","+h(b[14])+","+h(b[15])+")"},k=function(a,b){if(a instanceof THREE.CSS3DObject){var c;a instanceof THREE.CSS3DSprite?(e.copy(b.matrixWorldInverse),e.transpose(),e.copyPosition(a.matrixWorld),e.scale(a.scale),e.elements[3]=0,e.elements[7]=0,e.elements[11]=0,e.elements[15]=1,c=j(e)):c=j(a.matrixWorld);var d=a.element;d.style.WebkitTransform=c,d.style.MozTransform=c,d.style.oTransform=c,d.style.transform=c,d.parentNode!==g&&g.appendChild(d)}for(var f=0,h=a.children.length;h>f;f++)k(a.children[f],b)};this.render=function(a,e){var h=.5/Math.tan(THREE.Math.degToRad(.5*e.fov))*b;f.style.WebkitPerspective=h+"px",f.style.MozPerspective=h+"px",f.style.oPerspective=h+"px",f.style.perspective=h+"px",a.updateMatrixWorld(),void 0===e.parent&&e.updateMatrixWorld(),e.matrixWorldInverse.getInverse(e.matrixWorld);var j="translate3d(0,0,"+h+"px)"+i(e.matrixWorldInverse)+" translate3d("+c+"px,"+d+"px, 0)";g.style.WebkitTransform=j,g.style.MozTransform=j,g.style.oTransform=j,g.style.transform=j,k(a,e)}},THREE.TrackballControls=function(a,b){function c(a){l.enabled!==!1&&(window.removeEventListener("keydown",c),p=o,o===m.NONE&&(a.keyCode!==l.keys[m.ROTATE]||l.noRotate?a.keyCode!==l.keys[m.ZOOM]||l.noZoom?a.keyCode!==l.keys[m.PAN]||l.noPan||(o=m.PAN):o=m.ZOOM:o=m.ROTATE))}function d(){l.enabled!==!1&&(o=p,window.addEventListener("keydown",c,!1))}function e(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o===m.NONE&&(o=a.button),o!==m.ROTATE||l.noRotate?o!==m.ZOOM||l.noZoom?o!==m.PAN||l.noPan||(l.getMouseOnScreen(a.pageX,a.pageY,x),y.copy(x)):(l.getMouseOnScreen(a.pageX,a.pageY,t),u.copy(t)):(l.getMouseProjectionOnBall(a.pageX,a.pageY,r),s.copy(r)),document.addEventListener("mousemove",f,!1),document.addEventListener("mouseup",g,!1),l.dispatchEvent(A))}function f(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o!==m.ROTATE||l.noRotate?o!==m.ZOOM||l.noZoom?o!==m.PAN||l.noPan||l.getMouseOnScreen(a.pageX,a.pageY,y):l.getMouseOnScreen(a.pageX,a.pageY,u):l.getMouseProjectionOnBall(a.pageX,a.pageY,s))}function g(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),o=m.NONE,document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",g),l.dispatchEvent(B))}function h(a){if(l.enabled!==!1){a.preventDefault(),a.stopPropagation();var b=0;a.wheelDelta?b=a.wheelDelta/40:a.detail&&(b=-a.detail/3),t.y+=.01*b,l.dispatchEvent(A),l.dispatchEvent(B)}}function i(a){if(l.enabled!==!1){switch(a.touches.length){case 1:o=m.TOUCH_ROTATE,s.copy(l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,r));break;case 2:o=m.TOUCH_ZOOM;var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;w=v=Math.sqrt(b*b+c*c);break;case 3:o=m.TOUCH_PAN,y.copy(l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,x));break;default:o=m.NONE}l.dispatchEvent(A)}}function j(a){if(l.enabled!==!1)switch(a.preventDefault(),a.stopPropagation(),a.touches.length){case 1:l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,s);break;case 2:var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;w=Math.sqrt(b*b+c*c);break;case 3:l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,y);break;default:o=m.NONE}}function k(a){if(l.enabled!==!1){switch(a.touches.length){case 1:r.copy(l.getMouseProjectionOnBall(a.touches[0].pageX,a.touches[0].pageY,s));break;case 2:v=w=0;break;case 3:x.copy(l.getMouseOnScreen(a.touches[0].pageX,a.touches[0].pageY,y))}o=m.NONE,l.dispatchEvent(B)}}var l=this,m={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM:4,TOUCH_PAN:5};this.object=a,this.domElement=void 0!==b?b:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.noRoll=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var n=new THREE.Vector3,o=m.NONE,p=m.NONE,q=new THREE.Vector3,r=new THREE.Vector3,s=new THREE.Vector3,t=new THREE.Vector2,u=new THREE.Vector2,v=0,w=0,x=new THREE.Vector2,y=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var z={type:"change"},A={type:"start"},B={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{this.screen=this.domElement.getBoundingClientRect();var a=this.domElement.ownerDocument.documentElement;this.screen.left+=window.pageXOffset-a.clientLeft,this.screen.top+=window.pageYOffset-a.clientTop}},this.handleEvent=function(a){"function"==typeof this[a.type]&&this[a.type](a)},this.getMouseOnScreen=function(a,b,c){return c.set((a-l.screen.left)/l.screen.width,(b-l.screen.top)/l.screen.height)},this.getMouseProjectionOnBall=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){b.set((c-.5*l.screen.width-l.screen.left)/(.5*l.screen.width),(.5*l.screen.height+l.screen.top-d)/(.5*l.screen.height),0);var f=b.length();return l.noRoll?b.z=f<Math.SQRT1_2?Math.sqrt(1-f*f):.5/f:f>1?b.normalize():b.z=Math.sqrt(1-f*f),q.copy(l.object.position).sub(l.target),e.copy(l.object.up).setLength(b.y),e.add(a.copy(l.object.up).cross(q).setLength(b.x)),e.add(q.setLength(b.z)),e}}(),this.rotateCamera=function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(){var c=Math.acos(r.dot(s)/r.length()/s.length());c&&(a.crossVectors(r,s).normalize(),c*=l.rotateSpeed,b.setFromAxisAngle(a,-c),q.applyQuaternion(b),l.object.up.applyQuaternion(b),s.applyQuaternion(b),l.staticMoving?r.copy(s):(b.setFromAxisAngle(a,c*(l.dynamicDampingFactor-1)),r.applyQuaternion(b)))}}(),this.zoomCamera=function(){if(o===m.TOUCH_ZOOM){var a=v/w;v=w,q.multiplyScalar(a)}else{var a=1+(u.y-t.y)*l.zoomSpeed;1!==a&&a>0&&(q.multiplyScalar(a),l.staticMoving?t.copy(u):t.y+=(u.y-t.y)*this.dynamicDampingFactor)}},this.panCamera=function(){var a=new THREE.Vector2,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.copy(y).sub(x),a.lengthSq()&&(a.multiplyScalar(q.length()*l.panSpeed),c.copy(q).cross(l.object.up).setLength(a.x),c.add(b.copy(l.object.up).setLength(a.y)),l.object.position.add(c),l.target.add(c),l.staticMoving?x.copy(y):x.add(a.subVectors(y,x).multiplyScalar(l.dynamicDampingFactor)))}}(),this.checkDistances=function(){l.noZoom&&l.noPan||(q.lengthSq()>l.maxDistance*l.maxDistance&&l.object.position.addVectors(l.target,q.setLength(l.maxDistance)),q.lengthSq()<l.minDistance*l.minDistance&&l.object.position.addVectors(l.target,q.setLength(l.minDistance)))},this.update=function(){q.subVectors(l.object.position,l.target),l.noRotate||l.rotateCamera(),l.noZoom||l.zoomCamera(),l.noPan||l.panCamera(),l.object.position.addVectors(l.target,q),l.checkDistances(),l.object.lookAt(l.target),n.distanceToSquared(l.object.position)>0&&(l.dispatchEvent(z),n.copy(l.object.position))},this.reset=function(){o=m.NONE,p=m.NONE,l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.up.copy(l.up0),q.subVectors(l.object.position,l.target),l.object.lookAt(l.target),l.dispatchEvent(z),n.copy(l.object.position)},this.domElement.addEventListener("contextmenu",function(a){a.preventDefault()},!1),this.domElement.addEventListener("mousedown",e,!1),this.domElement.addEventListener("mousewheel",h,!1),this.domElement.addEventListener("DOMMouseScroll",h,!1),this.domElement.addEventListener("touchstart",i,!1),this.domElement.addEventListener("touchend",k,!1),this.domElement.addEventListener("touchmove",j,!1),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",d,!1),this.handleResize()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var TWEEN=TWEEN||function(){var a=[];return{REVISION:"12",getAll:function(){return a},removeAll:function(){a=[]},add:function(b){a.push(b)},remove:function(b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},update:function(b){if(0===a.length)return!1;var c=0;for(b=void 0!==b?b:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now();c<a.length;)a[c].update(b)?c++:a.splice(c,1);return!0}}}();TWEEN.Tween=function(a){var b=a,c={},d={},e={},f=1e3,g=0,h=!1,i=!1,j=!1,k=0,l=null,m=TWEEN.Easing.Linear.None,n=TWEEN.Interpolation.Linear,o=[],p=null,q=!1,r=null,s=null;for(var t in a)c[t]=parseFloat(a[t],10);this.to=function(a,b){return void 0!==b&&(f=b),d=a,this},this.start=function(a){TWEEN.add(this),i=!0,q=!1,l=void 0!==a?a:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?window.performance.now():Date.now(),l+=k;for(var f in d){if(d[f]instanceof Array){if(0===d[f].length)continue;d[f]=[b[f]].concat(d[f])}c[f]=b[f],c[f]instanceof Array==!1&&(c[f]*=1),e[f]=c[f]||0}return this},this.stop=function(){return i?(TWEEN.remove(this),i=!1,this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var a=0,b=o.length;b>a;a++)o[a].stop()},this.delay=function(a){return k=a,this},this.repeat=function(a){return g=a,this},this.yoyo=function(a){return h=a,this},this.easing=function(a){return m=a,this},this.interpolation=function(a){return n=a,this},this.chain=function(){return o=arguments,this},this.onStart=function(a){return p=a,this},this.onUpdate=function(a){return r=a,this},this.onComplete=function(a){return s=a,this},this.update=function(a){var i;if(l>a)return!0;q===!1&&(null!==p&&p.call(b),q=!0);var t=(a-l)/f;t=t>1?1:t;var u=m(t);for(i in d){var v=c[i]||0,w=d[i];w instanceof Array?b[i]=n(w,u):("string"==typeof w&&(w=v+parseFloat(w,10)),"number"==typeof w&&(b[i]=v+(w-v)*u))}if(null!==r&&r.call(b,u),1==t){if(g>0){isFinite(g)&&g--;for(i in e){if("string"==typeof d[i]&&(e[i]=e[i]+parseFloat(d[i],10)),h){var x=e[i];e[i]=d[i],d[i]=x,j=!j}c[i]=e[i]}return l=a+k,!0}null!==s&&s.call(b);for(var y=0,z=o.length;z>y;y++)o[y].start(a);return!1}return!0}},TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)))},Out:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin(2*(a-b)*Math.PI/d)+1)},InOut:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),(a*=2)<1?-.5*c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d):c*Math.pow(2,-10*(a-=1))*Math.sin(2*(a-b)*Math.PI/d)*.5+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*a*a*((b+1)*a-b):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(a){return 1-TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return.5>a?.5*TWEEN.Easing.Bounce.In(2*a):.5*TWEEN.Easing.Bounce.Out(2*a-1)+.5}}},TWEEN.Interpolation={Linear:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.Linear;return 0>b?f(a[0],a[1],d):b>1?f(a[c],a[c-1],c-d):f(a[e],a[e+1>c?c:e+1],d-e)},Bezier:function(a,b){var c,d=0,e=a.length-1,f=Math.pow,g=TWEEN.Interpolation.Utils.Bernstein;for(c=0;e>=c;c++)d+=f(1-b,e-c)*f(b,c)*a[c]*g(e,c);return d},CatmullRom:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[c]?(0>b&&(e=Math.floor(d=c*(1+b))),f(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):0>b?a[0]-(f(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(f(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):f(a[e?e-1:0],a[e],a[e+1>c?c:e+1],a[e+2>c?c:e+2],d-e)},Utils:{Linear:function(a,b,c){return(b-a)*c+a},Bernstein:function(a,b){var c=TWEEN.Interpolation.Utils.Factorial;return c(a)/c(b)/c(a-b)},Factorial:function(){var a=[1];return function(b){var c,d=1;if(a[b])return a[b];for(c=b;c>1;c--)d*=c;return a[b]=d}}(),CatmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b}}},function(){"use strict";angular.module("ericruisApp").controller("InstructorCtrl",["$q","$scope","$sce","Instructor","Teachers",function(a,b,c,d,e){var f,g,h;return h=b,a.all([d,e]).then(function(a){return g(a[0],a[1])}),g=function(a,b){var d;return d=a[0],_.each(["name","coverPhotoUrl","teacherBio","firstName"],function(a){return h[a]=d.get(a)}),h.videoUrl=c.trustAsResourceUrl(f(d.get("videoUrl"))),h.teachers=b},f=function(a){return _(a).contains("youtube")&&!_(a).contains("embed")?a.replace("watch?v=","embed/"):a}}])}.call(this),angular.module("ericruisApp").controller("InstructorCtrl",["$q","$scope","$sce","Instructor","Teachers",function(a,b,c,d,e){var f,g,h;return h=b,a.all([d,e]).then(function(a){return g(a[0],a[1])}),g=function(a,b){var d;return d=a[0],_.each(["name","coverPhotoUrl","teacherBio","firstName"],function(a){return h[a]=d.get(a)}),h.videoUrl=c.trustAsResourceUrl(f(d.get("videoUrl"))),h.teachers=b},f=function(a){return _(a).contains("youtube")&&!_(a).contains("embed")?a.replace("watch?v=","embed/"):a}}]),function(){"use strict";angular.module("ericruisApp").factory("Parse",function(){return Parse})}.call(this),angular.module("ericruisApp").factory("Parse",function(){return Parse}),function(){"use strict";angular.module("ericruisApp").factory("instructors",["$q","Parse",function(a,b){var c,d,e;return c=b.Object.extend("User"),e=new b.Query(c),e.exists("imageURL").equalTo("isTeacher",!0).find().then(function(a){return d.resolve(a)}),d=a.defer(),d.promise}])}.call(this),angular.module("ericruisApp").factory("instructors",["$q","Parse",function(a,b){var c,d,e;return c=b.Object.extend("User"),e=new b.Query(c),e.exists("imageURL").equalTo("isTeacher",!0).find().then(function(a){return d.resolve(a)}),d=a.defer(),d.promise}]),function(){"use strict";angular.module("ericruisApp").service("Instructor",["$q","$routeParams","Parse",function(a,b,c){var d,e,f,g;return f=b.instructorId,d=c.Object.extend("User"),g=new c.Query(d),g.equalTo("objectId",f),g.find().then(function(a){return e.resolve(a)}),e=a.defer(),e.promise}])}.call(this),angular.module("ericruisApp").service("Instructor",["$q","$routeParams","Parse",function(a,b,c){var d,e,f,g;return f=b.instructorId,d=c.Object.extend("User"),g=new c.Query(d),g.equalTo("objectId",f),g.find().then(function(a){return e.resolve(a)}),e=a.defer(),e.promise}]),function(){"use strict";angular.module("ericruisApp").controller("RequestCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("ericruisApp").service("Teachers",["$q","Parse","Instructor",function(a,b,c){var d;return c.then(function(a){var c,e,f;return e=a[0],c=b.Object.extend("SFLineage"),f=new b.Query(c),f.equalTo("student",e).find().then(function(a){var b;return b=[],_.each(a,function(c){return c.get("teacher").fetch().then(function(c){return b.push(c),b.length===a.length?d.resolve(b):void 0})})})}),d=a.defer(),d.promise}])}.call(this),angular.module("ericruisApp").service("Teachers",["$q","Parse","Instructor",function(a,b,c){var d;return c.then(function(a){var c,e,f;return e=a[0],c=b.Object.extend("SFLineage"),f=new b.Query(c),f.equalTo("student",e).find().then(function(a){var b;return b=[],_.each(a,function(c){return c.get("teacher").fetch().then(function(c){return b.push(c),b.length===a.length?d.resolve(b):void 0})})})}),d=a.defer(),d.promise}]);