(()=>{"use strict";var r={57037:(r,n,o)=>{o.d(n,{A:()=>A});var e=o(71354),t=o.n(e),a=o(76314),i=o.n(a)()(t());i.push([r.id,'.form {\n  position: relative;\n  width: min(700px, 95vw);\n}\n\nfieldset {\n  border: 2px solid var(--secondary-color);\n  border-radius: 8px;\n  padding: 15px;\n  position: relative;\n}\nfieldset > div.form-group > input {\n  width: 100%;\n  padding: 10px;\n  margin: 16px 0px;\n  border-radius: 4px;\n  border: 1px solid var(--primary-color);\n}\n\nlegend {\n  font-size: 16px;\n  font-weight: bold;\n  color:var(--primary-color);\n  padding: 0 10px;\n  background-color:var(--background-color);\n  position: absolute;\n  top: -10px;\n  left: 15px;\n}\n\n.form-group-2 {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 10px;\n  & input {\n    width: 130px;\n    padding: 10px;\n    margin: 0px;\n    border-radius: 4px;\n    border: 1px solid var(--primary-color);\n  }\n  & select {\n    width: 130px;\n    padding: 10px;\n    font-size: 1.05rem;\n    margin: 0px;\n    border-radius: 4px;\n    border: 1px solid var(--primary-color);\n    background-color: var(--bright-color);\n    color: var(--primary-color);\n    &:focus { \n      cursor: pointer;\n      box-shadow: 2px 2px 5px var(--shadow-color);\n      background-color: var(--primary-color);\n      color: var(--bright-color);\n    }\n    & optgroup {\n      & option[value="1"] {\n        background-color: var(--hover-green);\n        color: var(--primary-color);\n      }\n      & option[value="2"] {\n        background-color: var(--priority-color);\n        color: var(--text-color);\n      }\n      & option[value="3"] {\n        background-color: var(--max-priority-color);\n        color: var(--secondary-color);\n      }\n    }\n  }\n}\n\n.btn-primary {\n  position: absolute;\n  width: min(200px, 25vw);\n  bottom: -15px;\n  right: 70px;\n  font-size: 1rem;\n  background-color: var(--primary-color);\n  color: var(--bright-color);\n  transition: background-color 0.2s ease;\n  box-shadow: 5px 5px 10px var(--shadow-color);\n  border-radius: 4px;\n}\n.btn-primary:hover {\n  box-shadow: 1px 1px 3px var(--shadow-color);\n  background: var(--hover-green);\n  color: var(--primary-color);\n  cursor: pointer;\n  font-weight: bold;\n  border: 2px solid var(--secondary-color);\n}\n\n.forgot-password {\n  display: block;\n  color: var(--primary-color);\n  text-decoration: underline;\n  cursor: pointer;\n  margin: 10px 0;\n}\n.forgot-password:hover {\n  color: var(--text-color);\n}\n',"",{version:3,sources:["webpack://./frontend/assets/css/register/form.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;EACT;IACE,YAAY;IACZ,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,sCAAsC;EACxC;EACA;IACE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,sCAAsC;IACtC,qCAAqC;IACrC,2BAA2B;IAC3B;MACE,eAAe;MACf,2CAA2C;MAC3C,sCAAsC;MACtC,0BAA0B;IAC5B;IACA;MACE;QACE,oCAAoC;QACpC,2BAA2B;MAC7B;MACA;QACE,uCAAuC;QACvC,wBAAwB;MAC1B;MACA;QACE,2CAA2C;QAC3C,6BAA6B;MAC/B;IACF;EACF;AACF;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,eAAe;EACf,sCAAsC;EACtC,0BAA0B;EAC1B,sCAAsC;EACtC,4CAA4C;EAC5C,kBAAkB;AACpB;AACA;EACE,2CAA2C;EAC3C,8BAA8B;EAC9B,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,0BAA0B;EAC1B,eAAe;EACf,cAAc;AAChB;AACA;EACE,wBAAwB;AAC1B",sourcesContent:['.form {\r\n  position: relative;\r\n  width: min(700px, 95vw);\r\n}\r\n\r\nfieldset {\r\n  border: 2px solid var(--secondary-color);\r\n  border-radius: 8px;\r\n  padding: 15px;\r\n  position: relative;\r\n}\r\nfieldset > div.form-group > input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 16px 0px;\r\n  border-radius: 4px;\r\n  border: 1px solid var(--primary-color);\r\n}\r\n\r\nlegend {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color:var(--primary-color);\r\n  padding: 0 10px;\r\n  background-color:var(--background-color);\r\n  position: absolute;\r\n  top: -10px;\r\n  left: 15px;\r\n}\r\n\r\n.form-group-2 {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 10px;\r\n  & input {\r\n    width: 130px;\r\n    padding: 10px;\r\n    margin: 0px;\r\n    border-radius: 4px;\r\n    border: 1px solid var(--primary-color);\r\n  }\r\n  & select {\r\n    width: 130px;\r\n    padding: 10px;\r\n    font-size: 1.05rem;\r\n    margin: 0px;\r\n    border-radius: 4px;\r\n    border: 1px solid var(--primary-color);\r\n    background-color: var(--bright-color);\r\n    color: var(--primary-color);\r\n    &:focus { \r\n      cursor: pointer;\r\n      box-shadow: 2px 2px 5px var(--shadow-color);\r\n      background-color: var(--primary-color);\r\n      color: var(--bright-color);\r\n    }\r\n    & optgroup {\r\n      & option[value="1"] {\r\n        background-color: var(--hover-green);\r\n        color: var(--primary-color);\r\n      }\r\n      & option[value="2"] {\r\n        background-color: var(--priority-color);\r\n        color: var(--text-color);\r\n      }\r\n      & option[value="3"] {\r\n        background-color: var(--max-priority-color);\r\n        color: var(--secondary-color);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.btn-primary {\r\n  position: absolute;\r\n  width: min(200px, 25vw);\r\n  bottom: -15px;\r\n  right: 70px;\r\n  font-size: 1rem;\r\n  background-color: var(--primary-color);\r\n  color: var(--bright-color);\r\n  transition: background-color 0.2s ease;\r\n  box-shadow: 5px 5px 10px var(--shadow-color);\r\n  border-radius: 4px;\r\n}\r\n.btn-primary:hover {\r\n  box-shadow: 1px 1px 3px var(--shadow-color);\r\n  background: var(--hover-green);\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  border: 2px solid var(--secondary-color);\r\n}\r\n\r\n.forgot-password {\r\n  display: block;\r\n  color: var(--primary-color);\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  margin: 10px 0;\r\n}\r\n.forgot-password:hover {\r\n  color: var(--text-color);\r\n}\r\n'],sourceRoot:""}]);const A=i},49408:(r,n,o)=>{o.d(n,{A:()=>A});var e=o(71354),t=o.n(e),a=o(76314),i=o.n(a)()(t());i.push([r.id,".main {\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--background-color);\n  margin: 30px auto;\n}\n\n.main__form {\n  width: 100%;\n}","",{version:3,sources:["webpack://./frontend/assets/css/register/register.css"],names:[],mappings:"AAAA;EACE,OAAO;EACP,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb",sourcesContent:[".main {\r\n  flex: 1;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--background-color);\r\n  margin: 30px auto;\r\n}\r\n\r\n.main__form {\r\n  width: 100%;\r\n}"],sourceRoot:""}]);const A=i},76314:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,e,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<r.length;s++){var p=[].concat(r[s]);e&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),n.push(p))}},n}},71354:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},85072:r=>{var n=[];function o(r){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===r){o=e;break}return o}function e(r,e){for(var a={},i=[],A=0;A<r.length;A++){var c=r[A],s=e.base?c[0]+e.base:c[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var d=o(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(u);else{var C=t(u,e);e.byIndex=A,n.splice(A,0,{identifier:l,updater:C,references:1})}i.push(l)}return i}function t(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,t){var a=e(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var A=o(a[i]);n[A].references--}for(var c=e(r,t),s=0;s<a.length;s++){var p=o(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},77659:r=>{var n={};r.exports=function(r,o){var e=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},10540:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},55056:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},97825:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},41113:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,o),a.exports}o.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return o.d(n,{a:n}),n},o.d=(r,n)=>{for(var e in n)o.o(n,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},o.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),o.nc=void 0;var e=o(85072),t=o.n(e),a=o(97825),i=o.n(a),A=o(77659),c=o.n(A),s=o(55056),p=o.n(s),l=o(10540),d=o.n(l),u=o(41113),C=o.n(u),v=o(57037),m={};m.styleTagTransform=C(),m.setAttributes=p(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(v.A,m),v.A&&v.A.locals&&v.A.locals;var f=o(49408),x={};x.styleTagTransform=C(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d(),t()(f.A,x),f.A&&f.A.locals&&f.A.locals;var g=document.querySelector("#chamadas-list"),b=document.querySelector("#home-list"),B=document.querySelector("#data-view-list"),E=document.querySelector("#search-list");document.addEventListener("DOMContentLoaded",(()=>{g.classList.add("selected"),b.classList.remove("selected"),B.classList.remove("selected"),E.classList.remove("selected")}))})();
//# sourceMappingURL=register.bundle.js.map