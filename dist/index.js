var t=require("@hotwired/stimulus"),r=function(){function t(t,r){this.identifier=t,this.name=r[0],this.descriptor=r[1],this.options=r[2]||{}}var r;return(r=[{key:"description",get:function(){return this.descriptor.includes("->")?this.descriptor.replace(/->/,"->"+this.identifier+"#"):this.identifier+"#"+this.descriptor}}])&&function(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,r),t}(),e=function(){function t(t){var e=this;this.context=t,this.controller=t.controller;var n,i=(n=function(t){for(var r=[];t;)r.push(t),t=Object.getPrototypeOf(t);return r.reverse()}(this.controller.constructor),Array.from(n.reduce(function(t,r){return function(t,r){var e=t.actions;return Array.isArray(e)?e:[]}(r).forEach(function(r){return t.add(r)}),t},new Set)));this.actions=i.map(function(t){return new r(e.controller.identifier,t)})}var e=t.prototype;return e.run=function(){var t=this;this.actions.forEach(function(r){t.resolveTargets(r).forEach(function(e){t.attachAction(e,r)})})},e.resolveTargets=function(t){var r=this.findTargets(t.name);return t.options.if?this.filterTargets(r,t.options.if):r},e.findTargets=function(t){return"element"==t?[this.controller.element]:this.controller[t+"Targets"]?[].concat(this.controller[t+"Targets"]):[]},e.filterTargets=function(t,r){var e=this;return t.filter(function(t){var n=e.controller[r];return"function"==typeof n&&(n=n.apply(e.controller,t)),0!=n})},e.attachAction=function(t,r){var e=r.description,n=(t.dataset.action||"").split(" ");n.some(function(t){return t==e})||n.push(e),t.dataset.action=n.join(" ").trim()},t}(),n=t.Context.prototype.connect,i=t.Context.prototype.targetConnected;t.Context.prototype.connect=function(){return this.actionSetter=new e(this),this.actionSetter.run(),n.apply(this,arguments)},t.Context.prototype.targetConnected=function(){return this.actionSetter.run(),i.apply(this,arguments)};
//# sourceMappingURL=index.js.map
