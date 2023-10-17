import{j as P}from"./jsx-runtime-6eef64cc.js";import{R as cn,r as B}from"./index-c013ead5.js";import{b as Dn,i as tn,d as sn,e as fn,f as $n,o as Mn,g as Rn,c as W,a as In,s as dn}from"./transform-6b0c1372.js";import"./commonjsHelpers-725317a4.js";function _(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Bn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function En(n){let t,r,e;n.length!==2?(t=_,r=(u,s)=>_(n(u),s),e=(u,s)=>n(u)-s):(t=n===_||n===Bn?n:Hn,r=n,e=n);function a(u,s,i=0,h=u.length){if(i<h){if(t(s,s)!==0)return h;do{const f=i+h>>>1;r(u[f],s)<0?i=f+1:h=f}while(i<h)}return i}function o(u,s,i=0,h=u.length){if(i<h){if(t(s,s)!==0)return h;do{const f=i+h>>>1;r(u[f],s)<=0?i=f+1:h=f}while(i<h)}return i}function l(u,s,i=0,h=u.length){const f=a(u,s,i,h-1);return f>i&&e(u[f-1],s)>-e(u[f],s)?f-1:f}return{left:a,center:l,right:o}}function Hn(){return 0}function zn(n){return n===null?NaN:+n}const Ln=En(_),jn=Ln.right;En(zn).center;const Gn=jn,Wn=Math.sqrt(50),On=Math.sqrt(10),qn=Math.sqrt(2);function Q(n,t,r){const e=(t-n)/Math.max(0,r),a=Math.floor(Math.log10(e)),o=e/Math.pow(10,a),l=o>=Wn?10:o>=On?5:o>=qn?2:1;let u,s,i;return a<0?(i=Math.pow(10,-a)/l,u=Math.round(n*i),s=Math.round(t*i),u/i<n&&++u,s/i>t&&--s,i=-i):(i=Math.pow(10,a)*l,u=Math.round(n/i),s=Math.round(t/i),u*i<n&&++u,s*i>t&&--s),s<u&&.5<=r&&r<2?Q(n,t,r*2):[u,s,i]}function _n(n,t,r){if(t=+t,n=+n,r=+r,!(r>0))return[];if(n===t)return[n];const e=t<n,[a,o,l]=e?Q(t,n,r):Q(n,t,r);if(!(o>=a))return[];const u=o-a+1,s=new Array(u);if(e)if(l<0)for(let i=0;i<u;++i)s[i]=(o-i)/-l;else for(let i=0;i<u;++i)s[i]=(o-i)*l;else if(l<0)for(let i=0;i<u;++i)s[i]=(a+i)/-l;else for(let i=0;i<u;++i)s[i]=(a+i)*l;return s}function en(n,t,r){return t=+t,n=+n,r=+r,Q(n,t,r)[2]}function Qn(n,t,r){t=+t,n=+n,r=+r;const e=t<n,a=e?en(t,n,r):en(n,t,r);return(e?-1:1)*(a<0?1/-a:a)}function Xn(n,t){let r;if(t===void 0)for(const e of n)e!=null&&(r<e||r===void 0&&e>=e)&&(r=e);else{let e=-1;for(let a of n)(a=t(a,++e,n))!=null&&(r<a||r===void 0&&a>=a)&&(r=a)}return r}function Yn(n,t,r){n=+n,t=+t,r=(a=arguments.length)<2?(t=n,n=0,1):a<3?1:+r;for(var e=-1,a=Math.max(0,Math.ceil((t-n)/r))|0,o=new Array(a);++e<a;)o[e]=n+e*r;return o}function Un(n){return n}var K=1,nn=2,rn=3,j=4,hn=1e-6;function Zn(n){return"translate("+n+",0)"}function Jn(n){return"translate(0,"+n+")"}function Kn(n){return t=>+n(t)}function nt(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),r=>+n(r)+t}function tt(){return!this.__axis}function Sn(n,t){var r=[],e=null,a=null,o=6,l=6,u=3,s=typeof window<"u"&&window.devicePixelRatio>1?0:.5,i=n===K||n===j?-1:1,h=n===j||n===nn?"x":"y",f=n===K||n===rn?Zn:Jn;function c(g){var p=e??(t.ticks?t.ticks.apply(t,r):t.domain()),k=a??(t.tickFormat?t.tickFormat.apply(t,r):Un),V=Math.max(o,0)+u,N=t.range(),E=+N[0]+s,M=+N[N.length-1]+s,b=(t.bandwidth?nt:Kn)(t.copy(),s),T=g.selection?g.selection():g,A=T.selectAll(".domain").data([null]),S=T.selectAll(".tick").data(p,t).order(),F=S.exit(),R=S.enter().append("g").attr("class","tick"),C=S.select("line"),m=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(R),C=C.merge(R.append("line").attr("stroke","currentColor").attr(h+"2",i*o)),m=m.merge(R.append("text").attr("fill","currentColor").attr(h,i*V).attr("dy",n===K?"0em":n===rn?"0.71em":"0.32em")),g!==T&&(A=A.transition(g),S=S.transition(g),C=C.transition(g),m=m.transition(g),F=F.transition(g).attr("opacity",hn).attr("transform",function(v){return isFinite(v=b(v))?f(v+s):this.getAttribute("transform")}),R.attr("opacity",hn).attr("transform",function(v){var y=this.parentNode.__axis;return f((y&&isFinite(y=y(v))?y:b(v))+s)})),F.remove(),A.attr("d",n===j||n===nn?l?"M"+i*l+","+E+"H"+s+"V"+M+"H"+i*l:"M"+s+","+E+"V"+M:l?"M"+E+","+i*l+"V"+s+"H"+M+"V"+i*l:"M"+E+","+s+"H"+M),S.attr("opacity",1).attr("transform",function(v){return f(b(v)+s)}),C.attr(h+"2",i*o),m.attr(h,i*V).text(k),T.filter(tt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===nn?"start":n===j?"end":"middle"),T.each(function(){this.__axis=b})}return c.scale=function(g){return arguments.length?(t=g,c):t},c.ticks=function(){return r=Array.from(arguments),c},c.tickArguments=function(g){return arguments.length?(r=g==null?[]:Array.from(g),c):r.slice()},c.tickValues=function(g){return arguments.length?(e=g==null?null:Array.from(g),c):e&&e.slice()},c.tickFormat=function(g){return arguments.length?(a=g,c):a},c.tickSize=function(g){return arguments.length?(o=l=+g,c):o},c.tickSizeInner=function(g){return arguments.length?(o=+g,c):o},c.tickSizeOuter=function(g){return arguments.length?(l=+g,c):l},c.tickPadding=function(g){return arguments.length?(u=+g,c):u},c.offset=function(g){return arguments.length?(s=+g,c):s},c}function et(n){return Sn(rn,n)}function rt(n){return Sn(j,n)}function at(n,t){t||(t=[]);var r=n?Math.min(t.length,n.length):0,e=t.slice(),a;return function(o){for(a=0;a<r;++a)e[a]=n[a]*(1-o)+t[a]*o;return e}}function it(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ot(n,t){var r=t?t.length:0,e=n?Math.min(r,n.length):0,a=new Array(e),o=new Array(r),l;for(l=0;l<e;++l)a[l]=on(n[l],t[l]);for(;l<r;++l)o[l]=t[l];return function(u){for(l=0;l<e;++l)o[l]=a[l](u);return o}}function lt(n,t){var r=new Date;return n=+n,t=+t,function(e){return r.setTime(n*(1-e)+t*e),r}}function ut(n,t){var r={},e={},a;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in n?r[a]=on(n[a],t[a]):e[a]=t[a];return function(o){for(a in r)e[a]=r[a](o);return e}}function on(n,t){var r=typeof t,e;return t==null||r==="boolean"?Dn(t):(r==="number"?tn:r==="string"?(e=sn(t))?(t=e,fn):$n:t instanceof sn?fn:t instanceof Date?lt:it(t)?at:Array.isArray(t)?ot:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ut:tn)(n,t)}function ct(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}function st(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function X(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,e=n.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+n.slice(r+1)]}function z(n){return n=X(Math.abs(n)),n?n[1]:NaN}function ft(n,t){return function(r,e){for(var a=r.length,o=[],l=0,u=n[0],s=0;a>0&&u>0&&(s+u+1>e&&(u=Math.max(1,e-s)),o.push(r.substring(a-=u,a+u)),!((s+=u+1)>e));)u=n[l=(l+1)%n.length];return o.reverse().join(t)}}function dt(n){return function(t){return t.replace(/[0-9]/g,function(r){return n[+r]})}}var ht=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Y(n){if(!(t=ht.exec(n)))throw new Error("invalid format: "+n);var t;return new ln({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Y.prototype=ln.prototype;function ln(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}ln.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function gt(n){n:for(var t=n.length,r=1,e=-1,a;r<t;++r)switch(n[r]){case".":e=a=r;break;case"0":e===0&&(e=r),a=r;break;default:if(!+n[r])break n;e>0&&(e=0);break}return e>0?n.slice(0,e)+n.slice(a+1):n}var bn;function mt(n,t){var r=X(n,t);if(!r)return n+"";var e=r[0],a=r[1],o=a-(bn=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,l=e.length;return o===l?e:o>l?e+new Array(o-l+1).join("0"):o>0?e.slice(0,o)+"."+e.slice(o):"0."+new Array(1-o).join("0")+X(n,Math.max(0,t+o-1))[0]}function gn(n,t){var r=X(n,t);if(!r)return n+"";var e=r[0],a=r[1];return a<0?"0."+new Array(-a).join("0")+e:e.length>a+1?e.slice(0,a+1)+"."+e.slice(a+1):e+new Array(a-e.length+2).join("0")}const mn={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:st,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>gn(n*100,t),r:gn,s:mt,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function wn(n){return n}var pn=Array.prototype.map,xn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function wt(n){var t=n.grouping===void 0||n.thousands===void 0?wn:ft(pn.call(n.grouping,Number),n.thousands+""),r=n.currency===void 0?"":n.currency[0]+"",e=n.currency===void 0?"":n.currency[1]+"",a=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?wn:dt(pn.call(n.numerals,String)),l=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",s=n.nan===void 0?"NaN":n.nan+"";function i(f){f=Y(f);var c=f.fill,g=f.align,p=f.sign,k=f.symbol,V=f.zero,N=f.width,E=f.comma,M=f.precision,b=f.trim,T=f.type;T==="n"?(E=!0,T="g"):mn[T]||(M===void 0&&(M=12),b=!0,T="g"),(V||c==="0"&&g==="=")&&(V=!0,c="0",g="=");var A=k==="$"?r:k==="#"&&/[boxX]/.test(T)?"0"+T.toLowerCase():"",S=k==="$"?e:/[%p]/.test(T)?l:"",F=mn[T],R=/[defgprs%]/.test(T);M=M===void 0?6:/[gprs]/.test(T)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function C(m){var v=A,y=S,$,Z,I;if(T==="c")y=F(m)+y,m="";else{m=+m;var d=m<0||1/m<0;if(m=isNaN(m)?s:F(Math.abs(m),M),b&&(m=gt(m)),d&&+m==0&&p!=="+"&&(d=!1),v=(d?p==="("?p:u:p==="-"||p==="("?"":p)+v,y=(T==="s"?xn[8+bn/3]:"")+y+(d&&p==="("?")":""),R){for($=-1,Z=m.length;++$<Z;)if(I=m.charCodeAt($),48>I||I>57){y=(I===46?a+m.slice($+1):m.slice($))+y,m=m.slice(0,$);break}}}E&&!V&&(m=t(m,1/0));var w=v.length+m.length+y.length,x=w<N?new Array(N-w+1).join(c):"";switch(E&&V&&(m=t(x+m,x.length?N-y.length:1/0),x=""),g){case"<":m=v+m+y+x;break;case"=":m=v+x+m+y;break;case"^":m=x.slice(0,w=x.length>>1)+v+m+y+x.slice(w);break;default:m=x+v+m+y;break}return o(m)}return C.toString=function(){return f+""},C}function h(f,c){var g=i((f=Y(f),f.type="f",f)),p=Math.max(-8,Math.min(8,Math.floor(z(c)/3)))*3,k=Math.pow(10,-p),V=xn[8+p/3];return function(N){return g(k*N)+V}}return{format:i,formatPrefix:h}}var O,Fn,Cn;pt({thousands:",",grouping:[3],currency:["$",""]});function pt(n){return O=wt(n),Fn=O.format,Cn=O.formatPrefix,O}function xt(n){return Math.max(0,-z(Math.abs(n)))}function Tt(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(z(t)/3)))*3-z(Math.abs(n)))}function yt(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,z(t)-z(n))+1}function An(){var n=Mn().unknown(void 0),t=n.domain,r=n.range,e=0,a=1,o,l,u=!1,s=0,i=0,h=.5;delete n.unknown;function f(){var c=t().length,g=a<e,p=g?a:e,k=g?e:a;o=(k-p)/Math.max(1,c-s+i*2),u&&(o=Math.floor(o)),p+=(k-p-o*(c-s))*h,l=o*(1-s),u&&(p=Math.round(p),l=Math.round(l));var V=Yn(c).map(function(N){return p+o*N});return r(g?V.reverse():V)}return n.domain=function(c){return arguments.length?(t(c),f()):t()},n.range=function(c){return arguments.length?([e,a]=c,e=+e,a=+a,f()):[e,a]},n.rangeRound=function(c){return[e,a]=c,e=+e,a=+a,u=!0,f()},n.bandwidth=function(){return l},n.step=function(){return o},n.round=function(c){return arguments.length?(u=!!c,f()):u},n.padding=function(c){return arguments.length?(s=Math.min(1,i=+c),f()):s},n.paddingInner=function(c){return arguments.length?(s=Math.min(1,c),f()):s},n.paddingOuter=function(c){return arguments.length?(i=+c,f()):i},n.align=function(c){return arguments.length?(h=Math.max(0,Math.min(1,c)),f()):h},n.copy=function(){return An(t(),[e,a]).round(u).paddingInner(s).paddingOuter(i).align(h)},Rn.apply(f(),arguments)}function kt(n){return function(){return n}}function Nt(n){return+n}var Tn=[0,1];function H(n){return n}function an(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:kt(isNaN(t)?NaN:.5)}function vt(n,t){var r;return n>t&&(r=n,n=t,t=r),function(e){return Math.max(n,Math.min(t,e))}}function Vt(n,t,r){var e=n[0],a=n[1],o=t[0],l=t[1];return a<e?(e=an(a,e),o=r(l,o)):(e=an(e,a),o=r(o,l)),function(u){return o(e(u))}}function Mt(n,t,r){var e=Math.min(n.length,t.length)-1,a=new Array(e),o=new Array(e),l=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++l<e;)a[l]=an(n[l],n[l+1]),o[l]=r(t[l],t[l+1]);return function(u){var s=Gn(n,u,1,e)-1;return o[s](a[s](u))}}function Rt(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Et(){var n=Tn,t=Tn,r=on,e,a,o,l=H,u,s,i;function h(){var c=Math.min(n.length,t.length);return l!==H&&(l=vt(n[0],n[c-1])),u=c>2?Mt:Vt,s=i=null,f}function f(c){return c==null||isNaN(c=+c)?o:(s||(s=u(n.map(e),t,r)))(e(l(c)))}return f.invert=function(c){return l(a((i||(i=u(t,n.map(e),tn)))(c)))},f.domain=function(c){return arguments.length?(n=Array.from(c,Nt),h()):n.slice()},f.range=function(c){return arguments.length?(t=Array.from(c),h()):t.slice()},f.rangeRound=function(c){return t=Array.from(c),r=ct,h()},f.clamp=function(c){return arguments.length?(l=c?!0:H,h()):l!==H},f.interpolate=function(c){return arguments.length?(r=c,h()):r},f.unknown=function(c){return arguments.length?(o=c,f):o},function(c,g){return e=c,a=g,h()}}function St(){return Et()(H,H)}function bt(n,t,r,e){var a=Qn(n,t,r),o;switch(e=Y(e??",f"),e.type){case"s":{var l=Math.max(Math.abs(n),Math.abs(t));return e.precision==null&&!isNaN(o=Tt(a,l))&&(e.precision=o),Cn(e,l)}case"":case"e":case"g":case"p":case"r":{e.precision==null&&!isNaN(o=yt(a,Math.max(Math.abs(n),Math.abs(t))))&&(e.precision=o-(e.type==="e"));break}case"f":case"%":{e.precision==null&&!isNaN(o=xt(a))&&(e.precision=o-(e.type==="%")*2);break}}return Fn(e)}function Ft(n){var t=n.domain;return n.ticks=function(r){var e=t();return _n(e[0],e[e.length-1],r??10)},n.tickFormat=function(r,e){var a=t();return bt(a[0],a[a.length-1],r??10,e)},n.nice=function(r){r==null&&(r=10);var e=t(),a=0,o=e.length-1,l=e[a],u=e[o],s,i,h=10;for(u<l&&(i=l,l=u,u=i,i=a,a=o,o=i);h-- >0;){if(i=en(l,u,r),i===s)return e[a]=l,e[o]=u,t(e);if(i>0)l=Math.floor(l/i)*i,u=Math.ceil(u/i)*i;else if(i<0)l=Math.ceil(l*i)/i,u=Math.floor(u*i)/i;else break;s=i}return n},n}function Pn(){var n=St();return n.copy=function(){return Rt(n,Pn())},Rn.apply(n,arguments),Ft(n)}function yn(n,t){if((l=n.length)>1)for(var r=1,e,a,o=n[t[0]],l,u=o.length;r<l;++r)for(a=o,o=n[t[r]],e=0;e<u;++e)o[e][1]+=o[e][0]=isNaN(a[e][1])?a[e][0]:a[e][1]}function kn(n){for(var t=n.length,r=new Array(t);--t>=0;)r[t]=t;return r}function Ct(n,t){return n[t]}function At(n){const t=[];return t.key=n,t}function Pt(){var n=W([]),t=kn,r=yn,e=Ct;function a(o){var l=Array.from(n.apply(this,arguments),At),u,s=l.length,i=-1,h;for(const f of o)for(u=0,++i;u<s;++u)(l[u][i]=[0,+e(f,l[u].key,i,o)]).data=f;for(u=0,h=In(t(l));u<s;++u)l[h[u]].index=u;return r(l,h),l}return a.keys=function(o){return arguments.length?(n=typeof o=="function"?o:W(Array.from(o)),a):n},a.value=function(o){return arguments.length?(e=typeof o=="function"?o:W(+o),a):e},a.order=function(o){return arguments.length?(t=o==null?kn:typeof o=="function"?o:W(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(r=o??yn,a):r},a}const U=({data:n,comparisonData:t,colorRange:r,toPercentage:e,withLegend:a})=>{const o=cn.createRef(),l=cn.createRef(),u=B.useCallback(()=>{const i=(()=>{const h={};h.totalField=n.totalField,h.titleField=n.titleField,h.stackFields=n.stackFields;const f=(g,p)=>{if(p){const k=p.toString().split(g);return k.length>1?k[1]:"*"}return"*"},c=(g,p)=>p?p.toString().split(g)[0]:null;if(t){h.values=[];let g="*",p=0;n.values.forEach((k,V)=>{if(h.values.push(k),n.titleSeparator){const N=V-p,E=c(n.titleSeparator,k[n.titleField]),M=t.values[N]?c(n.titleSeparator,t.values[N][n.titleField]):null;if(E===M)h.values.push(t.values[N]),g=f(n.titleSeparator,t.values[N][n.titleField]);else{const b={};b[h.titleField]=E+n.titleSeparator+g,h.values.push(b),p++}}else t.values[V]&&h.values.push(t.values[V])})}else h.values=n.values;return h})();if(i&&i.values&&i.values.length>0){const h=t?20:30,f=3,c={top:0,right:10,bottom:40,left:t?150:110},g=580,p=`0 0 ${g} ${i.values.length*h+20}`,k=i.values.length*h,V=g-c.left-c.right,N=["#4e79a7","#59a14f","#f28e2c","#e15759","#261759","#acd643","#daf2dc"],E=(d,w)=>e?d/w*100:d,M=(d,w)=>e?(d*w/100).toFixed(0):d,b=d=>{if(e){let w=0;return i.stackFields.forEach(x=>{w+=E(+d[x],+d[i.totalField])}),w}else return+d[i.totalField]},T=d=>e?d.toFixed(0)+"%":d.toString(),A=()=>{const d=Xn(i.values,w=>b(w));return d===void 0?0:+d.toFixed(0)},S=Pt().keys(i.stackFields).value((d,w)=>E(d[w],d[i.totalField])),F=An().rangeRound([0,k]).paddingInner(.2).align(.1).domain(i.values.map(d=>d[i.titleField])),R=Pn().rangeRound([0,V]).domain([0,A()]).nice(),C=Mn().range(r||N).domain(i.stackFields),m=d=>{if(d==null)return"";const w=r?r.findIndex(x=>x===d):N.findIndex(x=>x===d);return w>-1&&w<i.stackFields.length?i.stackFields[w]:""},v=dn(o.current).attr("viewBox",p);v.selectAll("g").remove();const y=v.append("g").attr("transform",`translate(${c.left},${c.top})`),I=y.append("g").selectAll("g").data(S(i.values)).join("g").attr("fill-opacity",.9).attr("fill",d=>C(d.key)).selectAll("rect").data(d=>d).enter();if(I.append("rect").classed("bar-rectangle",!0).attr("y",(d,w)=>F(d.data[i.titleField])-(t&&w%2===1?f:0)).attr("x",d=>R(d[0])).attr("width",d=>R(d[1])-R(d[0])).attr("height",F.bandwidth()).append("title").text((d,w,x)=>{var J,un;const D=(un=(J=x[w].parentNode)==null?void 0:J.parentElement)==null?void 0:un.getAttribute("fill"),L=m(D),G=d[1]-d[0];return`${L}: ${e?T(G):""} (${M(G,d.data[i.totalField])} of ${d.data[i.totalField]})`}),I.append("text").text(d=>{const w=d[1]-d[0],x=R(d[1])-R(d[0]),D=`${T(w)} (${M(w,d.data[i.totalField])} of ${d.data[i.totalField]})`,L=`${w} of ${d.data[i.totalField]}`,G=50;return e?x>G?D:"":x>30?L:""}).classed("bar-text",!0).attr("y",(d,w)=>F(d.data[i.titleField])+h/2-(t&&w%2===1?f:0)).attr("text-anchor","end").attr("x",d=>{const w=R(d[1])-R(d[0]);return R(d[0])+w-5}),y.append("g").attr("class","axis").attr("transform",()=>"translate(0,0)").call(rt(F).tickSizeOuter(0)),y.append("g").attr("class","axis").attr("transform","translate(0,"+k+")").call(et(R).tickFormat(d=>T(d.valueOf()))),a){const d=`0 0 45 ${i.stackFields.length*8}`,w=dn(l.current).attr("viewBox",d);w.selectAll("g").remove(),w.selectAll("text").remove(),w.attr("text-anchor","end");const x=w.selectAll("g").data(i.stackFields.slice()).join("g").attr("transform",(D,L)=>"translate("+c.right+","+L*7+")");x.append("rect").attr("fill-opacity",.9).attr("x",28).attr("width",6).attr("height",6).attr("fill",D=>C(D)),x.append("text").attr("x",26).attr("dy","0.24rem").text(D=>D)}}},[o,l,n,r,e,t,a]);return B.useEffect(()=>{u()},[u]),P.jsxs("div",{className:"muncher-bar-chart",children:[P.jsx("svg",{ref:o,className:"svg-bar-chart"}),a?P.jsx("svg",{className:"svg-bar-chart-legend",ref:l}):""]})};try{U.displayName="StackedBarChart",U.__docgenInfo={description:"",displayName:"StackedBarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"StackedBarChartData"}},comparisonData:{defaultValue:null,description:"",name:"comparisonData",required:!1,type:{name:"StackedBarChartData"}},toPercentage:{defaultValue:null,description:"",name:"toPercentage",required:!1,type:{name:"boolean"}},colorRange:{defaultValue:null,description:"",name:"colorRange",required:!1,type:{name:"string[]"}},withLegend:{defaultValue:null,description:"",name:"withLegend",required:!1,type:{name:"boolean"}}}}}catch{}const Ht={title:"BarChart",component:U,parameters:{layout:"fullscreen"}},q=()=>{const n=[[{Title:"Scholars Rooftop",Renewal:8,New:5,Extension:0,Vacant:0,Total:13},{Title:"Scholars Rock",Renewal:50,New:44,Extension:0,Vacant:0,Total:94},{Title:"Huntington Gardens",Renewal:25,New:4,Extension:0,Vacant:4,Total:33},{Title:"Covenanter Hill",Renewal:114,New:79,Extension:0,Vacant:3,Total:196},{Title:"MeadowCreek",Renewal:165,New:56,Extension:2,Vacant:6,Total:229},{Title:"Scholars Quad",Renewal:40,New:29,Extension:0,Vacant:3,Total:72},{Title:"Cov Affordable",Renewal:7,New:2,Extension:0,Vacant:2,Total:11},{Title:"Porto Flats",Renewal:25,New:15,Extension:0,Vacant:6,Total:46},{Title:"Cape Dutch Villas",Renewal:20,New:3,Extension:0,Vacant:1,Total:24},{Title:"Verona Park",Renewal:5,New:2,Extension:0,Vacant:1,Total:8},{Title:"HighGrove",Renewal:36,New:15,Extension:0,Vacant:7,Total:58},{Title:"SummerHouse",Renewal:67,New:58,Extension:0,Vacant:5,Total:130}],[{Title:"Cape Dutch Villas",Renewal:16,New:7,Extension:1,Vacant:2,Total:26},{Title:"Covenanter Hill",Renewal:99,New:96,Extension:1,Vacant:1,Total:197},{Title:"HighGrove",Renewal:23,New:22,Extension:1,Vacant:2,Total:48},{Title:"MeadowCreek",Renewal:154,New:74,Extension:1,Vacant:4,Total:233},{Title:"Scholars Quad",Renewal:36,New:36,Extension:0,Vacant:2,Total:74},{Title:"Scholars Rooftop",Renewal:5,New:8,Extension:0,Vacant:0,Total:13}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126},{Title:"Covenanter Hill",Renewal:56,New:33,Extension:1,Vacant:10,Total:100},{Title:"HighGrove",Renewal:60,New:30,Extension:8,Vacant:2,Total:100},{Title:"MeadowCreek",Renewal:70,New:17,Extension:6,Vacant:7,Total:100},{Title:"Scholars Quad",Renewal:80,New:12,Extension:2,Vacant:6,Total:100},{Title:"Scholars Rooftop",Renewal:52.5,New:30,Extension:7,Vacant:10.5,Total:100},{Title:"Porto Flats",Renewal:62.5,New:20,Extension:7,Vacant:10.5,Total:100},{Title:"Verona Park",Renewal:32.5,New:50,Extension:7,Vacant:10.5,Total:100}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126},{Title:"Covenanter Hill",Renewal:56,New:33,Extension:1,Vacant:10,Total:100}]],[t,r]=B.useState(0),[e,a]=B.useState(!0),[o,l]=B.useState(!0),[u,s]=B.useState({titleField:"Title",totalField:"Total",stackFields:["Renewal","New","Extension","Vacant"],values:n[0]}),i=()=>{const f=(t+1)%n.length;s({...u,values:n[f]}),r(f)},h=()=>{a(!e)};return P.jsxs(P.Fragment,{children:[P.jsx(U,{data:u,toPercentage:e,withLegend:o}),P.jsx("button",{onClick:h,children:e?"To Data":"To Percent"}),"    ",P.jsx("button",{onClick:i,children:"Change Data"}),"    ",P.jsx("button",{onClick:()=>{l(!o)},children:o?"Without Legend":"With Legend"})]})};var Nn,vn,Vn;q.parameters={...q.parameters,docs:{...(Nn=q.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  const initValue: FieldValue[][] = [[{
    "Title": "Scholars Rooftop",
    "Renewal": 8,
    "New": 5,
    "Extension": 0,
    "Vacant": 0,
    "Total": 13
  }, {
    "Title": "Scholars Rock",
    "Renewal": 50,
    "New": 44,
    "Extension": 0,
    "Vacant": 0,
    "Total": 94
  }, {
    "Title": "Huntington Gardens",
    "Renewal": 25,
    "New": 4,
    "Extension": 0,
    "Vacant": 4,
    "Total": 33
  }, {
    "Title": "Covenanter Hill",
    "Renewal": 114,
    "New": 79,
    "Extension": 0,
    "Vacant": 3,
    "Total": 196
  }, {
    "Title": "MeadowCreek",
    "Renewal": 165,
    "New": 56,
    "Extension": 2,
    "Vacant": 6,
    "Total": 229
  }, {
    "Title": "Scholars Quad",
    "Renewal": 40,
    "New": 29,
    "Extension": 0,
    "Vacant": 3,
    "Total": 72
  }, {
    "Title": "Cov Affordable",
    "Renewal": 7,
    "New": 2,
    "Extension": 0,
    "Vacant": 2,
    "Total": 11
  }, {
    "Title": "Porto Flats",
    "Renewal": 25,
    "New": 15,
    "Extension": 0,
    "Vacant": 6,
    "Total": 46
  }, {
    "Title": "Cape Dutch Villas",
    "Renewal": 20,
    "New": 3,
    "Extension": 0,
    "Vacant": 1,
    "Total": 24
  }, {
    "Title": "Verona Park",
    "Renewal": 5,
    "New": 2,
    "Extension": 0,
    "Vacant": 1,
    "Total": 8
  }, {
    "Title": "HighGrove",
    "Renewal": 36,
    "New": 15,
    "Extension": 0,
    "Vacant": 7,
    "Total": 58
  }, {
    "Title": "SummerHouse",
    "Renewal": 67,
    "New": 58,
    "Extension": 0,
    "Vacant": 5,
    "Total": 130
  }], [{
    "Title": "Cape Dutch Villas",
    "Renewal": 16,
    "New": 7,
    "Extension": 1,
    "Vacant": 2,
    "Total": 26
  }, {
    "Title": "Covenanter Hill",
    "Renewal": 99,
    "New": 96,
    "Extension": 1,
    "Vacant": 1,
    "Total": 197
  }, {
    "Title": "HighGrove",
    "Renewal": 23,
    "New": 22,
    "Extension": 1,
    "Vacant": 2,
    "Total": 48
  }, {
    "Title": "MeadowCreek",
    "Renewal": 154,
    "New": 74,
    "Extension": 1,
    "Vacant": 4,
    "Total": 233
  }, {
    "Title": "Scholars Quad",
    "Renewal": 36,
    "New": 36,
    "Extension": 0,
    "Vacant": 2,
    "Total": 74
  }, {
    "Title": "Scholars Rooftop",
    "Renewal": 5,
    "New": 8,
    "Extension": 0,
    "Vacant": 0,
    "Total": 13
  }], [{
    "Title": "Cape Dutch Villas",
    "Renewal": 43,
    "New": 22,
    "Extension": 0,
    "Vacant": 35,
    "Total": 126
  }, {
    "Title": "Covenanter Hill",
    "Renewal": 56,
    "New": 33,
    "Extension": 1,
    "Vacant": 10,
    "Total": 100
  }, {
    "Title": "HighGrove",
    "Renewal": 60,
    "New": 30,
    "Extension": 8,
    "Vacant": 2,
    "Total": 100
  }, {
    "Title": "MeadowCreek",
    "Renewal": 70,
    "New": 17,
    "Extension": 6,
    "Vacant": 7,
    "Total": 100
  }, {
    "Title": "Scholars Quad",
    "Renewal": 80,
    "New": 12,
    "Extension": 2,
    "Vacant": 6,
    "Total": 100
  }, {
    "Title": "Scholars Rooftop",
    "Renewal": 52.5,
    "New": 30,
    "Extension": 7,
    "Vacant": 10.5,
    "Total": 100
  }, {
    "Title": "Porto Flats",
    "Renewal": 62.5,
    "New": 20,
    "Extension": 7,
    "Vacant": 10.5,
    "Total": 100
  }, {
    "Title": "Verona Park",
    "Renewal": 32.5,
    "New": 50,
    "Extension": 7,
    "Vacant": 10.5,
    "Total": 100
  }], [{
    "Title": "Cape Dutch Villas",
    "Renewal": 43,
    "New": 22,
    "Extension": 0,
    "Vacant": 35,
    "Total": 126
  }], [{
    "Title": "Cape Dutch Villas",
    "Renewal": 43,
    "New": 22,
    "Extension": 0,
    "Vacant": 35,
    "Total": 126
  }, {
    "Title": "Covenanter Hill",
    "Renewal": 56,
    "New": 33,
    "Extension": 1,
    "Vacant": 10,
    "Total": 100
  }]];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toPercent, setToPercent] = useState(true);
  const [withLegend, setWithLegend] = useState(true);
  const [barData, setBarData] = useState<StackedBarChartData>({
    "titleField": "Title",
    "totalField": "Total",
    "stackFields": ["Renewal", "New", "Extension", "Vacant"],
    "values": initValue[0]
  });
  const handleButtonClicked = () => {
    const currentIndex = (selectedIndex + 1) % initValue.length;
    setBarData({
      ...barData,
      values: initValue[currentIndex]
    });
    setSelectedIndex(currentIndex);
  };
  const togglePercent = () => {
    setToPercent(!toPercent);
  };
  return <>
            <StackedBarChart data={barData} toPercentage={toPercent} withLegend={withLegend} />
            <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleButtonClicked}>Change Data</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
      setWithLegend(!withLegend);
    }}>{withLegend ? "Without Legend" : "With Legend"}
            </button>
        </>;
}`,...(Vn=(vn=q.parameters)==null?void 0:vn.docs)==null?void 0:Vn.source}}};const zt=["Default"];export{q as Default,zt as __namedExportsOrder,Ht as default};
//# sourceMappingURL=Barchart.stories-e4187acc.js.map
