"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("react"));function n({children:e,onOutsideClick:n}){const o=t.default.useRef(null),u=e=>{o&&o.current&&!o.current.contains(e.target)&&n()};return t.default.useEffect((()=>{document.addEventListener("mousedown",u)}),[]),t.default.createElement("div",{ref:o},e)}module.exports=function(){return t.default.createElement(n,{onOutsideClick:()=>{console.log("I am called whenever click happens outside of 'AnyOtherReactComponent' component")}},"MultiFilterComboxBox")};
