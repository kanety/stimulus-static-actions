!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@hotwired/stimulus")):"function"==typeof define&&define.amd?define(["@hotwired/stimulus"],n):n((t||self).stimulus)}(this,function(t){var n=function(){function t(t,n){this.identifier=t,this.name=n[0],this.descriptor=n[1],this.options=n[2]||{}}var n;return(n=[{key:"description",get:function(){return this.descriptor.includes("->")?this.descriptor.replace(/->/,"->"+this.identifier+"#"):this.identifier+"#"+this.descriptor}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,n),t}(),e=function(){function t(t){this.context=t,this.controller=t.controller,this.actions=[]}var e=t.prototype;return e.run=function(){var t;this.add((t=function(t){for(var n=[];t;)n.push(t),t=Object.getPrototypeOf(t);return n.reverse()}(this.controller.constructor),Array.from(t.reduce(function(t,n){return function(t,n){var e=t.actions;return Array.isArray(e)?e:[]}(n).forEach(function(n){return t.add(n)}),t},new Set))))},e.add=function(t){var e=this;t.map(function(t){return new n(e.controller.identifier,t)}).forEach(function(t){e.resolveTargets(t).forEach(function(n){e.addAction(n,t)}),e.actions.push(t)})},e.remove=function(t){var e=this;t.map(function(t){return new n(e.controller.identifier,t)}).forEach(function(t){e.resolveTargets(t).forEach(function(n){e.removeAction(n,t)}),e.actions=e.actions.filter(function(n){return n.description!=t.description})})},e.resolveTargets=function(t){var n=this.findTargets(t.name);return t.options.if?this.filterTargets(n,t.options.if):n},e.findTargets=function(t){return"element"==t?[this.controller.element]:this.controller[t+"Targets"]?[].concat(this.controller[t+"Targets"]):[]},e.filterTargets=function(t,n){var e=this;return t.filter(function(t){var r=e.controller[n];return"function"==typeof r&&(r=r.apply(e.controller,t)),0!=r})},e.addAction=function(t,n){var e=n.description,r=(t.dataset.action||"").split(" ");r.some(function(t){return t==e})||r.push(e),t.dataset.action=r.join(" ").trim()},e.removeAction=function(t,n){var e=n.description,r=(t.dataset.action||"").split(" ");r=r.filter(function(t){return t!=e}),t.dataset.action=r.join(" ").trim()},t}(),r=t.Context.prototype.connect,i=t.Context.prototype.targetConnected;t.Context.prototype.connect=function(){return this.actionSet=new e(this),this.actionSet.run(),r.apply(this,arguments)},t.Context.prototype.targetConnected=function(){return this.actionSet.run(),i.apply(this,arguments)}});
//# sourceMappingURL=index.umd.js.map
