(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1060:function(module,exports){},1062:function(module,exports){},1073:function(module,exports){},1075:function(module,exports){},1100:function(module,exports){},1102:function(module,exports){},1103:function(module,exports){},1108:function(module,exports){},1110:function(module,exports){},1129:function(module,exports){},1141:function(module,exports){},1144:function(module,exports){},1148:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(413).configure)([__webpack_require__(1149),__webpack_require__(1151)],module,!1)}).call(this,__webpack_require__(72)(module))},1149:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1150};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1149},1150:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(244);__webpack_require__(549);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"muncher-viz"},"Muncher-Viz"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"A html5 svg and scss based ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{parentName:"p",href:"https://viz.muncher.dev/",target:"_blank",rel:"nofollow noopener noreferrer"},"visualization component library")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"using-muncher-viz"},"Using Muncher-Viz"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"To use this component library:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Add the npm package to your project",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("pre",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",{parentName:"pre"},"$ npm install @contentmunch/muncher-viz\n")))))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},1151:function(module,exports,__webpack_require__){var map={"./barChart/StackedBarChart.stories.tsx":1163,"./pieChart/PieChart.stories.tsx":1164};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1151},1152:function(module,exports,__webpack_require__){},1154:function(module,exports,__webpack_require__){},1162:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(96),esm=__webpack_require__(5),parameters=(__webpack_require__(549),{actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered"});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},1163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(152),slicedToArray=__webpack_require__(129),react=__webpack_require__(0),react_default=__webpack_require__.n(react),d3=__webpack_require__(53),jsx_runtime=(__webpack_require__(1152),__webpack_require__(29)),StackedBarChart_StackedBarChart=function StackedBarChart(_ref){var title=_ref.title,data=_ref.data,colorRange=_ref.colorRange,toPercentage=_ref.toPercentage,svgRef=react_default.a.createRef(),draw=Object(react.useCallback)((function(){var margin_top=40,margin_right=120,margin_left=110,viewBox="0 0 800 "+60*data.values.length,height=50*data.values.length,width=800-margin_left-margin_right,defaultColorRange=["#e15759","#59a14f","#f28e2c","#4e79a7","#59a14f","#261759","#acd643","#daf2dc"],numberToPercent=function numberToPercent(d,total){return toPercentage?d/total*100:d},percentToNumber=function percentToNumber(percent,total){return toPercentage?(percent*total/100).toFixed(0):percent},formatData=function formatData(num){return toPercentage?num.toFixed(0)+"%":num.toString()},stackData=d3.k().keys(data.stackFields).value((function(d,key){return numberToPercent(d[key],d[data.totalField])})),y=d3.g().rangeRound([0,height]).paddingInner(.2).align(.1).domain(data.values.map((function(d){return d[data.titleField]}))),x=d3.h().rangeRound([0,width]).domain([0,function maxValue(){var max=d3.e(data.values,(function(d){return function fieldTotal(fieldValue){if(toPercentage){var percentTotal=0;return data.stackFields.forEach((function(field){percentTotal+=numberToPercent(+fieldValue[field],+fieldValue[data.totalField])})),percentTotal}return+fieldValue[data.totalField]}(d)}));return void 0===max?0:+max.toFixed(0)}()]).nice(),z=d3.i().range(colorRange||defaultColorRange).domain(data.stackFields),svg=d3.j(svgRef.current).attr("viewBox",viewBox);svg.selectAll("g").remove();var barChart=svg.append("g").attr("transform","translate(".concat(margin_left,",").concat(margin_top,")")),bar=barChart.append("g").selectAll("g").data(stackData(data.values)).join("g").attr("fill-opacity",.8).attr("fill",(function(d){return z(d.key)})).selectAll("rect").data((function(d){return d})).enter();bar.append("rect").classed("bar-rectangle",!0).attr("y",(function(d){return y(d.data[data.titleField])})).attr("x",(function(d){return x(d[0])})).attr("width",(function(d){return x(d[1])-x(d[0])})).attr("height",y.bandwidth()).append("title").text((function(d,i,group){var _group$i$parentNode,_group$i$parentNode$p,stackField=function colorToStackField(color){if(null==color)return"";var index=colorRange?colorRange.findIndex((function(value){return value===color})):defaultColorRange.findIndex((function(value){return value===color}));return index>-1&&index<data.stackFields.length?data.stackFields[index]:""}(null===(_group$i$parentNode=group[i].parentNode)||void 0===_group$i$parentNode||null===(_group$i$parentNode$p=_group$i$parentNode.parentElement)||void 0===_group$i$parentNode$p?void 0:_group$i$parentNode$p.getAttribute("fill")),value=d[1]-d[0];return"".concat(stackField,": ").concat(toPercentage?formatData(value):""," (").concat(percentToNumber(value,d.data[data.totalField])," of ").concat(d.data[data.totalField],")")})),bar.append("text").text((function(d,i,group){var value=d[1]-d[0],width=x(d[1])-x(d[0]),percentText="".concat(formatData(value)," (").concat(percentToNumber(value,d.data[data.totalField])," of ").concat(d.data[data.totalField],")"),numberText="".concat(value," of ").concat(d.data[data.totalField]);return toPercentage?width>80?percentText:"":width>50?numberText:""})).classed("bar-text",!0).attr("y",(function(d){return y(d.data[data.titleField])+22})).attr("text-anchor","end").attr("x",(function(d){var width=x(d[1])-x(d[0]);return x(d[0])+width-5})),barChart.append("g").attr("class","axis").attr("transform","translate(0,0)").call(d3.c(y).tickSizeOuter(0)),barChart.append("g").attr("class","axis").attr("transform","translate(0,"+height+")").call(d3.b(x).tickFormat((function(x){return formatData(x.valueOf())})));var chartLegend=barChart.append("g").classed("legend",!0).attr("text-anchor","end");chartLegend.append("text").text(title||"Legend").classed("legend-title",!0).attr("text-anchor","end").attr("y",10).attr("x",width+margin_right).classed("legend-title",!0);var legend=chartLegend.selectAll("g").data(data.stackFields.slice()).join("g").attr("transform",(function(d,i){return"translate("+margin_right+","+20*i+")"}));legend.append("rect").attr("fill-opacity",.8).attr("x",width-19).attr("y",20).attr("width",19).attr("height",19).attr("fill",(function(d){return z(d)})),legend.append("text").attr("x",width-24).attr("y",29.5).attr("dy","0.32rem").text((function(d){return d}))}),[svgRef,data.stackFields,data.values,data.titleField,data.totalField,colorRange,toPercentage]);return Object(react.useEffect)((function(){draw()}),[draw]),Object(jsx_runtime.jsx)("div",{className:"muncher-bar-chart",children:Object(jsx_runtime.jsx)("svg",{ref:svgRef,className:"svg-bar-chart"})})};try{StackedBarChart_StackedBarChart.displayName="StackedBarChart",StackedBarChart_StackedBarChart.__docgenInfo={description:"",displayName:"StackedBarChart",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"StackedBarChartData"}},toPercentage:{defaultValue:null,description:"",name:"toPercentage",required:!1,type:{name:"boolean"}},colorRange:{defaultValue:null,description:"",name:"colorRange",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/barChart/StackedBarChart.tsx#StackedBarChart"]={docgenInfo:StackedBarChart_StackedBarChart.__docgenInfo,name:"StackedBarChart",path:"src/barChart/StackedBarChart.tsx#StackedBarChart"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Chart/Stacked Bar Chart",component:StackedBarChart_StackedBarChart};var Default=function Template(args){var initValue=[[{Title:"Scholars Rooftop",Renewal:8,New:5,Extension:0,Vacant:0,Total:13},{Title:"Scholars Rock",Renewal:50,New:44,Extension:0,Vacant:0,Total:94},{Title:"Huntington Gardens",Renewal:25,New:4,Extension:0,Vacant:4,Total:33},{Title:"Covenanter Hill",Renewal:114,New:79,Extension:0,Vacant:3,Total:196},{Title:"MeadowCreek",Renewal:165,New:56,Extension:2,Vacant:6,Total:229},{Title:"Scholars Quad",Renewal:40,New:29,Extension:0,Vacant:3,Total:72},{Title:"Cov Affordable",Renewal:7,New:2,Extension:0,Vacant:2,Total:11},{Title:"Porto Flats",Renewal:25,New:15,Extension:0,Vacant:6,Total:46},{Title:"Cape Dutch Villas",Renewal:20,New:3,Extension:0,Vacant:1,Total:24},{Title:"Verona Park",Renewal:5,New:2,Extension:0,Vacant:1,Total:8},{Title:"HighGrove",Renewal:36,New:15,Extension:0,Vacant:7,Total:58},{Title:"SummerHouse",Renewal:67,New:58,Extension:0,Vacant:5,Total:130}],[{Title:"Cape Dutch Villas",Renewal:16,New:7,Extension:1,Vacant:2,Total:26},{Title:"Covenanter Hill",Renewal:99,New:96,Extension:1,Vacant:1,Total:197},{Title:"HighGrove",Renewal:23,New:22,Extension:1,Vacant:2,Total:48},{Title:"MeadowCreek",Renewal:154,New:74,Extension:1,Vacant:4,Total:233},{Title:"Scholars Quad",Renewal:36,New:36,Extension:0,Vacant:2,Total:74},{Title:"Scholars Rooftop",Renewal:5,New:8,Extension:0,Vacant:0,Total:13}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126},{Title:"Covenanter Hill",Renewal:56,New:33,Extension:1,Vacant:10,Total:100},{Title:"HighGrove",Renewal:60,New:30,Extension:8,Vacant:2,Total:100},{Title:"MeadowCreek",Renewal:70,New:17,Extension:6,Vacant:7,Total:100},{Title:"Scholars Quad",Renewal:80,New:12,Extension:2,Vacant:6,Total:100},{Title:"Scholars Rooftop",Renewal:52.5,New:30,Extension:7,Vacant:10.5,Total:100},{Title:"Porto Flats",Renewal:62.5,New:20,Extension:7,Vacant:10.5,Total:100},{Title:"Verona Park",Renewal:32.5,New:50,Extension:7,Vacant:10.5,Total:100}]],_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),selectedIndex=_useState2[0],setSelectedIndex=_useState2[1],_useState3=Object(react.useState)(!0),_useState4=Object(slicedToArray.a)(_useState3,2),toPercent=_useState4[0],setToPercent=_useState4[1],_useState5=Object(react.useState)({titleField:"Title",totalField:"Total",stackFields:["Renewal","New","Extension","Vacant"],values:initValue[0]}),_useState6=Object(slicedToArray.a)(_useState5,2),barData=_useState6[0],setBarData=_useState6[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(StackedBarChart_StackedBarChart,{title:"Occupancy",data:barData,toPercentage:toPercent}),Object(jsx_runtime.jsx)("button",{onClick:function togglePercent(){setToPercent(!toPercent)},children:toPercent?"To Data":"To Percent"}),"    ",Object(jsx_runtime.jsx)("button",{onClick:function handleButtonClicked(){var currentIndex=(selectedIndex+1)%3;setBarData(Object(objectSpread2.a)(Object(objectSpread2.a)({},barData),{},{values:initValue[currentIndex]})),setSelectedIndex(currentIndex)},children:"Change Data"})]})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => {\n\n    const first: StackedBarChartData = {\n        "titleField": "Title",\n        "totalField": "Total",\n        "stackFields": ["Renewal", "New", "Extension", "Vacant"],\n        "values": [{\n            "Title": "Scholars Rooftop",\n            "Renewal": 8,\n            "New": 5,\n            "Extension": 0,\n            "Vacant": 0,\n            "Total": 13\n        }, {\n            "Title": "Scholars Rock",\n            "Renewal": 50,\n            "New": 44,\n            "Extension": 0,\n            "Vacant": 0,\n            "Total": 94\n        }, {\n            "Title": "Huntington Gardens",\n            "Renewal": 25,\n            "New": 4,\n            "Extension": 0,\n            "Vacant": 4,\n            "Total": 33\n        }, {\n            "Title": "Covenanter Hill",\n            "Renewal": 114,\n            "New": 79,\n            "Extension": 0,\n            "Vacant": 3,\n            "Total": 196\n        }, {\n            "Title": "MeadowCreek",\n            "Renewal": 165,\n            "New": 56,\n            "Extension": 2,\n            "Vacant": 6,\n            "Total": 229\n        }, {\n            "Title": "Scholars Quad",\n            "Renewal": 40,\n            "New": 29,\n            "Extension": 0,\n            "Vacant": 3,\n            "Total": 72\n        }, {\n            "Title": "Cov Affordable",\n            "Renewal": 7,\n            "New": 2,\n            "Extension": 0,\n            "Vacant": 2,\n            "Total": 11\n        }, {\n            "Title": "Porto Flats",\n            "Renewal": 25,\n            "New": 15,\n            "Extension": 0,\n            "Vacant": 6,\n            "Total": 46\n        }, {\n            "Title": "Cape Dutch Villas",\n            "Renewal": 20,\n            "New": 3,\n            "Extension": 0,\n            "Vacant": 1,\n            "Total": 24\n        }, {\n            "Title": "Verona Park",\n            "Renewal": 5,\n            "New": 2,\n            "Extension": 0,\n            "Vacant": 1,\n            "Total": 8\n        }, {\n            "Title": "HighGrove",\n            "Renewal": 36,\n            "New": 15,\n            "Extension": 0,\n            "Vacant": 7,\n            "Total": 58\n        }, {\n            "Title": "SummerHouse",\n            "Renewal": 67,\n            "New": 58,\n            "Extension": 0,\n            "Vacant": 5,\n            "Total": 130\n        }]\n    };\n    const initValue: FieldValue[][] = [\n        [{\n            "Title": "Scholars Rooftop",\n            "Renewal": 8,\n            "New": 5,\n            "Extension": 0,\n            "Vacant": 0,\n            "Total": 13\n        }, {\n            "Title": "Scholars Rock",\n            "Renewal": 50,\n            "New": 44,\n            "Extension": 0,\n            "Vacant": 0,\n            "Total": 94\n        }, {\n            "Title": "Huntington Gardens",\n            "Renewal": 25,\n            "New": 4,\n            "Extension": 0,\n            "Vacant": 4,\n            "Total": 33\n        }, {\n            "Title": "Covenanter Hill",\n            "Renewal": 114,\n            "New": 79,\n            "Extension": 0,\n            "Vacant": 3,\n            "Total": 196\n        }, {\n            "Title": "MeadowCreek",\n            "Renewal": 165,\n            "New": 56,\n            "Extension": 2,\n            "Vacant": 6,\n            "Total": 229\n        }, {\n            "Title": "Scholars Quad",\n            "Renewal": 40,\n            "New": 29,\n            "Extension": 0,\n            "Vacant": 3,\n            "Total": 72\n        }, {\n            "Title": "Cov Affordable",\n            "Renewal": 7,\n            "New": 2,\n            "Extension": 0,\n            "Vacant": 2,\n            "Total": 11\n        }, {\n            "Title": "Porto Flats",\n            "Renewal": 25,\n            "New": 15,\n            "Extension": 0,\n            "Vacant": 6,\n            "Total": 46\n        }, {\n            "Title": "Cape Dutch Villas",\n            "Renewal": 20,\n            "New": 3,\n            "Extension": 0,\n            "Vacant": 1,\n            "Total": 24\n        }, {\n            "Title": "Verona Park",\n            "Renewal": 5,\n            "New": 2,\n            "Extension": 0,\n            "Vacant": 1,\n            "Total": 8\n        }, {\n            "Title": "HighGrove",\n            "Renewal": 36,\n            "New": 15,\n            "Extension": 0,\n            "Vacant": 7,\n            "Total": 58\n        }, {\n            "Title": "SummerHouse",\n            "Renewal": 67,\n            "New": 58,\n            "Extension": 0,\n            "Vacant": 5,\n            "Total": 130\n        }],\n        [\n            {\n                "Title": "Cape Dutch Villas",\n                "Renewal": 16,\n                "New": 7,\n                "Extension": 1,\n                "Vacant": 2,\n                "Total": 26\n            },\n            {\n                "Title": "Covenanter Hill",\n                "Renewal": 99,\n                "New": 96,\n                "Extension": 1,\n                "Vacant": 1,\n                "Total": 197\n            },\n            {\n                "Title": "HighGrove",\n                "Renewal": 23,\n                "New": 22,\n                "Extension": 1,\n                "Vacant": 2,\n                "Total": 48\n            },\n            {\n                "Title": "MeadowCreek",\n                "Renewal": 154,\n                "New": 74,\n                "Extension": 1,\n                "Vacant": 4,\n                "Total": 233\n            },\n            {\n                "Title": "Scholars Quad",\n                "Renewal": 36,\n                "New": 36,\n                "Extension": 0,\n                "Vacant": 2,\n                "Total": 74\n            },\n            {\n                "Title": "Scholars Rooftop",\n                "Renewal": 5,\n                "New": 8,\n                "Extension": 0,\n                "Vacant": 0,\n                "Total": 13\n            }\n        ],\n        [\n            {\n                "Title": "Cape Dutch Villas",\n                "Renewal": 43,\n                "New": 22,\n                "Extension": 0,\n                "Vacant": 35,\n                "Total": 126\n            },\n            {\n                "Title": "Covenanter Hill",\n                "Renewal": 56,\n                "New": 33,\n                "Extension": 1,\n                "Vacant": 10,\n                "Total": 100\n            },\n            {\n                "Title": "HighGrove",\n                "Renewal": 60,\n                "New": 30,\n                "Extension": 8,\n                "Vacant": 2,\n                "Total": 100\n            },\n            {\n                "Title": "MeadowCreek",\n                "Renewal": 70,\n                "New": 17,\n                "Extension": 6,\n                "Vacant": 7,\n                "Total": 100\n            },\n            {\n                "Title": "Scholars Quad",\n                "Renewal": 80,\n                "New": 12,\n                "Extension": 2,\n                "Vacant": 6,\n                "Total": 100\n            },\n            {\n                "Title": "Scholars Rooftop",\n                "Renewal": 52.5,\n                "New": 30,\n                "Extension": 7,\n                "Vacant": 10.5,\n                "Total": 100\n            },\n            {\n                "Title": "Porto Flats",\n                "Renewal": 62.5,\n                "New": 20,\n                "Extension": 7,\n                "Vacant": 10.5,\n                "Total": 100\n            },\n            {\n                "Title": "Verona Park",\n                "Renewal": 32.5,\n                "New": 50,\n                "Extension": 7,\n                "Vacant": 10.5,\n                "Total": 100\n            }\n        ]\n    ];\n    const [selectedIndex, setSelectedIndex] = useState(0);\n    const [toPercent, setToPercent] = useState(true);\n    const [barData, setBarData] = useState<StackedBarChartData>({\n        "titleField": "Title",\n        "totalField": "Total",\n        "stackFields": ["Renewal", "New", "Extension", "Vacant"],\n        "values": initValue[0]\n    });\n\n    const handleButtonClicked = () => {\n        const currentIndex = (selectedIndex + 1) % 3;\n        setBarData({\n            ...barData, values: initValue[currentIndex]\n        });\n        setSelectedIndex(currentIndex);\n    };\n    const togglePercent = () => {\n        setToPercent(!toPercent);\n    }\n    return (\n        <>\n            <StackedBarChart\n                title={"Occupancy"}\n                data={barData}\n                toPercentage={toPercent}\n            />\n            <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <button onClick={handleButtonClicked}>Change Data</button>\n        </>\n    );\n}'}},Default.parameters)},1164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(152),toConsumableArray=__webpack_require__(352),slicedToArray=__webpack_require__(129),react=__webpack_require__(0),react_default=__webpack_require__.n(react),d3=__webpack_require__(53),jsx_runtime=(__webpack_require__(1154),__webpack_require__(29)),PieChart_PieChart=function PieChart(_ref){var data=_ref.data,withLegend=_ref.withLegend,legendTitle=_ref.legendTitle,onClick=_ref.onClick,valueFormatter=_ref.valueFormatter,colorRange=_ref.colorRange,chartRef=react_default.a.createRef(),legendRef=react_default.a.createRef(),clickHandler=Object(react.useCallback)((function(e,d){onClick&&onClick(d.index)}),[onClick]);return Object(react.useEffect)((function(){var pie=d3.f().padAngle(.005).sort(null).value((function(d){return d.value})),arc=d3.a().innerRadius(0).outerRadius(49),pieData=pie(data),legendText=function legendText(data,index){return data.legend?data.legend:data.title+" ("+formatNumber(data.value,index)+")"},formatNumber=function formatNumber(num,index){return valueFormatter?valueFormatter(num,index):num},color=d3.i().domain(d3.d(data,(function(d){return d.title}))).range(colorRange||["#e15759","#4e79a7","#59a14f","#f28e2c","#59a14f","#261759","#acd643","#daf2dc"]),chart=d3.j(chartRef.current).attr("viewBox","-50 -50 100 100");if(chart.selectAll("g").remove(),chart.selectAll("path").remove(),chart.selectAll("path").data(pieData).join("path").on("click",clickHandler).classed("selected",(function(d){return d.data.isSelected})).attr("fill",(function(d){return color(d.data.title)})).attr("fill-opacity",.9).attr("d",arc).append("title").text((function(d){return legendText(d.data,d.index)})),chart.append("g").classed("text",!0).attr("text-anchor","middle").selectAll("text").data(pieData).join("text").attr("transform",(function(d){return"translate(".concat(arc.centroid(d),")")})).call((function(text){return text.filter((function(d){return d.endAngle-d.startAngle>.4})).append("tspan").attr("y","-0.4em").classed("title",!0).text((function(d){return d.data.title}))})).call((function(text){return text.filter((function(d){return d.endAngle-d.startAngle>.4})).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).classed("value",!0).text((function(d){return"("+formatNumber(d.data.value,d.index)+")"}))})),withLegend){var legend=d3.j(legendRef.current).attr("viewBox","10 0 50 100");legend.selectAll("g").remove(),legend.selectAll("text").remove(),legend.append("text").text(legendTitle||"Legend").attr("y",10).attr("x",6).classed("legend-title",!0);var legendGraphics=legend.selectAll("g").data(pieData).enter().append("g");legendGraphics.attr("transform",(function(d,i){return"translate(6,".concat(10*i+14,")")})).append("rect").data(pieData).attr("width",6).attr("height",6).on("click",clickHandler).classed("legend-rect",!0).classed("legend-rect--selected",(function(d){return d.data.isSelected})).attr("fill",(function(d){return color(d.data.title)})).attr("fill-opacity",.9),legendGraphics.append("text").data(pieData).text((function(d){return legendText(d.data,d.index)})).on("click",clickHandler).classed("legend-text",!0).classed("legend-text--selected",(function(d){return d.data.isSelected})).attr("y",4).attr("x",8)}}),[chartRef,clickHandler,data,legendRef,legendTitle,valueFormatter,withLegend,colorRange]),Object(jsx_runtime.jsxs)("div",{className:"muncher-pie-chart",children:[Object(jsx_runtime.jsx)("svg",{ref:chartRef,className:"svg-pie-chart"}),withLegend?Object(jsx_runtime.jsx)("svg",{className:"svg-pie-chart-legend",ref:legendRef}):""]})};try{PieChart_PieChart.displayName="PieChart",PieChart_PieChart.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"PieChartData[]"}},withLegend:{defaultValue:null,description:"",name:"withLegend",required:!1,type:{name:"boolean"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((index: number) => void)"}},valueFormatter:{defaultValue:null,description:"",name:"valueFormatter",required:!1,type:{name:"((num: number, index: number) => string)"}},colorRange:{defaultValue:null,description:"",name:"colorRange",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pieChart/PieChart.tsx#PieChart"]={docgenInfo:PieChart_PieChart.__docgenInfo,name:"PieChart",path:"src/pieChart/PieChart.tsx#PieChart"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Chart/Pie Chart",component:PieChart_PieChart};var Default=function Template(args){var _useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),selectedIndex=_useState2[0],setSelectedIndex=_useState2[1],_useState3=Object(react.useState)([{title:"First",value:60,isSelected:!0,legend:"First (23: 60%)"},{title:"Second",value:1,isSelected:!1},{title:"Third",value:5,isSelected:!1}]),_useState4=Object(slicedToArray.a)(_useState3,2),pieData=_useState4[0],setPieData=_useState4[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(PieChart_PieChart,{data:pieData,onClick:function handleOnClick(index){var currentData=Object(toConsumableArray.a)(pieData);currentData[index].isSelected?(currentData[index].isSelected=!1,setSelectedIndex(-1)):(currentData.forEach((function(value){value.isSelected=!1})),setSelectedIndex(index),currentData[index].isSelected=!0),setPieData(currentData)},valueFormatter:function valueFormatter(num){return num+"%"},withLegend:!0}),Object(jsx_runtime.jsx)("button",{onClick:function handleButtonClicked(){var currentData=Object(toConsumableArray.a)(pieData);currentData[1].value=1===currentData[1].value?10:1,setPieData(currentData)},children:"Change Data"}),-1!==selectedIndex?Object(jsx_runtime.jsxs)("p",{children:["Selected: ",pieData[selectedIndex].title]}):""]})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => {\n\n    const [selectedIndex, setSelectedIndex] = useState(0);\n    const [pieData, setPieData] = useState<PieChartData[]>([\n        {title: "First", value: 60, isSelected: true, legend: "First (23: 60%)"},\n        {title: "Second", value: 1, isSelected: false},\n        {title: "Third", value: 5, isSelected: false},\n    ]);\n    const handleButtonClicked = () => {\n        const currentData = [...pieData];\n        currentData[1].value = currentData[1].value === 1 ? 10 : 1;\n        setPieData(currentData);\n    };\n    const handleOnClick = (index: number) => {\n        const currentData = [...pieData];\n        if (currentData[index].isSelected) {\n            currentData[index].isSelected = false;\n            setSelectedIndex(-1);\n        } else {\n            currentData.forEach(value => {\n                value.isSelected = false;\n            });\n            setSelectedIndex(index);\n            currentData[index].isSelected = true;\n        }\n        setPieData(currentData);\n    };\n\n    return (\n        <>\n            <PieChart data={pieData} onClick={handleOnClick} valueFormatter={(num) => {\n                return num + "%";\n            }} withLegend={true}/>\n            <button onClick={handleButtonClicked}>Change Data</button>\n            {selectedIndex !== -1 ? <p>Selected: {pieData[selectedIndex].title}</p> : ""}\n        </>\n    );\n}'}},Default.parameters)},549:function(module,exports,__webpack_require__){},697:function(module,exports,__webpack_require__){__webpack_require__(698),__webpack_require__(853),__webpack_require__(854),__webpack_require__(1157),__webpack_require__(1155),__webpack_require__(1159),__webpack_require__(1160),__webpack_require__(1158),__webpack_require__(1156),__webpack_require__(1161),__webpack_require__(1055),__webpack_require__(1147),__webpack_require__(1162),module.exports=__webpack_require__(1148)},765:function(module,exports){},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(413)}},[[697,2,3]]]);