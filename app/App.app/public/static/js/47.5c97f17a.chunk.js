(this["webpackJsonpcapacitor-testapp"]=this["webpackJsonpcapacitor-testapp"]||[]).push([[47],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"CameraWeb",(function(){return f})),r.d(t,"Camera",(function(){return m}));var a=r(2),n=r.n(a),i=r(4),c=r(8),o=r(9),s=r(11),u=r(12),p=r(7),l=r(83),f=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"getPhoto",value:function(){var e=Object(i.a)(n.a.mark((function e(t){var r=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(n.a.mark((function e(a,c){var o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.webUseInput){e.next=4;break}r.fileInputExperience(t,a),e.next=21;break;case 4:if(!customElements.get("pwa-camera-modal")){e.next=19;break}return o=document.createElement("pwa-camera-modal"),document.body.appendChild(o),e.prev=7,e.next=10,o.componentOnReady();case 10:o.addEventListener("onPhoto",function(){var e=Object(i.a)(n.a.mark((function e(i){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(s=i.detail)){e.next=5;break}c(new p.b("User cancelled photos app")),e.next=14;break;case 5:if(!(s instanceof Error)){e.next=9;break}c(s),e.next=14;break;case 9:return e.t0=a,e.next=12,r._getCameraPhoto(s,t);case 12:e.t1=e.sent,(0,e.t0)(e.t1);case 14:o.dismiss(),document.body.removeChild(o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.present(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),r.fileInputExperience(t,a);case 17:e.next=21;break;case 19:console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),r.fileInputExperience(t,a);case 21:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fileInputExperience",value:function(e,t){var r=document.querySelector("#_capacitor-camera-input"),a=function(){var e;null===(e=r.parentNode)||void 0===e||e.removeChild(r)};r||((r=document.createElement("input")).id="_capacitor-camera-input",r.type="file",document.body.appendChild(r)),r.accept="image/*",r.capture=!0,e.source===l.c.Photos||e.source===l.c.Prompt?r.removeAttribute("capture"):e.direction===l.a.Front?r.capture="user":e.direction===l.a.Rear&&(r.capture="environment"),r.addEventListener("change",(function(n){var i=r.files[0],c="jpeg";if("image/png"===i.type?c="png":"image/gif"===i.type&&(c="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){var o=new FileReader;o.addEventListener("load",(function(){if("dataUrl"===e.resultType)t({dataUrl:o.result,format:c});else if("base64"===e.resultType){var r=o.result.split(",")[1];t({base64String:r,format:c})}a()})),o.readAsDataURL(i)}else t({webPath:URL.createObjectURL(i),format:c}),a()})),r.click()}},{key:"_getCameraPhoto",value:function(e,t){return new Promise((function(r,a){var n=new FileReader,i=e.type.split("/")[1];"uri"===t.resultType?r({webPath:URL.createObjectURL(e),format:i}):(n.readAsDataURL(e),n.onloadend=function(){var e=n.result;"dataUrl"===t.resultType?r({dataUrl:e,format:i}):r({base64String:e.split(",")[1],format:i})},n.onerror=function(e){a(e)})}))}},{key:"checkPermissions",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof navigator&&navigator.permissions){e.next=2;break}throw this.unavailable("Permissions API not available in this browser");case 2:return e.prev=2,e.next=5,window.navigator.permissions.query({name:"camera"});case 5:return t=e.sent,e.abrupt("return",{camera:t.state,photos:"granted"});case 9:throw e.prev=9,e.t0=e.catch(2),this.unavailable("Camera permissions are not available in this browser");case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"requestPermissions",value:function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw this.unimplemented("Not implemented on web.");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(p.e),m=new f}}]);
//# sourceMappingURL=47.5c97f17a.chunk.js.map