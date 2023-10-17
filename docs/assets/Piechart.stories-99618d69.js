import{j as q}from"./jsx-runtime-6eef64cc.js";import{R as fe,r as X}from"./index-c013ead5.js";import{c as C,a as ve,o as _e,s as he}from"./transform-6b0c1372.js";import"./commonjsHelpers-725317a4.js";function Ae(s,t){let n,a;if(t===void 0)for(const r of s)r!=null&&(n===void 0?r>=r&&(n=a=r):(n>r&&(n=r),a<r&&(a=r)));else{let r=-1;for(let u of s)(u=t(u,++r,s))!=null&&(n===void 0?u>=u&&(n=a=u):(n>u&&(n=u),a<u&&(a=u)))}return[n,a]}const ue=Math.PI,ce=2*ue,F=1e-6,Me=ce-F;function $e(s){this._+=s[0];for(let t=1,n=s.length;t<n;++t)this._+=arguments[t]+s[t]}function Se(s){let t=Math.floor(s);if(!(t>=0))throw new Error(`invalid digits: ${s}`);if(t>15)return $e;const n=10**t;return function(a){this._+=a[0];for(let r=1,u=a.length;r<u;++r)this._+=Math.round(arguments[r]*n)/n+a[r]}}class De{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?$e:Se(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,a,r){this._append`Q${+t},${+n},${this._x1=+a},${this._y1=+r}`}bezierCurveTo(t,n,a,r,u,o){this._append`C${+t},${+n},${+a},${+r},${this._x1=+u},${this._y1=+o}`}arcTo(t,n,a,r,u){if(t=+t,n=+n,a=+a,r=+r,u=+u,u<0)throw new Error(`negative radius: ${u}`);let o=this._x1,e=this._y1,g=a-t,d=r-n,i=o-t,$=e-n,l=i*i+$*$;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(l>F)if(!(Math.abs($*g-d*i)>F)||!u)this._append`L${this._x1=t},${this._y1=n}`;else{let p=a-o,y=r-e,_=g*g+d*d,D=p*p+y*y,m=Math.sqrt(_),A=Math.sqrt(l),c=u*Math.tan((ue-Math.acos((_+l-D)/(2*m*A)))/2),h=c/A,v=c/m;Math.abs(h-1)>F&&this._append`L${t+h*i},${n+h*$}`,this._append`A${u},${u},0,0,${+($*p>i*y)},${this._x1=t+v*g},${this._y1=n+v*d}`}}arc(t,n,a,r,u,o){if(t=+t,n=+n,a=+a,o=!!o,a<0)throw new Error(`negative radius: ${a}`);let e=a*Math.cos(r),g=a*Math.sin(r),d=t+e,i=n+g,$=1^o,l=o?r-u:u-r;this._x1===null?this._append`M${d},${i}`:(Math.abs(this._x1-d)>F||Math.abs(this._y1-i)>F)&&this._append`L${d},${i}`,a&&(l<0&&(l=l%ce+ce),l>Me?this._append`A${a},${a},0,1,${$},${t-e},${n-g}A${a},${a},0,1,${$},${this._x1=d},${this._y1=i}`:l>F&&this._append`A${a},${a},0,${+(l>=ue)},${$},${this._x1=t+a*Math.cos(u)},${this._y1=n+a*Math.sin(u)}`)}rect(t,n,a,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${a=+a}v${+r}h${-a}Z`}toString(){return this._}}const pe=Math.abs,S=Math.atan2,V=Math.cos,Ce=Math.max,le=Math.min,w=Math.sin,O=Math.sqrt,R=1e-12,Z=Math.PI,Y=Z/2,W=2*Z;function Re(s){return s>1?0:s<-1?Z:Math.acos(s)}function ge(s){return s>=1?Y:s<=-1?-Y:Math.asin(s)}function Pe(s){let t=3;return s.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const a=Math.floor(n);if(!(a>=0))throw new RangeError(`invalid digits: ${n}`);t=a}return s},()=>new De(t)}function Te(s){return s.innerRadius}function ke(s){return s.outerRadius}function we(s){return s.startAngle}function be(s){return s.endAngle}function je(s){return s&&s.padAngle}function Ee(s,t,n,a,r,u,o,e){var g=n-s,d=a-t,i=o-r,$=e-u,l=$*g-i*d;if(!(l*l<R))return l=(i*(t-u)-$*(s-r))/l,[s+l*g,t+l*d]}function K(s,t,n,a,r,u,o){var e=s-n,g=t-a,d=(o?u:-u)/O(e*e+g*g),i=d*g,$=-d*e,l=s+i,p=t+$,y=n+i,_=a+$,D=(l+y)/2,m=(p+_)/2,A=y-l,c=_-p,h=A*A+c*c,v=r-u,M=l*_-y*p,j=(c<0?-1:1)*O(Ce(0,v*v*h-M*M)),E=(M*c-A*j)/h,I=(-M*A-c*j)/h,k=(M*c+A*j)/h,P=(-M*A+c*j)/h,T=E-D,f=I-m,x=k-D,N=P-m;return T*T+f*f>x*x+N*N&&(E=k,I=P),{cx:E,cy:I,x01:-i,y01:-$,x11:E*(r/v-1),y11:I*(r/v-1)}}function Ie(){var s=Te,t=ke,n=C(0),a=null,r=we,u=be,o=je,e=null,g=Pe(d);function d(){var i,$,l=+s.apply(this,arguments),p=+t.apply(this,arguments),y=r.apply(this,arguments)-Y,_=u.apply(this,arguments)-Y,D=pe(_-y),m=_>y;if(e||(e=i=g()),p<l&&($=p,p=l,l=$),!(p>R))e.moveTo(0,0);else if(D>W-R)e.moveTo(p*V(y),p*w(y)),e.arc(0,0,p,y,_,!m),l>R&&(e.moveTo(l*V(_),l*w(_)),e.arc(0,0,l,_,y,m));else{var A=y,c=_,h=y,v=_,M=D,j=D,E=o.apply(this,arguments)/2,I=E>R&&(a?+a.apply(this,arguments):O(l*l+p*p)),k=le(pe(p-l)/2,+n.apply(this,arguments)),P=k,T=k,f,x;if(I>R){var N=ge(I/l*w(E)),z=ge(I/p*w(E));(M-=N*2)>R?(N*=m?1:-1,h+=N,v-=N):(M=0,h=v=(y+_)/2),(j-=z*2)>R?(z*=m?1:-1,A+=z,c-=z):(j=0,A=c=(y+_)/2)}var L=p*V(A),B=p*w(A),G=l*V(v),H=l*w(v);if(k>R){var Q=p*V(c),J=p*w(c),te=l*V(h),ne=l*w(h),b;if(D<Z)if(b=Ee(L,B,te,ne,Q,J,G,H)){var ae=L-b[0],ie=B-b[1],se=Q-b[0],re=J-b[1],oe=1/w(Re((ae*se+ie*re)/(O(ae*ae+ie*ie)*O(se*se+re*re)))/2),de=O(b[0]*b[0]+b[1]*b[1]);P=le(k,(l-de)/(oe-1)),T=le(k,(p-de)/(oe+1))}else P=T=0}j>R?T>R?(f=K(te,ne,L,B,p,T,m),x=K(Q,J,G,H,p,T,m),e.moveTo(f.cx+f.x01,f.cy+f.y01),T<k?e.arc(f.cx,f.cy,T,S(f.y01,f.x01),S(x.y01,x.x01),!m):(e.arc(f.cx,f.cy,T,S(f.y01,f.x01),S(f.y11,f.x11),!m),e.arc(0,0,p,S(f.cy+f.y11,f.cx+f.x11),S(x.cy+x.y11,x.cx+x.x11),!m),e.arc(x.cx,x.cy,T,S(x.y11,x.x11),S(x.y01,x.x01),!m))):(e.moveTo(L,B),e.arc(0,0,p,A,c,!m)):e.moveTo(L,B),!(l>R)||!(M>R)?e.lineTo(G,H):P>R?(f=K(G,H,Q,J,l,-P,m),x=K(L,B,te,ne,l,-P,m),e.lineTo(f.cx+f.x01,f.cy+f.y01),P<k?e.arc(f.cx,f.cy,P,S(f.y01,f.x01),S(x.y01,x.x01),!m):(e.arc(f.cx,f.cy,P,S(f.y01,f.x01),S(f.y11,f.x11),!m),e.arc(0,0,l,S(f.cy+f.y11,f.cx+f.x11),S(x.cy+x.y11,x.cx+x.x11),m),e.arc(x.cx,x.cy,P,S(x.y11,x.x11),S(x.y01,x.x01),!m))):e.arc(0,0,l,v,h,m)}if(e.closePath(),i)return e=null,i+""||null}return d.centroid=function(){var i=(+s.apply(this,arguments)+ +t.apply(this,arguments))/2,$=(+r.apply(this,arguments)+ +u.apply(this,arguments))/2-Z/2;return[V($)*i,w($)*i]},d.innerRadius=function(i){return arguments.length?(s=typeof i=="function"?i:C(+i),d):s},d.outerRadius=function(i){return arguments.length?(t=typeof i=="function"?i:C(+i),d):t},d.cornerRadius=function(i){return arguments.length?(n=typeof i=="function"?i:C(+i),d):n},d.padRadius=function(i){return arguments.length?(a=i==null?null:typeof i=="function"?i:C(+i),d):a},d.startAngle=function(i){return arguments.length?(r=typeof i=="function"?i:C(+i),d):r},d.endAngle=function(i){return arguments.length?(u=typeof i=="function"?i:C(+i),d):u},d.padAngle=function(i){return arguments.length?(o=typeof i=="function"?i:C(+i),d):o},d.context=function(i){return arguments.length?(e=i??null,d):e},d}function qe(s,t){return t<s?-1:t>s?1:t>=s?0:NaN}function Ne(s){return s}function Ve(){var s=Ne,t=qe,n=null,a=C(0),r=C(W),u=C(0);function o(e){var g,d=(e=ve(e)).length,i,$,l=0,p=new Array(d),y=new Array(d),_=+a.apply(this,arguments),D=Math.min(W,Math.max(-W,r.apply(this,arguments)-_)),m,A=Math.min(Math.abs(D)/d,u.apply(this,arguments)),c=A*(D<0?-1:1),h;for(g=0;g<d;++g)(h=y[p[g]=g]=+s(e[g],g,e))>0&&(l+=h);for(t!=null?p.sort(function(v,M){return t(y[v],y[M])}):n!=null&&p.sort(function(v,M){return n(e[v],e[M])}),g=0,$=l?(D-d*c)/l:0;g<d;++g,_=m)i=p[g],h=y[i],m=_+(h>0?h*$:0)+c,y[i]={data:e[i],index:g,value:h,startAngle:_,endAngle:m,padAngle:A};return y}return o.value=function(e){return arguments.length?(s=typeof e=="function"?e:C(+e),o):s},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(a=typeof e=="function"?e:C(+e),o):a},o.endAngle=function(e){return arguments.length?(r=typeof e=="function"?e:C(+e),o):r},o.padAngle=function(e){return arguments.length?(u=typeof e=="function"?e:C(+e),o):u},o}const ee=({data:s,withLegend:t,legendTitle:n,onClick:a,valueFormatter:r,colorRange:u})=>{const o=fe.createRef(),e=fe.createRef(),g=X.useCallback((d,i)=>{a&&a(i.index)},[a]);return X.useEffect(()=>{const d="-50 -50 100 100",$=Ve().padAngle(.005).sort(null).value(c=>c.value),l=Ie().innerRadius(0).outerRadius(50-1),p=$(s),y=(c,h)=>c.legend?c.legend:c.title+" ("+_(c.value,h)+")",_=(c,h)=>r?r(c,h):c,D=["#4e79a7","#59a14f","#f28e2c","#e15759","#261759","#acd643","#daf2dc"],m=_e().domain(Ae(s,c=>c.title)).range(u||D),A=he(o.current).attr("viewBox",d);if(A.selectAll("g").remove(),A.selectAll("path").remove(),A.selectAll("path").data(p).join("path").on("click",g).classed("selected",c=>c.data.isSelected).attr("fill",c=>m(c.data.title)).attr("fill-opacity",.9).attr("d",l).append("title").text(c=>y(c.data,c.index)),A.append("g").classed("text",!0).attr("text-anchor","middle").selectAll("text").data(p).join("text").attr("transform",c=>`translate(${l.centroid(c)})`).call(c=>c.filter(h=>h.endAngle-h.startAngle>.4).append("tspan").attr("y","-0.4em").classed("title",!0).text(h=>h.data.title)).call(c=>c.filter(h=>h.endAngle-h.startAngle>.4).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).classed("value",!0).text(h=>"("+_(h.data.value,h.index)+")")),t){const c=he(e.current).attr("viewBox","0 0 70 100");c.selectAll("g").remove(),c.selectAll("text").remove(),c.append("text").text(n||"Legend").attr("y",10).attr("x",6).classed("legend-title",!0);const h=c.selectAll("g").data(p).enter().append("g");h.attr("transform",(v,M)=>`translate(6,${M*10+14})`).append("rect").data(p).attr("width",6).attr("height",6).on("click",g).classed("legend-rect",!0).classed("legend-rect--selected",v=>v.data.isSelected).attr("fill",v=>m(v.data.title)).attr("fill-opacity",.9),h.append("text").data(p).text(v=>y(v.data,v.index)).on("click",g).classed("legend-text",!0).classed("legend-text--selected",v=>v.data.isSelected).attr("y",4).attr("x",8)}},[o,g,s,e,n,r,t,u]),q.jsxs("div",{className:"muncher-pie-chart",children:[q.jsx("svg",{ref:o,className:"svg-pie-chart"}),t?q.jsx("svg",{className:"svg-pie-chart-legend",ref:e}):""]})};try{ee.displayName="PieChart",ee.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"PieChartData[]"}},withLegend:{defaultValue:null,description:"",name:"withLegend",required:!1,type:{name:"boolean"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((index: number) => void)"}},valueFormatter:{defaultValue:null,description:"",name:"valueFormatter",required:!1,type:{name:"((num: number, index: number) => string)"}},colorRange:{defaultValue:null,description:"",name:"colorRange",required:!1,type:{name:"string[]"}}}}}catch{}const Ze={title:"PieChart",component:ee,parameters:{layout:"fullscreen"}},U=()=>{const[s,t]=X.useState(0),[n,a]=X.useState([{title:"First",value:60,isSelected:!0,legend:"First (23: 60%)"},{title:"Second",value:1,isSelected:!1},{title:"Third",value:5,isSelected:!1}]),r=()=>{const o=[...n];o[1].value=o[1].value===1?10:1,a(o)},u=o=>{const e=[...n];e[o].isSelected?(e[o].isSelected=!1,t(-1)):(e.forEach(g=>{g.isSelected=!1}),t(o),e[o].isSelected=!0),a(e)};return q.jsxs(q.Fragment,{children:[q.jsx(ee,{data:n,onClick:u,valueFormatter:o=>o+"%",withLegend:!0}),q.jsx("button",{onClick:r,children:"Change Data"}),s!==-1?q.jsxs("p",{children:["Selected: ",n[s].title]}):""]})};var me,xe,ye;U.parameters={...U.parameters,docs:{...(me=U.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pieData, setPieData] = useState<PieChartData[]>([{
    title: "First",
    value: 60,
    isSelected: true,
    legend: "First (23: 60%)"
  }, {
    title: "Second",
    value: 1,
    isSelected: false
  }, {
    title: "Third",
    value: 5,
    isSelected: false
  }]);
  const handleButtonClicked = () => {
    const currentData = [...pieData];
    currentData[1].value = currentData[1].value === 1 ? 10 : 1;
    setPieData(currentData);
  };
  const handleOnClick = (index: number) => {
    const currentData = [...pieData];
    if (currentData[index].isSelected) {
      currentData[index].isSelected = false;
      setSelectedIndex(-1);
    } else {
      currentData.forEach(value => {
        value.isSelected = false;
      });
      setSelectedIndex(index);
      currentData[index].isSelected = true;
    }
    setPieData(currentData);
  };
  return <>
            <PieChart data={pieData} onClick={handleOnClick} valueFormatter={num => {
      return num + "%";
    }} withLegend={true} />
            <button onClick={handleButtonClicked}>Change Data</button>
            {selectedIndex !== -1 ? <p>Selected: {pieData[selectedIndex].title}</p> : ""}
        </>;
}`,...(ye=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const ze=["Default"];export{U as Default,ze as __namedExportsOrder,Ze as default};
//# sourceMappingURL=Piechart.stories-99618d69.js.map
