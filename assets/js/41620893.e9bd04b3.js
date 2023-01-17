"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9725],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),g=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=g(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),u=g(a),k=r,N=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[u]="string"==typeof t?t:r,i[1]=m;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},975:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>g});var n=a(7462),r=(a(7294),a(3905));const l={slug:"git\u7684\u57fa\u672c\u4f7f\u7528",title:"git\u7684\u57fa\u672c\u4f7f\u7528",authors:["boyxlj"],tags:["git","\u5de5\u5177"]},i=void 0,m={permalink:"/blog/git\u7684\u57fa\u672c\u4f7f\u7528",source:"@site/blog/2022-01-16-git\u7684\u57fa\u672c\u4f7f\u7528.md",title:"git\u7684\u57fa\u672c\u4f7f\u7528",description:"1.\u533a\u57df",date:"2022-01-16T00:00:00.000Z",formattedDate:"2022\u5e741\u670816\u65e5",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"\u5de5\u5177",permalink:"/blog/tags/\u5de5\u5177"}],readingTime:3.45,hasTruncateMarker:!1,authors:[{name:"Miraitowa",title:"\u8d8a\u52aa\u529b\uff0c\u8d8a\u5e78\u8fd0",url:"https://github.com/boyxlj",imageURL:"https://avatars.githubusercontent.com/u/93892079?v=4",key:"boyxlj"}],frontMatter:{slug:"git\u7684\u57fa\u672c\u4f7f\u7528",title:"git\u7684\u57fa\u672c\u4f7f\u7528",authors:["boyxlj"],tags:["git","\u5de5\u5177"]},prevItem:{title:"JavaScript-\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",permalink:"/blog/JavaScript-\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5"},nextItem:{title:"Mysql\u5e38\u7528\u8bed\u53e5",permalink:"/blog/Mysql\u5e38\u7528\u8bed\u53e5"}},p={authorsImageUrls:[void 0]},g=[{value:"1.\u533a\u57df",id:"1\u533a\u57df",level:3},{value:"2.\u5bf9\u8c61",id:"2\u5bf9\u8c61",level:3},{value:"3.\u5e38\u7528\u547d\u4ee4",id:"3\u5e38\u7528\u547d\u4ee4",level:3},{value:"4.\u9ad8\u5c42\u547d\u4ee4",id:"4\u9ad8\u5c42\u547d\u4ee4",level:3},{value:"5.\u5206\u652f\u6307\u4ee4:",id:"5\u5206\u652f\u6307\u4ee4",level:3},{value:"6.\u8fdc\u7a0b\u4ed3\u5e93\u7684\u64cd\u4f5c",id:"6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u64cd\u4f5c",level:3},{value:"\u5b8c\u6574\u547d\u4ee4",id:"\u5b8c\u6574\u547d\u4ee4",level:3}],o={toc:g};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1\u533a\u57df"},"1.\u533a\u57df"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u533a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6682\u5b58\u533a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7248\u672c\u5e93"))),(0,r.kt)("h3",{id:"2\u5bf9\u8c61"},"2.\u5bf9\u8c61"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"git\u5bf9\u8c61")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6811\u5bf9\u8c61")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63d0\u4ea4\u5bf9\u8c61"))),(0,r.kt)("h3",{id:"3\u5e38\u7528\u547d\u4ee4"},"3.\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'git config --global user.name "nihao"'),(0,r.kt)("td",{parentName:"tr",align:null},"(\u9996\u6b21\u5fc5\u987b\u8bbe\u7f6e)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git config --global user.email \u81ea\u5df1\u7684\u90ae\u7bb1"),(0,r.kt)("td",{parentName:"tr",align:null},"(\u9996\u6b21\u5fc5\u987b\u8bbe\u7f6e)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git config --list"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5f53\u524d\u7684\u914d\u7f6e\u9879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git --version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524dgit\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clear"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6e05\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'echo "nihao"'),(0,r.kt)("td",{parentName:"tr",align:null},'echo "nihao" > test.txt(\u63a7\u5236\u53f0\u8f93\u51fa/\u521b\u5efa\u6587\u4ef6\u5939)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ll"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u5b50\u6587\u4ef6\u5e73\u94fa\u63a7\u5236\u53f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git init"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u672c\u5730\u4ed3\u5e93")))),(0,r.kt)("h3",{id:"4\u9ad8\u5c42\u547d\u4ee4"},"4.\u9ad8\u5c42\u547d\u4ee4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git init"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u4ed3\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git status"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6587\u4ef6\u7684\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git diff"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u54ea\u4e9b\u6587\u4ef6\u4fee\u6539\u8fd8\u672a\u6682\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git diff --staged"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u54ea\u4e9b\u6587\u4ef6\u4fee\u6539\u4ee5\u53ca\u88ab\u6682\u5b58\u4e86\uff0c\u8fd8\u672a\u63d0\u4ea4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u63d0\u4ea4\u7684\u5386\u53f2\u8bb0\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git log --online"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u63d0\u4ea4\u7684\u5386\u53f2\u8bb0\u5f55\uff08\u7cbe\u7b80\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git add ./"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4fee\u6539\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff08\u672a\u8ddf\u8e2a\u65f6\u8fdb\u884c\u8ddf\u8e2a\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git commit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165git\u7f16\u8f91\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git commit -a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u6682\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git commit -a -m \u6ce8\u91ca"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u6682\u5b58\u533a\u5e76\u63d0\u4ea4\u5230\u7248\u672c\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git commit  -m \u6ce8\u91ca"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u6682\u5b58\u533a\u5e76\u63d0\u4ea4\u5230\u7248\u672c\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git reset --hard \u7248\u672c\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7f\u68ad/(\u56de\u9000\u5230\u4e0a\u4e00\u4e2a\u7248\u672c)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git revert  \u7248\u672c\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7f\u68ad/\u56de\u9000(\u64a4\u9500\u5f53\u524d\u7248\u672c\u63d0\u4ea4\uff0c\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u63d0\u4ea4\u8bb0\u5f55)")))),(0,r.kt)("h3",{id:"5\u5206\u652f\u6307\u4ee4"},"5.\u5206\u652f\u6307\u4ee4:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch \u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5206\u652f\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout \u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git checkout -b \u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5e76\u5207\u6362\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git switch -c master"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5207\u6362\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git merge \u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u628a\u6307\u5b9a\u7684\u5206\u652f\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git branch -d \u672c\u5730\u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u672c\u5730\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push oirgin \u8fdc\u7a0b\u5206\u652f\u540d:\u672c\u5730\u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u5206\u652f\u63a8\u9001\u81f3\u8fdc\u7a0b\u4ed3\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push oirgin :\u672c\u5730\u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u8fdc\u7a0b\u5206\u652f")))),(0,r.kt)("h3",{id:"6\u8fdc\u7a0b\u4ed3\u5e93\u7684\u64cd\u4f5c"},"6.\u8fdc\u7a0b\u4ed3\u5e93\u7684\u64cd\u4f5c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git remote -v"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u5f53\u524d\u6240\u6709\u8fdc\u7a0b\u5730\u5740\u522b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git remote add \u522b\u540d \u8fdc\u7a0b\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53e6\u8d77\u522b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push -u \u522b\u540d \u5206\u652f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u672c\u5730\u5206\u652f\u4e0a\u7684\u5185\u5bb9\u5230\u56de\u8fdc\u7a0b\u4ed3\u5e93 (-u\u6dfb\u52a0\u540e\u4f1a\u8ffd\u8e2a\u8bb0\u5f55,\u518d\u6b21\u63a8\u9001\u6216\u62c9\u53d6\u65f6\u53ea\u9700\u8981 git push)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git clone \u8fdc\u7a0b\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u7684\u5185\u5bb9\u514b\u9686\u5230\u672c\u5730")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git pull \u8fdc\u7a0b\u5730\u5740\u522b\u540d \u8fdc\u7a0b\u5206\u652f\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u5bf9\u4e8e\u5206\u652f\u6700\u65b0\u5185\u5bb9\u62c9\u4e0b\u6765\u540e\u4e0e\u5f53\u524d\u672c\u5730\u5206\u652f\u76f4\u63a5\u5408\u5e76")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'git tag -a v-1.1.1 -m "\u6ce8\u91ca"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git push origin --tags"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7248\u672c\u81f3\u8fdc\u7a0b\u4ed3\u5e93")))),(0,r.kt)("h3",{id:"\u5b8c\u6574\u547d\u4ee4"},"\u5b8c\u6574\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin (\u4ed3\u5e93\u5730\u5740)\ngit push -u origin main\n\ngit remote add origin (\u4ed3\u5e93\u5730\u5740)\ngit branch -M main\ngit push -u origin main\n\n')))}u.isMDXComponent=!0}}]);