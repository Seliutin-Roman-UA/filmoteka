!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a),a.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}}));var o={};function c(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,s,"next",t)}function s(t){c(o,r,a,i,s,"throw",t)}i(void 0)}))}};var s={},u=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(t,e,n){var r=l;return function(a,o){if(r===g)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw o;return F()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var s=p(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",g="executing",h="completed",d={};function v(){}function m(){}function y(){}var _={};s(_,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==n&&r.call(b,o)&&(_=b);var x=y.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(a,o,i,c){var s=p(t[a],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=p(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=y,s(x,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new k(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(s);try{regeneratorRuntime=u}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f.default(t,e,n[e])}))}return t};var l,f=(l=a("hKHmD"))&&l.__esModule?l:{default:l};function g(t){return h.apply(this,arguments)}function h(){return(h=t(o)(t(s).mark((function e(n){var r,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=09fddff29ca445d38e447ae99342142f&page=".concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.log("i am so sorry",t.t0.message);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=t(o)(t(s).mark((function e(n){var r,a,o,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="","movie"===n&&(r="https://api.themoviedb.org/3/genre/movie/list?api_key=09fddff29ca445d38e447ae99342142f&language=en-US"),"tv"===n&&(r="https://api.themoviedb.org/3/genre/tv/list?api_key=09fddff29ca445d38e447ae99342142f&language=en-US"),t.prev=3,t.next=6,fetch(r);case 6:return a=t.sent,t.next=9,a.json();case 9:return o=t.sent,i={},o.genres.forEach((function(t){return i[t.id]=t.name})),t.abrupt("return",i);case 15:t.prev=15,t.t0=t.catch(3),console.log("i am so sorry",t.t0.message);case 18:case"end":return t.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function m(t,e){return y.apply(this,arguments)}function y(){return(y=t(o)(t(s).mark((function e(n,r){var a,o,i;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="","movie"===n&&(a="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=09fddff29ca445d38e447ae99342142f")),"tv"===n&&(a="https://api.themoviedb.org/3/tv/".concat(r,"?api_key=09fddff29ca445d38e447ae99342142f")),t.prev=3,t.next=6,fetch(a);case 6:return o=t.sent,t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:t.prev=13,t.t0=t.catch(3),console.log("i am so sorry",t.t0.message);case 16:case"end":return t.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function _(t){return w.apply(this,arguments)}function w(){return(w=t(o)(t(s).mark((function e(n){var r,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.currentTarget.dataset.id,a=n.currentTarget.dataset.media_type,t.next=4,m(a,r);case 4:b(t.sent,a);case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function b(t,e){console.log("about film!!! >>>> ",t,e);var n="",r="";switch(e){case"movie":n=0===t.genres.length?"":t.genres.map((function(t){return t.name})).join(", "),r='<img class="modal__img" src="'.concat(t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"./noimage.c59940df.jpg",'" alt="poster">')+'<div modal__info><p class="modal__name">'.concat(t.title,'</p>\n            <p class="modal__voite"> ').concat(t.vote_average,"/").concat(t.vote_count,'</p>\n            <p class="modal__popularity"> ').concat(t.popularity,'</p>\n            <p class="modal__original_title"> ').concat(t.original_title,'</p>\n            <p class="modal__ganre">').concat(n,'</p>\n            <p class="modal__overview">').concat(t.overview,"</p></dir>");break;case"tv":n=0===t.genres.length?"":t.genres.map((function(t){return t.name})).join(", "),r='<img class="modal__img" src="'.concat(t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"./noimage.c59940df.jpg",'" alt="poster">\n            <div modal__info><p class="modal__name">').concat(t.name,'</p>\n            <p class="modal__voite"> ').concat(t.vote_average,"/").concat(t.vote_count,'</p>\n            <p class="modal__popularity"> ').concat(t.popularity,'</p>\n            <p class="modal__original_title"> ').concat(t.original_name,'</p>\n            <p class="modal__ganre">').concat(n,'</p>\n            <p class="modal__overview">').concat(t.overview,"</p></dir>")}E.modal.innerHTML=r}function x(){var t="";0===L.pagination.arrowLeft?t+='<span class="pag_arrowleft grey">\n                    <svg class="btn__icon">\n                      <use href="#arrowleft"></use>\n                    </svg></span>':t+='<span class="pag_arrowleft">\n                    <svg class="btn__icon">\n                      <use href="#arrowleft"></use>\n                    </svg></span>',1===L.pagination.buttonStart&&(t+='<span class="pag_block" data-page="1">1</span>'),1===L.pagination.gapLeft&&(t+='<span class="pag_dots">...</span>'),L.pagination.button.forEach((function(e,n){1===e&&(n+1===Number(L.currentPage)?t+='<span class="pag_block active" data-page="'.concat(n+1,'">').concat(n+1,"</span>"):t+='<span class="pag_block " data-page="'.concat(n+1,'">').concat(n+1,"</span>"))})),1===L.pagination.gapRight&&(t+='<span class="pag_dots">...</span>'),1===L.pagination.buttonFinish&&(t+='<span class="pag_block" data-page="'.concat(L.totalPages,'">').concat(L.totalPages,"</span>")),0===L.pagination.arrowRight?t+='<span class="pag_arrowright grey">\n                    <svg class="btn__icon">\n                      <use href="#arrowright"></use>\n                    </svg></span>':t+='<span class="pag_arrowright">\n                    <svg class="btn__icon">\n                      <use href="#arrowright"></use>\n                    </svg></span>',E.pagination.innerHTML=t,document.querySelector(".pag_arrowleft").addEventListener("click",(function(){L.changeCurrentPage(L.currentPage-1)})),document.querySelector(".pag_arrowright").addEventListener("click",(function(){L.changeCurrentPage(L.currentPage+1)})),document.querySelectorAll(".pag_block").forEach((function(t){t.addEventListener("click",(function(t){console.log(t.target.dataset.page),L.changeCurrentPage(t.target.dataset.page)}))}))}var L={currentPage:1,totalPages:1,pagination:{arrowLeft:null,buttonStart:null,gapLeft:null,button:[],gapRight:null,buttonFinish:null,arrowRight:null},query:null,fillpaginationButton:function(){var t,e,n=this.currentPage-1,r=this.totalPages-1;if(this.totalPages<5){for(this.pagination.button=[],i=0;i<=r;i++)this.pagination.button[i]=1;return this.pagination.arrowLeft=0,this.pagination.buttonStart=0,this.pagination.gapLeft=0,this.pagination.gapRight=0,this.pagination.buttonFinish=0,void(this.pagination.arrowRight=0)}t=n-2,e=n+2,n<3&&(t=0,e=4),r-n<3&&(t=r-4,e=r);for(var a=0;a<=r;a++)this.pagination.button[a]=0,a>=t&&a<=e&&(this.pagination.button[a]=1);this.pagination.arrowLeft=n>0?1:0,this.pagination.buttonStart=t>=2?1:0,this.pagination.gapLeft=t>=1?1:0,this.pagination.gapRight=r-e>0?1:0,this.pagination.buttonFinish=r-e<=1?0:1,this.pagination.arrowRight=e<r?1:0},changeCurrentPage:function(e){return t(o)(t(s).mark((function n(){var r,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=Number(e))<1)){t.next=3;break}return t.abrupt("return","reject");case 3:if(!(r>this.totalPages)){t.next=5;break}return t.abrupt("return","reject");case 5:return this.currentPage=r,t.next=8,this.query(r);case 8:a=t.sent,L.totalPages=a.total_pages,this.fillpaginationButton(),n=a.results,E.gallary.innerHTML=n.map((function(t){var e="";switch(t.media_type){case"movie":return e=0===t.genre_ids.length?"":t.genre_ids.map((function(t){return k[t]})).join(", "),' <li class="card" data-id="'.concat(t.id,'" data-media_type="').concat(t.media_type,'">\n            <img class="card__img" src="').concat(t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"./noimage.c59940df.jpg",'" alt="poster">\n            <p class="card__name">').concat(t.title,'</p>\n            <p class="card__info"><span class="card__ganre">').concat(e," |</span>\n            <span>").concat(t.release_date?t.release_date.slice(0,4):"unknown",'</span>\n            <span class="card__rating"> ').concat(t.popularity?t.popularity.toFixed(1):"unknown","</span></p>\n            </li>");case"tv":return e=0===t.genre_ids.length?"":t.genres=t.genre_ids.map((function(t){return j[t]})).join(", "),' <li class="card" data-id="'.concat(t.id,'" data-media_type="').concat(t.media_type,'">\n            <img class="card__img" src="').concat(t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"./noimage.c59940df.jpg",'" alt="poster">\n            <p class="card__name">').concat(t.name,'</p>\n            <p class="card__info"><span class="card__ganre">').concat(e," |</span>\n            <span>").concat(t.first_air_date?t.first_air_date.slice(0,4):"unknown",'</span>\n            <span class="card__rating"> ').concat(t.popularity?t.popularity.toFixed(1):"unknown","</span></p>\n            </li>");case"person":return' <li class="card">\n            <img class="card__img" src="'.concat(t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"./noimage.c59940df.jpg",'" alt="poster">\n            <p class="card__name">').concat(t.name,'</p>\n            <p class="card__info"><span class="card__ganre">person |</span>\n                 <span class="card__rating"> ').concat(t.popularity?t.popularity.toFixed(1):"unknown","</span></p>\n            </li>")}})).join(""),document.querySelectorAll(".card").forEach((function(t){return t.addEventListener("click",_)})),x();case 13:case"end":return t.stop()}var n}),n,this)}))).apply(this)}},k={},j={},E={gallary:document.querySelector(".gallery"),pagination:document.querySelector(".pagination"),searchForm:document.querySelector(".searchform"),modal:document.querySelector(".modal")};function P(){return(P=t(o)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d("movie");case 2:return k=t.sent,t.next=5,d("tv");case 5:j=t.sent,L.query=g,L.changeCurrentPage(1);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function O(e){e.preventDefault();var n,r,a=e.currentTarget.elements.string.value;L.query=a?(n=a,r=t(o)(t(s).mark((function e(r){var a,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=09fddff29ca445d38e447ae99342142f&page=".concat(r,"&query=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",{total_pages:o.total_pages,results:o.results.map((function(e){return t(p)({},e,{media_type:"movie"})}))});case 10:e.prev=10,e.t0=e.catch(0),console.log("i am so sorry",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(t){return r.apply(this,arguments)}):g,L.changeCurrentPage(1)}E.searchForm.addEventListener("submit",O),E.searchForm.addEventListener("focusout",O),function(){P.apply(this,arguments)}()}();
//# sourceMappingURL=index.4d5291f8.js.map