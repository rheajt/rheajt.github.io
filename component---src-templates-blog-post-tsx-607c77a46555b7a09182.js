(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[7],{478:function(n,e,t){"use strict";var l=t(2854),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,t){var l=(n.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var o=l+e+": "+t+";";n.properties.style=o}n.exports=function(n){return l(n,"element",a),n}},1254:function(n,e,t){"use strict";var l=t(4836);e.__esModule=!0,e.default=void 0;var o=l(t(434)),r=l(t(7071)),a=l(t(7867)),i=l(t(7294)),u=l(t(5697)),s=t(989),c=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(n){function e(e){var t;return(t=n.call(this,e)||this).shortname="http-jordanrhea-com",t}(0,a.default)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.loadInstance()},t.shouldComponentUpdate=function(n){return this.props!==n&&(0,s.shallowComparison)(this.props,n)},t.componentDidUpdate=function(){this.loadInstance()},t.componentWillUnmount=function(){this.cleanInstance()},t.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},t.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},t.render=function(){var n=this.props,e=n.config,t=n.className,l=n.placeholder,a=(0,r.default)(n,["config","className","placeholder"]),u="disqus-comment-count"+(t?" "+t:"");return i.default.createElement("span",(0,o.default)({className:u,"data-disqus-identifier":e.identifier,"data-disqus-url":e.url},a),l)},e}(i.default.Component);e.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string,className:u.default.string}},4294:function(n,e,t){"use strict";var l=t(4836);e.__esModule=!0,e.default=void 0;var o=l(t(434)),r=l(t(7071)),a=l(t(7867)),i=l(t(7294)),u=l(t(5697)),s=function(n){function e(){return n.apply(this,arguments)||this}(0,a.default)(e,n);var t=e.prototype;return t.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},t.render=function(){var n=this.props,e=(n.commentId,n.showMedia,n.showParentComment,(0,r.default)(n,["commentId","showMedia","showParentComment"]));return i.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},e))},e}(i.default.Component);e.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:u.default.oneOfType([u.default.number,u.default.string]).isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}},2605:function(n,e,t){"use strict";var l=t(4836);e.__esModule=!0,e.default=void 0;var o=l(t(434)),r=l(t(7071)),a=l(t(7867)),i=l(t(7294)),u=l(t(5697)),s=t(989),c=function(n){function e(e){var t;return(t=n.call(this,e)||this).shortname="http-jordanrhea-com",t.embedUrl="https://"+t.shortname+".disqus.com/embed.js",t}(0,a.default)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.loadInstance()},t.shouldComponentUpdate=function(n){return this.props!==n&&(0,s.shallowComparison)(this.props,n)},t.componentDidUpdate=function(){this.loadInstance()},t.componentWillUnmount=function(){this.cleanInstance()},t.getDisqusConfig=function(n){return function(){this.page.identifier=n.identifier,this.page.url=n.url,this.page.title=n.title,this.page.remote_auth_s3=n.remoteAuthS3,this.page.api_key=n.apiKey,this.language=n.language}},t.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,s.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},t.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},t.cleanInstance=function(){(0,s.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(l){window.DISQUS=void 0}var n=window.document.getElementById("disqus_thread");if(n)for(;n.hasChildNodes();)n.removeChild(n.firstChild);var e=window.document.querySelector('[id^="dsq-app"]');if(e){var t=window.document.getElementById(e.id);t.parentNode.removeChild(t)}},t.render=function(){var n=this.props,e=(n.config,(0,r.default)(n,["config"]));return i.default.createElement("div",(0,o.default)({id:"disqus_thread"},e))},e}(i.default.Component);e.default=c,c.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},8200:function(n,e,t){"use strict";var l=t(4836);var o=l(t(2605));e.h$=o.default,l(t(1254)).default,l(t(4294)).default,o.default},989:function(n,e,t){"use strict";var l=t(4836);e.__esModule=!0,e.insertScript=function(n,e,t){var l=window.document.createElement("script");return l.async=!0,l.src=n,l.id=e,t.appendChild(l),l},e.removeScript=function(n,e){var t=window.document.getElementById(n);t&&e.removeChild(t)},e.debounce=function(n,e,t){var l;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];var i=this,u=t&&!l;window.clearTimeout(l),l=setTimeout((function(){l=null,t||n.apply(i,r)}),e),u&&n.apply(i,r)}},e.isReactElement=a,e.shallowComparison=function n(e,t){var l,r=new Set(Object.keys(e).concat(Object.keys(t))),i=(l=[]).concat.apply(l,(0,o.default)(r)).filter((function(l){if("object"==typeof e[l]){if(n(e[l],t[l]))return!0}else if(e[l]!==t[l]&&!a(e[l]))return!0;return!1}));return 0!==i.length};var o=l(t(861)),r=l(t(7294));function a(n){return!!r.default.isValidElement(n)||!!Array.isArray(n)&&n.some((function(n){return r.default.isValidElement(n)}))}},3776:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return pn}});var l={};t.r(l),t.d(l,{boolean:function(){return y},booleanish:function(){return v},commaOrSpaceSeparated:function(){return S},commaSeparated:function(){return k},number:function(){return b},overloadedBoolean:function(){return w},spaceSeparated:function(){return x}});var o=t(7294),r=t(1883),a=t(8200),i=t(7464),u=t(6193),s=t(4001),c=t(3013),p=t(564);class d{constructor(n,e,t){this.property=n,this.normal=e,t&&(this.space=t)}}function f(n,e){const t={},l={};let o=-1;for(;++o<n.length;)Object.assign(t,n[o].property),Object.assign(l,n[o].normal);return new d(t,l,e)}function h(n){return n.toLowerCase()}d.prototype.property={},d.prototype.normal={},d.prototype.space=null;class m{constructor(n,e){this.property=n,this.attribute=e}}m.prototype.space=null,m.prototype.boolean=!1,m.prototype.booleanish=!1,m.prototype.overloadedBoolean=!1,m.prototype.number=!1,m.prototype.commaSeparated=!1,m.prototype.spaceSeparated=!1,m.prototype.commaOrSpaceSeparated=!1,m.prototype.mustUseProperty=!1,m.prototype.defined=!1;let g=0;const y=C(),v=C(),w=C(),b=C(),x=C(),k=C(),S=C();function C(){return 2**++g}const E=Object.keys(l);class P extends m{constructor(n,e,t,o){let r=-1;if(super(n,e),M(this,"space",o),"number"==typeof t)for(;++r<E.length;){const n=E[r];M(this,E[r],(t&l[n])===l[n])}}}function M(n,e,t){t&&(n[e]=t)}P.prototype.defined=!0;const D={}.hasOwnProperty;function L(n){const e={},t={};let l;for(l in n.properties)if(D.call(n.properties,l)){const o=n.properties[l],r=new P(l,n.transform(n.attributes||{},l),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(l)&&(r.mustUseProperty=!0),e[l]=r,t[h(l)]=l,t[h(r.attribute)]=l}return new d(e,t,n.space)}const O=L({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),I=L({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function A(n,e){return e in n?n[e]:e}function T(n,e){return A(n,e.toLowerCase())}const U=L({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:T,properties:{xmlns:null,xmlnsXLink:null}}),R=L({transform(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:v,ariaAutoComplete:null,ariaBusy:v,ariaChecked:v,ariaColCount:b,ariaColIndex:b,ariaColSpan:b,ariaControls:x,ariaCurrent:null,ariaDescribedBy:x,ariaDetails:null,ariaDisabled:v,ariaDropEffect:x,ariaErrorMessage:null,ariaExpanded:v,ariaFlowTo:x,ariaGrabbed:v,ariaHasPopup:null,ariaHidden:v,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:x,ariaLevel:b,ariaLive:null,ariaModal:v,ariaMultiLine:v,ariaMultiSelectable:v,ariaOrientation:null,ariaOwns:x,ariaPlaceholder:null,ariaPosInSet:b,ariaPressed:v,ariaReadOnly:v,ariaRelevant:null,ariaRequired:v,ariaRoleDescription:x,ariaRowCount:b,ariaRowIndex:b,ariaRowSpan:b,ariaSelected:v,ariaSetSize:b,ariaSort:null,ariaValueMax:b,ariaValueMin:b,ariaValueNow:b,ariaValueText:null,role:null}}),j=L({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:T,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:x,accessKey:x,action:null,allow:null,allowFullScreen:y,allowPaymentRequest:y,allowUserMedia:y,alt:null,as:null,async:y,autoCapitalize:null,autoComplete:x,autoFocus:y,autoPlay:y,capture:y,charSet:null,checked:y,cite:null,className:x,cols:b,colSpan:null,content:null,contentEditable:v,controls:y,controlsList:x,coords:b|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:y,defer:y,dir:null,dirName:null,disabled:y,download:w,draggable:v,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:y,formTarget:null,headers:x,height:b,hidden:y,high:b,href:null,hrefLang:null,htmlFor:x,httpEquiv:x,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:y,itemId:null,itemProp:x,itemRef:x,itemScope:y,itemType:x,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:y,low:b,manifest:null,max:null,maxLength:b,media:null,method:null,min:null,minLength:b,multiple:y,muted:y,name:null,nonce:null,noModule:y,noValidate:y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:y,optimum:b,pattern:null,ping:x,placeholder:null,playsInline:y,poster:null,preload:null,readOnly:y,referrerPolicy:null,rel:x,required:y,reversed:y,rows:b,rowSpan:b,sandbox:x,scope:null,scoped:y,seamless:y,selected:y,shape:null,size:b,sizes:null,slot:null,span:b,spellCheck:v,src:null,srcDoc:null,srcLang:null,srcSet:null,start:b,step:null,style:null,tabIndex:b,target:null,title:null,translate:null,type:null,typeMustMatch:y,useMap:null,value:v,width:b,wrap:null,align:null,aLink:null,archive:x,axis:null,background:null,bgColor:null,border:b,borderColor:null,bottomMargin:b,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:y,declare:y,event:null,face:null,frame:null,frameBorder:null,hSpace:b,leftMargin:b,link:null,longDesc:null,lowSrc:null,marginHeight:b,marginWidth:b,noResize:y,noHref:y,noShade:y,noWrap:y,object:null,profile:null,prompt:null,rev:null,rightMargin:b,rules:null,scheme:null,scrolling:v,standby:null,summary:null,text:null,topMargin:b,valueType:null,version:null,vAlign:null,vLink:null,vSpace:b,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:y,disableRemotePlayback:y,prefix:null,property:null,results:b,security:null,unselectable:null}}),B=L({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:A,properties:{about:S,accentHeight:b,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:b,amplitude:b,arabicForm:null,ascent:b,attributeName:null,attributeType:null,azimuth:b,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:b,by:null,calcMode:null,capHeight:b,className:x,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:b,diffuseConstant:b,direction:null,display:null,dur:null,divisor:b,dominantBaseline:null,download:y,dx:null,dy:null,edgeMode:null,editable:null,elevation:b,enableBackground:null,end:null,event:null,exponent:b,externalResourcesRequired:null,fill:null,fillOpacity:b,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:b,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:b,horizOriginX:b,horizOriginY:b,id:null,ideographic:b,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:b,k:b,k1:b,k2:b,k3:b,k4:b,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:b,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:b,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:b,overlineThickness:b,paintOrder:null,panose1:null,path:null,pathLength:b,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:x,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:b,pointsAtY:b,pointsAtZ:b,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:b,specularExponent:b,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:b,strikethroughThickness:b,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:b,strokeOpacity:b,strokeWidth:null,style:null,surfaceScale:b,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:b,tableValues:null,target:null,targetX:b,targetY:b,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,u1:null,u2:null,underlinePosition:b,underlineThickness:b,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:b,values:null,vAlphabetic:b,vMathematical:b,vectorEffect:null,vHanging:b,vIdeographic:b,version:null,vertAdvY:b,vertOriginX:b,vertOriginY:b,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:b,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),_=f([I,O,U,R,j],"html"),z=f([I,O,U,R,B],"svg"),N=/^data[-\w.:]+$/i,q=/-[a-z]/g,H=/[A-Z]/g;function F(n){return"-"+n.toLowerCase()}function V(n){return n.charAt(1).toUpperCase()}var W=t(7848);const K=function(n){if(null==n)return Y;if("string"==typeof n)return function(n){return X(e);function e(e){return e&&e.type===n}}(n);if("object"==typeof n)return Array.isArray(n)?function(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=K(n[t]);return X(l);function l(...n){let t=-1;for(;++t<e.length;)if(e[t].call(this,...n))return!0;return!1}}(n):function(n){return X(e);function e(e){let t;for(t in n)if(e[t]!==n[t])return!1;return!0}}(n);if("function"==typeof n)return X(n);throw new Error("Expected function, string, or object as test")};function X(n){return function(...e){return Boolean(n.call(this,...e))}}function Y(){return!0}const Z={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Q={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},$={}.hasOwnProperty,G=K("root"),J=K("element"),nn=K("text");function en(n,e,t){if("function"!=typeof n)throw new TypeError("h is not a function");const l=function(n){const e=n("div",{});return Boolean(e&&("_owner"in e||"_store"in e)&&(void 0===e.key||null===e.key))}(n),o=function(n){const e=n("div",{});return Boolean(e&&e.context&&e.context._isVue)}(n),r=function(n){const e=n("div",{});return"VirtualNode"===e.type}(n);let a,i;if("string"==typeof t||"boolean"==typeof t?(a=t,t={}):(t||(t={}),a=t.prefix),G(e))i=1===e.children.length&&J(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else{if(!J(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");i=e}return tn(n,i,{schema:"svg"===t.space?z:_,prefix:null==a?l||o||r?"h-":null:"string"==typeof a?a:a?"h-":null,key:0,react:l,vue:o,vdom:r,hyperscript:on(n)})}function tn(n,e,t){const l=t.schema;let o=l,r=e.tagName;const a={},i=[];let u,s=-1;for(u in"html"===l.space&&"svg"===r.toLowerCase()&&(o=z,t.schema=o),e.properties)e.properties&&$.call(e.properties,u)&&ln(a,u,e.properties[u],t,r);if(t.vdom&&("html"===o.space?r=r.toUpperCase():o.space&&(a.namespace=Z[o.space])),t.prefix&&(t.key++,a.key=t.prefix+t.key),e.children)for(;++s<e.children.length;){const l=e.children[s];J(l)?i.push(tn(n,l,t)):nn(l)&&i.push(l.value)}return t.schema=l,i.length>0?n.call(e,r,a,i):n.call(e,r,a)}function ln(n,e,t,l,o){const r=function(n,e){const t=h(e);let l=e,o=m;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&"data"===t.slice(0,4)&&N.test(e)){if("-"===e.charAt(4)){const n=e.slice(5).replace(q,V);l="data"+n.charAt(0).toUpperCase()+n.slice(1)}else{const n=e.slice(4);if(!q.test(n)){let t=n.replace(H,F);"-"!==t.charAt(0)&&(t="-"+t),e="data"+t}}o=P}return new o(l,e)}(l.schema,e);let a;var i,u,s;null==t||"number"==typeof t&&Number.isNaN(t)||!1===t&&(l.vue||l.vdom||l.hyperscript)||!t&&r.boolean&&(l.vue||l.vdom||l.hyperscript)||(Array.isArray(t)&&(t=r.commaSeparated?(s=u||{},""===(i=t)[i.length-1]&&(i=i.concat("")),i.join((s.padRight?" ":"")+","+(!1===s.padLeft?"":" ")).trim()):function(n){return n.join(" ").trim()}(t)),r.boolean&&l.hyperscript&&(t=""),"style"===r.property&&"string"==typeof t&&(l.react||l.vue||l.vdom)&&(t=function(n,e){const t={};try{W(n,((n,e)=>{"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4)),t[n.replace(/-([a-z])/g,((n,e)=>e.toUpperCase()))]=e}))}catch(l){throw l.message=e+"[style]"+l.message.slice(9),l}return t}(t,o)),l.vue?"style"!==r.property&&(a="attrs"):r.mustUseProperty||(l.vdom?"style"!==r.property&&(a="attributes"):l.hyperscript&&(a="attrs")),a?n[a]=Object.assign(n[a]||{},{[r.attribute]:t}):r.space&&l.react?n[Q[r.property]||r.property]=t:n[r.attribute]=t)}function on(n){return"context"in n&&"cleanup"in n}var rn=t(478);const an={}.hasOwnProperty,un=new Set(["table","thead","tbody","tfoot","tr"]);var sn=()=>{const{0:n,1:e}=(0,o.useState)(0);return o.createElement("span",{style:{color:"red"}},o.createElement("strong",{style:{flex:"1 1"}},n),o.createElement("button",{onClick:()=>{e(n-1)}},"-1"),o.createElement("button",{onClick:()=>{e(n+1)}},"+1"))};const cn=new function(n){if(!n||"function"!=typeof n.createElement)throw new TypeError("createElement is not a function");const e=n.createElement;function t(t,l,o){if(o&&un.has(t)&&(o=o.filter((n=>{return!("string"==typeof(t=(e=n)&&"object"==typeof e&&"text"===e.type?e.value||"":e)&&""===t.replace(/[ \t\n\f\r]/g,""));var e,t}))),n.components&&an.call(n.components,t)){const r=n.components[t];return n.passNode&&"function"==typeof r&&(l=Object.assign({node:this},l)),e(r,l,o)}return e(t,l,o)}Object.assign(this,{Compiler:function(l){let o=en(t,rn(l),n.prefix);if("root"===l.type)return o=o&&"object"==typeof o&&"type"in o&&"props"in o&&"div"===o.type&&(1!==l.children.length||"element"!==l.children[0].type)?o.props.children:[o],e(n.Fragment||"div",{},o);return o}})}({createElement:o.createElement,components:{counter:sn}}).Compiler;var pn=n=>{var e;let{data:t,location:l}=n;const d=t.markdownRemark,f=(null===(e=t.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",h=t.site.siteMetadata.siteUrl+"/blog/"+d.fields.slug,{previous:m,next:g}=t;let y;var v;d.frontmatter.image?y=(null===(v=t.site.siteMetadata)||void 0===v?void 0:v.siteUrl)+d.frontmatter.image.publicURL:d.fields.thumbnail&&(y=d.fields.thumbnail);return o.createElement(u.Z,{location:l,title:f},o.createElement(s.Z,{title:d.frontmatter.title,description:d.frontmatter.description||d.excerpt,image:y}),o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h1",{itemProp:"headline"},d.frontmatter.title),o.createElement("p",null,(0,c.Z)(new Date(d.fields.date),"PPP"))),o.createElement(p.Z,{url:h}),o.createElement("section",{itemProp:"articleBody"},cn(d.htmlAst)),o.createElement("hr",null),o.createElement("footer",null,o.createElement(i.Z,null))),o.createElement("nav",{className:"blog-post-nav"},o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,m&&o.createElement(r.Link,{to:"/blog/"+m.fields.slug,rel:"prev"},"← ",m.frontmatter.title)),o.createElement("li",null,g&&o.createElement(r.Link,{to:"/blog/"+g.fields.slug,rel:"next"},g.frontmatter.title," →")))),o.createElement(a.h$,{config:{url:h,identifier:d.fields.slug,title:d.frontmatter.title}}))}},8139:function(n){var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,l=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,u=/^\s+|\s+$/g,s="";function c(n){return n?n.replace(u,s):s}n.exports=function(n,u){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];u=u||{};var p=1,d=1;function f(n){var e=n.match(t);e&&(p+=e.length);var l=n.lastIndexOf("\n");d=~l?n.length-l:d+n.length}function h(){var n={line:p,column:d};return function(e){return e.position=new m(n),w(),e}}function m(n){this.start=n,this.end={line:p,column:d},this.source=u.source}m.prototype.content=n;var g=[];function y(e){var t=new Error(u.source+":"+p+":"+d+": "+e);if(t.reason=e,t.filename=u.source,t.line=p,t.column=d,t.source=n,!u.silent)throw t;g.push(t)}function v(e){var t=e.exec(n);if(t){var l=t[0];return f(l),n=n.slice(l.length),t}}function w(){v(l)}function b(n){var e;for(n=n||[];e=x();)!1!==e&&n.push(e);return n}function x(){var e=h();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var t=2;s!=n.charAt(t)&&("*"!=n.charAt(t)||"/"!=n.charAt(t+1));)++t;if(t+=2,s===n.charAt(t-1))return y("End of comment missing");var l=n.slice(2,t-2);return d+=2,f(l),n=n.slice(t),d+=2,e({type:"comment",comment:l})}}function k(){var n=h(),t=v(o);if(t){if(x(),!v(r))return y("property missing ':'");var l=v(a),u=n({type:"declaration",property:c(t[0].replace(e,s)),value:l?c(l[0].replace(e,s)):s});return v(i),u}}return w(),function(){var n,e=[];for(b(e);n=k();)!1!==n&&(e.push(n),b(e));return e}()}},7848:function(n,e,t){var l=t(8139);n.exports=function(n,e){var t,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=l(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(t=i[s]).property,a=t.value,u?e(r,a,t):a&&(o||(o={}),o[r]=a);return o}},2854:function(n,e,t){"use strict";n.exports=i;var l=t(9858),o=l.CONTINUE,r=l.SKIP,a=l.EXIT;function i(n,e,t,o){"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),l(n,e,(function(n,e){var l=e[e.length-1],o=l?l.children.indexOf(n):null;return t(n,o,l)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},350:function(n){"use strict";function e(n){if("string"==typeof n)return function(n){return e;function e(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return o;if("object"==typeof n)return("length"in n?l:t)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function t(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function l(n){var t=function(n){for(var t=[],l=n.length,o=-1;++o<l;)t[o]=e(n[o]);return t}(n),l=t.length;return function(){var n=-1;for(;++n<l;)if(t[n].apply(this,arguments))return!0;return!1}}function o(){return!0}n.exports=e},9858:function(n,e,t){"use strict";n.exports=i;var l=t(350),o=!0,r="skip",a=!1;function i(n,e,t,o){var i;function s(n,l,c){var p,d=[];return(e&&!i(n,l,c[c.length-1]||null)||(d=u(t(n,c)))[0]!==a)&&n.children&&d[0]!==r?(p=u(function(n,e){var t,l=-1,r=o?-1:1,i=(o?n.length:l)+r;for(;i>l&&i<n.length;){if((t=s(n[i],i,e))[0]===a)return t;i="number"==typeof t[1]?t[1]:i+r}}(n.children,c.concat(n))),p[0]===a?p:d):d}"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),i=l(e),s(n,null,[])}function u(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[o,n]:[n]}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},3897:function(n){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,l=new Array(e);t<e;t++)l[t]=n[t];return l},n.exports.__esModule=!0,n.exports.default=n.exports},3405:function(n,e,t){var l=t(3897);n.exports=function(n){if(Array.isArray(n))return l(n)},n.exports.__esModule=!0,n.exports.default=n.exports},434:function(n){function e(){return n.exports=e=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n},n.exports.__esModule=!0,n.exports.default=n.exports,e.apply(this,arguments)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},9498:function(n){n.exports=function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)},n.exports.__esModule=!0,n.exports.default=n.exports},2281:function(n){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.__esModule=!0,n.exports.default=n.exports},7071:function(n){n.exports=function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.__esModule=!0,n.exports.default=n.exports},861:function(n,e,t){var l=t(3405),o=t(9498),r=t(6116),a=t(2281);n.exports=function(n){return l(n)||o(n)||r(n)||a()},n.exports.__esModule=!0,n.exports.default=n.exports},6116:function(n,e,t){var l=t(3897);n.exports=function(n,e){if(n){if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(n,e):void 0}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-607c77a46555b7a09182.js.map