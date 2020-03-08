
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.fake3dImage = factory());
}(this, (function () { 'use strict';

  var fragment = "#ifdef GL_ES\n  precision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform vec4 resolution;\nuniform vec2 mouse;\nuniform vec2 threshold;\nuniform float time;\nuniform float pixelRatio;\nuniform sampler2D image0;\nuniform sampler2D image1;\n\nvec2 mirrored(vec2 v) {\n  vec2 m = mod(v,2.);\n  return mix(m,2.0 - m, step(1.0 ,m));\n}\n\nvoid main() {\n  // uvs and textures\n  vec2 uv = pixelRatio*gl_FragCoord.xy / resolution.xy ;\n  vec2 vUv = (uv - vec2(0.5))*resolution.zw + vec2(0.5);\n  vUv.y = 1. - vUv.y;\n  vec4 tex1 = texture2D(image1,mirrored(vUv));\n  vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*mouse.y/threshold.y);\n  gl_FragColor = texture2D(image0,mirrored(fake3d));\n}"; // eslint-disable-line

  var vertex = "#define GLSLIFY 1\nattribute vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4( a_position, 0, 1 );\n}"; // eslint-disable-line

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var gyronorm = createCommonjsModule(function (module) {
  /* eslint-disable */
  /*! Full Tilt v0.5.3 / http://github.com/richtr/Full-Tilt */
  !function(a){function b(a){return a=+a,0===a||isNaN(a)?a:a>0?1:-1}function c(a){var b=new Promise(function(b,c){var d=function(e){setTimeout(function(){a&&a.data?b():e>=20?c():d(++e);},50);};d(0);});return b}function d(){o=n?(a.screen.orientation.angle||0)*j:(a.orientation||0)*j;}function e(a){l.orientation.data=a;for(var b in l.orientation.callbacks)l.orientation.callbacks[b].call(this);}function f(a){l.motion.data=a;for(var b in l.motion.callbacks)l.motion.callbacks[b].call(this);}if(void 0===a.FULLTILT||null===a.FULLTILT){var g=Math.PI,h=g/2,i=2*g,j=g/180,k=180/g,l={orientation:{active:!1,callbacks:[],data:void 0},motion:{active:!1,callbacks:[],data:void 0}},m=!1,n=a.screen&&a.screen.orientation&&void 0!==a.screen.orientation.angle&&null!==a.screen.orientation.angle?!0:!1,o=(n?a.screen.orientation.angle:a.orientation||0)*j,p=h,q=g,r=i/3,s=-h,t={};t.version="0.5.3",t.getDeviceOrientation=function(a){var b=new Promise(function(b,d){var e=new t.DeviceOrientation(a);e.start();var f=new c(l.orientation);f.then(function(){e._alphaAvailable=l.orientation.data.alpha&&null!==l.orientation.data.alpha,e._betaAvailable=l.orientation.data.beta&&null!==l.orientation.data.beta,e._gammaAvailable=l.orientation.data.gamma&&null!==l.orientation.data.gamma,b(e);})["catch"](function(){e.stop(),d("DeviceOrientation is not supported");});});return b},t.getDeviceMotion=function(a){var b=new Promise(function(b,d){var e=new t.DeviceMotion(a);e.start();var f=new c(l.motion);f.then(function(){e._accelerationXAvailable=l.motion.data.acceleration&&l.motion.data.acceleration.x,e._accelerationYAvailable=l.motion.data.acceleration&&l.motion.data.acceleration.y,e._accelerationZAvailable=l.motion.data.acceleration&&l.motion.data.acceleration.z,e._accelerationIncludingGravityXAvailable=l.motion.data.accelerationIncludingGravity&&l.motion.data.accelerationIncludingGravity.x,e._accelerationIncludingGravityYAvailable=l.motion.data.accelerationIncludingGravity&&l.motion.data.accelerationIncludingGravity.y,e._accelerationIncludingGravityZAvailable=l.motion.data.accelerationIncludingGravity&&l.motion.data.accelerationIncludingGravity.z,e._rotationRateAlphaAvailable=l.motion.data.rotationRate&&l.motion.data.rotationRate.alpha,e._rotationRateBetaAvailable=l.motion.data.rotationRate&&l.motion.data.rotationRate.beta,e._rotationRateGammaAvailable=l.motion.data.rotationRate&&l.motion.data.rotationRate.gamma,b(e);})["catch"](function(){e.stop(),d("DeviceMotion is not supported");});});return b},t.Quaternion=function(a,c,d,e){var f;this.set=function(a,b,c,d){this.x=a||0,this.y=b||0,this.z=c||0,this.w=d||1;},this.copy=function(a){this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w;},this.setFromEuler=function(){var a,b,c,d,e,f,g,h,i,k,l,m;return function(n){return n=n||{},c=(n.alpha||0)*j,a=(n.beta||0)*j,b=(n.gamma||0)*j,f=c/2,d=a/2,e=b/2,g=Math.cos(d),h=Math.cos(e),i=Math.cos(f),k=Math.sin(d),l=Math.sin(e),m=Math.sin(f),this.set(k*h*i-g*l*m,g*l*i+k*h*m,g*h*m+k*l*i,g*h*i-k*l*m),this.normalize(),this}}(),this.setFromRotationMatrix=function(){var a;return function(c){return a=c.elements,this.set(.5*Math.sqrt(1+a[0]-a[4]-a[8])*b(a[7]-a[5]),.5*Math.sqrt(1-a[0]+a[4]-a[8])*b(a[2]-a[6]),.5*Math.sqrt(1-a[0]-a[4]+a[8])*b(a[3]-a[1]),.5*Math.sqrt(1+a[0]+a[4]+a[8])),this}}(),this.multiply=function(a){return f=t.Quaternion.prototype.multiplyQuaternions(this,a),this.copy(f),this},this.rotateX=function(a){return f=t.Quaternion.prototype.rotateByAxisAngle(this,[1,0,0],a),this.copy(f),this},this.rotateY=function(a){return f=t.Quaternion.prototype.rotateByAxisAngle(this,[0,1,0],a),this.copy(f),this},this.rotateZ=function(a){return f=t.Quaternion.prototype.rotateByAxisAngle(this,[0,0,1],a),this.copy(f),this},this.normalize=function(){return t.Quaternion.prototype.normalize(this)},this.set(a,c,d,e);},t.Quaternion.prototype={constructor:t.Quaternion,multiplyQuaternions:function(){var a=new t.Quaternion;return function(b,c){var d=b.x,e=b.y,f=b.z,g=b.w,h=c.x,i=c.y,j=c.z,k=c.w;return a.set(d*k+g*h+e*j-f*i,e*k+g*i+f*h-d*j,f*k+g*j+d*i-e*h,g*k-d*h-e*i-f*j),a}}(),normalize:function(a){var b=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z+a.w*a.w);return 0===b?(a.x=0,a.y=0,a.z=0,a.w=1):(b=1/b,a.x*=b,a.y*=b,a.z*=b,a.w*=b),a},rotateByAxisAngle:function(){var a,b,c=new t.Quaternion,d=new t.Quaternion;return function(e,f,g){return a=(g||0)/2,b=Math.sin(a),d.set((f[0]||0)*b,(f[1]||0)*b,(f[2]||0)*b,Math.cos(a)),c=t.Quaternion.prototype.multiplyQuaternions(e,d),t.Quaternion.prototype.normalize(c)}}()},t.RotationMatrix=function(a,b,c,d,e,f,g,h,i){var k;this.elements=new Float32Array(9),this.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},this.set=function(a,b,c,d,e,f,g,h,i){this.elements[0]=a||1,this.elements[1]=b||0,this.elements[2]=c||0,this.elements[3]=d||0,this.elements[4]=e||1,this.elements[5]=f||0,this.elements[6]=g||0,this.elements[7]=h||0,this.elements[8]=i||1;},this.copy=function(a){this.elements[0]=a.elements[0],this.elements[1]=a.elements[1],this.elements[2]=a.elements[2],this.elements[3]=a.elements[3],this.elements[4]=a.elements[4],this.elements[5]=a.elements[5],this.elements[6]=a.elements[6],this.elements[7]=a.elements[7],this.elements[8]=a.elements[8];},this.setFromEuler=function(){var a,b,c,d,e,f,g,h,i;return function(k){return k=k||{},c=(k.alpha||0)*j,a=(k.beta||0)*j,b=(k.gamma||0)*j,d=Math.cos(a),e=Math.cos(b),f=Math.cos(c),g=Math.sin(a),h=Math.sin(b),i=Math.sin(c),this.set(f*e-i*g*h,-d*i,e*i*g+f*h,e*i+f*g*h,f*d,i*h-f*e*g,-d*h,g,d*e),this.normalize(),this}}(),this.setFromQuaternion=function(){var a,b,c,d;return function(e){return a=e.w*e.w,b=e.x*e.x,c=e.y*e.y,d=e.z*e.z,this.set(a+b-c-d,2*(e.x*e.y-e.w*e.z),2*(e.x*e.z+e.w*e.y),2*(e.x*e.y+e.w*e.z),a-b+c-d,2*(e.y*e.z-e.w*e.x),2*(e.x*e.z-e.w*e.y),2*(e.y*e.z+e.w*e.x),a-b-c+d),this}}(),this.multiply=function(a){return k=t.RotationMatrix.prototype.multiplyMatrices(this,a),this.copy(k),this},this.rotateX=function(a){return k=t.RotationMatrix.prototype.rotateByAxisAngle(this,[1,0,0],a),this.copy(k),this},this.rotateY=function(a){return k=t.RotationMatrix.prototype.rotateByAxisAngle(this,[0,1,0],a),this.copy(k),this},this.rotateZ=function(a){return k=t.RotationMatrix.prototype.rotateByAxisAngle(this,[0,0,1],a),this.copy(k),this},this.normalize=function(){return t.RotationMatrix.prototype.normalize(this)},this.set(a,b,c,d,e,f,g,h,i);},t.RotationMatrix.prototype={constructor:t.RotationMatrix,multiplyMatrices:function(){var a,b,c=new t.RotationMatrix;return function(d,e){return a=d.elements,b=e.elements,c.set(a[0]*b[0]+a[1]*b[3]+a[2]*b[6],a[0]*b[1]+a[1]*b[4]+a[2]*b[7],a[0]*b[2]+a[1]*b[5]+a[2]*b[8],a[3]*b[0]+a[4]*b[3]+a[5]*b[6],a[3]*b[1]+a[4]*b[4]+a[5]*b[7],a[3]*b[2]+a[4]*b[5]+a[5]*b[8],a[6]*b[0]+a[7]*b[3]+a[8]*b[6],a[6]*b[1]+a[7]*b[4]+a[8]*b[7],a[6]*b[2]+a[7]*b[5]+a[8]*b[8]),c}}(),normalize:function(a){var b=a.elements,c=b[0]*b[4]*b[8]-b[0]*b[5]*b[7]-b[1]*b[3]*b[8]+b[1]*b[5]*b[6]+b[2]*b[3]*b[7]-b[2]*b[4]*b[6];return b[0]/=c,b[1]/=c,b[2]/=c,b[3]/=c,b[4]/=c,b[5]/=c,b[6]/=c,b[7]/=c,b[8]/=c,a.elements=b,a},rotateByAxisAngle:function(){var a,b,c=new t.RotationMatrix,d=new t.RotationMatrix,e=!1;return function(f,g,h){return d.identity(),e=!1,a=Math.sin(h),b=Math.cos(h),1===g[0]&&0===g[1]&&0===g[2]?(e=!0,d.elements[4]=b,d.elements[5]=-a,d.elements[7]=a,d.elements[8]=b):1===g[1]&&0===g[0]&&0===g[2]?(e=!0,d.elements[0]=b,d.elements[2]=a,d.elements[6]=-a,d.elements[8]=b):1===g[2]&&0===g[0]&&0===g[1]&&(e=!0,d.elements[0]=b,d.elements[1]=-a,d.elements[3]=a,d.elements[4]=b),e?(c=t.RotationMatrix.prototype.multiplyMatrices(f,d),c=t.RotationMatrix.prototype.normalize(c)):c=f,c}}()},t.Euler=function(a,b,c){this.set=function(a,b,c){this.alpha=a||0,this.beta=b||0,this.gamma=c||0;},this.copy=function(a){this.alpha=a.alpha,this.beta=a.beta,this.gamma=a.gamma;},this.setFromRotationMatrix=function(){var a,b,c,d;return function(e){a=e.elements,a[8]>0?(b=Math.atan2(-a[1],a[4]),c=Math.asin(a[7]),d=Math.atan2(-a[6],a[8])):a[8]<0?(b=Math.atan2(a[1],-a[4]),c=-Math.asin(a[7]),c+=c>=0?-g:g,d=Math.atan2(a[6],-a[8])):a[6]>0?(b=Math.atan2(-a[1],a[4]),c=Math.asin(a[7]),d=-h):a[6]<0?(b=Math.atan2(a[1],-a[4]),c=-Math.asin(a[7]),c+=c>=0?-g:g,d=-h):(b=Math.atan2(a[3],a[0]),c=a[7]>0?h:-h,d=0),0>b&&(b+=i),b*=k,c*=k,d*=k,this.set(b,c,d);}}(),this.setFromQuaternion=function(){var a,b,c;return function(d){var e=d.w*d.w,f=d.x*d.x,j=d.y*d.y,l=d.z*d.z,m=e+f+j+l,n=d.w*d.x+d.y*d.z,o=1e-6;if(n>(.5-o)*m)a=2*Math.atan2(d.y,d.w),b=h,c=0;else if((-.5+o)*m>n)a=-2*Math.atan2(d.y,d.w),b=-h,c=0;else {var p=e-f+j-l,q=2*(d.w*d.z-d.x*d.y),r=e-f-j+l,s=2*(d.w*d.y-d.x*d.z);r>0?(a=Math.atan2(q,p),b=Math.asin(2*n/m),c=Math.atan2(s,r)):(a=Math.atan2(-q,-p),b=-Math.asin(2*n/m),b+=0>b?g:-g,c=Math.atan2(-s,-r));}0>a&&(a+=i),a*=k,b*=k,c*=k,this.set(a,b,c);}}(),this.rotateX=function(a){return t.Euler.prototype.rotateByAxisAngle(this,[1,0,0],a),this},this.rotateY=function(a){return t.Euler.prototype.rotateByAxisAngle(this,[0,1,0],a),this},this.rotateZ=function(a){return t.Euler.prototype.rotateByAxisAngle(this,[0,0,1],a),this},this.set(a,b,c);},t.Euler.prototype={constructor:t.Euler,rotateByAxisAngle:function(){var a=new t.RotationMatrix;return function(b,c,d){return a.setFromEuler(b),a=t.RotationMatrix.prototype.rotateByAxisAngle(a,c,d),b.setFromRotationMatrix(a),b}}()},t.DeviceOrientation=function(b){this.options=b||{};var c=0,d=200,e=0,f=10;if(this.alphaOffsetScreen=0,this.alphaOffsetDevice=void 0,"game"===this.options.type){var g=function(b){return null!==b.alpha&&(this.alphaOffsetDevice=new t.Euler(b.alpha,0,0),this.alphaOffsetDevice.rotateZ(-o),++e>=f)?void a.removeEventListener("deviceorientation",g,!1):void(++c>=d&&a.removeEventListener("deviceorientation",g,!1))}.bind(this);a.addEventListener("deviceorientation",g,!1);}else if("world"===this.options.type){var h=function(b){return b.absolute!==!0&&void 0!==b.webkitCompassAccuracy&&null!==b.webkitCompassAccuracy&&+b.webkitCompassAccuracy>=0&&+b.webkitCompassAccuracy<50&&(this.alphaOffsetDevice=new t.Euler(b.webkitCompassHeading,0,0),this.alphaOffsetDevice.rotateZ(o),this.alphaOffsetScreen=o,++e>=f)?void a.removeEventListener("deviceorientation",h,!1):void(++c>=d&&a.removeEventListener("deviceorientation",h,!1))}.bind(this);a.addEventListener("deviceorientation",h,!1);}},t.DeviceOrientation.prototype={constructor:t.DeviceOrientation,start:function(b){b&&"[object Function]"==Object.prototype.toString.call(b)&&l.orientation.callbacks.push(b),m||(n?a.screen.orientation.addEventListener("change",d,!1):a.addEventListener("orientationchange",d,!1)),l.orientation.active||(a.addEventListener("deviceorientation",e,!1),l.orientation.active=!0);},stop:function(){l.orientation.active&&(a.removeEventListener("deviceorientation",e,!1),l.orientation.active=!1);},listen:function(a){this.start(a);},getFixedFrameQuaternion:function(){var a=new t.Euler,b=new t.RotationMatrix,c=new t.Quaternion;return function(){var d=l.orientation.data||{alpha:0,beta:0,gamma:0},e=d.alpha;return this.alphaOffsetDevice&&(b.setFromEuler(this.alphaOffsetDevice),b.rotateZ(-this.alphaOffsetScreen),a.setFromRotationMatrix(b),a.alpha<0&&(a.alpha+=360),a.alpha%=360,e-=a.alpha),a.set(e,d.beta,d.gamma),c.setFromEuler(a),c}}(),getScreenAdjustedQuaternion:function(){var a;return function(){return a=this.getFixedFrameQuaternion(),a.rotateZ(-o),a}}(),getFixedFrameMatrix:function(){var a=new t.Euler,b=new t.RotationMatrix;return function(){var c=l.orientation.data||{alpha:0,beta:0,gamma:0},d=c.alpha;return this.alphaOffsetDevice&&(b.setFromEuler(this.alphaOffsetDevice),b.rotateZ(-this.alphaOffsetScreen),a.setFromRotationMatrix(b),a.alpha<0&&(a.alpha+=360),a.alpha%=360,d-=a.alpha),a.set(d,c.beta,c.gamma),b.setFromEuler(a),b}}(),getScreenAdjustedMatrix:function(){var a;return function(){return a=this.getFixedFrameMatrix(),a.rotateZ(-o),a}}(),getFixedFrameEuler:function(){var a,b=new t.Euler;return function(){return a=this.getFixedFrameMatrix(),b.setFromRotationMatrix(a),b}}(),getScreenAdjustedEuler:function(){var a,b=new t.Euler;return function(){return a=this.getScreenAdjustedMatrix(),b.setFromRotationMatrix(a),b}}(),isAbsolute:function(){return l.orientation.data&&l.orientation.data.absolute===!0?!0:!1},getLastRawEventData:function(){return l.orientation.data||{}},_alphaAvailable:!1,_betaAvailable:!1,_gammaAvailable:!1,isAvailable:function(a){switch(a){case this.ALPHA:return this._alphaAvailable;case this.BETA:return this._betaAvailable;case this.GAMMA:return this._gammaAvailable}},ALPHA:"alpha",BETA:"beta",GAMMA:"gamma"},t.DeviceMotion=function(a){this.options=a||{};},t.DeviceMotion.prototype={constructor:t.DeviceMotion,start:function(b){b&&"[object Function]"==Object.prototype.toString.call(b)&&l.motion.callbacks.push(b),m||(n?a.screen.orientation.addEventListener("change",d,!1):a.addEventListener("orientationchange",d,!1)),l.motion.active||(a.addEventListener("devicemotion",f,!1),l.motion.active=!0);},stop:function(){l.motion.active&&(a.removeEventListener("devicemotion",f,!1),l.motion.active=!1);},listen:function(a){this.start(a);},getScreenAdjustedAcceleration:function(){var a=l.motion.data&&l.motion.data.acceleration?l.motion.data.acceleration:{x:0,y:0,z:0},b={};switch(o){case p:b.x=-a.y,b.y=a.x;break;case q:b.x=-a.x,b.y=-a.y;break;case r:case s:b.x=a.y,b.y=-a.x;break;default:b.x=a.x,b.y=a.y;}return b.z=a.z,b},getScreenAdjustedAccelerationIncludingGravity:function(){var a=l.motion.data&&l.motion.data.accelerationIncludingGravity?l.motion.data.accelerationIncludingGravity:{x:0,y:0,z:0},b={};switch(o){case p:b.x=-a.y,b.y=a.x;break;case q:b.x=-a.x,b.y=-a.y;break;case r:case s:b.x=a.y,b.y=-a.x;break;default:b.x=a.x,b.y=a.y;}return b.z=a.z,b},getScreenAdjustedRotationRate:function(){var a=l.motion.data&&l.motion.data.rotationRate?l.motion.data.rotationRate:{alpha:0,beta:0,gamma:0},b={};switch(o){case p:b.beta=-a.gamma,b.gamma=a.beta;break;case q:b.beta=-a.beta,b.gamma=-a.gamma;break;case r:case s:b.beta=a.gamma,b.gamma=-a.beta;break;default:b.beta=a.beta,b.gamma=a.gamma;}return b.alpha=a.alpha,b},getLastRawEventData:function(){return l.motion.data||{}},_accelerationXAvailable:!1,_accelerationYAvailable:!1,_accelerationZAvailable:!1,_accelerationIncludingGravityXAvailable:!1,_accelerationIncludingGravityYAvailable:!1,_accelerationIncludingGravityZAvailable:!1,_rotationRateAlphaAvailable:!1,_rotationRateBetaAvailable:!1,_rotationRateGammaAvailable:!1,isAvailable:function(a){switch(a){case this.ACCELERATION_X:return this._accelerationXAvailable;case this.ACCELERATION_Y:return this._accelerationYAvailable;case this.ACCELERATION_Z:return this._accelerationZAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_X:return this._accelerationIncludingGravityXAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Y:return this._accelerationIncludingGravityYAvailable;case this.ACCELERATION_INCLUDING_GRAVITY_Z:return this._accelerationIncludingGravityZAvailable;case this.ROTATION_RATE_ALPHA:return this._rotationRateAlphaAvailable;case this.ROTATION_RATE_BETA:return this._rotationRateBetaAvailable;case this.ROTATION_RATE_GAMMA:return this._rotationRateGammaAvailable}},ACCELERATION_X:"accelerationX",ACCELERATION_Y:"accelerationY",ACCELERATION_Z:"accelerationZ",ACCELERATION_INCLUDING_GRAVITY_X:"accelerationIncludingGravityX",ACCELERATION_INCLUDING_GRAVITY_Y:"accelerationIncludingGravityY",ACCELERATION_INCLUDING_GRAVITY_Z:"accelerationIncludingGravityZ",ROTATION_RATE_ALPHA:"rotationRateAlpha",ROTATION_RATE_BETA:"rotationRateBeta",ROTATION_RATE_GAMMA:"rotationRateGamma"},a.FULLTILT=t;}}(window);

  /* gyronorm.js v2.0.6 - https://github.com/dorukeker/gyronorm.git*/
  !function(a,b){var c={GyroNorm:b()};module.exports?module.exports=c:a.GyroNorm=c.GyroNorm;}(commonjsGlobal,function(){function a(a){return Math.round(a*Math.pow(10,t))/Math.pow(10,t)}function b(){var b={};b=v?o.getScreenAdjustedEuler():o.getFixedFrameEuler();var c=p.getScreenAdjustedAcceleration(),e=p.getScreenAdjustedAccelerationIncludingGravity(),f=p.getScreenAdjustedRotationRate(),g=0;s===d?(g=b.alpha-k,g=0>g?360-Math.abs(g):g):g=b.alpha;var h={"do":{alpha:a(g),beta:a(b.beta),gamma:a(b.gamma),absolute:o.isAbsolute()},dm:{x:a(c.x),y:a(c.y),z:a(c.z),gx:a(e.x),gy:a(e.y),gz:a(e.z),alpha:a(f.alpha),beta:a(f.beta),gamma:a(f.gamma)}};return r&&(h.dm.gx*=l,h.dm.gy*=l,h.dm.gz*=l),h}function c(a){u&&("string"==typeof a&&(a={message:a,code:0}),u(a));}var d="game",e="world",f="deviceorientation",g="acceleration",h="accelerationinludinggravity",i="rotationrate",j=null,k=0,l=0,m=!1,n=!1,o=null,p=null,q=50,r=!0,s=d,t=2,u=null,v=!1,w=function(a){};return w.GAME=d,w.WORLD=e,w.DEVICE_ORIENTATION=f,w.ACCELERATION=g,w.ACCELERATION_INCLUDING_GRAVITY=h,w.ROTATION_RATE=i,w.prototype.init=function(a){a&&a.frequency&&(q=a.frequency),a&&a.gravityNormalized&&(r=a.gravityNormalized),a&&a.orientationBase&&(s=a.orientationBase),a&&"number"==typeof a.decimalCount&&a.decimalCount>=0&&(t=parseInt(a.decimalCount)),a&&a.logger&&(u=a.logger),a&&a.screenAdjusted&&(v=a.screenAdjusted);var b=new FULLTILT.getDeviceOrientation({type:s}).then(function(a){o=a;}),c=(new FULLTILT.getDeviceMotion).then(function(a){p=a,l=p.getScreenAdjustedAccelerationIncludingGravity().z>0?-1:1;});return Promise.all([b,c]).then(function(){n=!0;})},w.prototype.end=function(){try{n=!1,this.stop(),p.stop(),o.stop();}catch(a){c(a);}},w.prototype.start=function(a){return n?(j=setInterval(function(){a(b());},q),void(m=!0)):void c({message:'GyroNorm is not initialized yet. First call the "init()" function.',code:1})},w.prototype.stop=function(){j&&(clearInterval(j),m=!1);},w.prototype.normalizeGravity=function(a){r=a?!0:!1;},w.prototype.setHeadDirection=function(){return v||s===e?!1:(k=o.getFixedFrameEuler().alpha,!0)},w.prototype.startLogging=function(a){a&&(u=a);},w.prototype.stopLogging=function(){u=null;},w.prototype.isAvailable=function(a){var b=o.getScreenAdjustedEuler(),c=p.getScreenAdjustedAcceleration(),d=p.getScreenAdjustedAccelerationIncludingGravity(),e=p.getScreenAdjustedRotationRate();switch(a){case f:return b.alpha&&null!==b.alpha&&b.beta&&null!==b.beta&&b.gamma&&null!==b.gamma;case g:return c&&c.x&&c.y&&c.z;case h:return d&&d.x&&d.y&&d.z;case i:return e&&e.alpha&&e.beta&&e.gamma;default:return {deviceOrientationAvailable:b.alpha&&null!==b.alpha&&b.beta&&null!==b.beta&&b.gamma&&null!==b.gamma,accelerationAvailable:c&&c.x&&c.y&&c.z,accelerationIncludingGravityAvailable:d&&d.x&&d.y&&d.z,rotationRateAvailable:e&&e.alpha&&e.beta&&e.gamma}}},w.prototype.isRunning=function(){return m},w});
  });

  var gn = new gyronorm.GyroNorm();
  var Sketch = /** @class */ (function () {
      function Sketch() {
          this.container = document.getElementById("gl");
          this.canvas = document.createElement("canvas");
          this.container.appendChild(this.canvas);
          this.gl = this.canvas.getContext("webgl");
          this.ratio = window.devicePixelRatio;
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;
          this.mouseX = 0;
          this.mouseY = 0;
          this.mouseTargetX = 0;
          this.mouseTargetY = 0;
          this.imageOriginal = this.container.getAttribute("data-imageOriginal");
          this.imageDepth = this.container.getAttribute("data-imageDepth");
          this.vth = this.container.getAttribute("data-verticalThreshold");
          this.hth = this.container.getAttribute("data-horizontalThreshold");
          this.imageURLs = [this.imageOriginal, this.imageDepth];
          this.textures = [];
          this.startTime = new Date().getTime(); // Get start time for animating
          this.createScene();
          this.addTexture();
          this.mouseMove();
          this.gyro();
      }
      Sketch.prototype.addShader = function (source, type) {
          var shader = this.gl.createShader(type);
          this.gl.shaderSource(shader, source);
          this.gl.compileShader(shader);
          var isCompiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
          if (!isCompiled) {
              throw new Error("Shader compile error: " + this.gl.getShaderInfoLog(shader));
          }
          this.gl.attachShader(this.program, shader);
      };
      Sketch.prototype.resizeHandler = function () {
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;
          this.width = this.container.offsetWidth;
          // this.height = this.width/this.aspect;
          this.height = this.container.offsetHeight;
          this.canvas.width = this.width * this.ratio;
          this.canvas.height = this.height * this.ratio;
          this.canvas.style.width = this.width + "px";
          this.canvas.style.height = this.height + "px";
          var a1;
          var a2;
          if (this.height / this.width < this.imageAspect) {
              a1 = 1;
              a2 = this.height / this.width / this.imageAspect;
          }
          else {
              a1 = (this.width / this.height) * this.imageAspect;
              a2 = 1;
          }
          this.uResolution.set(this.width, this.height, a1, a2);
          this.uRatio.set(1 / this.ratio);
          this.uThreshold.set(this.hth, this.vth);
          this.gl.viewport(0, 0, this.width * this.ratio, this.height * this.ratio);
      };
      Sketch.prototype.resize = function () {
          this.resizeHandler();
          window.addEventListener("resize", this.resizeHandler.bind(this));
      };
      Sketch.prototype.createScene = function () {
          // create program
          this.program = this.gl.createProgram();
          // add shaders
          this.addShader(vertex, this.gl.VERTEX_SHADER);
          this.addShader(fragment, this.gl.FRAGMENT_SHADER);
          // link & use program
          this.gl.linkProgram(this.program);
          this.gl.useProgram(this.program);
          // create fragment uniforms
          this.uResolution = new Uniform("resolution", "4f", this.program, this.gl);
          this.uMouse = new Uniform("mouse", "2f", this.program, this.gl);
          this.uTime = new Uniform("time", "1f", this.program, this.gl);
          this.uRatio = new Uniform("pixelRatio", "1f", this.program, this.gl);
          this.uThreshold = new Uniform("threshold", "2f", this.program, this.gl);
          // create position attrib
          this.billboard = new Rect(this.gl);
          this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
          this.gl.enableVertexAttribArray(this.positionLocation);
          this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, 0, 0);
      };
      Sketch.prototype.addTexture = function () {
          var that = this;
          var gl = that.gl;
          loadImages(this.imageURLs, that.start.bind(this));
      };
      Sketch.prototype.start = function (images) {
          var that = this;
          var gl = that.gl;
          // connect images
          this.imageAspect = images[0].naturalHeight / images[0].naturalWidth;
          for (var i = 0; i < images.length; i++) {
              var texture = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, texture);
              // Set the parameters so we can render any size image.
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              // Upload the image into the texture.
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images[i]);
              this.textures.push(texture);
          }
          // lookup the sampler locations.
          var uImage0Location = this.gl.getUniformLocation(this.program, "image0");
          var uImage1Location = this.gl.getUniformLocation(this.program, "image1");
          // set which texture units to render with.
          this.gl.uniform1i(uImage0Location, 0); // texture unit 0
          this.gl.uniform1i(uImage1Location, 1); // texture unit 1
          // Set each texture unit to use a particular texture.
          this.gl.activeTexture(this.gl.TEXTURE0);
          this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[0]);
          this.gl.activeTexture(this.gl.TEXTURE1);
          this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[1]);
          // start application
          this.resize();
          this.render();
      };
      Sketch.prototype.gyro = function () {
          // this.calibrated = false;
          var that = this;
          this.maxTilt = 15;
          gn.init({ gravityNormalized: true })
              .then(function () {
              gn.start(function (data) {
                  var y = data.do.gamma;
                  var x = data.do.beta;
                  that.mouseTargetY =
                      clamp(x, -that.maxTilt, that.maxTilt) / that.maxTilt;
                  that.mouseTargetX =
                      -clamp(y, -that.maxTilt, that.maxTilt) / that.maxTilt;
              });
          })
              .catch(function (e) {
              console.log("not supported");
              // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
          });
      };
      Sketch.prototype.mouseMove = function () {
          var that = this;
          document.addEventListener("mousemove", function (e) {
              var halfX = that.windowWidth / 2;
              var halfY = that.windowHeight / 2;
              that.mouseTargetX = (halfX - e.clientX) / halfX;
              that.mouseTargetY = (halfY - e.clientY) / halfY;
          });
      };
      Sketch.prototype.render = function () {
          var now = new Date().getTime();
          var currentTime = (now - this.startTime) / 1000;
          this.uTime.set(currentTime);
          // inertia
          this.mouseX += (this.mouseTargetX - this.mouseX) * 0.05;
          this.mouseY += (this.mouseTargetY - this.mouseY) * 0.05;
          this.uMouse.set(this.mouseX, this.mouseY);
          // render
          this.billboard.render(this.gl);
          requestAnimationFrame(this.render.bind(this));
      };
      return Sketch;
  }());
  function loadImage(url, callback) {
      var image = new Image();
      image.src = url;
      image.onload = callback;
      return image;
  }
  function loadImages(urls, callback) {
      var images = [];
      var imagesToLoad = urls.length;
      // Called each time an image finished loading.
      var onImageLoad = function () {
          --imagesToLoad;
          // If all the images are loaded call the callback.
          if (imagesToLoad === 0) {
              callback(images);
          }
      };
      for (var ii = 0; ii < imagesToLoad; ++ii) {
          var image = loadImage(urls[ii], onImageLoad);
          images.push(image);
      }
  }
  function Uniform(name, suffix, program, gl) {
      this.name = name;
      this.suffix = suffix;
      this.gl = gl;
      this.program = program;
      this.location = gl.getUniformLocation(program, name);
  }
  Uniform.prototype.set = function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
      }
      var method = "uniform" + this.suffix;
      var args = [this.location].concat(values);
      this.gl[method].apply(this.gl, args);
  };
  // ----- Rect ----- //
  function Rect(gl) {
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, Rect.verts, gl.STATIC_DRAW);
  }
  Rect.verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  Rect.prototype.render = function (gl) {
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  function clamp(value, lower, upper) {
      if (typeof value === 'number') {
          if (upper !== undefined) {
              value = value <= upper ? value : upper;
          }
          if (lower !== undefined) {
              value = value >= lower ? value : lower;
          }
      }
      return value;
  }

  return Sketch;

})));
