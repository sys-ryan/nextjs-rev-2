_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{BR3j:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return Y}));var r=n("nKUr"),i=n("q1tI");function o(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var a,c=function(){},s=c(),f=Object,l=function(e){return e===s},d=function(e){return"function"==typeof e},v=function(e,t){return f.assign({},e,t)},b="undefined",h=function(){return typeof window!=b},p=new WeakMap,g=0,w=function(e){var t,n,r=typeof e,i=e&&e.constructor,o=i==Date;if(f(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=p.get(e))return t;if(t=++g+"~",p.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=w(e[n])+",";p.set(e,t)}if(i==f){t="#";for(var u=f.keys(e).sort();!l(n=u.pop());)l(e[n])||(t+=n+":"+w(e[n])+",");p.set(e,t)}}return t},y=!0,m=h(),O=typeof document!=b,j=m&&window.addEventListener?window.addEventListener.bind(window):c,E=O?document.addEventListener.bind(document):c,R=m&&window.removeEventListener?window.removeEventListener.bind(window):c,k=O?document.removeEventListener.bind(document):c,S={isOnline:function(){return y},isVisible:function(){var e=O&&document.visibilityState;return l(e)||"hidden"!==e}},x={initFocus:function(e){return E("visibilitychange",e),j("focus",e),function(){k("visibilitychange",e),R("focus",e)}},initReconnect:function(e){var t=function(){y=!0,e()},n=function(){y=!1};return j("online",t),j("offline",n),function(){R("online",t),R("offline",n)}}},T=!h()||"Deno"in window,V=function(e){return h()&&typeof window.requestAnimationFrame!=b?window.requestAnimationFrame(e):setTimeout(e,1)},_=T?i.useEffect:i.useLayoutEffect,C="undefined"!==typeof navigator&&navigator.connection,I=!T&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),P=function(e){if(d(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?w(e):"",t,e?"$swr$"+e:""]},D=new WeakMap,L=function(e,t,n,r,i,o,u){void 0===u&&(u=!0);var a=D.get(e),c=a[0],s=a[1],f=a[3],l=c[t],d=s[t];if(u&&d)for(var v=0;v<d.length;++v)d[v](n,r,i);return o&&(delete f[t],l&&l[0])?l[0](2).then((function(){return e.get(t)})):e.get(t)},N=0,F=function(){return++N},A=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,n,r,i,o,a,c,f,b,h,p,g,w,y,m,O,j,E,R,k,S;return u(this,(function(u){switch(u.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],a=!!l((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,c=!1!==o.revalidate,f=!1!==o.rollbackOnError,b=o.optimisticData,h=P(n),p=h[0],g=h[2],!p)return[2];if(w=D.get(t),y=w[2],e.length<3)return[2,L(t,p,t.get(p),s,s,c,!0)];if(m=r,j=F(),y[p]=[j,0],E=!l(b),R=t.get(p),E&&(k=d(b)?b(R):b,t.set(p,k),L(t,p,k)),d(m))try{m=m(t.get(p))}catch(x){O=x}return m&&d(m.then)?[4,m.catch((function(e){O=e}))]:[3,2];case 1:if(m=u.sent(),j!==y[p][0]){if(O)throw O;return[2,m]}O&&E&&f&&(a=!0,m=R,t.set(p,R)),u.label=2;case 2:return a&&(O||(d(a)&&(m=a(m,R)),t.set(p,m)),t.set(g,v(t.get(g),{error:O}))),y[p][1]=F(),[4,L(t,p,m,O,s,c,!!a)];case 3:if(S=u.sent(),O)throw O;return[2,a?S:m]}}))}))},M=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},J=function(e,t){if(!D.has(e)){var n=v(x,t),r={},i=A.bind(s,e),o=c;if(D.set(e,[r,{},{},{},i]),!T){var u=n.initFocus(setTimeout.bind(s,M.bind(s,r,0))),a=n.initReconnect(setTimeout.bind(s,M.bind(s,r,1)));o=function(){u&&u(),a&&a(),D.delete(e)}}return[e,i,o]}return[e,D.get(e)[4]]},W=J(new Map),q=W[0],$=W[1],B=v({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(e,t,n,r,i){var o=n.errorRetryCount,u=i.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!l(o)&&u>o||setTimeout(r,a,i)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,t){return w(e)==w(t)},isPaused:function(){return!1},cache:q,mutate:$,fallback:{}},S),G=function(e,t){var n=v(e,t);if(t){var r=e.use,i=e.fallback,o=t.use,u=t.fallback;r&&o&&(n.use=r.concat(o)),i&&u&&(n.fallback=v(i,u))}return n},X=Object(i.createContext)({}),H=function(e){return d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},K=function(){return v(B,Object(i.useContext)(X))},Q=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},U={dedupe:!0},z=(f.defineProperty((function(e){var t=e.value,n=G(Object(i.useContext)(X),t),r=t&&t.provider,o=Object(i.useState)((function(){return r?J(r(n.cache||q),t):s}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),_((function(){return o?o[2]:s}),[]),Object(i.createElement)(X.Provider,v(e,{value:n}))}),"default",{value:B}),a=function(e,t,n){var r=n.cache,a=n.compare,c=n.fallbackData,f=n.suspense,b=n.revalidateOnMount,h=n.refreshInterval,p=n.refreshWhenHidden,g=n.refreshWhenOffline,w=D.get(r),y=w[0],m=w[1],O=w[2],j=w[3],E=P(e),R=E[0],k=E[1],S=E[2],x=Object(i.useRef)(!1),C=Object(i.useRef)(!1),I=Object(i.useRef)(R),N=Object(i.useRef)(t),M=Object(i.useRef)(n),J=function(){return M.current},W=function(){return J().isVisible()&&J().isOnline()},q=function(e){return r.set(S,v(r.get(S),e))},$=r.get(R),B=l(c)?n.fallback[R]:c,G=l($)?B:$,X=r.get(S)||{},H=X.error,K=!x.current,z=function(){return K&&!l(b)?b:!J().isPaused()&&(f?!l(G)&&n.revalidateIfStale:l(G)||n.revalidateIfStale)},Y=!(!R||!t)&&(!!X.isValidating||K&&z()),Z=function(e,t){var n=Object(i.useState)({})[1],r=Object(i.useRef)(e),o=Object(i.useRef)({data:!1,error:!1,isValidating:!1}),u=Object(i.useCallback)((function(e){var i=!1,u=r.current;for(var a in e){var c=a;u[c]!==e[c]&&(u[c]=e[c],o.current[c]&&(i=!0))}i&&!t.current&&n({})}),[]);return _((function(){r.current=e})),[r,o.current,u]}({data:G,error:H,isValidating:Y},C),ee=Z[0],te=Z[1],ne=Z[2],re=Object(i.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var t,i,o,c,f,v,b,h,p,g,w,y,m;return u(this,(function(u){switch(u.label){case 0:if(t=N.current,!R||!t||C.current||J().isPaused())return[2,!1];c=!0,f=e||{},v=!j[R]||!f.dedupe,b=function(){return!C.current&&R===I.current&&x.current},h=function(){var e=j[R];e&&e[1]===o&&delete j[R]},p={isValidating:!1},g=function(){q({isValidating:!1}),b()&&ne(p)},q({isValidating:!0}),ne({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),v&&(L(r,R,ee.current.data,ee.current.error,!0),n.loadingTimeout&&!r.get(R)&&setTimeout((function(){c&&b()&&J().onLoadingSlow(R,n)}),n.loadingTimeout),j[R]=[t.apply(void 0,k),F()]),m=j[R],i=m[0],o=m[1],[4,i];case 2:return i=u.sent(),v&&setTimeout(h,n.dedupingInterval),j[R]&&j[R][1]===o?(q({error:s}),p.error=s,w=O[R],!l(w)&&(o<=w[0]||o<=w[1]||0===w[1])?(g(),v&&b()&&J().onDiscarded(R),[2,!1]):(a(ee.current.data,i)?p.data=ee.current.data:p.data=i,a(r.get(R),i)||r.set(R,i),v&&b()&&J().onSuccess(i,R,n),[3,4])):(v&&b()&&J().onDiscarded(R),[2,!1]);case 3:return y=u.sent(),h(),J().isPaused()||(q({error:y}),p.error=y,v&&b()&&(J().onError(y,R,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||d(n.shouldRetryOnError)&&n.shouldRetryOnError(y))&&W()&&J().onErrorRetry(y,R,n,re,{retryCount:(f.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return c=!1,g(),b()&&v&&L(r,R,p.data,p.error,!1),[2,!0]}}))}))}),[R]),ie=Object(i.useCallback)(A.bind(s,r,(function(){return I.current})),[]);if(_((function(){N.current=t,M.current=n})),_((function(){if(R){var e=R!==I.current,t=re.bind(s,U),n=0,r=Q(R,m,(function(e,t,n){ne(v({error:t,isValidating:n},a(ee.current.data,e)?s:{data:e}))})),i=Q(R,y,(function(e){if(0==e){var r=Date.now();J().revalidateOnFocus&&r>n&&W()&&(n=r+J().focusThrottleInterval,t())}else if(1==e)J().revalidateOnReconnect&&W()&&t();else if(2==e)return re()}));return C.current=!1,I.current=R,x.current=!0,e&&ne({data:G,error:H,isValidating:Y}),z()&&(l(G)||T?t():V(t)),function(){C.current=!0,r(),i()}}}),[R,re]),_((function(){var e;function t(){var t=d(h)?h(G):h;t&&-1!==e&&(e=setTimeout(n,t))}function n(){ee.current.error||!p&&!J().isVisible()||!g&&!J().isOnline()?t():re(U).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,p,g,re]),Object(i.useDebugValue)(G),f&&l(G)&&R)throw N.current=t,M.current=n,C.current=!1,l(H)?re(U):H;return{mutate:ie,get data(){return te.data=!0,G},get error(){return te.error=!0,H},get isValidating(){return te.isValidating=!0,Y}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=K(),r=H(e),i=r[0],o=r[1],u=r[2],c=G(n,u),s=a,f=c.use;if(f)for(var l=f.length;l-- >0;)s=f[l](s);return s(i,o||c.fetcher,c)}),Y=!0;t.default=function(e){var t=Object(i.useState)(e.sales),n=t[0],o=t[1];return z("https://nextjs-course-84ee0-default-rtdb.firebaseio.com/sales.json",(function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e)t.push({id:n,username:e[n].username,volume:e[n].volume});o(t)}))})).error?Object(r.jsx)("p",{children:"Failed to load"}):Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsxs)("li",{children:[e.username," - $",e.volume]},e.id)}))})}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},mPO8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/last-sales",function(){return n("BR3j")}])}},[["mPO8",0,1]]]);