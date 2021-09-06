!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@hotwired/stimulus")):"function"==typeof define&&define.amd?define(["@hotwired/stimulus"],e):e((t||self).stimulus)}(this,function(t){var e=function(){function t(t,e){this.identifier=t,this.name=e[0],this.descriptor=e[1],this.options=e[2]||{}}var e;return(e=[{key:"description",get:function(){return this.descriptor.includes("->")?this.descriptor.replace(/->/,"->"+this.identifier+"#"):this.identifier+"#"+this.descriptor}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,e),t}(),n=function(){function t(t){this.context=t,this.controller=t.controller;var e,n=(e=function(t){for(var e=[];t;)e.push(t),t=Object.getPrototypeOf(t);return e.reverse()}(this.controller.constructor),Array.from(e.reduce(function(t,e){return function(t,e){var n=t.actions;return Array.isArray(n)?n:[]}(e).forEach(function(e){return t.add(e)}),t},new Set)));this.actions=this.compile(n)}var n=t.prototype;return n.compile=function(t){var n=this;return t.map(function(t){return new e(n.controller.identifier,t)})},n.run=function(){var t=this;this.actions.forEach(function(e){t.resolveTargets(e).forEach(function(n){t.attachAction(n,e)})})},n.resolveTargets=function(t){var e=this.findTargets(t.name);return t.options.if?this.filterTargets(e,t.options.if):e},n.findTargets=function(t){return"element"==t?[this.controller.element]:this.controller[t+"Targets"]?[].concat(this.controller[t+"Targets"]):[]},n.filterTargets=function(t,e){var n=this;return t.filter(function(t){var r=n.controller[e];return"function"==typeof r&&(r=r.apply(n.controller,t)),0!=r})},n.attachAction=function(t,e){var n=e.description,r=(t.dataset.action||"").split(" ");r.some(function(t){return t==n})||r.push(n),t.dataset.action=r.join(" ").trim()},t}(),r=t.Context.prototype.connect,i=t.Context.prototype.targetConnected;t.Context.prototype.connect=function(){return this.actionSetter=new n(this),this.actionSetter.run(),r.apply(this,arguments)},t.Context.prototype.targetConnected=function(){return this.actionSetter.run(),i.apply(this,arguments)}});
//# sourceMappingURL=index.umd.js.map