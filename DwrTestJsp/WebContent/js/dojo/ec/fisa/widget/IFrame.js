//>>built
require({cache:{"url:ec/fisa/widget/templates/IFrame.html":'\x3ciframe src\x3d"${src}" format\x3d"${format}" width\x3d"${width}"  height\x3d"${height}" frameborder\x3d"0" \x3e\x3c/iframe\x3e\n'}});
define("ec/fisa/widget/IFrame","dijit/_Templated dijit/layout/ContentPane dojo/_base/declare dojo/dom-geometry dojo/string dojo/text!ec/fisa/widget/templates/IFrame.html ./_base".split(" "),function(k,d,e,f,g,h){return e("ec.fisa.widget.IFrame",[d],{src:"",format:"",width:0,height:0,_iframe:null,_originalUrl:null,iframeTemplate:h,_layout:function(a,c){this.inherited(arguments);var b=f.getMarginBox(this.domNode);a&&a.h&&(b.h=a.h);a&&a.w&&(b.w=a.w)},buildRendering:function(){this.inherited(arguments)},
postMixInProperties:function(){this.inherited(arguments);this._originalUrl=this.src;this.content=this.generateReplacements(this._originalUrl)},refresh:function(){var a=this._originalUrl+(-1==this._originalUrl.indexOf("?")?"?":"\x26"),a=a+"dojo.preventCache\x3d"+(new Date).valueOf();this.set("content",this.generateReplacements(a))},generateReplacements:function(a){var c=this.src;null!=a&&void 0!=a&&(c=a);a={};a="pdf"==this.format?{src:c,width:this.width,height:this.height,format:this.format}:"report"==
this.format?{src:c,width:"100%",height:this.height,format:""}:{src:c,width:this.width,height:this.height,format:this.format};return this.replaceVariables(a)},replaceVariables:function(a){a.iframeTemplate=this.iframeTemplate;return g.substitute(a.iframeTemplate,a,function(a,b){"!"==b.charAt(0)&&(a=lang.getObject(b.substr(1),!1,this));if("undefined"==typeof a)throw Error("No hay valor de reemplazo para:"+b);return null==a?"":"!"==b.charAt(0)?a:a.toString().replace(/"/g,"\x26quot;")},a)}})});
//@ sourceMappingURL=IFrame.js.map