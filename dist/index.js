"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(e),o=t(e);var a=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy?"production"===process.env.NODE_ENV:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if("production"!==process.env.NODE_ENV){var r=64===e.charCodeAt(0)&&105===e.charCodeAt(1);r&&this._alreadyInsertedOrderInsensitiveRule&&console.error("You're attempting to insert the following rule:\n"+e+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!r}if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(t){"production"===process.env.NODE_ENV||/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(e)||console.error('There was a problem inserting the following rule: "'+e+'"',t)}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,"production"!==process.env.NODE_ENV&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),i="-ms-",s="-moz-",c="-webkit-",l="comm",u="rule",d="decl",p="@keyframes",f=Math.abs,m=String.fromCharCode,h=Object.assign;function v(e){return e.trim()}function g(e,t,r){return e.replace(t,r)}function y(e,t){return e.indexOf(t)}function b(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function E(e){return e.length}function w(e){return e.length}function k(e,t){return t.push(e),e}var _=1,N=1,O=0,C=0,S=0,A="";function P(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:_,column:N,length:i,return:""}}function T(e,t){return h(P("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return S=C>0?b(A,--C):0,N--,10===S&&(N=1,_--),S}function D(){return S=C<O?b(A,C++):0,N++,10===S&&(N=1,_++),S}function j(){return b(A,C)}function R(){return C}function L(e,t){return x(A,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return _=N=1,O=E(A=e),C=0,[]}function z(e){return A="",e}function I(e){return v(L(C-1,U(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(S=j())&&S<33;)D();return M(e)>2||M(S)>3?"":" "}function q(e,t){for(;--t&&D()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return L(e,R()+(t<6&&32==j()&&32==D()))}function U(e){for(;D();)switch(S){case e:return C;case 34:case 39:34!==e&&39!==e&&U(S);break;case 40:41===e&&U(e);break;case 92:D()}return C}function Y(e,t){for(;D()&&e+S!==57&&(e+S!==84||47!==j()););return"/*"+L(t,C-1)+"*"+m(47===e?e:D())}function B(e){for(;!M(j());)D();return L(e,C)}function F(e){return z(W("",null,null,null,[""],e=V(e),0,[0],e))}function W(e,t,r,n,o,a,i,s,c){for(var l=0,u=0,d=i,p=0,f=0,h=0,v=1,x=1,w=1,_=0,N="",O=o,C=a,S=n,A=N;x;)switch(h=_,_=D()){case 40:if(108!=h&&58==b(A,d-1)){-1!=y(A+=g(I(_),"&","&\f"),"&\f")&&(w=-1);break}case 34:case 39:case 91:A+=I(_);break;case 9:case 10:case 13:case 32:A+=H(h);break;case 92:A+=q(R()-1,7);continue;case 47:switch(j()){case 42:case 47:k(X(Y(D(),R()),t,r),c);break;default:A+="/"}break;case 123*v:s[l++]=E(A)*w;case 125*v:case 59:case 0:switch(_){case 0:case 125:x=0;case 59+u:-1==w&&(A=g(A,/\f/g,"")),f>0&&E(A)-d&&k(f>32?J(A+";",n,r,d-1):J(g(A," ","")+";",n,r,d-2),c);break;case 59:A+=";";default:if(k(S=G(A,t,r,l,u,o,s,N,O=[],C=[],d),a),123===_)if(0===u)W(A,t,S,S,O,a,d,s,C);else switch(99===p&&110===b(A,3)?100:p){case 100:case 108:case 109:case 115:W(e,S,S,n&&k(G(e,S,S,0,0,o,s,N,o,O=[],d),C),o,C,d,s,n?O:C);break;default:W(A,S,S,S,[""],C,0,s,C)}}l=u=f=0,v=w=1,N=A="",d=i;break;case 58:d=1+E(A),f=h;default:if(v<1)if(123==_)--v;else if(125==_&&0==v++&&125==$())continue;switch(A+=m(_),_*v){case 38:w=u>0?1:(A+="\f",-1);break;case 44:s[l++]=(E(A)-1)*w,w=1;break;case 64:45===j()&&(A+=I(D())),p=j(),u=d=E(N=A+=B(R())),_++;break;case 45:45===h&&2==E(A)&&(v=0)}}return a}function G(e,t,r,n,o,a,i,s,c,l,d){for(var p=o-1,m=0===o?a:[""],h=w(m),y=0,b=0,E=0;y<n;++y)for(var k=0,_=x(e,p+1,p=f(b=i[y])),N=e;k<h;++k)(N=v(b>0?m[k]+" "+_:g(_,/&\f/g,m[k])))&&(c[E++]=N);return P(e,t,r,0===o?u:s,c,l,d)}function X(e,t,r){return P(e,t,r,l,m(S),x(e,2,-2),0)}function J(e,t,r,n){return P(e,t,r,d,x(e,0,n),x(e,n+1,-1),n)}function K(e,t){for(var r="",n=w(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Z(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case d:return e.return=e.return||e.value;case l:return"";case p:return e.return=e.value+"{"+K(e.children,n)+"}";case u:e.value=e.props.join(",")}return E(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function Q(e){var t=w(e);return function(r,n,o,a){for(var i="",s=0;s<t;s++)i+=e[s](r,n,o,a)||"";return i}}var ee=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};function te(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var re=function(e,t,r){for(var n=0,o=0;n=o,o=j(),38===n&&12===o&&(t[r]=1),!M(o);)D();return L(e,C)},ne=function(e,t){return z(function(e,t){var r=-1,n=44;do{switch(M(n)){case 0:38===n&&12===j()&&(t[r]=1),e[r]+=re(C-1,t,r);break;case 2:e[r]+=I(n);break;case 4:if(44===n){e[++r]=58===j()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=m(n)}}while(n=D());return e}(V(e),t))},oe=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||oe.get(r))&&!n){oe.set(e,!0);for(var o=[],a=ne(t,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se=function(e){return"comm"===e.type&&e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason")>-1},ce=function(e){return 105===e.type.charCodeAt(1)&&64===e.type.charCodeAt(0)},le=function(e){e.type="",e.value="",e.return="",e.children="",e.props=""},ue=function(e,t,r){ce(e)&&(e.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),le(e)):function(e,t){for(var r=e-1;r>=0;r--)if(!ce(t[r]))return!0;return!1}(t,r)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),le(e)))};function de(e,t){switch(function(e,t){return 45^b(e,0)?(((t<<2^b(e,0))<<2^b(e,1))<<2^b(e,2))<<2^b(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+i+e+e;case 6828:case 4268:return c+e+i+e+e;case 6165:return c+e+i+"flex-"+e+e;case 5187:return c+e+g(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+i+"flex-$1$2")+e;case 5443:return c+e+i+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return c+e+i+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return c+e+i+g(e,"shrink","negative")+e;case 5292:return c+e+i+g(e,"basis","preferred-size")+e;case 6060:return c+"box-"+g(e,"-grow","")+c+e+i+g(e,"grow","positive")+e;case 4554:return c+g(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+i+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(b(e,t+1)){case 109:if(45!==b(e,t+4))break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==b(e,t+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch")?de(g(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==b(e,t+1))break;case 6444:switch(b(e,E(e)-3-(~y(e,"!important")&&10))){case 107:return g(e,":",":"+c)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+c+(45===b(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+i+"$2box$3")+e}break;case 5936:switch(b(e,t+11)){case 114:return c+e+i+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+i+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+i+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return c+e+i+e+e}return e}var pe="undefined"!=typeof document,fe=pe?void 0:ee((function(){return te((function(){var e={};return function(t){return e[t]}}))})),me=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:e.return=de(e.value,e.length);break;case p:return K([T(e,{value:g(e.value,"@","@"+c)})],n);case u:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([T(e,{props:[g(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return K([T(e,{props:[g(t,/:(plac\w+)/,":"+c+"input-$1")]}),T(e,{props:[g(t,/:(plac\w+)/,":-moz-$1")]}),T(e,{props:[g(t,/:(plac\w+)/,i+"input-$1")]})],n)}return""}))}}],he=function(e){var t=e.key;if("production"!==process.env.NODE_ENV&&!t)throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");if(pe&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||me;if("production"!==process.env.NODE_ENV&&/[^a-z-]/.test(t))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+t+'" was passed');var o,i,s={},c=[];pe&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;c.push(e)})));var u,d=[ae,ie];if("production"!==process.env.NODE_ENV&&d.push(function(e){return function(t,r,n){if("rule"===t.type&&!e.compat){var o=t.value.match(/(:first|:nth|:nth-last)-child/g);if(o){for(var a=t.parent?t.parent.children:n,i=a.length-1;i>=0;i--){var s=a[i];if(s.line<t.line)break;if(s.column<t.column){if(se(s))return;break}}o.forEach((function(e){console.error('The pseudo class "'+e+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+e.split("-child")[0]+'-of-type".')}))}}}}({get compat(){return b.compat}}),ue),pe){var p,f=[Z,"production"!==process.env.NODE_ENV?function(e){e.root||(e.return?p.insert(e.return):e.value&&e.type!==l&&p.insert(e.value+"{}"))}:(u=function(e){p.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],m=Q(d.concat(n,f));i=function(e,t,r,n){p=r,"production"!==process.env.NODE_ENV&&void 0!==t.map&&(p={insert:function(e){r.insert(e+t.map)}}),K(F(e?e+"{"+t.styles+"}":t.styles),m),n&&(b.inserted[t.name]=!0)}}else{var h=[Z],v=Q(d.concat(n,h)),g=fe(n)(t),y=function(e,t){var r=t.name;return void 0===g[r]&&(g[r]=K(F(e?e+"{"+t.styles+"}":t.styles),v)),g[r]};i=function(e,t,r,n){var o=t.name,a=y(e,t);return void 0===b.compat?(n&&(b.inserted[o]=!0),"development"===process.env.NODE_ENV&&void 0!==t.map?a+t.map:a):n?void(b.inserted[o]=a):a}}var b={key:t,sheet:new a({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return b.sheet.hydrate(c),b};function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ve.apply(this,arguments)}var ge="undefined"!=typeof document;function ye(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var be=function(e,t,r){var n=e.key+"-"+t.name;(!1===r||!1===ge&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},xe=function(e,t,r){be(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o="",a=t;do{var i=e.insert(t===a?"."+n:"",a,e.sheet,!0);ge||void 0===i||(o+=i),a=a.next}while(void 0!==a);if(!ge&&0!==o.length)return o}};var Ee={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},we="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",ke="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",_e=/[A-Z]|^ms/g,Ne=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oe=function(e){return 45===e.charCodeAt(1)},Ce=function(e){return null!=e&&"boolean"!=typeof e},Se=te((function(e){return Oe(e)?e:e.replace(_e,"-$&").toLowerCase()})),Ae=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ne,(function(e,t,r){return ze={name:t,styles:r,next:ze},t}))}return 1===Ee[e]||Oe(e)||"number"!=typeof t||0===t?t:t+"px"};if("production"!==process.env.NODE_ENV){var Pe=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,Te=["normal","none","initial","inherit","unset"],$e=Ae,De=/^-ms-/,je=/-(.)/g,Re={};Ae=function(e,t){if("content"===e&&("string"!=typeof t||-1===Te.indexOf(t)&&!Pe.test(t)&&(t.charAt(0)!==t.charAt(t.length-1)||'"'!==t.charAt(0)&&"'"!==t.charAt(0))))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+t+"\"'`");var r=$e(e,t);return""===r||Oe(e)||-1===e.indexOf("-")||void 0!==Re[e]||(Re[e]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+e.replace(De,"ms-").replace(je,(function(e,t){return t.toUpperCase()}))+"?")),r}}var Le="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Me(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles){if("production"!==process.env.NODE_ENV&&"NO_COMPONENT_SELECTOR"===r.toString())throw new Error(Le);return r}switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ze={name:r.name,styles:r.styles,next:ze},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ze={name:n.name,styles:n.styles,next:ze},n=n.next;var o=r.styles+";";return"production"!==process.env.NODE_ENV&&void 0!==r.map&&(o+=r.map),o}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Me(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":Ce(i)&&(n+=Se(a)+":"+Ae(a,i)+";");else{if("NO_COMPONENT_SELECTOR"===a&&"production"!==process.env.NODE_ENV)throw new Error(Le);if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=Me(e,t,i);switch(a){case"animation":case"animationName":n+=Se(a)+":"+s+";";break;default:"production"!==process.env.NODE_ENV&&"undefined"===a&&console.error(ke),n+=a+"{"+s+"}"}}else for(var c=0;c<i.length;c++)Ce(i[c])&&(n+=Se(a)+":"+Ae(a,i[c])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var a=ze,i=r(e);return ze=a,Me(e,t,i)}"production"!==process.env.NODE_ENV&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break;case"string":if("production"!==process.env.NODE_ENV){var s=[],c=r.replace(Ne,(function(e,t,r){var n="animation"+s.length;return s.push("const "+n+" = keyframes`"+r.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+n+"}"}));s.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(s,["`"+c+"`"]).join("\n")+"\n\nYou should wrap it with `css` like this:\n\ncss`"+c+"`")}}if(null==t)return r;var l=t[r];return void 0!==l?l:r}var Ve,ze,Ie=/label:\s*([^\s;\n{]+)\s*(;|$)/g;"production"!==process.env.NODE_ENV&&(Ve=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var He=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";ze=void 0;var a,i=e[0];null==i||void 0===i.raw?(n=!1,o+=Me(r,t,i)):("production"!==process.env.NODE_ENV&&void 0===i[0]&&console.error(we),o+=i[0]);for(var s=1;s<e.length;s++)o+=Me(r,t,e[s]),n&&("production"!==process.env.NODE_ENV&&void 0===i[s]&&console.error(we),o+=i[s]);"production"!==process.env.NODE_ENV&&(o=o.replace(Ve,(function(e){return a=e,""}))),Ie.lastIndex=0;for(var c,l="";null!==(c=Ie.exec(o));)l+="-"+c[1];var u=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+l;return"production"!==process.env.NODE_ENV?{name:u,styles:o,map:a,next:ze,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:u,styles:o,next:ze}},qe="undefined"!=typeof document,Ue=function(e){return e()},Ye=!!n.useInsertionEffect&&n.useInsertionEffect,Be=qe&&Ye||Ue,Fe="undefined"!=typeof document,We={}.hasOwnProperty,Ge=n.createContext("undefined"!=typeof HTMLElement?he({key:"css"}):null);"production"!==process.env.NODE_ENV&&(Ge.displayName="EmotionCacheContext"),Ge.Provider;var Xe=function(t){return e.forwardRef((function(r,n){var o=e.useContext(Ge);return t(r,o,n)}))};Fe||(Xe=function(t){return function(r){var o=e.useContext(Ge);return null===o?(o=he({key:"css"}),n.createElement(Ge.Provider,{value:o},t(r,o))):t(r,o)}});var Je=n.createContext({});"production"!==process.env.NODE_ENV&&(Je.displayName="EmotionThemeContext");var Ke=ee((function(e){return ee((function(t){return function(e,t){if("function"==typeof t){var r=t(e);if("production"!==process.env.NODE_ENV&&(null==r||"object"!=typeof r||Array.isArray(r)))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return r}if("production"!==process.env.NODE_ENV&&(null==t||"object"!=typeof t||Array.isArray(t)))throw new Error("[ThemeProvider] Please make your theme prop a plain object");return ve({},e,t)}(e,t)}))})),Ze=function(e){var t=n.useContext(Je);return e.theme!==t&&(t=Ke(t)(e.theme)),n.createElement(Je.Provider,{value:t},e.children)},Qe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",et="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",tt=function(e){var t=e.cache,r=e.serialized,o=e.isStringTag;be(t,r,o);var a=Be((function(){return xe(t,r,o)}));if(!Fe&&void 0!==a){for(var i,s=r.name,c=r.next;void 0!==c;)s+=" "+c.name,c=c.next;return n.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null},rt=Xe((function(e,t,r){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[Qe],i=[o],s="";"string"==typeof e.className?s=ye(t.registered,i,e.className):null!=e.className&&(s=e.className+" ");var c=He(i,void 0,n.useContext(Je));if("production"!==process.env.NODE_ENV&&-1===c.name.indexOf("-")){var l=e[et];l&&(c=He([c,"label:"+l+";"]))}s+=t.key+"-"+c.name;var u={};for(var d in e)!We.call(e,d)||"css"===d||d===Qe||"production"!==process.env.NODE_ENV&&d===et||(u[d]=e[d]);return u.ref=r,u.className=s,n.createElement(n.Fragment,null,n.createElement(tt,{cache:t,serialized:c,isStringTag:"string"==typeof a}),n.createElement(a,u))}));"production"!==process.env.NODE_ENV&&(rt.displayName="EmotionCssPropInternal");var nt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ot=te((function(e){return nt.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),at=function(e){return"theme"!==e},it=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?ot:at},st=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},ct="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",lt="undefined"!=typeof document,ut=function(e){var t=e.cache,r=e.serialized,o=e.isStringTag;be(t,r,o);var a=Be((function(){return xe(t,r,o)}));if(!lt&&void 0!==a){for(var i,s=r.name,c=r.next;void 0!==c;)s+=" "+c.name,c=c.next;return n.createElement("style",((i={})["data-emotion"]=t.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=t.sheet.nonce,i))}return null},dt=function e(t,r){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");var o,a,i=t.__emotion_real===t,s=i&&t.__emotion_base||t;void 0!==r&&(o=r.label,a=r.target);var c=st(t,r,i),l=c||it(s),u=!l("as");return function(){var d=arguments,p=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{"production"!==process.env.NODE_ENV&&void 0===d[0][0]&&console.error(ct),p.push(d[0][0]);for(var f=d.length,m=1;m<f;m++)"production"!==process.env.NODE_ENV&&void 0===d[0][m]&&console.error(ct),p.push(d[m],d[0][m])}var h=Xe((function(e,t,r){var o=u&&e.as||s,i="",d=[],f=e;if(null==e.theme){for(var m in f={},e)f[m]=e[m];f.theme=n.useContext(Je)}"string"==typeof e.className?i=ye(t.registered,d,e.className):null!=e.className&&(i=e.className+" ");var h=He(p.concat(d),t.registered,f);i+=t.key+"-"+h.name,void 0!==a&&(i+=" "+a);var v=u&&void 0===c?it(o):l,g={};for(var y in e)u&&"as"===y||v(y)&&(g[y]=e[y]);return g.className=i,g.ref=r,n.createElement(n.Fragment,null,n.createElement(ut,{cache:t,serialized:h,isStringTag:"string"==typeof o}),n.createElement(o,g))}));return h.displayName=void 0!==o?o:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=s,h.__emotion_styles=p,h.__emotion_forwardProp=c,Object.defineProperty(h,"toString",{value:function(){return void 0===a&&"production"!==process.env.NODE_ENV?"NO_COMPONENT_SELECTOR":"."+a}}),h.withComponent=function(t,n){return e(t,ve({},r,n,{shouldForwardProp:st(h,n,!0)})).apply(void 0,p)},h}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){dt[e]=dt(e)}));const pt=dt.button`
  align-items: center;
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: ${e=>e.theme.colors.primary?e.theme.colors.primary:"black"};
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 0.875rem;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`,ft=dt.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: baseline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 40px);
  padding: 0px 5px;
`;function mt({clickHandler:e,text:t}){return o.default.createElement(pt,{onClick:e},t)}function ht({clickHandler:e,text:t}){return o.default.createElement(ft,{onClick:e},t)}const vt="CANCEL",gt="Select...",yt="Select All",bt="OK",xt=(e,t)=>Boolean(e.find((e=>e.value===t.value))),Et=(e,t)=>{if(e){return e.sort(((e,t)=>((e,t)=>{const r=e.label,n=t.label;return r<n?-1:r>n?1:0})(e,t))).map((e=>({label:e.label,value:e.value,isSelected:xt(t,e)})))}return e},wt=(e,t)=>e.map((e=>e.value===t?Object.assign(Object.assign({},e),{isSelected:!e.isSelected}):Object.assign({},e))),kt=(e,t)=>e.map((e=>Object.assign(Object.assign({},e),{isSelected:t}))),_t="0px 10px",Nt="1px solid lightgray",Ot="240px",Ct=dt.div`
  font-size: 0.875rem;
  width: ${Ot};
  position: relative;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
`,St=dt.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
`,At=dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`,Pt=dt.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: ${_t};
  width: ${e=>e.hasLeftAdornment?"calc(100% - 80px)":"calc(100% - 40px)"};
`,Tt=dt.div`
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  left: 0;
  position: absolute;
  z-index: 100;
  margin: 0px;
  height: ${"330px"};
  width: ${Ot};
`,$t=dt.div`
  height: 35px;
  padding: ${_t};
  border-bottom: ${Nt};
`,Dt=dt.div`
  height: 35px;
  padding: ${_t};
  display: flex;
  align-items: center;
  border-bottom: ${Nt};
  margin-bottom: 10px;
`,jt=dt.div`
  overflow: auto;
  height: calc(100% - 140px);
  padding: ${_t};
`,Rt=dt.div`
  border-top: ${Nt};
  margin-top: 10px;
  height: 50px;
  padding: ${_t};
  display: flex;
  align-items: center;
  justify-content: space-around;
`,Lt=dt.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
`,Mt=dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`;dt.div`
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 90px);
  padding: 0px 5px;
`,dt.div`
  cursor: pointer;
  text-align: center;
  width: 50px;
  color: ${e=>e.theme.colors.primary?e.theme.colors.primary:"black"};
`;const Vt=!1;function zt({cancelText:e,closePopover:t,dataProvider:r,onComplete:n,popoverRef:a,primaryColor:i,selectAllText:s,submitText:c,value:l}){const[u]=o.default.useState(""),[d,p]=o.default.useState([]),[f,m]=o.default.useState([]);o.default.useEffect((()=>{p(Et(r,l))}),[r,l]),o.default.useEffect((()=>{m(d.filter((e=>{const t=String(e.label).toLowerCase(),r=String(u).toLowerCase();return t.includes(r)})))}),[u,d]);const h=o.default.useMemo((()=>!!Boolean(d.length)&&Boolean(d.length===d.filter((e=>e.isSelected)).length)),[d]),v=e=>{p(wt(d,e))},g=()=>{p(kt(d,!h))},y=o.default.useMemo((()=>i||"auto"),[i]);return o.default.createElement(Tt,{ref:a},o.default.createElement($t,null),o.default.createElement(Dt,null,o.default.createElement(Mt,null,o.default.createElement("input",{type:"checkbox",style:{accentColor:y},checked:h,onChange:g})),o.default.createElement(ht,{clickHandler:g,text:s||""})),o.default.createElement(jt,null,f.map((e=>o.default.createElement(Lt,{key:e.value},o.default.createElement(Mt,null,o.default.createElement("input",{type:"checkbox",style:{accentColor:y},checked:e.isSelected,onChange:()=>{v(e.value)}})),o.default.createElement(ht,{clickHandler:()=>{v(e.value)},text:e.label}),Vt)))),o.default.createElement(Rt,null,o.default.createElement(mt,{clickHandler:t,text:e||""}),o.default.createElement(mt,{clickHandler:()=>{n(f.filter((e=>e.isSelected))),t()},text:c||""})))}exports.ComboBox=function({cancelText:t=vt,dataProvider:r=[],leftAdornment:n=null,onComplete:a=(()=>null),placeHolder:i=gt,primaryColor:s="unset",rightAdornment:c=null,selectAllText:l=yt,submitText:u=bt,value:d=[]}){const p=o.default.useRef(null),[f,m]=o.default.useState(!1),h=o.default.useCallback((()=>m(!1)),[]);var v,g;v=p,g=h,e.useEffect((()=>{let e=!1,t=!1;const r=r=>{!e&&t&&v.current&&!v.current.contains(r.target)&&g(r)},n=r=>{t=v.current,e=v.current&&v.current.contains(r.target)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),document.addEventListener("click",r),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n),document.removeEventListener("click",r)}}),[v,g]);const y=o.default.useMemo((()=>n?o.default.createElement(At,null,n):null),[n]),b=o.default.useMemo((()=>Boolean(d.length)?d.map((e=>e.label)).join(", ").toString():i),[d,i]),x=o.default.useMemo((()=>c?o.default.createElement(At,null,c):o.default.createElement(At,null,"R")),[c]),E=o.default.useMemo((()=>f?o.default.createElement(zt,{cancelText:t,closePopover:h,dataProvider:r,onComplete:a,popoverRef:p,primaryColor:s,selectAllText:l,submitText:u,value:d}):o.default.createElement(o.default.Fragment,null)),[f,p,t,h,r,s,a,l,u,d]),w=o.default.useMemo((()=>({colors:{primary:s}})),[s]);return o.default.createElement(Ze,{theme:w},o.default.createElement(Ct,null,o.default.createElement(St,{onClick:()=>{m(!0)}},y,o.default.createElement(Pt,{hasLeftAdornment:Boolean(n)},b),x),E))};
