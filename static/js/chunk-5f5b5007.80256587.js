(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5b5007","chunk-cb1baf7a","chunk-83c74884","chunk-2d0e4a7b","chunk-2d2100b7","chunk-2d0bdcd1"],{"158a":function(t,n,e){"use strict";e.r(n);e("cf54");var s={watch:{listener:function(){if(this.signals.ref===this.$options.name)try{this[this.signals.slot](this.signals.kwargs)}catch(t){console.log(t)}}}};n["default"]=s},2945:function(t,n,e){"use strict";var s=e("b1e5"),o=e.n(s);o.a},"2e19":function(t,n,e){"use strict";e.r(n);var s={props:["listener"]};n["default"]=s},"6ea7":function(t,n,e){"use strict";e.r(n);var s=e("eaf4");n["default"]=s["default"]},"90c1":function(t,n,e){"use strict";e.r(n);var s={methods:{SIGNAL_OPENSET:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"parent",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"slotToggleSettings";return{event:"openset",sender:t,receiver:n,slot:e,kwargs:{show:this.showSetting}}},SIGNAL_TOGGLE_TERM:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"splitHorizontal",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"slotToggleTerm";return{event:"toggleTerm",sender:t,receiver:n,slot:e,kwargs:{}}}}};n["default"]=s},b1e5:function(t,n,e){},b5e3:function(t,n,e){"use strict";e.r(n);var s={methods:{slotConnected:function(){this.connected=!0},slotDisconnected:function(){this.connected=!1},slotShowMemoryStatus:function(t){this.memoryStatus=t.data},slotShowSysInfo:function(t){this.sysInfo=t.data}}};n["default"]=s},cf54:function(t,n,e){var s=e("9a0d").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in o||e("f711")&&s(o,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},eaf4:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"z-index":"999"}},[e("mu-flex",{staticClass:"ide-bottom-bar",style:t.background,attrs:{"justify-content":"end","align-items":"center"}},[e("mu-flex",{staticClass:"ide-bottom-bar-left",attrs:{"justify-content":"start","align-items":"center"},on:{click:t.toggleTerm}},[e("p",{staticClass:"info"},[e("strong",[t._v(t._s(t.mpy))])]),e("p",{staticClass:"info"},[e("strong",[t._v(t._s(t.platform))])]),e("p",{staticClass:"info"},[e("strong",[t._v(t._s(t.memoryFree))])]),e("p",{staticClass:"info"},[e("strong",[t._v(t._s(t.memoryAlloced))])])]),e("mu-flex",{staticClass:"ide-bottom-bar-right",attrs:{"justify-content":"end","align-items":"center"}},[e("mu-button",{attrs:{small:"",icon:"",color:"white"},on:{click:t.toggleSettings}},[e("mu-icon",{attrs:{value:"settings"}})],1)],1)],1)],1)},o=[],i=e("90c1"),c=e("b5e3"),r=e("2e19"),a=e("158a"),u={name:"bottomBar",mixins:[i["default"],c["default"],r["default"],a["default"]],props:[],data:function(){return{showSetting:!1,connected:!1,sysInfo:null,memoryStatus:null}},mounted:function(){this.$nextTick(function(){})},computed:{background:function(){return this.connected?"background: #007acc;":"background: #414141;"},memoryFree:function(){return null!=this.memoryStatus?"Free Memory: ".concat(this.memoryStatus.free," KB"):""},memoryAlloced:function(){return null!=this.memoryStatus?"Alloced Memory: ".concat(this.memoryStatus.alloced," KB"):""},platform:function(){return null!=this.sysInfo?"".concat(this.sysInfo.platform," v").concat(this.sysInfo.version):""},mpy:function(){return null!=this.sysInfo?"MicroPython v".concat(this.sysInfo.implementation[1].join(".")):""}},methods:{toggleSettings:function(){this.$send(this.SIGNAL_OPENSET(this))},toggleTerm:function(){this.$send(this.SIGNAL_TOGGLE_TERM(this))}}},l=u,f=(e("2945"),e("048f")),m=Object(f["a"])(l,s,o,!1,null,"3f09efd1",null);m.options.__file="BottomBar.vue";n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5f5b5007.80256587.js.map