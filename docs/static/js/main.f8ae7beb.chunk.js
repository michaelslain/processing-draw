(this["webpackJsonpdraw-bot"]=this["webpackJsonpdraw-bot"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(5),o=a.n(n),l=(a(12),a(2)),u=a(1);a(13),a(14),a(15);function i(e){var t=e.children,a=e.callback,c=e.style,n=e.className;return r.a.createElement("div",{className:"button ".concat(n),onClick:a,style:c},t)}function s(e){var t=e.currentTool,a=e.setCurrentTool,c=e.handleTogglePop;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"tools"},r.a.createElement(i,{callback:function(){"rect"!==t&&a("rect")},className:"rect"===t?"selected":""},"Rect"),r.a.createElement(i,{callback:function(){"ellipse"!==t&&a("ellipse")},className:"ellipse"===t?"selected":""},"Ellipse"),r.a.createElement(i,{callback:function(){"circle"!==t&&a("circle")},className:"circle"===t?"selected":""},"Circle"),r.a.createElement(i,{callback:function(){"line"!==t&&a("line")},className:"line"===t?"selected":""},"Line"),r.a.createElement(i,{callback:function(){"delete"!==t&&a("delete")},className:"delete"===t?"selected":""},"Delete")),r.a.createElement("div",{className:"other"},r.a.createElement(i,{callback:c,style:{color:"cornflowerblue"}},"Export for Processing")))}a(16),a(17);function m(e){var t=e.value,a=e.callback,c=e.title,n=e.type,o="number"===(void 0===n?"number":n)?r.a.createElement("input",{type:"text",className:"input",value:t,onChange:function(e){var t=e.target.value;Number.isNaN(Number(t))||Number(t)<0||a(t)},placeholder:"0"}):r.a.createElement("div",{className:"rgb-input-container"},r.a.createElement("div",{className:"rgb-label red"},"R"),r.a.createElement("input",{type:"text",className:"rgb-input",value:t[0],onChange:function(e){var c=e.target.value;if(!Number.isNaN(Number(c))&&!(Number(c)<0)&&!(Number(c)>255)){var r=t;r=r.map((function(e,t){return 0===t?c:e})),a(r)}},placeholder:"0"}),r.a.createElement("div",{className:"rgb-label green"},"G"),r.a.createElement("input",{type:"text",className:"rgb-input",value:t[1],onChange:function(e){var c=e.target.value;if(!Number.isNaN(Number(c))&&!(Number(c)<0)&&!(Number(c)>255)){var r=t;r=r.map((function(e,t){return 1===t?c:e})),a(r)}},placeholder:"0"}),r.a.createElement("div",{className:"rgb-label blue"},"B"),r.a.createElement("input",{type:"text",className:"rgb-input",value:t[2],onChange:function(e){var c=e.target.value;if(!Number.isNaN(Number(c))&&!(Number(c)<0)&&!(Number(c)>255)){var r=t;r=r.map((function(e,t){return 2===t?c:e})),a(r)}},placeholder:"0"}));return r.a.createElement("div",{className:"input-container"},r.a.createElement("div",{className:"title"},c),o)}function b(e){var t,a=e.currentTool,n=e.width,o=e.setWidth,l=e.height,u=e.setHeight,i=e.radius,s=e.setRadius,b=e.fill,d=e.setFill,h=e.strokeColor,N=e.setStrokeColor,p=e.strokeWidth,f=e.setStrokeWidth,v=r.a.createElement(m,{value:n,callback:o,title:"Width"}),k=r.a.createElement(m,{value:l,callback:u,title:"Height"}),g=r.a.createElement(m,{value:i,callback:s,title:"Radius"}),E=r.a.createElement(m,{value:b,callback:d,title:"Fill",type:"rgb"}),w=r.a.createElement(m,{value:h,callback:N,title:"Stroke Color",type:"rgb"}),O=r.a.createElement(m,{value:p,callback:f,title:"Stroke Width"});switch(a){case"rect":case"ellipse":t=r.a.createElement(c.Fragment,null,v,k,E,w,O);break;case"circle":t=r.a.createElement(c.Fragment,null,g,E,w,O);break;case"line":t=r.a.createElement(c.Fragment,null,w,O)}return r.a.createElement("div",{className:"side-bar"},t)}a(18),a(19);function d(e){var t,a=e.data,c=e.DOM,n=e.setDOM,o=e.index,l=e.currentTool,u=a.type,i=a.x,s=a.y,m=a.height,b=a.fill,d=a.strokeWidth,h=a.strokeColor,N=a.radius,p=a.x2,f=a.y2,v=a.width;switch(u){case"rect":case"ellipse":t={top:s,left:i,width:"".concat(Number(v),"px"),height:"".concat(Number(m),"px"),background:"rgb(".concat(Number(b[0]),",").concat(Number(b[1]),",").concat(Number(b[2]),")"),borderWidth:"".concat(Number(d),"px"),borderColor:"rgb(".concat(Number(h[0]),",").concat(Number(h[1]),",").concat(Number(h[2]),")")};break;case"circle":t={top:s,left:i,width:"".concat(Number(N),"px"),height:"".concat(Number(N),"px"),background:"rgb(".concat(Number(b[0]),",").concat(Number(b[1]),",").concat(Number(b[2]),")"),borderWidth:"".concat(Number(d),"px"),borderColor:"rgb(".concat(Number(h[0]),",").concat(Number(h[1]),",").concat(Number(h[2]),")")};break;case"line":var k,g=Math.sqrt(Math.pow(p-i,2)+Math.pow(f-s,2)),E=g,w=Math.abs(f-s),O=Math.acos(w/E)*(180/Math.PI);k=p>i&&f<s?270+O:p>i&&f>s?90-O:p<i&&f>s?90+O:270-O,t={top:s,left:i,width:"".concat(g,"px"),height:0,borderWidth:"".concat(Number(d),"px"),borderColor:"rgb(".concat(Number(h[0]),",").concat(Number(h[1]),",").concat(Number(h[2]),")"),transform:"rotate(".concat(k,"deg)"),borderLeftWidth:0,borderRightWidth:0}}return r.a.createElement("div",{className:"object ".concat(u),style:t,onClick:function(){if("delete"===l){var e=c.filter((function(e,t){return o!==t}));n(e)}}})}function h(e){var t=e.DOM,a=e.setDOM,c=e.currentTool,n=t.map((function(e,n){return r.a.createElement(d,{key:n,data:e,index:n,DOM:t,setDOM:a,currentTool:c})}));return r.a.createElement("div",{className:"canvas"},n)}a(20);function N(e){var t=e.currentTool,a=e.width,n=(e.setWidth,e.height),o=(e.setHeight,e.radius),l=(e.setRadius,e.fill),i=(e.setFill,e.strokeColor),s=(e.setStrokeColor,e.strokeWidth),m=(e.setStrokeWidth,e.openPop),b=Object(c.useState)(0),d=Object(u.a)(b,2),h=d[0],N=d[1],p=Object(c.useState)(0),f=Object(u.a)(p,2),v=f[0],k=f[1];Object(c.useEffect)((function(){window.onmousemove=E}),[N,k]);var g,E=function(e){N(e.clientY),k(e.clientX)};if(m)return r.a.createElement(c.Fragment,null);if(h<100)return r.a.createElement(c.Fragment,null);if(v>window.innerWidth-200)return r.a.createElement(c.Fragment,null);switch(t){case"rect":case"ellipse":g={top:h,left:v,width:"".concat(Number(a),"px"),height:"".concat(Number(n),"px"),background:"rgb(".concat(Number(l[0]),",").concat(Number(l[1]),",").concat(Number(l[2]),")"),borderWidth:"".concat(Number(s),"px"),borderColor:"rgb(".concat(Number(i[0]),",").concat(Number(i[1]),",").concat(Number(i[2]),")")};break;case"circle":g={top:h,left:v,width:"".concat(Number(o),"px"),height:"".concat(Number(o),"px"),background:"rgb(".concat(Number(l[0]),",").concat(Number(l[1]),",").concat(Number(l[2]),")"),borderWidth:"".concat(Number(s),"px"),borderColor:"rgb(".concat(Number(i[0]),",").concat(Number(i[1]),",").concat(Number(i[2]),")")};break;case"line":g={top:"".concat(h-1e3,"px"),left:"".concat(v-1e3,"px"),width:"2000px",height:"2000px",cursor:"cell"}}return r.a.createElement("div",{className:"cursor ".concat(t),style:g})}var p=a(3),f=a.n(p),v=a(6);a(22);function k(e){var t=e.openPop,a=e.handleTogglePop,n=e.DOM,o=Object(c.useRef)(null);if(!t)return r.a.createElement(c.Fragment,null);var l=[];l.push("size(".concat(window.innerWidth-200,", ").concat(window.innerHeight-100,");")),l.push("noStroke();"),n.forEach((function(e){var t=e.x,a=e.y,c=e.width,r=e.height,n=e.radius,o=e.strokeColor,u=e.strokeWidth,i=e.fill,s=e.x2,m=e.y2;switch(e.type){case"rect":t=Number(t),a=Number(a),c=Number(c),r=Number(r),o=[Number(o[0]),Number(o[1]),Number(o[2])],u=Number(u),i=[Number(i[0]),Number(i[1]),Number(i[2])],l.push("fill(".concat(i[0],", ").concat(i[1],", ").concat(i[2],");")),u>0?(l.push("stroke(".concat(o[0],", ").concat(o[1],", ").concat(o[2],");")),l.push("strokeWeight(".concat(u,");"))):l.push("noStroke();"),l.push("rect(".concat(t,", ").concat(a,", ").concat(c,", ").concat(r,");"));break;case"ellipse":t=Number(t),a=Number(a),c=Number(c),r=Number(r),o=[Number(o[0]),Number(o[1]),Number(o[2])],u=Number(u),i=[Number(i[0]),Number(i[1]),Number(i[2])],l.push("fill(".concat(i[0],", ").concat(i[1],", ").concat(i[2],");")),u>0?(l.push("stroke(".concat(o[0],", ").concat(o[1],", ").concat(o[2],");")),l.push("strokeWeight(".concat(u,");"))):l.push("noStroke();"),l.push("ellipse(".concat(t,", ").concat(a,", ").concat(c,", ").concat(r,");"));break;case"circle":t=Number(t),a=Number(a),n=Number(n),o=[Number(o[0]),Number(o[1]),Number(o[2])],u=Number(u),i=[Number(i[0]),Number(i[1]),Number(i[2])],l.push("fill(".concat(i[0],", ").concat(i[1],", ").concat(i[2],");")),u>0?(l.push("stroke(".concat(o[0],", ").concat(o[1],", ").concat(o[2],");")),l.push("strokeWeight(".concat(u,");"))):l.push("noStroke();"),l.push("circle(".concat(t+n/2,", ").concat(a+n/2,", ").concat(n,");"));break;case"line":if(t=Number(t),a=Number(a),s=Number(s),m=Number(m),o=[Number(o[0]),Number(o[1]),Number(o[2])],(u=Number(u))<0)return;l.push("stroke(".concat(o[0],", ").concat(o[1],", ").concat(o[2],");")),l.push("strokeWeight(".concat(u,");")),l.push("line(".concat(t,", ").concat(a,", ").concat(s,",").concat(m,");"))}}));var u=l.map((function(e,t){return e=(e=e.split("")).map((function(e,a){return Number.isNaN(Number(e))?e:r.a.createElement("div",{className:"number",key:t*a},e)})),r.a.createElement("div",{key:t,className:"line"},e)})),s=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(l.join("\n"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"pop-container"},r.a.createElement("div",{className:"pop"},r.a.createElement("div",{className:"close",onClick:a},"X"),r.a.createElement(i,{className:"copy-button",callback:s},"Copy Code"),r.a.createElement("div",{className:"code-container",ref:o},u)))}function g(){var e=Object(c.useState)("rect"),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1],p=Object(c.useState)(50),f=Object(u.a)(p,2),v=f[0],g=f[1],E=Object(c.useState)(50),w=Object(u.a)(E,2),O=w[0],x=w[1],W=Object(c.useState)(50),j=Object(u.a)(W,2),y=j[0],C=j[1],S=Object(c.useState)([0,0,0]),M=Object(u.a)(S,2),T=M[0],F=M[1],D=Object(c.useState)([0,0,0]),P=Object(u.a)(D,2),R=P[0],H=P[1],L=Object(c.useState)(5),X=Object(u.a)(L,2),B=X[0],Y=X[1],I=Object(c.useState)(!1),J=Object(u.a)(I,2),q=J[0],z=J[1],G=function(e){if(!q){var t=e.clientX,c=e.clientY;if(!(t>window.innerWidth-200)&&!(c<100)){if("line"===a){var r=function(e){var r,n=e.clientX,o=e.clientY,l={x:Math.round(t),y:Math.round(c-100),x2:Math.round(n),y2:Math.round(o-100),strokeWidth:B,strokeColor:R,type:a};r=m.concat([l]),d(r)};return window.addEventListener("mousemove",r),void(window.onmouseup=function(){return window.removeEventListener("mousemove",r)})}var n={x:Math.round(t),y:Math.round(c-100)};switch(a){case"rect":case"ellipse":n=Object(l.a)({},n,{width:v,height:O,fill:T,strokeColor:R,strokeWidth:B});break;case"circle":n=Object(l.a)({},n,{radius:y,fill:T,strokeColor:R,strokeWidth:B})}n=Object(l.a)({},n,{type:a});var o=m.concat([n]);d(o)}}};Object(c.useEffect)((function(){window.onmousedown=G}),[G]);var $=function(){return z(!q)};return r.a.createElement(c.Fragment,null,r.a.createElement(s,{currentTool:a,setCurrentTool:n,handleTogglePop:$}),r.a.createElement("div",{className:"bottom-container"},r.a.createElement(h,{DOM:m,setDOM:d,currentTool:a}),r.a.createElement(b,{currentTool:a,width:v,setWidth:g,height:O,setHeight:x,radius:y,setRadius:C,fill:T,setFill:F,strokeColor:R,setStrokeColor:H,strokeWidth:B,setStrokeWidth:Y})),r.a.createElement(N,{currentTool:a,width:v,setWidth:g,height:O,setHeight:x,radius:y,setRadius:C,fill:T,setFill:F,strokeColor:R,setStrokeColor:H,strokeWidth:B,setStrokeWidth:Y,openPop:q}),r.a.createElement(k,{openPop:q,handleTogglePop:$,DOM:m}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f8ae7beb.chunk.js.map