webpackJsonp([11],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"3OW6":function(t,e,n){"use strict";e.a={props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},mounted:function(){var t=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){t.$refs.video&&(t.videoRatio=t.$refs.video.videoWidth/t.$refs.video.videoHeight,t.setVideoSize(),t.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url("+this.img+")")},setContainerHeight:function(){this.$el.style.height=window.innerHeight+"px"},setVideoSize:function(){var t,e;this.$el.offsetWidth/this.$el.offsetHeight>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$refs.video.style.width=t?t+"px":"auto",this.$refs.video.style.height=e?e+"px":"auto"},getMediaType:function(t){return"video/"+t.split(".").pop()}}}},"4Atj":function(t,e,n){var r={"./layout.js":"YNs0"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4Atj"},"8qf4":function(t,e,n){"use strict";var r=n("/5sW"),o=n("bm7V"),a=n.n(o);r.default.use(a.a)},"9U/9":function(t,e,n){"use strict";var r=n("/5sW"),o=n("4Yho");r.default.use(o.a)},AelM:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VideoBg"},[n("video",{ref:"video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},t._l(t.sources,function(e){return n("source",{attrs:{src:e,type:t.getMediaType(e)}})})),n("div",{staticClass:"VideoBg__content"},[t._t("default")],2)])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},Bkvk:function(t,e){},F88d:function(t,e,n){"use strict";var r=n("j5de"),o=n("P+aQ"),a=!1;var i=function(t){a||n("lYrt")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=u[f]||c,l={};r.forEach(function(t){void 0!==d[t]&&(l[t]=d[t])});var h={};o.forEach(function(t){"function"==typeof d[t]&&(h[t]=d[t].bind(s))});var p=h.beforeEnter;h.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),p)return p.call(s,t)};var v=[t("router-view",a)];return void 0!==i.keepAlive&&(v=[t("keep-alive",v)]),t("transition",{props:l,on:h},v)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},IGY9:function(t,e,n){"use strict";var r=n("3OW6"),o=n("AelM"),a=!1;var i=function(t){a||n("Bkvk")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file="node_modules/vue-videobg/src/VideoBackground.vue",e.a=s.exports},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("QA5y"),f=c.keys(),d={},l=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(l=t)}),l&&(d=_(l)),"function"!=typeof d){d.modules||(d.modules={});var h=!0,p=!1,v=void 0;try{for(var m,x=i()(f);!(h=(m=x.next()).done);h=!0){var y=m.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var g=b.split(/\//);(t=C(d,g))[b=g.pop()]=_(y),t[b].namespaced=!0}}}catch(t){p=!0,v=t}finally{try{!h&&x.return&&x.return()}finally{if(p)throw v}}}var w=d instanceof Function?d:function(){return new u.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./index.js":"vdRI","./layout.js":"uhOl"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},SyWC:function(t,e){},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),d=n.n(f),l=n("mvHQ"),h=n.n(l),p=n("exGp"),v=n.n(p),m=n("fZjL"),x=n.n(m),y=n("woOf"),b=n.n(y),g=n("/5sW"),w=n("unZF"),_=n("qcny"),C=n("YLfZ"),$=(r=v()(d.a.mark(function t(e,n,r){var o,a,i=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!O.nuxt.err||n.path!==e.path,this._queryChanged=h()(e.query)!==h()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),k=(o=v()(d.a.mark(function t(e,n,r){var o,a,i,s,u,f,l,h,p=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&p.$loading.finish&&p.$loading.finish(),n.path!==t.path&&p.$loading.pause&&p.$loading.pause(),!o){o=!0;var e=[];j=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(O,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=O.nuxt.dateErr,this._hadError=!!O.nuxt.err,i=[],(s=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,L.call(this,s,O.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(O.context):_.a.layout);case 17:return u=t.sent,t.next=20,L.call(this,s,O.context,u);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return O.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(s,e,n)),t.prev=26,t.next=29,L.call(this,s,O.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!O.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(O.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,L.call(this,s,O.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!O.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,s.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,p._pathChanged&&t._path!==j[n])t._dataRefresh=!0;else if(!p._pathChanged&&p._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return p._diffQuery[t]}))}if(!p._hadError&&p._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var f=Object(C.j)(t.options.asyncData,O.context).then(function(e){Object(C.a)(t,e),p.$loading.increase&&p.$loading.increase(u)});o.push(f)}if(s){var d=t.options.fetch(O.context);d&&(d instanceof c.a||"function"==typeof d.then)||(d=c.a.resolve(d)),d.then(function(t){p.$loading.increase&&p.$loading.increase(u)}),o.push(d)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),j=s.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(h=_.a.layout)&&(h=h(O.context)),t.next=63,this.loadLayout(h);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=v()(d.a.mark(function t(e){var n,r,o,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=e.app,R=e.router,T=e.store,t.next=5,c.a.all(F(R));case 5:return n=t.sent,r=new g.default(O),o=S.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){B(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,R.currentRoute)),j=R.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(R.currentRoute.params)})),r.$loading={},S.error&&r.error(S.error),R.beforeEach($.bind(r)),R.beforeEach(k.bind(r)),R.afterEach(W),R.afterEach(N.bind(r)),!S.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:k.call(r,R.currentRoute,R.currentRoute,function(t){if(!t)return W(R.currentRoute,R.currentRoute),M.call(r,R.currentRoute),void a();R.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),j=[],O=void 0,R=void 0,T=void 0,S=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);x()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function q(t,e){return S.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function F(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=v()(d.a.mark(function t(e,r,o,a,i){var s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=q(Object(C.l)(e),S.data?S.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function L(t,e,n){var r=this,o=["layout"],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!a)return Object(C.i)(o,e)}function W(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(O.context)),this.setLayout(e)}function N(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function B(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),R.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},VyjT:function(t,e,n){"use strict";var r=n("/5sW"),o=n("Ubyc"),a=n.n(o);r.default.use(a.a)},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),m()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return p()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return j(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=j,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?R:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,l=i[f.name];if(null==l){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(d=u(l[h]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===h?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(l),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=O.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var d=t[a],l=n[2],h=n[3],p=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=l&&null!=d&&d!==l,b="+"===m||"*"===m,g="?"===m||"*"===m,w=n[2]||s,_=p||v;r.push({name:h||o++,prefix:l||"",delimiter:w,optional:g,repeat:b,partial:y,asterisk:!!x,pattern:_?S(_):x?".*":"[^"+T(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=m()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),d=n("//Fk"),l=n.n(d),h=n("fZjL"),p=n.n(h),v=n("Dd8w"),m=n.n(v),x=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return p()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return p()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return l.a.all(w(t,(e=f()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,$,k=(C=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",m()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),E=($=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,k(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,k(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return $.apply(this,arguments)});function j(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return p()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},YNs0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.store,n=t.route;e.commit("layout/SET_PAGE",n.name)}},a2bJ:function(t,e){},"b/CZ":function(t,e,n){"use strict";var r=n("/5sW"),o=n("0QuU");n.n(o);r.default.use(o,{tagName:"icon"})},bC7P:function(t,e,n){"use strict";var r=n("/5sW"),o=n("IGY9");r.default.component("video-bg",o.a)},ct3O:function(t,e,n){"use strict";var r=n("fWF+"),o=n("QhKw"),a=!1;var i=function(t){a||n("a2bJ")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},"fWF+":function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},j5de:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},lYrt:function(t,e){},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"active",linkExactActiveClass:"exact-active",scrollBehavior:l,routes:[{path:"/services",component:s,name:"services"},{path:"/about",component:u,name:"about"},{path:"/contact",component:c,name:"contact"},{path:"/portfolio",component:f,name:"portfolio"},{path:"/",component:d,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(6).then(n.bind(null,"cFpD")).then(function(t){return t.default||t})},u=function(){return n.e(9).then(n.bind(null,"hSk2")).then(function(t){return t.default||t})},c=function(){return n.e(8).then(n.bind(null,"fBFx")).then(function(t){return t.default||t})},f=function(){return n.e(7).then(n.bind(null,"O5YF")).then(function(t){return t.default||t})},d=function(){return n.e(3).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var l=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return F});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),d=n.n(f),l=n("exGp"),h=n.n(l),p=n("MU8w"),v=(n.n(p),n("/5sW")),m=n("p3jY"),x=n.n(m),y=n("mtxM"),b=n("0F0d"),g=n("HBB+"),w=n("WRRc"),_=n("ct3O"),C=n("Hot+"),$=n("yTq1"),k=n("YLfZ"),E=n("J2Ti"),j=n("xd3x"),O=n("8qf4"),R=n("b/CZ"),T=n("9U/9"),S=n("VyjT"),A=n("bC7P");n.d(e,"a",function(){return _.a});var q,F=(q=h()(o.a.mark(function t(e){var n,r,a,i,u,f,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:L,transitions:[L],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},L,{name:t}):c()({},L,t):L}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(k.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(k.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";v.default[n]||(v.default[n]=!0,v.default.use(function(){v.default.prototype.hasOwnProperty(t)||s()(v.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof j.default){t.next=15;break}return t.next=15,Object(j.default)(a.context,l);case 15:if("function"!=typeof O.default){t.next=18;break}return t.next=18,Object(O.default)(a.context,l);case 18:if("function"!=typeof R.default){t.next=21;break}return t.next=21,Object(R.default)(a.context,l);case 21:if("function"!=typeof T.default){t.next=25;break}return t.next=25,Object(T.default)(a.context,l);case 25:if("function"!=typeof S.default){t.next=28;break}return t.next=28,Object(S.default)(a.context,l);case 28:if("function"!=typeof A.default){t.next=31;break}return t.next=31,Object(A.default)(a.context,l);case 31:t.next=34;break;case 34:return t.abrupt("return",{app:a,router:n,store:r});case 35:case"end":return t.stop()}},t,this)})),function(t){return q.apply(this,arguments)});v.default.component(b.a.name,b.a),v.default.component(g.a.name,g.a),v.default.component(w.a.name,w.a),v.default.component(C.a.name,C.a),v.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var L={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},uhOl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"getters",function(){return o}),n.d(e,"mutations",function(){return a});var r=function(){return{layout:{page:"index"}}},o={page:function(t){return t.layout.page}},a={SET_PAGE:function(t,e){t.layout.page=e}}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,f=!1,d=void 0;try{for(var l,h=o()(i);!(c=(l=h.next()).done);c=!0){var p=l.value;u[p.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(p)}}catch(t){f=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(f)throw d}}e.a=u},vdRI:function(t,e){},xd3x:function(t,e,n){"use strict";var r=n("Dd8w"),o=n.n(r),a=n("/5sW"),i=n("NYxO"),s={install:function(t,e){t.mixin({computed:o()({},Object(i.mapGetters)({page:"layout/page"}))})}};a.default.use(s)},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("SyWC"),u=(n.n(s),{_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})},"_partials/Footer":function(){return n.e(5).then(n.bind(null,"nKic")).then(function(t){return t.default||t})},"_partials/Nav":function(){return n.e(2).then(n.bind(null,"JsH9")).then(function(t){return t.default||t})},"_partials/NavSlider":function(){return n.e(4).then(n.bind(null,"nn4y")).then(function(t){return t.default||t})},_video:function(){return n.e(1).then(n.bind(null,"5ueE")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"coreycoburn",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Resume site for Corey Coburn"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato"},{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);