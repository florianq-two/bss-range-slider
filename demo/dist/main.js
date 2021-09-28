(()=>{var t={731:(t,e)=>{"use strict";e.__esModule=!0;var i=function(){function t(e,i,r,s,o,h,a){var u=this;if(void 0===i&&(i=0),void 0===r&&(r=100),void 0===s&&(s=16),void 0===o&&(o=!0),void 0===h&&(h=!0),void 0===a&&(a=!0),this.min=i,this.max=r,this.thumbSize=s,this.autoUpdate=o,this.emitEvents=h,this.el="string"==typeof e?document.querySelector(e):e,!this.el)throw new Error("Element was undefined");if(a){var d=this.el.querySelector(".track");if(!d)throw new Error("track was null!");d.style.cursor="pointer";var c=function(t){u.mouseX=t;var e=u.mousePercent();(Math.abs(u.sliderMin.getPercent()-e)<=Math.abs(u.sliderMax.getPercent()-e)?u.sliderMin:u.sliderMax).setPercent(e)};d.addEventListener("click",(function(t){return c(t.x)})),d.addEventListener("touchend",(function(e){return c(t.getTouchPosition(e))}))}var l=this.el.getBoundingClientRect();this.width=l.width,this.x=l.x,this.sliderMin=new n(this.el.querySelector(".lower"),this),this.sliderMax=new n(this.el.querySelector(".upper"),this),this.sliderMin.setPercent(i),this.sliderMax.setPercent(r),this.diff=this.el.querySelector(".track-diff");var f=function(){u.sliderMin.stopDrag(),u.sliderMax.stopDrag()};window.addEventListener("mousemove",(function(t){return u.mouseX=t.x})),window.addEventListener("mouseup",f),window.addEventListener("touchmove",(function(e){return u.mouseX=t.getTouchPosition(e)})),window.addEventListener("touchend",f),this.updateDiff()}return t.prototype.mousePercent=function(){if(this.autoUpdate){var t=this.el.getBoundingClientRect();this.x=t.x,this.width=t.width}var e=(this.mouseX-this.x)/this.width*100;return e<0?0:e>100?100:e},t.prototype.change=function(t){void 0===t&&(t=!1);var e=this.sliderMin.getPercent(),i=this.sliderMax.getPercent();if(i-e-1<=0)return this.sliderMin.setPercent(this.min,!1),void this.sliderMax.setPercent(this.max,!1);this.min=e,this.max=i,this.updateDiff(),this.emitEvents&&!t&&this.el.dispatchEvent(new CustomEvent("change",{detail:{target:this}}))},t.prototype.getMin=function(){return this.min},t.prototype.getMax=function(){return this.max},t.prototype.setMin=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0),t>=this.max||(this.min=t,this.sliderMin.setPercent(this.min),this.change(!e))},t.prototype.setMax=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0),t<=this.min||(this.max=t,this.sliderMax.setPercent(this.max),this.change(!e))},t.prototype.updateDiff=function(){this.diff&&(this.diff.style.left=this.min+"%",this.diff.style.width=this.max-this.min+"%")},t.getTouchPosition=function(t){var e=(t=void 0===t.originalEvent?t:t.originalEvent).touches[0]||t.changedTouches[0];return e?e.pageX:-1},t}();e.default=i;var n=function(){function t(t,e){var i=this;if(this.percent=0,this.interval=0,!t)throw new Error("Thumb was undefined");this.parent=e,this.el=t,this.el.addEventListener("mousedown",(function(t){return i.update(t)})),this.el.addEventListener("touchstart",(function(t){return i.update(t)}))}return t.prototype.update=function(t){var e=this;t.preventDefault(),t.stopPropagation(),this.interval=setInterval((function(){e.drag()}),2)},t.prototype.setPercent=function(t,e){void 0===e&&(e=!0),this.percent=t,this.el.style.left="calc("+t+"% - "+this.parent.thumbSize/2+"px)",e&&this.parent.change()},t.prototype.getPercent=function(){return this.percent},t.prototype.stopDrag=function(){this.interval&&(clearInterval(this.interval),this.interval=0)},t.prototype.drag=function(){this.setPercent(this.parent.mousePercent())},t}()},349:(t,e,i)=>{"use strict";e.__esModule=!0;var n=i(731);t.exports=n.default}},e={};new(function i(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}(349))(".bs-multi-range",50).el.addEventListener("change",(t=>console.log(t.detail.target)))})();