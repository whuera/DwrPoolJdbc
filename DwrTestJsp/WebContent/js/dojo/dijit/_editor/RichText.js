//>>built
define("dijit/_editor/RichText","dojo/_base/array dojo/_base/config dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/query dojo/domReady dojo/sniff dojo/topic dojo/_base/unload dojo/_base/url dojo/window ../_Widget ../_CssStateMixin ../selection ./range ./html ../focus ../main".split(" "),function(r,F,J,G,y,z,H,m,K,v,A,u,k,t,B,L,d,I,M,C,D,N,O,P,s,w,E,x){var p=J("dijit._editor.RichText",
[N,O],{constructor:function(a){this.contentPreFilters=[];this.contentPostFilters=[];this.contentDomPreFilters=[];this.contentDomPostFilters=[];this.editingAreaStyleSheets=[];this.events=[].concat(this.events);this._keyHandlers={};a&&k.isString(a.value)&&(this.value=a.value);this.onLoadDeferred=new G},baseClass:"dijitEditor",inheritWidth:!1,focusOnLoad:!1,name:"",styleSheets:"",height:"300px",minHeight:"1em",isClosed:!0,isLoaded:!1,_SEPARATOR:"@@**%%__RICHTEXTBOUNDRY__%%**@@",_NAME_CONTENT_SEP:"@@**%%:%%**@@",
onLoadDeferred:null,isTabIndent:!1,disableSpellCheck:!1,postCreate:function(){"textarea"===this.domNode.tagName.toLowerCase()&&console.warn("RichText should not be used with the TEXTAREA tag.  See dijit._editor.RichText docs.");this.contentPreFilters=[k.hitch(this,"_preFixUrlAttributes")].concat(this.contentPreFilters);d("mozilla")&&(this.contentPreFilters=[this._normalizeFontStyle].concat(this.contentPreFilters),this.contentPostFilters=[this._removeMozBogus].concat(this.contentPostFilters));d("webkit")&&
(this.contentPreFilters=[this._removeWebkitBogus].concat(this.contentPreFilters),this.contentPostFilters=[this._removeWebkitBogus].concat(this.contentPostFilters));d("ie")&&(this.contentPostFilters=[this._normalizeFontStyle].concat(this.contentPostFilters),this.contentDomPostFilters=[k.hitch(this,this._stripBreakerNodes)].concat(this.contentDomPostFilters));this.inherited(arguments);I.publish(x._scopeName+"._editor.RichText::init",this)},startup:function(){this.inherited(arguments);this.open();this.setupDefaultShortcuts()},
setupDefaultShortcuts:function(){var a=k.hitch(this,function(a,b){return function(){return!this.execCommand(a,b)}}),b={b:a("bold"),i:a("italic"),u:a("underline"),a:a("selectall"),s:function(){this.save(!0)},m:function(){this.isTabIndent=!this.isTabIndent},1:a("formatblock","h1"),2:a("formatblock","h2"),3:a("formatblock","h3"),4:a("formatblock","h4"),"\\":a("insertunorderedlist")};d("ie")||(b.Z=a("redo"));for(var c in b)this.addKeyHandler(c,!0,!1,b[c])},events:["onKeyDown","onKeyUp"],captureEvents:[],
_editorCommandsLocalized:!1,_localizeEditorCommands:function(){if(p._editorCommandsLocalized)this._local2NativeFormatNames=p._local2NativeFormatNames,this._native2LocalFormatNames=p._native2LocalFormatNames;else{p._editorCommandsLocalized=!0;p._local2NativeFormatNames={};p._native2LocalFormatNames={};this._local2NativeFormatNames=p._local2NativeFormatNames;this._native2LocalFormatNames=p._native2LocalFormatNames;for(var a="div p pre h1 h2 h3 h4 h5 h6 ol ul address".split(" "),b="",c,f=0;c=a[f++];)b=
"l"!==c.charAt(1)?b+("\x3c"+c+"\x3e\x3cspan\x3econtent\x3c/span\x3e\x3c/"+c+"\x3e\x3cbr/\x3e"):b+("\x3c"+c+"\x3e\x3cli\x3econtent\x3c/li\x3e\x3c/"+c+"\x3e\x3cbr/\x3e");var e=m.create("div",{style:{position:"absolute",top:"0px",zIndex:10,opacity:0.01},innerHTML:b});this.ownerDocumentBody.appendChild(e);a=k.hitch(this,function(){for(var a=e.firstChild;a;)try{this.selection.selectElement(a.firstChild);var b=a.tagName.toLowerCase();this._local2NativeFormatNames[b]=document.queryCommandValue("formatblock");
this._native2LocalFormatNames[this._local2NativeFormatNames[b]]=b;a=a.nextSibling.nextSibling}catch(c){}m.destroy(e)});this.defer(a)}},open:function(a){if(!this.onLoadDeferred||0<=this.onLoadDeferred.fired)this.onLoadDeferred=new G;this.isClosed||this.close();I.publish(x._scopeName+"._editor.RichText::open",this);1===arguments.length&&a.nodeName&&(this.domNode=a);var b=this.domNode,c;if(k.isString(this.value))c=this.value,delete this.value,b.innerHTML="";else if(b.nodeName&&"textarea"==b.nodeName.toLowerCase()){var f=
this.textarea=b;this.name=f.name;c=f.value;b=this.domNode=this.ownerDocument.createElement("div");b.setAttribute("widgetId",this.id);f.removeAttribute("widgetId");b.cssText=f.cssText;b.className+=" "+f.className;m.place(b,f,"before");var e=k.hitch(this,function(){v.set(f,{display:"block",position:"absolute",top:"-1000px"});if(d("ie")){var a=f.style;this.__overflow=a.overflow;a.overflow="hidden"}});d("ie")?this.defer(e,10):e();if(f.form){var q=f.value;this.reset=function(){this.getValue()!==q&&this.replaceValue(q)};
t(f.form,"submit",k.hitch(this,function(){z.set(f,"disabled",this.disabled);f.value=this.getValue()}))}}else c=w.getChildrenHtml(b),b.innerHTML="";this.value=c;b.nodeName&&"LI"===b.nodeName&&(b.innerHTML=" \x3cbr\x3e");this.header=b.ownerDocument.createElement("div");b.appendChild(this.header);this.editingArea=b.ownerDocument.createElement("div");b.appendChild(this.editingArea);this.footer=b.ownerDocument.createElement("div");b.appendChild(this.footer);this.name||(this.name=this.id+"_AUTOGEN");if(""!==
this.name&&(!F.useXDomain||F.allowXdRichTextSave)){if((e=y.byId(x._scopeName+"._editor.RichText.value"))&&""!==e.value)for(var g=e.value.split(this._SEPARATOR),h=0,l;l=g[h++];)if(l=l.split(this._NAME_CONTENT_SEP),l[0]===this.name){c=l[1];g=g.splice(h,1);e.value=g.join(this._SEPARATOR);break}p._globalSaveHandler||(p._globalSaveHandler={},M.addOnUnload(function(){for(var a in p._globalSaveHandler){var b=p._globalSaveHandler[a];k.isFunction(b)&&b()}}));p._globalSaveHandler[this.id]=k.hitch(this,"_saveContent")}this.isClosed=
!1;e=this.editorObject=this.iframe=this.ownerDocument.createElement("iframe");e.id=this.id+"_iframe";e.style.border="none";e.style.width="100%";this._layoutMode?e.style.height="100%":7<=d("ie")?(this.height&&(e.style.height=this.height),this.minHeight&&(e.style.minHeight=this.minHeight)):e.style.height=this.height?this.height:this.minHeight;e.frameBorder=0;e._loadFunc=k.hitch(this,function(a){this.window=a;this.document=this.window.document;this.selection=new P.SelectionManager(a);d("ie")&&this._localizeEditorCommands();
this.onLoad(c)});g="javascript: '"+this._getIframeDocTxt().replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'";9<=d("ie")?(this.editingArea.appendChild(e),e.src=g):(e.setAttribute("src",g),this.editingArea.appendChild(e));"LI"===b.nodeName&&(b.lastChild.style.marginTop="-1.2em");H.add(this.domNode,this.baseClass)},_local2NativeFormatNames:{},_native2LocalFormatNames:{},_getIframeDocTxt:function(){var a=v.getComputedStyle(this.domNode),b="",c=!0;d("ie")||d("webkit")||!this.height&&!d("mozilla")?(b="\x3cdiv id\x3d'dijitEditorBody'\x3e\x3c/div\x3e",
c=!1):d("mozilla")&&(this._cursorToStart=!0,b="\x26#160;");var f=[a.fontWeight,a.fontSize,a.fontFamily].join(" "),e=a.lineHeight,e=0<=e.indexOf("px")?parseFloat(e)/parseFloat(a.fontSize):0<=e.indexOf("em")?parseFloat(e):"normal",q="",g=this;this.style.replace(/(^|;)\s*(line-|font-?)[^;]+/ig,function(a){a=a.replace(/^;/ig,"")+";";var b=a.split(":")[0];if(b){var b=k.trim(b),b=b.toLowerCase(),c,e="";for(c=0;c<b.length;c++){var f=b.charAt(c);switch(f){case "-":c++,f=b.charAt(c).toUpperCase();default:e+=
f}}v.set(g.domNode,e,"")}q+=a+";"});var a=B('label[for\x3d"'+this.id+'"]'),h="";a.length?h=a[0].innerHTML:this["aria-label"]?h=this["aria-label"]:this["aria-labelledby"]&&(h=y.byId(this["aria-labelledby"]).innerHTML);this.iframe.setAttribute("title",h);return["\x3c!DOCTYPE html\x3e",this.isLeftToRight()?"\x3chtml lang\x3d'"+this.lang+"'\x3e\n\x3chead\x3e\n":"\x3chtml dir\x3d'rtl' lang\x3d'"+this.lang+"'\x3e\n\x3chead\x3e\n",h?"\x3ctitle\x3e"+h+"\x3c/title\x3e":"","\x3cmeta http-equiv\x3d'Content-Type' content\x3d'text/html'\x3e\n\x3cstyle\x3e\n\tbody,html {\n\t\tbackground:transparent;\n\t\tpadding: 1px 0 0 0;\n\t\tmargin: -1px 0 0 0;\n\t}\n\tbody,html, #dijitEditorBody{ outline: none; }html { height: 100%; width: 100%; overflow: hidden; }\n",
this.height?"\tbody { height: 100%; width: 100%; overflow: auto; }\n":"\tbody { min-height: "+this.minHeight+"; width: 100%; overflow-x: auto; overflow-y: hidden; }\n","\tbody{\n\t\ttop:0px;\n\t\tleft:0px;\n\t\tright:0px;\n\t\tfont:",f,";\n",this.height||d("opera")?"":"\t\tposition: fixed;\n","\t\tline-height:",e,";\n\t}\n\tp{ margin: 1em 0; }\n\tli \x3e ul:-moz-first-node, li \x3e ol:-moz-first-node{ padding-top: 1.2em; }\n",!d("ie")?"\tli{ min-height:1.2em; }\n":"","\x3c/style\x3e\n",this._applyEditingAreaStyleSheets(),
"\n\x3c/head\x3e\n\x3cbody role\x3d'main' ",c?"id\x3d'dijitEditorBody' ":"","onload\x3d'frameElement \x26\x26 frameElement._loadFunc(window,document)' ","style\x3d'"+q+"'\x3e",b,"\x3c/body\x3e\n\x3c/html\x3e"].join("")},_applyEditingAreaStyleSheets:function(){var a=[];this.styleSheets&&(a=this.styleSheets.split(";"),this.styleSheets="");a=a.concat(this.editingAreaStyleSheets);this.editingAreaStyleSheets=[];for(var b="",c=0,f,e=D.get(this.ownerDocument);f=a[c++];)f=(new C(e.location,f)).toString(),
this.editingAreaStyleSheets.push(f),b+='\x3clink rel\x3d"stylesheet" type\x3d"text/css" href\x3d"'+f+'"/\x3e';return b},addStyleSheet:function(a){var b=a.toString(),c=D.get(this.ownerDocument);if("."===b.charAt(0)||"/"!==b.charAt(0)&&!a.host)b=(new C(c.location,b)).toString();-1<r.indexOf(this.editingAreaStyleSheets,b)||(this.editingAreaStyleSheets.push(b),this.onLoadDeferred.then(k.hitch(this,function(){if(this.document.createStyleSheet)this.document.createStyleSheet(b);else{var a=this.document.getElementsByTagName("head")[0],
c=this.document.createElement("link");c.rel="stylesheet";c.type="text/css";c.href=b;a.appendChild(c)}})))},removeStyleSheet:function(a){var b=a.toString(),c=D.get(this.ownerDocument);if("."===b.charAt(0)||"/"!==b.charAt(0)&&!a.host)b=(new C(c.location,b)).toString();a=r.indexOf(this.editingAreaStyleSheets,b);-1!==a&&(delete this.editingAreaStyleSheets[a],B('link[href\x3d"'+b+'"]',this.window.document).orphan())},disabled:!1,_mozSettingProps:{styleWithCSS:!1},_setDisabledAttr:function(a){a=!!a;this._set("disabled",
a);if(this.isLoaded){if(d("ie")||d("webkit")||d("opera")){var b=d("ie")&&(this.isLoaded||!this.focusOnLoad);b&&(this.editNode.unselectable="on");this.editNode.contentEditable=!a;b&&this.defer(function(){this.editNode&&(this.editNode.unselectable="off")})}else{try{this.document.designMode=a?"off":"on"}catch(c){return}if(!a&&this._mozSettingProps)for(b in a=this._mozSettingProps,a)if(a.hasOwnProperty(b))try{this.document.execCommand(b,!1,a[b])}catch(f){}}this._disabledOK=!0}},onLoad:function(a){this.window.__registeredWindow||
(this.window.__registeredWindow=!0,this._iframeRegHandle=E.registerIframe(this.iframe));if(!d("ie")&&!d("webkit")&&(this.height||d("mozilla")))this.editNode=this.document.body;else{this.editNode=this.document.body.firstChild;var b=this;d("ie")&&(this.tabStop=m.create("div",{tabIndex:-1},this.editingArea),this.iframe.onfocus=function(){b.editNode.setActive()})}this.focusNode=this.editNode;var c=this.events.concat(this.captureEvents),f=this.iframe?this.document:this.editNode;this.own(r.map(c,function(a){var b=
a.toLowerCase().replace(/^on/,"");t(f,b,k.hitch(this,a))},this));this.own(t(f,"mouseup",k.hitch(this,"onClick")));d("ie")?(this.own(t(this.document,"mousedown",k.hitch(this,"_onIEMouseDown"))),this.editNode.style.zoom=1):this.own(t(this.document,"mousedown",k.hitch(this,function(){delete this._cursorToStart})));d("webkit")&&(this._webkitListener=this.own(t(this.document,"mouseup",k.hitch(this,"onDisplayChanged")))[0],this.own(t(this.document,"mousedown",k.hitch(this,function(a){(a=a.target)&&(a===
this.document.body||a===this.document)&&this.defer("placeCursorAtEnd")}))));if(d("ie"))try{this.document.execCommand("RespectVisibilityInDesign",!0,null)}catch(e){}this.isLoaded=!0;this.set("disabled",this.disabled);c=k.hitch(this,function(){this.setValue(a);this.onLoadDeferred&&this.onLoadDeferred.resolve(!0);this.onDisplayChanged();this.focusOnLoad&&L(k.hitch(this,"defer","focus",this.updateInterval));this.value=this.getValue(!0)});this.setValueDeferred?this.setValueDeferred.then(c):c()},onKeyDown:function(a){if(a.keyCode===
u.TAB&&this.isTabIndent&&(a.stopPropagation(),a.preventDefault(),this.queryCommandEnabled(a.shiftKey?"outdent":"indent")))this.execCommand(a.shiftKey?"outdent":"indent");d("ie")&&(a.keyCode==u.TAB&&!this.isTabIndent?a.shiftKey&&!a.ctrlKey&&!a.altKey?this.iframe.focus():!a.shiftKey&&(!a.ctrlKey&&!a.altKey)&&this.tabStop.focus():a.keyCode===u.BACKSPACE&&"Control"===this.document.selection.type&&(a.stopPropagation(),a.preventDefault(),this.execCommand("delete")));d("ff")&&(a.keyCode===u.PAGE_UP||a.keyCode===
u.PAGE_DOWN)&&this.editNode.clientHeight>=this.editNode.scrollHeight&&a.preventDefault();var b=this._keyHandlers[a.keyCode],c=arguments;b&&!a.altKey&&r.some(b,function(b){if(!(b.shift^a.shiftKey)&&!(b.ctrl^(a.ctrlKey||a.metaKey)))return b.handler.apply(this,c)||a.preventDefault(),!0},this);this.defer("onKeyPressed",1);return!0},onKeyUp:function(){},setDisabled:function(a){A.deprecated("dijit.Editor::setDisabled is deprecated",'use dijit.Editor::attr("disabled",boolean) instead',2);this.set("disabled",
a)},_setValueAttr:function(a){this.setValue(a)},_setDisableSpellCheckAttr:function(a){this.document?z.set(this.document.body,"spellcheck",!a):this.onLoadDeferred.then(k.hitch(this,function(){z.set(this.document.body,"spellcheck",!a)}));this._set("disableSpellCheck",a)},addKeyHandler:function(a,b,c,f){"string"==typeof a&&(a=a.toUpperCase().charCodeAt(0));k.isArray(this._keyHandlers[a])||(this._keyHandlers[a]=[]);this._keyHandlers[a].push({shift:c||!1,ctrl:b||!1,handler:f})},onKeyPressed:function(){this.onDisplayChanged()},
onClick:function(a){this.onDisplayChanged(a)},_onIEMouseDown:function(){!this.focused&&!this.disabled&&this.focus()},_onBlur:function(a){9<=d("ie")&&this.defer(function(){E.curNode||this.ownerDocumentBody.focus()});this.inherited(arguments);var b=this.getValue(!0);if(b!==this.value)this.onChange(b);this._set("value",b)},_onFocus:function(a){this.disabled||(this._disabledOK||this.set("disabled",!1),this.inherited(arguments))},blur:function(){!d("ie")&&this.window.document.documentElement&&this.window.document.documentElement.focus?
this.window.document.documentElement.focus():this.ownerDocumentBody.focus&&this.ownerDocumentBody.focus()},focus:function(){if(this.isLoaded){if(this._cursorToStart&&(delete this._cursorToStart,this.editNode.childNodes)){this.placeCursorAtStart();return}d("ie")?this.editNode&&this.editNode.focus&&this.iframe.fireEvent("onfocus",document.createEventObject()):E.focus(this.iframe)}else this.focusOnLoad=!0},updateInterval:200,_updateTimer:null,onDisplayChanged:function(){this._updateTimer&&this._updateTimer.remove();
this._updateTimer=this.defer("onNormalizedDisplayChanged",this.updateInterval)},onNormalizedDisplayChanged:function(){delete this._updateTimer},onChange:function(){},_normalizeCommand:function(a,b){var c=a.toLowerCase();"formatblock"===c?d("safari")&&void 0===b&&(c="heading"):"hilitecolor"===c&&!d("mozilla")&&(c="backcolor");return c},_qcaCache:{},queryCommandAvailable:function(a){var b=this._qcaCache[a];return void 0!==b?b:this._qcaCache[a]=this._queryCommandAvailable(a)},_queryCommandAvailable:function(a){function b(a){return{ie:Boolean(a&
c),mozilla:Boolean(a&f),webkit:Boolean(a&e),opera:Boolean(a&q)}}var c=1,f=2,e=4,q=8,g=null;switch(a.toLowerCase()){case "bold":case "italic":case "underline":case "subscript":case "superscript":case "fontname":case "fontsize":case "forecolor":case "hilitecolor":case "justifycenter":case "justifyfull":case "justifyleft":case "justifyright":case "delete":case "selectall":case "toggledir":g=b(f|c|e|q);break;case "createlink":case "unlink":case "removeformat":case "inserthorizontalrule":case "insertimage":case "insertorderedlist":case "insertunorderedlist":case "indent":case "outdent":case "formatblock":case "inserthtml":case "undo":case "redo":case "strikethrough":case "tabindent":g=
b(f|c|q|e);break;case "blockdirltr":case "blockdirrtl":case "dirltr":case "dirrtl":case "inlinedirltr":case "inlinedirrtl":g=b(c);break;case "cut":case "copy":case "paste":g=b(c|f|e|q);break;case "inserttable":g=b(f|c);break;case "insertcell":case "insertcol":case "insertrow":case "deletecells":case "deletecols":case "deleterows":case "mergecells":case "splitcell":g=b(c|f);break;default:return!1}return d("ie")&&g.ie||d("mozilla")&&g.mozilla||d("webkit")&&g.webkit||d("opera")&&g.opera},execCommand:function(a,
b){var c;this.focused&&this.focus();a=this._normalizeCommand(a,b);if(void 0!==b){if("heading"===a)throw Error("unimplemented");"formatblock"===a&&d("ie")&&(b="\x3c"+b+"\x3e")}var f="_"+a+"Impl";if(this[f])c=this[f](b);else if((b=1<arguments.length?b:null)||"createlink"!==a)c=this.document.execCommand(a,!1,b);this.onDisplayChanged();return c},queryCommandEnabled:function(a){if(this.disabled||!this._disabledOK)return!1;a=this._normalizeCommand(a);var b="_"+a+"EnabledImpl";return this[b]?this[b](a):
this._browserQueryCommandEnabled(a)},queryCommandState:function(a){if(this.disabled||!this._disabledOK)return!1;a=this._normalizeCommand(a);try{return this.document.queryCommandState(a)}catch(b){return!1}},queryCommandValue:function(a){if(this.disabled||!this._disabledOK)return!1;a=this._normalizeCommand(a);if(d("ie")&&"formatblock"===a)a=this._native2LocalFormatNames[this.document.queryCommandValue(a)];else if(d("mozilla")&&"hilitecolor"===a){var b;try{b=this.document.queryCommandValue("styleWithCSS")}catch(c){b=
!1}this.document.execCommand("styleWithCSS",!1,!0);a=this.document.queryCommandValue(a);this.document.execCommand("styleWithCSS",!1,b)}else a=this.document.queryCommandValue(a);return a},_sCall:function(a,b){return this.selection[a].apply(this.selection,b)},placeCursorAtStart:function(){this.focus();var a=!1;if(d("mozilla"))for(var b=this.editNode.firstChild;b;){if(3===b.nodeType){if(0<b.nodeValue.replace(/^\s+|\s+$/g,"").length){a=!0;this.selection.selectElement(b);break}}else if(1===b.nodeType){var a=
!0,c=b.tagName?b.tagName.toLowerCase():"";/br|input|img|base|meta|area|basefont|hr|link/.test(c)?this.selection.selectElement(b):this.selection.selectElementChildren(b);break}b=b.nextSibling}else a=!0,this.selection.selectElementChildren(this.editNode);a&&this.selection.collapse(!0)},placeCursorAtEnd:function(){this.focus();var a=!1;if(d("mozilla"))for(var b=this.editNode.lastChild;b;){if(3===b.nodeType){if(0<b.nodeValue.replace(/^\s+|\s+$/g,"").length){a=!0;this.selection.selectElement(b);break}}else if(1===
b.nodeType){a=!0;this.selection.selectElement(b.lastChild||b);break}b=b.previousSibling}else a=!0,this.selection.selectElementChildren(this.editNode);a&&this.selection.collapse(!1)},getValue:function(a){return this.textarea&&(this.isClosed||!this.isLoaded)?this.textarea.value:this._postFilterContent(null,a)},_getValueAttr:function(){return this.getValue(!0)},setValue:function(a){if(this.isLoaded){this._cursorToStart=!0;if(this.textarea&&(this.isClosed||!this.isLoaded))this.textarea.value=a;else{a=
this._preFilterContent(a);var b=this.isClosed?this.domNode:this.editNode;a&&(d("mozilla")&&"\x3cp\x3e\x3c/p\x3e"===a.toLowerCase())&&(a="\x3cp\x3e\x26#160;\x3c/p\x3e");!a&&d("webkit")&&(a="\x26#160;");b.innerHTML=a;this._preDomFilterContent(b)}this.onDisplayChanged();this._set("value",this.getValue(!0))}else this.onLoadDeferred.then(k.hitch(this,function(){this.setValue(a)}))},replaceValue:function(a){this.isClosed?this.setValue(a):this.window&&this.window.getSelection&&!d("mozilla")?this.setValue(a):
this.window&&this.window.getSelection?(a=this._preFilterContent(a),this.execCommand("selectall"),a||(this._cursorToStart=!0,a="\x26#160;"),this.execCommand("inserthtml",a),this._preDomFilterContent(this.editNode)):this.document&&this.document.selection&&this.setValue(a);this._set("value",this.getValue(!0))},_preFilterContent:function(a){var b=a;r.forEach(this.contentPreFilters,function(a){a&&(b=a(b))});return b},_preDomFilterContent:function(a){a=a||this.editNode;r.forEach(this.contentDomPreFilters,
function(b){b&&k.isFunction(b)&&b(a)},this)},_postFilterContent:function(a,b){var c;k.isString(a)?c=a:(a=a||this.editNode,this.contentDomPostFilters.length&&(b&&(a=k.clone(a)),r.forEach(this.contentDomPostFilters,function(b){a=b(a)})),c=w.getChildrenHtml(a));k.trim(c.replace(/^\xA0\xA0*/,"").replace(/\xA0\xA0*$/,"")).length||(c="");r.forEach(this.contentPostFilters,function(a){c=a(c)});return c},_saveContent:function(){var a=y.byId(x._scopeName+"._editor.RichText.value");a&&(a.value&&(a.value+=this._SEPARATOR),
a.value+=this.name+this._NAME_CONTENT_SEP+this.getValue(!0))},escapeXml:function(a,b){a=a.replace(/&/gm,"\x26amp;").replace(/</gm,"\x26lt;").replace(/>/gm,"\x26gt;").replace(/"/gm,"\x26quot;");b||(a=a.replace(/'/gm,"\x26#39;"));return a},getNodeHtml:function(a){A.deprecated("dijit.Editor::getNodeHtml is deprecated","use dijit/_editor/html::getNodeHtml instead",2);return w.getNodeHtml(a)},getNodeChildrenHtml:function(a){A.deprecated("dijit.Editor::getNodeChildrenHtml is deprecated","use dijit/_editor/html::getChildrenHtml instead",
2);return w.getChildrenHtml(a)},close:function(a){if(!this.isClosed){arguments.length||(a=!0);a&&this._set("value",this.getValue(!0));this.interval&&clearInterval(this.interval);this._webkitListener&&(this._webkitListener.remove(),delete this._webkitListener);d("ie")&&(this.iframe.onfocus=null);this.iframe._loadFunc=null;this._iframeRegHandle&&(this._iframeRegHandle.remove(),delete this._iframeRegHandle);if(this.textarea){var b=this.textarea.style;b.position="";b.left=b.top="";d("ie")&&(b.overflow=
this.__overflow,this.__overflow=null);this.textarea.value=this.value;m.destroy(this.domNode);this.domNode=this.textarea}else this.domNode.innerHTML=this.value;delete this.iframe;H.remove(this.domNode,this.baseClass);this.isClosed=!0;this.isLoaded=!1;delete this.editNode;delete this.focusNode;this.window&&this.window._frameElement&&(this.window._frameElement=null);this.editorObject=this.editingArea=this.document=this.window=null}},destroy:function(){this.isClosed||this.close(!1);this._updateTimer&&
this._updateTimer.remove();this.inherited(arguments);p._globalSaveHandler&&delete p._globalSaveHandler[this.id]},_removeMozBogus:function(a){return a.replace(/\stype="_moz"/gi,"").replace(/\s_moz_dirty=""/gi,"").replace(/_moz_resizing="(true|false)"/gi,"")},_removeWebkitBogus:function(a){a=a.replace(/\sclass="webkit-block-placeholder"/gi,"");a=a.replace(/\sclass="apple-style-span"/gi,"");return a=a.replace(/<meta charset=\"utf-8\" \/>/gi,"")},_normalizeFontStyle:function(a){return a.replace(/<(\/)?strong([ \>])/gi,
"\x3c$1b$2").replace(/<(\/)?em([ \>])/gi,"\x3c$1i$2")},_preFixUrlAttributes:function(a){return a.replace(/(?:(<a(?=\s).*?\shref=)("|')(.*?)\2)|(?:(<a\s.*?href=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl\x3d$2$3$5$2").replace(/(?:(<img(?=\s).*?\ssrc=)("|')(.*?)\2)|(?:(<img\s.*?src=)([^"'][^ >]+))/gi,"$1$4$2$3$5$2 _djrealurl\x3d$2$3$5$2")},_browserQueryCommandEnabled:function(a){if(!a)return!1;var b=d("ie")?this.document.selection.createRange():this.document;try{return b.queryCommandEnabled(a)}catch(c){return!1}},
_createlinkEnabledImpl:function(){var a=!0;return a=d("opera")?this.window.getSelection().isCollapsed?!0:this.document.queryCommandEnabled("createlink"):this._browserQueryCommandEnabled("createlink")},_unlinkEnabledImpl:function(){var a=!0;return a=d("mozilla")||d("webkit")?this.selection.hasAncestorElement("a"):this._browserQueryCommandEnabled("unlink")},_inserttableEnabledImpl:function(){var a=!0;return a=d("mozilla")||d("webkit")?!0:this._browserQueryCommandEnabled("inserttable")},_cutEnabledImpl:function(){var a=
!0;d("webkit")?((a=this.window.getSelection())&&(a=a.toString()),a=!!a):a=this._browserQueryCommandEnabled("cut");return a},_copyEnabledImpl:function(){var a=!0;d("webkit")?((a=this.window.getSelection())&&(a=a.toString()),a=!!a):a=this._browserQueryCommandEnabled("copy");return a},_pasteEnabledImpl:function(){var a=!0;return d("webkit")?!0:a=this._browserQueryCommandEnabled("paste")},_inserthorizontalruleImpl:function(a){return d("ie")?this._inserthtmlImpl("\x3chr\x3e"):this.document.execCommand("inserthorizontalrule",
!1,a)},_unlinkImpl:function(a){return this.queryCommandEnabled("unlink")&&(d("mozilla")||d("webkit"))?(a=this.selection.getAncestorElement("a"),this.selection.selectElement(a),this.document.execCommand("unlink",!1,null)):this.document.execCommand("unlink",!1,a)},_hilitecolorImpl:function(a){var b;this._handleTextColorOrProperties("hilitecolor",a)||(d("mozilla")?(this.document.execCommand("styleWithCSS",!1,!0),console.log("Executing color command."),b=this.document.execCommand("hilitecolor",!1,a),
this.document.execCommand("styleWithCSS",!1,!1)):b=this.document.execCommand("hilitecolor",!1,a));return b},_backcolorImpl:function(a){d("ie")&&(a=a?a:null);var b=this._handleTextColorOrProperties("backcolor",a);b||(b=this.document.execCommand("backcolor",!1,a));return b},_forecolorImpl:function(a){d("ie")&&(a=a?a:null);var b=!1;(b=this._handleTextColorOrProperties("forecolor",a))||(b=this.document.execCommand("forecolor",!1,a));return b},_inserthtmlImpl:function(a){a=this._preFilterContent(a);var b=
!0;if(d("ie")){var c=this.document.selection.createRange();if("CONTROL"===this.document.selection.type.toUpperCase()){for(var f=c.item(0);c.length;)c.remove(c.item(0));f.outerHTML=a}else c.pasteHTML(a);c.select()}else d("mozilla")&&!a.length?this.selection.remove():b=this.document.execCommand("inserthtml",!1,a);return b},_boldImpl:function(a){var b=!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("bold"));b||(b=this.document.execCommand("bold",!1,a));return b},_italicImpl:function(a){var b=
!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("italic"));b||(b=this.document.execCommand("italic",!1,a));return b},_underlineImpl:function(a){var b=!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("underline"));b||(b=this.document.execCommand("underline",!1,a));return b},_strikethroughImpl:function(a){var b=!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("strikethrough"));b||(b=this.document.execCommand("strikethrough",!1,a));return b},
_superscriptImpl:function(a){var b=!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("superscript"));b||(b=this.document.execCommand("superscript",!1,a));return b},_subscriptImpl:function(a){var b=!1;d("ie")&&(this._adaptIESelection(),b=this._adaptIEFormatAreaAndExec("subscript"));b||(b=this.document.execCommand("subscript",!1,a));return b},_fontnameImpl:function(a){var b;d("ie")&&(b=this._handleTextColorOrProperties("fontname",a));b||(b=this.document.execCommand("fontname",!1,
a));return b},_fontsizeImpl:function(a){var b;d("ie")&&(b=this._handleTextColorOrProperties("fontsize",a));b||(b=this.document.execCommand("fontsize",!1,a));return b},_insertorderedlistImpl:function(a){var b=!1;d("ie")&&(b=this._adaptIEList("insertorderedlist",a));b||(b=this.document.execCommand("insertorderedlist",!1,a));return b},_insertunorderedlistImpl:function(a){var b=!1;d("ie")&&(b=this._adaptIEList("insertunorderedlist",a));b||(b=this.document.execCommand("insertunorderedlist",!1,a));return b},
getHeaderHeight:function(){return this._getNodeChildrenHeight(this.header)},getFooterHeight:function(){return this._getNodeChildrenHeight(this.footer)},_getNodeChildrenHeight:function(a){var b=0;if(a&&a.childNodes){var c;for(c=0;c<a.childNodes.length;c++)var f=K.position(a.childNodes[c]),b=b+f.h}return b},_isNodeEmpty:function(a,b){return 1===a.nodeType?0<a.childNodes.length?this._isNodeEmpty(a.childNodes[0],b):!0:3===a.nodeType?""===a.nodeValue.substring(b):!1},_removeStartingRangeFromRange:function(a,
b){if(a.nextSibling)b.setStart(a.nextSibling,0);else{for(var c=a.parentNode;c&&null==c.nextSibling;)c=c.parentNode;c&&b.setStart(c.nextSibling,0)}return b},_adaptIESelection:function(){var a=s.getSelection(this.window);if(a&&a.rangeCount&&!a.isCollapsed){for(var b=a.getRangeAt(0),c=b.startContainer,f=b.startOffset;3===c.nodeType&&f>=c.length&&c.nextSibling;)f-=c.length,c=c.nextSibling;for(var e=null;this._isNodeEmpty(c,f)&&c!==e;)e=c,b=this._removeStartingRangeFromRange(c,b),c=b.startContainer,f=
0;a.removeAllRanges();a.addRange(b)}},_adaptIEFormatAreaAndExec:function(a){var b=s.getSelection(this.window),c=this.document,f,e,d,g,h,l,n;if(a&&b&&b.isCollapsed){if(this.queryCommandValue(a)){a=this._tagNamesForCommand(a);d=b.getRangeAt(0);g=d.startContainer;3===g.nodeType&&(e=d.endOffset,g.length<e&&(e=this._adjustNodeAndOffset(f,e),g=e.node));for(;g&&g!==this.editNode;){f=g.tagName?g.tagName.toLowerCase():"";if(-1<r.indexOf(a,f)){n=g;break}g=g.parentNode}if(n&&(f=d.startContainer,a=c.createElement(n.tagName),
m.place(a,n,"after"),f&&3===f.nodeType)){e=d.endOffset;f.length<e&&(e=this._adjustNodeAndOffset(f,e),f=e.node,e=e.offset);g=f.nodeValue;d=c.createTextNode(g.substring(0,e));var k=g.substring(e,g.length);k&&(h=c.createTextNode(k));m.place(d,f,"before");h&&(l=c.createElement("span"),l.className="ieFormatBreakerSpan",m.place(l,f,"after"),m.place(h,l,"after"),h=l);m.destroy(f);d=d.parentNode;for(f=[];d!==n;){g=d.tagName;e={tagName:g};f.push(e);g=c.createElement(g);d.style&&(g.style&&d.style.cssText)&&
(g.style.cssText=d.style.cssText,e.cssText=d.style.cssText);"FONT"===d.tagName&&(d.color&&(g.color=d.color,e.color=d.color),d.face&&(g.face=d.face,e.face=d.face),d.size&&(g.size=d.size,e.size=d.size));d.className&&(g.className=d.className,e.className=d.className);if(h)for(;h;)e=h.nextSibling,g.appendChild(h),h=e;g.tagName==d.tagName?(l=c.createElement("span"),l.className="ieFormatBreakerSpan",m.place(l,d,"after"),m.place(g,l,"after")):m.place(g,d,"after");h=g;d=d.parentNode}if(h){if(1===h.nodeType||
3===h.nodeType&&h.nodeValue)a.innerHTML="";for(;h;)e=h.nextSibling,a.appendChild(h),h=e}if(f.length){e=f.pop();h=c.createElement(e.tagName);e.cssText&&h.style&&(h.style.cssText=e.cssText);e.className&&(h.className=e.className);"FONT"===e.tagName&&(e.color&&(h.color=e.color),e.face&&(h.face=e.face),e.size&&(h.size=e.size));for(m.place(h,a,"before");f.length;)e=f.pop(),n=c.createElement(e.tagName),e.cssText&&n.style&&(n.style.cssText=e.cssText),e.className&&(n.className=e.className),"FONT"===e.tagName&&
(e.color&&(n.color=e.color),e.face&&(n.face=e.face),e.size&&(n.size=e.size)),h.appendChild(n),h=n;n=c.createTextNode(".");l.appendChild(n);h.appendChild(n)}else l=c.createElement("span"),l.className="ieFormatBreakerSpan",n=c.createTextNode("."),l.appendChild(n),m.place(l,a,"before");h=s.create(this.window);h.setStart(n,0);h.setEnd(n,n.length);b.removeAllRanges();b.addRange(h);this.selection.collapse(!1);n.parentNode.innerHTML="";a.firstChild||m.destroy(a);return!0}return!1}d=b.getRangeAt(0);if((f=
d.startContainer)&&3===f.nodeType)return e=d.startOffset,f.length<e&&(e=this._adjustNodeAndOffset(f,e),f=e.node,e=e.offset),g=f.nodeValue,d=c.createTextNode(g.substring(0,e)),k=g.substring(e),""!==k&&(h=c.createTextNode(g.substring(e))),l=c.createElement("span"),n=c.createTextNode("."),l.appendChild(n),d.length?m.place(d,f,"after"):d=f,m.place(l,d,"after"),h&&m.place(h,l,"after"),m.destroy(f),h=s.create(this.window),h.setStart(n,0),h.setEnd(n,n.length),b.removeAllRanges(),b.addRange(h),c.execCommand(a),
m.place(l.firstChild,l,"before"),m.destroy(l),h.setStart(n,0),h.setEnd(n,n.length),b.removeAllRanges(),b.addRange(h),this.selection.collapse(!1),n.parentNode.innerHTML="",!0}else return!1},_adaptIEList:function(a){var b=s.getSelection(this.window);if(b.isCollapsed&&b.rangeCount&&!this.queryCommandValue(a)){var c=b.getRangeAt(0),d=c.startContainer;if(d&&3==d.nodeType&&!c.startOffset)return c="ul","insertorderedlist"===a&&(c="ol"),a=this.document.createElement(c),c=m.create("li",null,a),m.place(a,d,
"before"),c.appendChild(d),m.create("br",null,a,"after"),a=s.create(this.window),a.setStart(d,0),a.setEnd(d,d.length),b.removeAllRanges(),b.addRange(a),this.selection.collapse(!0),!0}return!1},_handleTextColorOrProperties:function(a,b){var c=s.getSelection(this.window),f=this.document,e,k,g,h,l;b=b||null;if(a&&(c&&c.isCollapsed)&&c.rangeCount&&(k=c.getRangeAt(0),(e=k.startContainer)&&3===e.nodeType)){l=k.startOffset;e.length<l&&(k=this._adjustNodeAndOffset(e,l),e=k.node,l=k.offset);g=e.nodeValue;
k=f.createTextNode(g.substring(0,l));""!==g.substring(l)&&(h=f.createTextNode(g.substring(l)));g=f.createElement("span");l=f.createTextNode(".");g.appendChild(l);f=f.createElement("span");g.appendChild(f);k.length?m.place(k,e,"after"):k=e;m.place(g,k,"after");h&&m.place(h,g,"after");m.destroy(e);e=s.create(this.window);e.setStart(l,0);e.setEnd(l,l.length);c.removeAllRanges();c.addRange(e);if(d("webkit")){c="color";if("hilitecolor"===a||"backcolor"===a)c="backgroundColor";v.set(g,c,b);this.selection.remove();
m.destroy(f);g.innerHTML="\x26#160;";this.selection.selectElement(g);this.focus()}else this.execCommand(a,b),m.place(g.firstChild,g,"before"),m.destroy(g),e.setStart(l,0),e.setEnd(l,l.length),c.removeAllRanges(),c.addRange(e),this.selection.collapse(!1),l.parentNode.removeChild(l);return!0}return!1},_adjustNodeAndOffset:function(a,b){for(;a.length<b&&a.nextSibling&&3===a.nextSibling.nodeType;)b-=a.length,a=a.nextSibling;return{node:a,offset:b}},_tagNamesForCommand:function(a){return"bold"===a?["b",
"strong"]:"italic"===a?["i","em"]:"strikethrough"===a?["s","strike"]:"superscript"===a?["sup"]:"subscript"===a?["sub"]:"underline"===a?["u"]:[]},_stripBreakerNodes:function(a){if(this.isLoaded)return B(".ieFormatBreakerSpan",a).forEach(function(a){for(;a.firstChild;)m.place(a.firstChild,a,"before");m.destroy(a)}),a}});return p});
//@ sourceMappingURL=RichText.js.map