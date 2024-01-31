"use strict";(self.webpackChunk_contentmunch_muncher_viz=self.webpackChunk_contentmunch_muncher_viz||[]).push([[919],{"./src/barChart/StackedBarChart.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Comparison:function(){return Comparison},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return StackedBarChart_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Comparison$parameter,_Comparison$parameter2,_Comparison$parameter3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./node_modules/d3/src/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StackedBarChart_StackedBarChart=function StackedBarChart(_ref){var data=_ref.data,comparisonData=_ref.comparisonData,colorRange=_ref.colorRange,toPercentage=_ref.toPercentage,withLegend=_ref.withLegend,svgRef=react.createRef(),legendRef=react.createRef(),draw=(0,react.useCallback)((function(){var barData=function combineData(){var combinedData={};combinedData.totalField=data.totalField,combinedData.titleField=data.titleField,combinedData.stackFields=data.stackFields;var extractTitle=function extractTitle(titleSeparator,value){return value?value.toString().split(titleSeparator)[0]:null};if(comparisonData){combinedData.values=[];var lastPostFix="*",emptyCount=0;data.values.forEach((function(value,index){if(combinedData.values.push(value),data.titleSeparator){var compareIndex=index-emptyCount,referenceTitle=extractTitle(data.titleSeparator,value[data.titleField]);if(referenceTitle===(comparisonData.values[compareIndex]?extractTitle(data.titleSeparator,comparisonData.values[compareIndex][data.titleField]):null))combinedData.values.push(comparisonData.values[compareIndex]),lastPostFix=function extractPostfix(titleSeparator,value){if(value){var titleArray=value.toString().split(titleSeparator);return titleArray.length>1?titleArray[1]:"*"}return"*"}(data.titleSeparator,comparisonData.values[compareIndex][data.titleField]);else{var titleFieldValue={};titleFieldValue[combinedData.titleField]=referenceTitle+data.titleSeparator+lastPostFix,combinedData.values.push(titleFieldValue),emptyCount++}}else comparisonData.values[index]&&combinedData.values.push(comparisonData.values[index])}))}else combinedData.values=data.values;return combinedData}();if(barData&&barData.values&&barData.values.length>0){var barHeight=comparisonData?20:30,margin={top:0,right:10,bottom:40,left:comparisonData?150:110},viewBox="0 0 ".concat(580," ").concat(barData.values.length*barHeight+20),height=barData.values.length*barHeight,width=580-margin.left-margin.right,defaultColorRange=["#4e79a7","#59a14f","#f28e2c","#e15759","#261759","#acd643","#daf2dc"],numberToPercent=function numberToPercent(d,total){return toPercentage?d/total*100:d},percentToNumber=function percentToNumber(percent,total){return toPercentage?(percent*total/100).toFixed(0):percent},formatData=function formatData(num){return toPercentage?num.toFixed(0)+"%":num.toString()},stackData=src.knu().keys(barData.stackFields).value((function(d,key){return numberToPercent(d[key],d[barData.totalField])})),y=src.tiA().rangeRound([0,height]).paddingInner(.2).align(.1).domain(barData.values.map((function(d){return d[barData.titleField]}))),x=src.BYU().rangeRound([0,width]).domain([0,function maxValue(){var max=src.Fp7(barData.values,(function(d){return function fieldTotal(fieldValue){if(toPercentage){var percentTotal=0;return barData.stackFields.forEach((function(field){percentTotal+=numberToPercent(+fieldValue[field],+fieldValue[barData.totalField])})),percentTotal}return+fieldValue[barData.totalField]}(d)}));return void 0===max?0:+max.toFixed(0)}()]).nice(),z=src.PKp().range(colorRange||defaultColorRange).domain(barData.stackFields),svg=src.Ys(svgRef.current).attr("viewBox",viewBox);svg.selectAll("g").remove();var barChart=svg.append("g").attr("transform","translate(".concat(margin.left,",").concat(margin.top,")")),bar=barChart.append("g").selectAll("g").data(stackData(barData.values)).join("g").attr("fill-opacity",.9).attr("fill",(function(d){return z(d.key)})).selectAll("rect").data((function(d){return d})).enter();if(bar.append("rect").classed("bar-rectangle",!0).attr("y",(function(d,i){return y(d.data[barData.titleField])-(comparisonData&&i%2==1?3:0)})).attr("x",(function(d){return x(d[0])})).attr("width",(function(d){return x(d[1])-x(d[0])})).attr("height",y.bandwidth()).append("title").text((function(d,i,group){var _group$i$parentNode,_group$i$parentNode$p,stackField=function colorToStackField(color){if(null==color)return"";var index=colorRange?colorRange.findIndex((function(value){return value===color})):defaultColorRange.findIndex((function(value){return value===color}));return index>-1&&index<barData.stackFields.length?barData.stackFields[index]:""}(null===(_group$i$parentNode=group[i].parentNode)||void 0===_group$i$parentNode||null===(_group$i$parentNode$p=_group$i$parentNode.parentElement)||void 0===_group$i$parentNode$p?void 0:_group$i$parentNode$p.getAttribute("fill")),value=d[1]-d[0];return"".concat(stackField,": ").concat(toPercentage?formatData(value):""," (").concat(percentToNumber(value,d.data[barData.totalField])," of ").concat(d.data[barData.totalField],")")})),bar.append("text").text((function(d,i,group){var value=d[1]-d[0],width=x(d[1])-x(d[0]),percentText="".concat(formatData(value)," (").concat(percentToNumber(value,d.data[barData.totalField])," of ").concat(d.data[barData.totalField],")"),numberText="".concat(value," of ").concat(d.data[barData.totalField]);if(toPercentage)return width>50?percentText:"";return width>30?numberText:""})).classed("bar-text",!0).attr("y",(function(d,i){return y(d.data[barData.titleField])+barHeight/2-(comparisonData&&i%2==1?3:0)})).attr("text-anchor","end").attr("x",(function(d){var width=x(d[1])-x(d[0]);return x(d[0])+width-5})),barChart.append("g").attr("class","axis").attr("transform",(function(){return"translate(0,0)"})).call(src.y4O(y).tickSizeOuter(0)),barChart.append("g").attr("class","axis").attr("transform","translate(0,"+height+")").call(src.LLu(x).tickFormat((function(x){return formatData(x.valueOf())}))),withLegend){var legendViewBox="0 0 45 ".concat(8*barData.stackFields.length),chartLegend=src.Ys(legendRef.current).attr("viewBox",legendViewBox);chartLegend.selectAll("g").remove(),chartLegend.selectAll("text").remove(),chartLegend.attr("text-anchor","end");var legend=chartLegend.selectAll("g").data(barData.stackFields.slice()).join("g").attr("transform",(function(d,i){return"translate("+margin.right+","+7*i+")"}));legend.append("rect").attr("fill-opacity",.9).attr("x",28).attr("width",6).attr("height",6).attr("fill",(function(d){return z(d)})),legend.append("text").attr("x",26).attr("dy","0.24rem").text((function(d){return d}))}}}),[svgRef,legendRef,data,colorRange,toPercentage,comparisonData,withLegend]);return(0,react.useEffect)((function(){draw()}),[draw]),(0,jsx_runtime.jsxs)("div",{className:"muncher-bar-chart",children:[(0,jsx_runtime.jsx)("svg",{ref:svgRef,className:"svg-bar-chart"}),withLegend?(0,jsx_runtime.jsx)("svg",{className:"svg-bar-chart-legend",ref:legendRef}):""]})};try{StackedBarChart_StackedBarChart.displayName="StackedBarChart",StackedBarChart_StackedBarChart.__docgenInfo={description:"",displayName:"StackedBarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"StackedBarChartData"}},comparisonData:{defaultValue:null,description:"",name:"comparisonData",required:!1,type:{name:"StackedBarChartData"}},toPercentage:{defaultValue:null,description:"",name:"toPercentage",required:!1,type:{name:"boolean"}},colorRange:{defaultValue:null,description:"",name:"colorRange",required:!1,type:{name:"string[]"}},withLegend:{defaultValue:null,description:"",name:"withLegend",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/barChart/StackedBarChart.tsx#StackedBarChart"]={docgenInfo:StackedBarChart_StackedBarChart.__docgenInfo,name:"StackedBarChart",path:"src/barChart/StackedBarChart.tsx#StackedBarChart"})}catch(__react_docgen_typescript_loader_error){}var StackedBarChart_stories={title:"Chart/Stacked Bar Chart",component:StackedBarChart_StackedBarChart},Default=function Template(args){var initValue=[[{Title:"Scholars Rooftop",Renewal:8,New:5,Extension:0,Vacant:0,Total:13},{Title:"Scholars Rock",Renewal:50,New:44,Extension:0,Vacant:0,Total:94},{Title:"Huntington Gardens",Renewal:25,New:4,Extension:0,Vacant:4,Total:33},{Title:"Covenanter Hill",Renewal:114,New:79,Extension:0,Vacant:3,Total:196},{Title:"MeadowCreek",Renewal:165,New:56,Extension:2,Vacant:6,Total:229},{Title:"Scholars Quad",Renewal:40,New:29,Extension:0,Vacant:3,Total:72},{Title:"Cov Affordable",Renewal:7,New:2,Extension:0,Vacant:2,Total:11},{Title:"Porto Flats",Renewal:25,New:15,Extension:0,Vacant:6,Total:46},{Title:"Cape Dutch Villas",Renewal:20,New:3,Extension:0,Vacant:1,Total:24},{Title:"Verona Park",Renewal:5,New:2,Extension:0,Vacant:1,Total:8},{Title:"HighGrove",Renewal:36,New:15,Extension:0,Vacant:7,Total:58},{Title:"SummerHouse",Renewal:67,New:58,Extension:0,Vacant:5,Total:130}],[{Title:"Cape Dutch Villas",Renewal:16,New:7,Extension:1,Vacant:2,Total:26},{Title:"Covenanter Hill",Renewal:99,New:96,Extension:1,Vacant:1,Total:197},{Title:"HighGrove",Renewal:23,New:22,Extension:1,Vacant:2,Total:48},{Title:"MeadowCreek",Renewal:154,New:74,Extension:1,Vacant:4,Total:233},{Title:"Scholars Quad",Renewal:36,New:36,Extension:0,Vacant:2,Total:74},{Title:"Scholars Rooftop",Renewal:5,New:8,Extension:0,Vacant:0,Total:13}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126},{Title:"Covenanter Hill",Renewal:56,New:33,Extension:1,Vacant:10,Total:100},{Title:"HighGrove",Renewal:60,New:30,Extension:8,Vacant:2,Total:100},{Title:"MeadowCreek",Renewal:70,New:17,Extension:6,Vacant:7,Total:100},{Title:"Scholars Quad",Renewal:80,New:12,Extension:2,Vacant:6,Total:100},{Title:"Scholars Rooftop",Renewal:52.5,New:30,Extension:7,Vacant:10.5,Total:100},{Title:"Porto Flats",Renewal:62.5,New:20,Extension:7,Vacant:10.5,Total:100},{Title:"Verona Park",Renewal:32.5,New:50,Extension:7,Vacant:10.5,Total:100}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126}],[{Title:"Cape Dutch Villas",Renewal:43,New:22,Extension:0,Vacant:35,Total:126},{Title:"Covenanter Hill",Renewal:56,New:33,Extension:1,Vacant:10,Total:100}]],_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),selectedIndex=_useState2[0],setSelectedIndex=_useState2[1],_useState3=(0,react.useState)(!0),_useState4=(0,slicedToArray.Z)(_useState3,2),toPercent=_useState4[0],setToPercent=_useState4[1],_useState5=(0,react.useState)(!0),_useState6=(0,slicedToArray.Z)(_useState5,2),withLegend=_useState6[0],setWithLegend=_useState6[1],_useState7=(0,react.useState)({titleField:"Title",totalField:"Total",stackFields:["Renewal","New","Extension","Vacant"],values:initValue[0]}),_useState8=(0,slicedToArray.Z)(_useState7,2),barData=_useState8[0],setBarData=_useState8[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StackedBarChart_StackedBarChart,{data:barData,toPercentage:toPercent,withLegend:withLegend}),(0,jsx_runtime.jsx)("button",{onClick:function togglePercent(){setToPercent(!toPercent)},children:toPercent?"To Data":"To Percent"}),"    ",(0,jsx_runtime.jsx)("button",{onClick:function handleButtonClicked(){var currentIndex=(selectedIndex+1)%initValue.length;setBarData((0,objectSpread2.Z)((0,objectSpread2.Z)({},barData),{},{values:initValue[currentIndex]})),setSelectedIndex(currentIndex)},children:"Change Data"}),"    ",(0,jsx_runtime.jsx)("button",{onClick:function onClick(){setWithLegend(!withLegend)},children:withLegend?"Without Legend":"With Legend"})]})}.bind({}),Comparison=function ComparisonTemplate(args){var _useState9=(0,react.useState)(!0),_useState10=(0,slicedToArray.Z)(_useState9,2),toPercent=_useState10[0],setToPercent=_useState10[1],_useState11=(0,react.useState)(!0),_useState12=(0,slicedToArray.Z)(_useState11,2),withLegend=_useState12[0],setWithLegend=_useState12[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StackedBarChart_StackedBarChart,{data:{titleField:"Title",totalField:"Total",stackFields:["Renewal","New","Extension","Vacant"],titleSeparator:":",values:[{Title:"Scholars Rooftop:(06-12-20)",Renewal:8,New:5,Extension:0,Vacant:0,Total:13},{Title:"Scholars Rock:(06-12-20)",Renewal:50,New:44,Extension:0,Vacant:0,Total:94},{Title:"Huntington Gardens:(06-12-20)",Renewal:25,New:4,Extension:0,Vacant:4,Total:33},{Title:"Covenanter Hill:(06-12-20)",Renewal:114,New:79,Extension:0,Vacant:3,Total:196},{Title:"MeadowCreek:(06-12-20)",Renewal:165,New:56,Extension:2,Vacant:6,Total:229},{Title:"Scholars Quad:(06-12-20)",Renewal:40,New:29,Extension:0,Vacant:3,Total:72},{Title:"Cov Affordable:(06-12-20)",Renewal:7,New:2,Extension:0,Vacant:2,Total:11},{Title:"Porto Flats:(06-12-20)",Renewal:25,New:15,Extension:0,Vacant:6,Total:46},{Title:"Cape Dutch Villas:(06-12-20)",Renewal:20,New:3,Extension:0,Vacant:1,Total:24},{Title:"Verona Park:(06-12-20)",Renewal:5,New:2,Extension:0,Vacant:1,Total:8},{Title:"HighGrove:(06-12-20)",Renewal:36,New:15,Extension:0,Vacant:7,Total:58},{Title:"SummerHouse:(06-12-20)",Renewal:67,New:58,Extension:0,Vacant:5,Total:130}]},comparisonData:{titleField:"Title",totalField:"Total",stackFields:["Renewal","New","Extension","Vacant"],titleSeparator:":",values:[{Title:"Scholars Rooftop:(06-12-21)",Renewal:5,New:8,Extension:0,Vacant:0,Total:13},{Title:"Huntington Gardens:(06-12-21)",Renewal:15,New:14,Extension:0,Vacant:4,Total:33},{Title:"Covenanter Hill:(06-12-21)",Renewal:14,New:179,Extension:0,Vacant:3,Total:196},{Title:"MeadowCreek:(06-12-21)",Renewal:65,New:156,Extension:2,Vacant:6,Total:229},{Title:"Scholars Quad:(06-12-21)",Renewal:20,New:49,Extension:0,Vacant:3,Total:72},{Title:"Cov Affordable:(06-12-21)",Renewal:2,New:7,Extension:0,Vacant:2,Total:11},{Title:"Porto Flats:(06-12-21)",Renewal:15,New:25,Extension:0,Vacant:6,Total:46},{Title:"Cape Dutch Villas:(06-12-21)",Renewal:10,New:13,Extension:0,Vacant:1,Total:24},{Title:"Verona Park:(06-12-21)",Renewal:2,New:5,Extension:0,Vacant:1,Total:8},{Title:"HighGrove:(06-12-21)",Renewal:26,New:25,Extension:0,Vacant:7,Total:58},{Title:"SummerHouse:(06-12-21)",Renewal:58,New:65,Extension:0,Vacant:7,Total:130}]},toPercentage:toPercent,withLegend:withLegend}),(0,jsx_runtime.jsx)("button",{onClick:function togglePercent(){setToPercent(!toPercent)},children:toPercent?"To Data":"To Percent"}),"    ",(0,jsx_runtime.jsx)("button",{onClick:function onClick(){setWithLegend(!withLegend)},children:withLegend?"Without Legend":"With Legend"})]})}.bind({});Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  const initValue: FieldValue[][] = [[{\n    "Title": "Scholars Rooftop",\n    "Renewal": 8,\n    "New": 5,\n    "Extension": 0,\n    "Vacant": 0,\n    "Total": 13\n  }, {\n    "Title": "Scholars Rock",\n    "Renewal": 50,\n    "New": 44,\n    "Extension": 0,\n    "Vacant": 0,\n    "Total": 94\n  }, {\n    "Title": "Huntington Gardens",\n    "Renewal": 25,\n    "New": 4,\n    "Extension": 0,\n    "Vacant": 4,\n    "Total": 33\n  }, {\n    "Title": "Covenanter Hill",\n    "Renewal": 114,\n    "New": 79,\n    "Extension": 0,\n    "Vacant": 3,\n    "Total": 196\n  }, {\n    "Title": "MeadowCreek",\n    "Renewal": 165,\n    "New": 56,\n    "Extension": 2,\n    "Vacant": 6,\n    "Total": 229\n  }, {\n    "Title": "Scholars Quad",\n    "Renewal": 40,\n    "New": 29,\n    "Extension": 0,\n    "Vacant": 3,\n    "Total": 72\n  }, {\n    "Title": "Cov Affordable",\n    "Renewal": 7,\n    "New": 2,\n    "Extension": 0,\n    "Vacant": 2,\n    "Total": 11\n  }, {\n    "Title": "Porto Flats",\n    "Renewal": 25,\n    "New": 15,\n    "Extension": 0,\n    "Vacant": 6,\n    "Total": 46\n  }, {\n    "Title": "Cape Dutch Villas",\n    "Renewal": 20,\n    "New": 3,\n    "Extension": 0,\n    "Vacant": 1,\n    "Total": 24\n  }, {\n    "Title": "Verona Park",\n    "Renewal": 5,\n    "New": 2,\n    "Extension": 0,\n    "Vacant": 1,\n    "Total": 8\n  }, {\n    "Title": "HighGrove",\n    "Renewal": 36,\n    "New": 15,\n    "Extension": 0,\n    "Vacant": 7,\n    "Total": 58\n  }, {\n    "Title": "SummerHouse",\n    "Renewal": 67,\n    "New": 58,\n    "Extension": 0,\n    "Vacant": 5,\n    "Total": 130\n  }], [{\n    "Title": "Cape Dutch Villas",\n    "Renewal": 16,\n    "New": 7,\n    "Extension": 1,\n    "Vacant": 2,\n    "Total": 26\n  }, {\n    "Title": "Covenanter Hill",\n    "Renewal": 99,\n    "New": 96,\n    "Extension": 1,\n    "Vacant": 1,\n    "Total": 197\n  }, {\n    "Title": "HighGrove",\n    "Renewal": 23,\n    "New": 22,\n    "Extension": 1,\n    "Vacant": 2,\n    "Total": 48\n  }, {\n    "Title": "MeadowCreek",\n    "Renewal": 154,\n    "New": 74,\n    "Extension": 1,\n    "Vacant": 4,\n    "Total": 233\n  }, {\n    "Title": "Scholars Quad",\n    "Renewal": 36,\n    "New": 36,\n    "Extension": 0,\n    "Vacant": 2,\n    "Total": 74\n  }, {\n    "Title": "Scholars Rooftop",\n    "Renewal": 5,\n    "New": 8,\n    "Extension": 0,\n    "Vacant": 0,\n    "Total": 13\n  }], [{\n    "Title": "Cape Dutch Villas",\n    "Renewal": 43,\n    "New": 22,\n    "Extension": 0,\n    "Vacant": 35,\n    "Total": 126\n  }, {\n    "Title": "Covenanter Hill",\n    "Renewal": 56,\n    "New": 33,\n    "Extension": 1,\n    "Vacant": 10,\n    "Total": 100\n  }, {\n    "Title": "HighGrove",\n    "Renewal": 60,\n    "New": 30,\n    "Extension": 8,\n    "Vacant": 2,\n    "Total": 100\n  }, {\n    "Title": "MeadowCreek",\n    "Renewal": 70,\n    "New": 17,\n    "Extension": 6,\n    "Vacant": 7,\n    "Total": 100\n  }, {\n    "Title": "Scholars Quad",\n    "Renewal": 80,\n    "New": 12,\n    "Extension": 2,\n    "Vacant": 6,\n    "Total": 100\n  }, {\n    "Title": "Scholars Rooftop",\n    "Renewal": 52.5,\n    "New": 30,\n    "Extension": 7,\n    "Vacant": 10.5,\n    "Total": 100\n  }, {\n    "Title": "Porto Flats",\n    "Renewal": 62.5,\n    "New": 20,\n    "Extension": 7,\n    "Vacant": 10.5,\n    "Total": 100\n  }, {\n    "Title": "Verona Park",\n    "Renewal": 32.5,\n    "New": 50,\n    "Extension": 7,\n    "Vacant": 10.5,\n    "Total": 100\n  }], [{\n    "Title": "Cape Dutch Villas",\n    "Renewal": 43,\n    "New": 22,\n    "Extension": 0,\n    "Vacant": 35,\n    "Total": 126\n  }], [{\n    "Title": "Cape Dutch Villas",\n    "Renewal": 43,\n    "New": 22,\n    "Extension": 0,\n    "Vacant": 35,\n    "Total": 126\n  }, {\n    "Title": "Covenanter Hill",\n    "Renewal": 56,\n    "New": 33,\n    "Extension": 1,\n    "Vacant": 10,\n    "Total": 100\n  }]];\n  const [selectedIndex, setSelectedIndex] = useState(0);\n  const [toPercent, setToPercent] = useState(true);\n  const [withLegend, setWithLegend] = useState(true);\n  const [barData, setBarData] = useState<StackedBarChartData>({\n    "titleField": "Title",\n    "totalField": "Total",\n    "stackFields": ["Renewal", "New", "Extension", "Vacant"],\n    "values": initValue[0]\n  });\n  const handleButtonClicked = () => {\n    const currentIndex = (selectedIndex + 1) % initValue.length;\n    setBarData({\n      ...barData,\n      values: initValue[currentIndex]\n    });\n    setSelectedIndex(currentIndex);\n  };\n  const togglePercent = () => {\n    setToPercent(!toPercent);\n  };\n  return <>\n            <StackedBarChart data={barData} toPercentage={toPercent} withLegend={withLegend} />\n            <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <button onClick={handleButtonClicked}>Change Data</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <button onClick={() => {\n      setWithLegend(!withLegend);\n    }}>{withLegend ? "Without Legend" : "With Legend"}\n            </button>\n        </>;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Comparison.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Comparison.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Comparison$parameter=Comparison.parameters)||void 0===_Comparison$parameter?void 0:_Comparison$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => {\n  const [toPercent, setToPercent] = useState(true);\n  const [withLegend, setWithLegend] = useState(true);\n  const barData: StackedBarChartData = {\n    "titleField": "Title",\n    "totalField": "Total",\n    "stackFields": ["Renewal", "New", "Extension", "Vacant"],\n    "titleSeparator": ":",\n    "values": [{\n      "Title": "Scholars Rooftop:(06-12-20)",\n      "Renewal": 8,\n      "New": 5,\n      "Extension": 0,\n      "Vacant": 0,\n      "Total": 13\n    }, {\n      "Title": "Scholars Rock:(06-12-20)",\n      "Renewal": 50,\n      "New": 44,\n      "Extension": 0,\n      "Vacant": 0,\n      "Total": 94\n    }, {\n      "Title": "Huntington Gardens:(06-12-20)",\n      "Renewal": 25,\n      "New": 4,\n      "Extension": 0,\n      "Vacant": 4,\n      "Total": 33\n    }, {\n      "Title": "Covenanter Hill:(06-12-20)",\n      "Renewal": 114,\n      "New": 79,\n      "Extension": 0,\n      "Vacant": 3,\n      "Total": 196\n    }, {\n      "Title": "MeadowCreek:(06-12-20)",\n      "Renewal": 165,\n      "New": 56,\n      "Extension": 2,\n      "Vacant": 6,\n      "Total": 229\n    }, {\n      "Title": "Scholars Quad:(06-12-20)",\n      "Renewal": 40,\n      "New": 29,\n      "Extension": 0,\n      "Vacant": 3,\n      "Total": 72\n    }, {\n      "Title": "Cov Affordable:(06-12-20)",\n      "Renewal": 7,\n      "New": 2,\n      "Extension": 0,\n      "Vacant": 2,\n      "Total": 11\n    }, {\n      "Title": "Porto Flats:(06-12-20)",\n      "Renewal": 25,\n      "New": 15,\n      "Extension": 0,\n      "Vacant": 6,\n      "Total": 46\n    }, {\n      "Title": "Cape Dutch Villas:(06-12-20)",\n      "Renewal": 20,\n      "New": 3,\n      "Extension": 0,\n      "Vacant": 1,\n      "Total": 24\n    }, {\n      "Title": "Verona Park:(06-12-20)",\n      "Renewal": 5,\n      "New": 2,\n      "Extension": 0,\n      "Vacant": 1,\n      "Total": 8\n    }, {\n      "Title": "HighGrove:(06-12-20)",\n      "Renewal": 36,\n      "New": 15,\n      "Extension": 0,\n      "Vacant": 7,\n      "Total": 58\n    }, {\n      "Title": "SummerHouse:(06-12-20)",\n      "Renewal": 67,\n      "New": 58,\n      "Extension": 0,\n      "Vacant": 5,\n      "Total": 130\n    }]\n  };\n  const comparisonBarData: StackedBarChartData = {\n    "titleField": "Title",\n    "totalField": "Total",\n    "stackFields": ["Renewal", "New", "Extension", "Vacant"],\n    "titleSeparator": ":",\n    "values": [{\n      "Title": "Scholars Rooftop:(06-12-21)",\n      "Renewal": 5,\n      "New": 8,\n      "Extension": 0,\n      "Vacant": 0,\n      "Total": 13\n    },\n    // {\n    //     "Title": "Scholars Rock:(06-12-21)",\n    //     "Renewal": 50,\n    //     "New": 44,\n    //     "Extension": 0,\n    //     "Vacant": 0,\n    //     "Total": 94\n    // } ,\n    {\n      "Title": "Huntington Gardens:(06-12-21)",\n      "Renewal": 15,\n      "New": 14,\n      "Extension": 0,\n      "Vacant": 4,\n      "Total": 33\n    }, {\n      "Title": "Covenanter Hill:(06-12-21)",\n      "Renewal": 14,\n      "New": 179,\n      "Extension": 0,\n      "Vacant": 3,\n      "Total": 196\n    }, {\n      "Title": "MeadowCreek:(06-12-21)",\n      "Renewal": 65,\n      "New": 156,\n      "Extension": 2,\n      "Vacant": 6,\n      "Total": 229\n    }, {\n      "Title": "Scholars Quad:(06-12-21)",\n      "Renewal": 20,\n      "New": 49,\n      "Extension": 0,\n      "Vacant": 3,\n      "Total": 72\n    }, {\n      "Title": "Cov Affordable:(06-12-21)",\n      "Renewal": 2,\n      "New": 7,\n      "Extension": 0,\n      "Vacant": 2,\n      "Total": 11\n    }, {\n      "Title": "Porto Flats:(06-12-21)",\n      "Renewal": 15,\n      "New": 25,\n      "Extension": 0,\n      "Vacant": 6,\n      "Total": 46\n    }, {\n      "Title": "Cape Dutch Villas:(06-12-21)",\n      "Renewal": 10,\n      "New": 13,\n      "Extension": 0,\n      "Vacant": 1,\n      "Total": 24\n    }, {\n      "Title": "Verona Park:(06-12-21)",\n      "Renewal": 2,\n      "New": 5,\n      "Extension": 0,\n      "Vacant": 1,\n      "Total": 8\n    }, {\n      "Title": "HighGrove:(06-12-21)",\n      "Renewal": 26,\n      "New": 25,\n      "Extension": 0,\n      "Vacant": 7,\n      "Total": 58\n    }, {\n      "Title": "SummerHouse:(06-12-21)",\n      "Renewal": 58,\n      "New": 65,\n      "Extension": 0,\n      "Vacant": 7,\n      "Total": 130\n    }]\n  };\n  const togglePercent = () => {\n    setToPercent(!toPercent);\n  };\n  return <>\n                <StackedBarChart data={barData} comparisonData={comparisonBarData} toPercentage={toPercent} withLegend={withLegend} />\n                <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>\n                &nbsp;&nbsp;&nbsp;&nbsp;\n                <button onClick={() => {\n      setWithLegend(!withLegend);\n    }}>{withLegend ? "Without Legend" : "With Legend"}\n                </button>\n            </>;\n}'},null===(_Comparison$parameter2=Comparison.parameters)||void 0===_Comparison$parameter2||null===(_Comparison$parameter3=_Comparison$parameter2.docs)||void 0===_Comparison$parameter3?void 0:_Comparison$parameter3.source)})});var __namedExportsOrder=["Default","Comparison"]}}]);