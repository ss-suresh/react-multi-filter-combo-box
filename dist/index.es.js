import*as e from"react";import t,{forwardRef as r,useContext as n,useEffect as o}from"react";const a="CANCEL",i="Select...",s="Select All",c="OK";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=u((function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var f=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy?"production"===process.env.NODE_ENV:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if("production"!==process.env.NODE_ENV){var r=64===e.charCodeAt(0)&&105===e.charCodeAt(1);r&&this._alreadyInsertedOrderInsensitiveRule&&console.error("You're attempting to insert the following rule:\n"+e+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!r}if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(t){"production"===process.env.NODE_ENV||/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(e)||console.error('There was a problem inserting the following rule: "'+e+'"',t)}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,"production"!==process.env.NODE_ENV&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),m="-ms-",h="-moz-",v="-webkit-",g="comm",y="rule",b="decl",x="@keyframes",E=Math.abs,w=String.fromCharCode,k=Object.assign;function _(e){return e.trim()}function N(e,t,r){return e.replace(t,r)}function O(e,t){return e.indexOf(t)}function C(e,t){return 0|e.charCodeAt(t)}function S(e,t,r){return e.slice(t,r)}function A(e){return e.length}function T(e){return e.length}function P(e,t){return t.push(e),e}var D=1,$=1,R=0,L=0,V=0,j="";function I(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:D,column:$,length:i,return:""}}function M(e,t){return k(I("",null,null,"",null,null,0),e,{length:-e.length},t)}function z(){return V=L>0?C(j,--L):0,$--,10===V&&($=1,D--),V}function H(){return V=L<R?C(j,L++):0,$++,10===V&&($=1,D++),V}function q(){return C(j,L)}function B(){return L}function U(e,t){return S(j,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(e){return D=$=1,R=A(j=e),L=0,[]}function W(e){return j="",e}function G(e){return _(U(L-1,K(91===e?e+2:40===e?e+1:e)))}function X(e){for(;(V=q())&&V<33;)H();return Y(e)>2||Y(V)>3?"":" "}function J(e,t){for(;--t&&H()&&!(V<48||V>102||V>57&&V<65||V>70&&V<97););return U(e,B()+(t<6&&32==q()&&32==H()))}function K(e){for(;H();)switch(V){case e:return L;case 34:case 39:34!==e&&39!==e&&K(V);break;case 40:41===e&&K(e);break;case 92:H()}return L}function Z(e,t){for(;H()&&e+V!==57&&(e+V!==84||47!==q()););return"/*"+U(t,L-1)+"*"+w(47===e?e:H())}function Q(e){for(;!Y(q());)H();return U(e,L)}function ee(e){return W(te("",null,null,null,[""],e=F(e),0,[0],e))}function te(e,t,r,n,o,a,i,s,c){for(var l=0,u=0,d=i,p=0,f=0,m=0,h=1,v=1,g=1,y=0,b="",x=o,E=a,k=n,_=b;v;)switch(m=y,y=H()){case 40:if(108!=m&&58==C(_,d-1)){-1!=O(_+=N(G(y),"&","&\f"),"&\f")&&(g=-1);break}case 34:case 39:case 91:_+=G(y);break;case 9:case 10:case 13:case 32:_+=X(m);break;case 92:_+=J(B()-1,7);continue;case 47:switch(q()){case 42:case 47:P(ne(Z(H(),B()),t,r),c);break;default:_+="/"}break;case 123*h:s[l++]=A(_)*g;case 125*h:case 59:case 0:switch(y){case 0:case 125:v=0;case 59+u:-1==g&&(_=N(_,/\f/g,"")),f>0&&A(_)-d&&P(f>32?oe(_+";",n,r,d-1):oe(N(_," ","")+";",n,r,d-2),c);break;case 59:_+=";";default:if(P(k=re(_,t,r,l,u,o,s,b,x=[],E=[],d),a),123===y)if(0===u)te(_,t,k,k,x,a,d,s,E);else switch(99===p&&110===C(_,3)?100:p){case 100:case 108:case 109:case 115:te(e,k,k,n&&P(re(e,k,k,0,0,o,s,b,o,x=[],d),E),o,E,d,s,n?x:E);break;default:te(_,k,k,k,[""],E,0,s,E)}}l=u=f=0,h=g=1,b=_="",d=i;break;case 58:d=1+A(_),f=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==z())continue;switch(_+=w(y),y*h){case 38:g=u>0?1:(_+="\f",-1);break;case 44:s[l++]=(A(_)-1)*g,g=1;break;case 64:45===q()&&(_+=G(H())),p=q(),u=d=A(b=_+=Q(B())),y++;break;case 45:45===m&&2==A(_)&&(h=0)}}return a}function re(e,t,r,n,o,a,i,s,c,l,u){for(var d=o-1,p=0===o?a:[""],f=T(p),m=0,h=0,v=0;m<n;++m)for(var g=0,b=S(e,d+1,d=E(h=i[m])),x=e;g<f;++g)(x=_(h>0?p[g]+" "+b:N(b,/&\f/g,p[g])))&&(c[v++]=x);return I(e,t,r,0===o?y:s,c,l,u)}function ne(e,t,r){return I(e,t,r,g,w(V),S(e,2,-2),0)}function oe(e,t,r,n){return I(e,t,r,b,S(e,0,n),S(e,n+1,-1),n)}function ae(e,t){for(var r="",n=T(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function ie(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case b:return e.return=e.return||e.value;case g:return"";case x:return e.return=e.value+"{"+ae(e.children,n)+"}";case y:e.value=e.props.join(",")}return A(r=ae(e.children,n))?e.return=e.value+"{"+r+"}":""}function se(e){var t=T(e);return function(r,n,o,a){for(var i="",s=0;s<t;s++)i+=e[s](r,n,o,a)||"";return i}}var ce=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},le=function(e,t,r){for(var n=0,o=0;n=o,o=q(),38===n&&12===o&&(t[r]=1),!Y(o);)H();return U(e,L)},ue=function(e,t){return W(function(e,t){var r=-1,n=44;do{switch(Y(n)){case 0:38===n&&12===q()&&(t[r]=1),e[r]+=le(L-1,t,r);break;case 2:e[r]+=G(n);break;case 4:if(44===n){e[++r]=58===q()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=w(n)}}while(n=H());return e}(F(e),t))},de=new WeakMap,pe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||de.get(r))&&!n){de.set(e,!0);for(var o=[],a=ue(t,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},fe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},me=function(e){return"comm"===e.type&&e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason")>-1},he=function(e){return 105===e.type.charCodeAt(1)&&64===e.type.charCodeAt(0)},ve=function(e){e.type="",e.value="",e.return="",e.children="",e.props=""},ge=function(e,t,r){he(e)&&(e.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),ve(e)):function(e,t){for(var r=e-1;r>=0;r--)if(!he(t[r]))return!0;return!1}(t,r)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),ve(e)))};function ye(e,t){switch(function(e,t){return 45^C(e,0)?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+h+e+m+e+e;case 6828:case 4268:return v+e+m+e+e;case 6165:return v+e+m+"flex-"+e+e;case 5187:return v+e+N(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+m+"flex-$1$2")+e;case 5443:return v+e+m+"flex-item-"+N(e,/flex-|-self/,"")+e;case 4675:return v+e+m+"flex-line-pack"+N(e,/align-content|flex-|-self/,"")+e;case 5548:return v+e+m+N(e,"shrink","negative")+e;case 5292:return v+e+m+N(e,"basis","preferred-size")+e;case 6060:return v+"box-"+N(e,"-grow","")+v+e+m+N(e,"grow","positive")+e;case 4554:return v+N(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+m+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(C(e,t+1)){case 109:if(45!==C(e,t+4))break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+h+(108==C(e,t+3)?"$3":"$2-$3"))+e;case 115:return~O(e,"stretch")?ye(N(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==C(e,t+1))break;case 6444:switch(C(e,A(e)-3-(~O(e,"!important")&&10))){case 107:return N(e,":",":"+v)+e;case 101:return N(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(45===C(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+m+"$2box$3")+e}break;case 5936:switch(C(e,t+11)){case 114:return v+e+m+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+m+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+m+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return v+e+m+e+e}return e}var be="undefined"!=typeof document,xe=be?void 0:ce((function(){return u((function(){var e={};return function(t){return e[t]}}))})),Ee=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case b:e.return=ye(e.value,e.length);break;case x:return ae([M(e,{value:N(e.value,"@","@"+v)})],n);case y:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ae([M(e,{props:[N(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return ae([M(e,{props:[N(t,/:(plac\w+)/,":"+v+"input-$1")]}),M(e,{props:[N(t,/:(plac\w+)/,":-moz-$1")]}),M(e,{props:[N(t,/:(plac\w+)/,m+"input-$1")]})],n)}return""}))}}],we=function(e){var t=e.key;if("production"!==process.env.NODE_ENV&&!t)throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");if(be&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||Ee;if("production"!==process.env.NODE_ENV&&/[^a-z-]/.test(t))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+t+'" was passed');var o,a,i={},s=[];be&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;s.push(e)})));var c,l=[pe,fe];if("production"!==process.env.NODE_ENV&&l.push(function(e){return function(t,r,n){if("rule"===t.type&&!e.compat){var o=t.value.match(/(:first|:nth|:nth-last)-child/g);if(o){for(var a=t.parent?t.parent.children:n,i=a.length-1;i>=0;i--){var s=a[i];if(s.line<t.line)break;if(s.column<t.column){if(me(s))return;break}}o.forEach((function(e){console.error('The pseudo class "'+e+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+e.split("-child")[0]+'-of-type".')}))}}}}({get compat(){return b.compat}}),ge),be){var u,d=[ie,"production"!==process.env.NODE_ENV?function(e){e.root||(e.return?u.insert(e.return):e.value&&e.type!==g&&u.insert(e.value+"{}"))}:(c=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],p=se(l.concat(n,d));a=function(e,t,r,n){u=r,"production"!==process.env.NODE_ENV&&void 0!==t.map&&(u={insert:function(e){r.insert(e+t.map)}}),ae(ee(e?e+"{"+t.styles+"}":t.styles),p),n&&(b.inserted[t.name]=!0)}}else{var m=[ie],h=se(l.concat(n,m)),v=xe(n)(t),y=function(e,t){var r=t.name;return void 0===v[r]&&(v[r]=ae(ee(e?e+"{"+t.styles+"}":t.styles),h)),v[r]};a=function(e,t,r,n){var o=t.name,a=y(e,t);return void 0===b.compat?(n&&(b.inserted[o]=!0),"development"===process.env.NODE_ENV&&void 0!==t.map?a+t.map:a):n?void(b.inserted[o]=a):a}}var b={key:t,sheet:new f({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return b.sheet.hydrate(s),b},ke="undefined"!=typeof document;function _e(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Ne=function(e,t,r){var n=e.key+"-"+t.name;(!1===r||!1===ke&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Oe=function(e,t,r){Ne(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o="",a=t;do{var i=e.insert(t===a?"."+n:"",a,e.sheet,!0);ke||void 0===i||(o+=i),a=a.next}while(void 0!==a);if(!ke&&0!==o.length)return o}};var Ce={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Se="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",Ae="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",Te=/[A-Z]|^ms/g,Pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,De=function(e){return 45===e.charCodeAt(1)},$e=function(e){return null!=e&&"boolean"!=typeof e},Re=u((function(e){return De(e)?e:e.replace(Te,"-$&").toLowerCase()})),Le=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Pe,(function(e,t,r){return Ye={name:t,styles:r,next:Ye},t}))}return 1===Ce[e]||De(e)||"number"!=typeof t||0===t?t:t+"px"};if("production"!==process.env.NODE_ENV){var Ve=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,je=["normal","none","initial","inherit","unset"],Ie=Le,Me=/^-ms-/,ze=/-(.)/g,He={};Le=function(e,t){if("content"===e&&("string"!=typeof t||-1===je.indexOf(t)&&!Ve.test(t)&&(t.charAt(0)!==t.charAt(t.length-1)||'"'!==t.charAt(0)&&"'"!==t.charAt(0))))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+t+"\"'`");var r=Ie(e,t);return""===r||De(e)||-1===e.indexOf("-")||void 0!==He[e]||(He[e]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+e.replace(Me,"ms-").replace(ze,(function(e,t){return t.toUpperCase()}))+"?")),r}}var qe="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Be(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles){if("production"!==process.env.NODE_ENV&&"NO_COMPONENT_SELECTOR"===r.toString())throw new Error(qe);return r}switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return Ye={name:r.name,styles:r.styles,next:Ye},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)Ye={name:n.name,styles:n.styles,next:Ye},n=n.next;var o=r.styles+";";return"production"!==process.env.NODE_ENV&&void 0!==r.map&&(o+=r.map),o}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Be(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":$e(i)&&(n+=Re(a)+":"+Le(a,i)+";");else{if("NO_COMPONENT_SELECTOR"===a&&"production"!==process.env.NODE_ENV)throw new Error(qe);if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=Be(e,t,i);switch(a){case"animation":case"animationName":n+=Re(a)+":"+s+";";break;default:"production"!==process.env.NODE_ENV&&"undefined"===a&&console.error(Ae),n+=a+"{"+s+"}"}}else for(var c=0;c<i.length;c++)$e(i[c])&&(n+=Re(a)+":"+Le(a,i[c])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var a=Ye,i=r(e);return Ye=a,Be(e,t,i)}"production"!==process.env.NODE_ENV&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break;case"string":if("production"!==process.env.NODE_ENV){var s=[],c=r.replace(Pe,(function(e,t,r){var n="animation"+s.length;return s.push("const "+n+" = keyframes`"+r.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+n+"}"}));s.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(s,["`"+c+"`"]).join("\n")+"\n\nYou should wrap it with `css` like this:\n\ncss`"+c+"`")}}if(null==t)return r;var l=t[r];return void 0!==l?l:r}var Ue,Ye,Fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g;"production"!==process.env.NODE_ENV&&(Ue=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var We=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";Ye=void 0;var a,i=e[0];null==i||void 0===i.raw?(n=!1,o+=Be(r,t,i)):("production"!==process.env.NODE_ENV&&void 0===i[0]&&console.error(Se),o+=i[0]);for(var s=1;s<e.length;s++)o+=Be(r,t,e[s]),n&&("production"!==process.env.NODE_ENV&&void 0===i[s]&&console.error(Se),o+=i[s]);"production"!==process.env.NODE_ENV&&(o=o.replace(Ue,(function(e){return a=e,""}))),Fe.lastIndex=0;for(var c,l="";null!==(c=Fe.exec(o));)l+="-"+c[1];var u=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+l;return"production"!==process.env.NODE_ENV?{name:u,styles:o,map:a,next:Ye,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:u,styles:o,next:Ye}},Ge="undefined"!=typeof document,Xe=function(e){return e()},Je=!!e.useInsertionEffect&&e.useInsertionEffect,Ke=Ge&&Je||Xe,Ze="undefined"!=typeof document,Qe={}.hasOwnProperty,et=e.createContext("undefined"!=typeof HTMLElement?we({key:"css"}):null);"production"!==process.env.NODE_ENV&&(et.displayName="EmotionCacheContext"),et.Provider;var tt=function(e){return r((function(t,r){var o=n(et);return e(t,o,r)}))};Ze||(tt=function(t){return function(r){var o=n(et);return null===o?(o=we({key:"css"}),e.createElement(et.Provider,{value:o},t(r,o))):t(r,o)}});var rt=e.createContext({});"production"!==process.env.NODE_ENV&&(rt.displayName="EmotionThemeContext");var nt=ce((function(e){return ce((function(t){return function(e,t){if("function"==typeof t){var r=t(e);if("production"!==process.env.NODE_ENV&&(null==r||"object"!=typeof r||Array.isArray(r)))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return r}if("production"!==process.env.NODE_ENV&&(null==t||"object"!=typeof t||Array.isArray(t)))throw new Error("[ThemeProvider] Please make your theme prop a plain object");return l({},e,t)}(e,t)}))})),ot=function(t){var r=e.useContext(rt);return t.theme!==r&&(r=nt(r)(t.theme)),e.createElement(rt.Provider,{value:r},t.children)},at="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",it="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",st=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;Ne(r,n,o);var a=Ke((function(){return Oe(r,n,o)}));if(!Ze&&void 0!==a){for(var i,s=n.name,c=n.next;void 0!==c;)s+=" "+c.name,c=c.next;return e.createElement("style",((i={})["data-emotion"]=r.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=r.sheet.nonce,i))}return null},ct=tt((function(t,r,n){var o=t.css;"string"==typeof o&&void 0!==r.registered[o]&&(o=r.registered[o]);var a=t[at],i=[o],s="";"string"==typeof t.className?s=_e(r.registered,i,t.className):null!=t.className&&(s=t.className+" ");var c=We(i,void 0,e.useContext(rt));if("production"!==process.env.NODE_ENV&&-1===c.name.indexOf("-")){var l=t[it];l&&(c=We([c,"label:"+l+";"]))}s+=r.key+"-"+c.name;var u={};for(var d in t)!Qe.call(t,d)||"css"===d||d===at||"production"!==process.env.NODE_ENV&&d===it||(u[d]=t[d]);return u.ref=n,u.className=s,e.createElement(e.Fragment,null,e.createElement(st,{cache:r,serialized:c,isStringTag:"string"==typeof a}),e.createElement(a,u))}));"production"!==process.env.NODE_ENV&&(ct.displayName="EmotionCssPropInternal");var lt=p,ut=function(e){return"theme"!==e},dt=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?lt:ut},pt=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},ft="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",mt="undefined"!=typeof document,ht=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;Ne(r,n,o);var a=Ke((function(){return Oe(r,n,o)}));if(!mt&&void 0!==a){for(var i,s=n.name,c=n.next;void 0!==c;)s+=" "+c.name,c=c.next;return e.createElement("style",((i={})["data-emotion"]=r.key+" "+s,i.dangerouslySetInnerHTML={__html:a},i.nonce=r.sheet.nonce,i))}return null},vt=function t(r,n){if("production"!==process.env.NODE_ENV&&void 0===r)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");var o,a,i=r.__emotion_real===r,s=i&&r.__emotion_base||r;void 0!==n&&(o=n.label,a=n.target);var c=pt(r,n,i),u=c||dt(s),d=!u("as");return function(){var p=arguments,f=i&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&f.push("label:"+o+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{"production"!==process.env.NODE_ENV&&void 0===p[0][0]&&console.error(ft),f.push(p[0][0]);for(var m=p.length,h=1;h<m;h++)"production"!==process.env.NODE_ENV&&void 0===p[0][h]&&console.error(ft),f.push(p[h],p[0][h])}var v=tt((function(t,r,n){var o=d&&t.as||s,i="",l=[],p=t;if(null==t.theme){for(var m in p={},t)p[m]=t[m];p.theme=e.useContext(rt)}"string"==typeof t.className?i=_e(r.registered,l,t.className):null!=t.className&&(i=t.className+" ");var h=We(f.concat(l),r.registered,p);i+=r.key+"-"+h.name,void 0!==a&&(i+=" "+a);var v=d&&void 0===c?dt(o):u,g={};for(var y in t)d&&"as"===y||v(y)&&(g[y]=t[y]);return g.className=i,g.ref=n,e.createElement(e.Fragment,null,e.createElement(ht,{cache:r,serialized:h,isStringTag:"string"==typeof o}),e.createElement(o,g))}));return v.displayName=void 0!==o?o:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",v.defaultProps=r.defaultProps,v.__emotion_real=v,v.__emotion_base=s,v.__emotion_styles=f,v.__emotion_forwardProp=c,Object.defineProperty(v,"toString",{value:function(){return void 0===a&&"production"!==process.env.NODE_ENV?"NO_COMPONENT_SELECTOR":"."+a}}),v.withComponent=function(e,r){return t(e,l({},n,r,{shouldForwardProp:pt(v,r,!0)})).apply(void 0,f)},v}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){vt[e]=vt(e)}));const gt=vt.button`
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
`,yt=vt.button`
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
`;function bt({clickHandler:e,text:r}){return t.createElement(gt,{onClick:e},r)}function xt({clickHandler:e,text:r}){return t.createElement(yt,{onClick:e},r)}const Et=(e,t)=>Boolean(e.find((e=>e.value===t.value))),wt=(e,t)=>{if(e){return e.sort(((e,t)=>((e,t)=>{const r=e.label,n=t.label;return r<n?-1:r>n?1:0})(e,t))).map((e=>({label:e.label,value:e.value,isDisabled:e.isDisabled,isSelected:Et(t,e)})))}return e},kt=(e,t)=>e.map((e=>e.value===t?Object.assign(Object.assign({},e),{isSelected:!e.isSelected}):Object.assign({},e))),_t=(e,t)=>e.map((e=>Object.assign(Object.assign({},e),{isSelected:!Boolean(e.isDisabled)&&t}))),Nt="0px 10px",Ot="1px solid lightgray",Ct="240px",St=vt.div`
  font-size: 0.875rem;
  width: ${Ct};
  position: relative;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
`,At=vt.div`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
`,Tt=vt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`,Pt=vt.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: ${Nt};
  width: ${e=>e.hasLeftAdornment?"calc(100% - 80px)":"calc(100% - 40px)"};
`,Dt=vt.div`
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  left: 0;
  position: absolute;
  z-index: 100;
  margin: 0px;
  height: ${"330px"};
  width: ${Ct};
`,$t=vt.div`
  height: 35px;
  padding: ${Nt};
  border-bottom: ${Ot};
`,Rt=vt.div`
  height: 35px;
  padding: ${Nt};
  display: flex;
  align-items: center;
  border-bottom: ${Ot};
  margin-bottom: 10px;
`,Lt=vt.div`
  overflow: auto;
  height: calc(100% - 140px);
  padding: ${Nt};
`,Vt=vt.div`
  border-top: ${Ot};
  margin-top: 10px;
  height: 50px;
  padding: ${Nt};
  display: flex;
  align-items: center;
  justify-content: space-around;
`,jt=vt.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
`,It=vt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`;vt.div`
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 90px);
  padding: 0px 5px;
`,vt.div`
  cursor: pointer;
  text-align: center;
  width: 50px;
  color: ${e=>e.theme.colors.primary?e.theme.colors.primary:"black"};
`;const Mt=!1;function zt({cancelText:e,closePopover:r,dataProvider:n,onComplete:o,popoverRef:a,primaryColor:i,selectAllText:s,submitText:c,value:l}){const[u]=t.useState(""),[d,p]=t.useState([]),[f,m]=t.useState([]);t.useEffect((()=>{p(wt(n,l))}),[n,l]),t.useEffect((()=>{m(d.filter((e=>{const t=String(e.label).toLowerCase(),r=String(u).toLowerCase();return t.includes(r)})))}),[u,d]);const h=t.useMemo((()=>!!Boolean(d.length)&&Boolean(d.filter((e=>!e.isDisabled)).length===d.filter((e=>e.isSelected)).length)),[d]),v=e=>{p(kt(d,e))},g=()=>{p(_t(d,!h))},y=t.useMemo((()=>i||"auto"),[i]);return t.createElement(Dt,{ref:a},t.createElement($t,null),t.createElement(Rt,null,t.createElement(It,null,t.createElement("input",{type:"checkbox",style:{accentColor:y},checked:h,onChange:g})),t.createElement(xt,{clickHandler:g,text:s||""})),t.createElement(Lt,null,f.map((e=>t.createElement(jt,{key:e.value},t.createElement(It,null,t.createElement("input",{type:"checkbox",style:{accentColor:y},disabled:Boolean(e.isDisabled),checked:e.isSelected,onChange:()=>{Boolean(e.isDisabled)||v(e.value)}})),t.createElement(xt,{clickHandler:()=>{Boolean(e.isDisabled)||v(e.value)},text:e.label}),Mt)))),t.createElement(Vt,null,t.createElement(bt,{clickHandler:r,text:e||""}),t.createElement(bt,{clickHandler:()=>{o(f.filter((e=>e.isSelected))),r()},text:c||""})))}function Ht({cancelText:e=a,dataProvider:r=[],leftAdornment:n=null,onComplete:l=(()=>null),placeHolder:u=i,primaryColor:d="unset",rightAdornment:p=null,selectAllText:f=s,submitText:m=c,value:h=[]}){const v=t.useRef(null),[g,y]=t.useState(!1),b=t.useCallback((()=>y(!1)),[]);var x,E;o((()=>{let e=!1,t=!1;const r=r=>{!e&&t&&x.current&&!x.current.contains(r.target)&&E(r)},n=r=>{t=x.current,e=x.current&&x.current.contains(r.target)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),document.addEventListener("click",r),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n),document.removeEventListener("click",r)}}),[x=v,E=b]);const w=t.useMemo((()=>n?t.createElement(Tt,null,n):null),[n]),k=t.useMemo((()=>Boolean(h.length)?h.map((e=>e.label)).join(", ").toString():u),[h,u]),_=t.useMemo((()=>p?t.createElement(Tt,null,p):t.createElement(Tt,null,"R")),[p]),N=t.useMemo((()=>g?t.createElement(zt,{cancelText:e,closePopover:b,dataProvider:r,onComplete:l,popoverRef:v,primaryColor:d,selectAllText:f,submitText:m,value:h}):t.createElement(t.Fragment,null)),[g,v,e,b,r,d,l,f,m,h]),O=t.useMemo((()=>({colors:{primary:d}})),[d]);return t.createElement(ot,{theme:O},t.createElement(St,null,t.createElement(At,{onClick:()=>{y(!0)}},w,t.createElement(Pt,{hasLeftAdornment:Boolean(n)},k),_),N))}export{Ht as ComboBox};
