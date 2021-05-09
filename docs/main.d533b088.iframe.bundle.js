(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1121:function(module,exports){},1123:function(module,exports){},1134:function(module,exports){},1136:function(module,exports){},1161:function(module,exports){},1163:function(module,exports){},1164:function(module,exports){},1169:function(module,exports){},1171:function(module,exports){},1190:function(module,exports){},1202:function(module,exports){},1205:function(module,exports){},1209:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(444).configure)([__webpack_require__(1210),__webpack_require__(1212)],module,!1)}).call(this,__webpack_require__(71)(module))},1210:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1211};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1210},1211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(243);__webpack_require__(580);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b,{title:"Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"muncher-viz"},"Muncher-Viz"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"A html5 svg and scss based ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{parentName:"p",href:"https://viz.muncher.dev/",target:"_blank",rel:"nofollow noopener noreferrer"},"visualization component library")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"using-muncher-viz"},"Using Muncher-Viz"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"To use this component library:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("li",{parentName:"ul"},"Add the npm package to your project",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("pre",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",{parentName:"pre"},"$ npm install @contentmunch/muncher-viz\n")))))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},1212:function(module,exports,__webpack_require__){var map={"./chart/PieChart.stories.tsx":1223};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1212},1213:function(module,exports,__webpack_require__){},1222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(95),esm=__webpack_require__(5),parameters=(__webpack_require__(580),{actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered"});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},1223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(607),toConsumableArray=__webpack_require__(353),slicedToArray=__webpack_require__(354),react=__webpack_require__(0),react_default=__webpack_require__.n(react),d3=__webpack_require__(105),jsx_runtime=(__webpack_require__(1213),__webpack_require__(65)),PieChart_PieChart=function PieChart(_ref){var data=_ref.data,withLegend=_ref.withLegend,legendTitle=_ref.legendTitle,onClick=_ref.onClick,valueFormatter=_ref.valueFormatter,chartRef=react_default.a.createRef(),legendRef=react_default.a.createRef(),pie=d3.d().padAngle(.005).sort(null).value((function(d){return d.value})),arc=d3.a().innerRadius(0).outerRadius(49),pieData=pie(data),formatNumber=Object(react.useCallback)((function(num){return valueFormatter?valueFormatter(num):num}),[valueFormatter]),color=d3.f().domain(d3.b(data,(function(d){return d.title}))).range(d3.e((function(t){return d3.c(.8*t+.1)}),data.length).reverse()),clickHandler=Object(react.useCallback)((function(e,d){onClick&&onClick(d.index)}),[onClick]),draw=Object(react.useCallback)((function(){var chart=d3.g(chartRef.current).attr("viewBox","-50 -50 100 100");if(chart.selectAll("g").remove(),chart.selectAll("path").remove(),chart.selectAll("path").data(pieData).join("path").on("click",clickHandler).classed("selected",(function(d){return d.data.isSelected})).attr("fill",(function(d){return color(d.data.title)})).attr("d",arc).append("title").text((function(d){return"".concat(d.data.title,"(").concat(formatNumber(d.data.value),")")})),chart.append("g").classed("text",!0).attr("text-anchor","middle").selectAll("text").data(pieData).join("text").attr("transform",(function(d){return"translate(".concat(arc.centroid(d),")")})).call((function(text){return text.filter((function(d){return d.endAngle-d.startAngle>.4})).append("tspan").attr("y","-0.4em").classed("title",!0).text((function(d){return d.data.title}))})).call((function(text){return text.filter((function(d){return d.endAngle-d.startAngle>.4})).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).classed("value",!0).text((function(d){return"("+formatNumber(d.data.value)+")"}))})),withLegend){var legend=d3.g(legendRef.current).attr("viewBox","0 0 100 100");legend.selectAll("g").remove(),legend.append("text").text(legendTitle||"Legend").attr("y",10).attr("x",6).classed("legend-title",!0);var legendGraphics=legend.selectAll("g").data(pieData).enter().append("g");legendGraphics.attr("transform",(function(d,i){return"translate(6,".concat(10*i+14,")")})).append("rect").data(pieData).attr("width",6).attr("height",6).on("click",clickHandler).classed("legend-rect",!0).classed("legend-rect--selected",(function(d){return d.data.isSelected})).attr("fill",(function(d){return color(d.data.title)})).append("title").text((function(d){return"".concat(d.data.title,"(").concat(formatNumber(d.data.value),")")})),legendGraphics.append("text").data(pieData).text((function(d){return"".concat(d.data.title," (").concat(formatNumber(d.data.value),")")})).on("click",clickHandler).classed("legend-text",!0).classed("legend-text--selected",(function(d){return d.data.isSelected})).attr("y",4).attr("x",8)}}),[arc,color,pieData,chartRef,legendRef,legendTitle,formatNumber,clickHandler,withLegend]);return Object(react.useEffect)((function(){draw()}),[draw]),Object(jsx_runtime.jsxs)("div",{className:"muncher-pie-chart",children:[Object(jsx_runtime.jsx)("svg",{ref:chartRef,className:"svg-pie-chart"}),withLegend?Object(jsx_runtime.jsx)("svg",{className:"svg-pie-chart-legend",ref:legendRef}):""]})};try{PieChart_PieChart.displayName="PieChart",PieChart_PieChart.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChartData[]"}},withLegend:{defaultValue:null,description:"",name:"withLegend",required:!1,type:{name:"boolean"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((index: number) => void)"}},valueFormatter:{defaultValue:null,description:"",name:"valueFormatter",required:!1,type:{name:"((num: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chart/PieChart.tsx#PieChart"]={docgenInfo:PieChart_PieChart.__docgenInfo,name:"PieChart",path:"src/chart/PieChart.tsx#PieChart"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"chart/Pie Chart",component:PieChart_PieChart};var Default=function Template(args){var _useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),selectedIndex=_useState2[0],setSelectedIndex=_useState2[1],_useState3=Object(react.useState)([{title:"First",value:60,isSelected:!0},{title:"Second",value:1,isSelected:!1},{title:"Third",value:5,isSelected:!1}]),_useState4=Object(slicedToArray.a)(_useState3,2),pieData=_useState4[0],setPieData=_useState4[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(PieChart_PieChart,{data:pieData,onClick:function handleOnClick(index){var currentData=Object(toConsumableArray.a)(pieData);currentData[index].isSelected?(currentData[index].isSelected=!1,setSelectedIndex(-1)):(currentData.forEach((function(value){value.isSelected=!1})),setSelectedIndex(index),currentData[index].isSelected=!0),setPieData(currentData)},valueFormatter:function valueFormatter(num){return num+"%"},withLegend:!0}),Object(jsx_runtime.jsx)("button",{onClick:function handleButtonClicked(){var currentData=Object(toConsumableArray.a)(pieData);currentData[1].value=1===currentData[1].value?10:1,setPieData(currentData)},children:"Change Data"}),-1!==selectedIndex?Object(jsx_runtime.jsxs)("p",{children:["Selected: ",pieData[selectedIndex].title]}):""]})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => {\n\n    const [selectedIndex, setSelectedIndex] = useState(0);\n    const [pieData, setPieData] = useState<ChartData[]>([\n        {title: "First", value: 60, isSelected: true},\n        {title: "Second", value: 1, isSelected: false},\n        {title: "Third", value: 5, isSelected: false},\n    ]);\n    const handleButtonClicked = () => {\n        const currentData = [...pieData];\n        currentData[1].value = currentData[1].value === 1 ? 10 : 1;\n        setPieData(currentData);\n    };\n    const handleOnClick = (index: number) => {\n        const currentData = [...pieData];\n        if (currentData[index].isSelected) {\n            currentData[index].isSelected = false;\n            setSelectedIndex(-1);\n        } else {\n            currentData.forEach(value => {\n                value.isSelected = false;\n            });\n            setSelectedIndex(index);\n            currentData[index].isSelected = true;\n        }\n        setPieData(currentData);\n    };\n\n    return (\n        <>\n            <PieChart data={pieData} onClick={handleOnClick} valueFormatter={num => {\n                return num + "%";\n            }} withLegend={true}/>\n            <button onClick={handleButtonClicked}>Change Data</button>\n            {selectedIndex !== -1 ? <p>Selected: {pieData[selectedIndex].title}</p> : ""}\n        </>\n    );\n}'}},Default.parameters)},580:function(module,exports,__webpack_require__){},758:function(module,exports,__webpack_require__){__webpack_require__(759),__webpack_require__(914),__webpack_require__(915),__webpack_require__(1217),__webpack_require__(1215),__webpack_require__(1219),__webpack_require__(1220),__webpack_require__(1218),__webpack_require__(1216),__webpack_require__(1221),__webpack_require__(1116),__webpack_require__(1208),__webpack_require__(1222),module.exports=__webpack_require__(1209)},826:function(module,exports){},915:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(444)}},[[758,2,3]]]);