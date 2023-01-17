"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?l.createElement(h,i(i({ref:t},f),{},{components:n})):l.createElement(h,i({ref:t},f))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var l=n(7462),o=(n(7294),n(3905));const r={slug:"js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",title:"js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",authors:["boyxlj"],tags:["\u524d\u7aef","javascript"]},i=void 0,a={permalink:"/blog/js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",source:"@site/blog/2023-01-08-js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f.md",title:"js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",description:"1.clientWidth \u548c clientHeight",date:"2023-01-08T00:00:00.000Z",formattedDate:"2023\u5e741\u67088\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:3.225,hasTruncateMarker:!1,authors:[{name:"Miraitowa",title:"\u8d8a\u52aa\u529b\uff0c\u8d8a\u5e78\u8fd0",url:"https://github.com/boyxlj",imageURL:"https://avatars.githubusercontent.com/u/93892079?v=4",key:"boyxlj"}],frontMatter:{slug:"js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",title:"js\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f",authors:["boyxlj"],tags:["\u524d\u7aef","javascript"]},prevItem:{title:"for in \u548c for of \u5faa\u73af\u7684\u533a\u522b",permalink:"/blog/for in \u548c for of \u5faa\u73af\u7684\u533a\u522b"},nextItem:{title:"\u5e38\u7528\u4e8e\u4f18\u5316\u7684\u9632\u6296\u548c\u8282\u6d41",permalink:"/blog/\u5e38\u7528\u4e8e\u4f18\u5316\u7684\u9632\u6296\u548c\u8282\u6d41"}},c={authorsImageUrls:[void 0]},s=[{value:"1.<code>clientWidth</code> \u548c <code>clientHeight</code>",id:"1clientwidth-\u548c-clientheight",level:3},{value:"2.<code>scrollWidth</code> \u548c <code>scrollHeight</code>",id:"2scrollwidth-\u548c-scrollheight",level:3},{value:"3.<code>offsetWidth</code> \u548c <code>offsetHeight</code>",id:"3offsetwidth-\u548c-offsetheight",level:3},{value:"4.<code>offsetParent</code>",id:"4offsetparent",level:3},{value:"5.<code>offsetTop</code> \u548c <code>offsetLeft</code>",id:"5offsettop-\u548c-offsetleft",level:3},{value:"6.<code>scrollTop</code> \u548c <code>scrollLeft</code>",id:"6scrolltop-\u548c-scrollleft",level:3},{value:"\u5b8c\u6574\u6f14\u793a\u4ee3\u7801",id:"\u5b8c\u6574\u6f14\u793a\u4ee3\u7801",level:4}],f={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1clientwidth-\u548c-clientheight"},"1.",(0,o.kt)("inlineCode",{parentName:"h3"},"clientWidth")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"clientHeight")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u5185\u90e8\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd);"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u62ec\u5916\u8fb9\u8ddd,\u8fb9\u6846,\u4ee5\u53ca\u6eda\u52a8\u6761\u7684\u5bbd\u6216\u9ad8;"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"2scrollwidth-\u548c-scrollheight"},"2.",(0,o.kt)("inlineCode",{parentName:"h3"},"scrollWidth")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"scrollHeight")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u6eda\u52a8\u533a\u57df\u7684\u5927\u5c0f(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd);"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u5305\u62ec\u5916\u8fb9\u8ddd,\u8fb9\u6846,\u4ee5\u53ca\u6eda\u52a8\u6761\u7684\u5bbd\u6216\u9ad8;"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"3offsetwidth-\u548c-offsetheight"},"3.",(0,o.kt)("inlineCode",{parentName:"h3"},"offsetWidth")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"offsetHeight")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5143\u7d20\u53ef\u89c1\u533a\u57df\u7684\u5927\u5c0f(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd + \u8fb9\u6846);"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"4offsetparent"},"4.",(0,o.kt)("inlineCode",{parentName:"h3"},"offsetParent")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u5143\u7d20\u7684\u5b9a\u4f4d\u7236\u5143\u7d20;"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u7236\u5143\u7d20:\u8ddd\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u4e14\u5f00\u542f\u5b9a\u4f4d\u7684\u7956\u5148\u5143\u7d20,\u5982\u679c\u90fd\u6ca1\u6709\u5f00\u542f\u5219\u8fd4\u56debody;"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"5offsettop-\u548c-offsetleft"},"5.",(0,o.kt)("inlineCode",{parentName:"h3"},"offsetTop")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"offsetLeft")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u5143\u7d20\u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u7236\u5143\u7d20\u7684\u504f\u79fb\u91cf;"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u7236\u5143\u7d20:\u8ddd\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u4e14\u5f00\u542f\u5b9a\u4f4d\u7684\u7956\u5148\u5143\u7d20,\u5982\u679c\u90fd\u6ca1\u6709\u5f00\u542f\u5219\u4ee5body\u4e3a\u53c2\u7167\u7269;"),(0,o.kt)("li",{parentName:"ul"},"\u53ea\u8bfb\u5c5e\u6027;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"6scrolltop-\u548c-scrollleft"},"6.",(0,o.kt)("inlineCode",{parentName:"h3"},"scrollTop")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"scrollLeft")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6216\u8bbe\u7f6e\u6eda\u52a8\u6761\u7684\u504f\u79fb\u91cf;",(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("h4",{id:"\u5b8c\u6574\u6f14\u793a\u4ee3\u7801"},"\u5b8c\u6574\u6f14\u793a\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u901a\u8fc7\u5c5e\u6027\u8bfb\u53d6\u6837\u5f0f</title>\n  <style>\n\n    #box1{\n      position: relative;\n      border: 2px solid sienna;\n    }\n\n    #box2{\n      width: 300px;\n      height: 300px;\n      padding: 50px;\n      border: 10px solid goldenrod;\n      margin: 50px;\n      background-color: skyblue;\n      overflow: auto;\n    }\n\n    #box3{\n      width: 100px;\n      height: 500px;\n      background: red;\n    }\n  </style>\n</head>\n<body>\n  <div id="box1">\n    <div id="box2">\n      <div id="box3"></div>\n    </div>\n  </div>\n\n  <button id="btn">get scroll</button>\n\n  <script type="text/javascript">\n    const box2 = document.getElementById(\'box2\')\n\n    /*  \n        clientWidth \u548c clientHeight\n          1.\u83b7\u53d6\u5143\u7d20\u5185\u90e8\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd);\n          2.\u4e0d\u5305\u62ec\u5916\u8fb9\u8ddd,\u8fb9\u6846,\u4ee5\u53ca\u6eda\u52a8\u6761\u7684\u5bbd\u6216\u9ad8;\n          3.\u53ea\u8bfb\u5c5e\u6027;\n    */\n\n    console.log(`clientWidth,clientHeight`,box2.clientWidth,box2.clientHeight)   // 383 400\n\n    /* \n        scrollWidth \u548c scrollHeight\n          1.\u83b7\u53d6\u5143\u7d20\u6eda\u52a8\u533a\u57df\u7684\u5927\u5c0f(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd);\n          2.\u4e0d\u5305\u62ec\u5916\u8fb9\u8ddd,\u8fb9\u6846,\u4ee5\u53ca\u6eda\u52a8\u6761\u7684\u5bbd\u6216\u9ad8;\n          3.\u53ea\u8bfb\u5c5e\u6027;\n    */\n\n    console.log(`scrollWidth,scrollHeight`,box2.scrollWidth,box2.scrollHeight)   // 383 600\n\n    /* \n        offsetWidth \u548c offsetHeight\n          1.\u83b7\u53d6\u5143\u7d20\u53ef\u89c1\u533a\u57df\u7684\u5927\u5c0f(\u5185\u5bb9\u533a\u57df + \u5185\u8fb9\u8ddd + \u8fb9\u6846);\n          2.\u53ea\u8bfb\u5c5e\u6027;\n    */\n\n    console.log(`offsetWidth,offsetHeight`,box2.offsetWidth,box2.offsetHeight)   // 420 420\n\n    /* \n        offsetParent\n          1.\u83b7\u53d6\u5f53\u524d\u5143\u7d20\u7684\u5b9a\u4f4d\u7236\u5143\u7d20;\n          2.\u5b9a\u4f4d\u7236\u5143\u7d20:\u8ddd\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u4e14\u5f00\u542f\u5b9a\u4f4d\u7684\u7956\u5148\u5143\u7d20,\u5982\u679c\u90fd\u6ca1\u6709\u5f00\u542f\u5219\u8fd4\u56debody\n          2.\u53ea\u8bfb\u5c5e\u6027;\n    */\n\n    console.log(`offsetParent`,box2.offsetParent)  //  <div id="box1">...</div>\n\n    /* \n        offsetTop \u548c offsetLeft\n          1.\u83b7\u53d6\u5f53\u524d\u5143\u7d20\u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u7236\u5143\u7d20\u7684\u504f\u79fb\u91cf;\n          2.\u5b9a\u4f4d\u7236\u5143\u7d20:\u8ddd\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u4e14\u5f00\u542f\u5b9a\u4f4d\u7684\u7956\u5148\u5143\u7d20,\u5982\u679c\u90fd\u6ca1\u6709\u5f00\u542f\u5219\u4ee5body\u4e3a\u53c2\u7167\u7269\n          2.\u53ea\u8bfb\u5c5e\u6027;\n    */\n\n    console.log(`offsetTop,offsetLeft`,box2.offsetTop,box2.offsetLeft)   // 50 50\n\n    /* \n        scrollTop \u548c scrollLeft\n          1.\u83b7\u53d6\u6216\u8bbe\u7f6e\u6eda\u52a8\u6761\u7684\u504f\u79fb\u91cf;\n    */\n\n    btn.onclick = function(){\n      console.log(`scrollTop,scrollLeft`,box2.scrollTop,box2.scrollLeft)  \n    }\n\n    box2.scrollTop = 100\n\n  <\/script>\n</body>\n</html>\n')))}d.isMDXComponent=!0}}]);