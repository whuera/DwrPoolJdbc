//>>built
define("ec/fisa/mobile/widget/file/FileMobileInputAutoAutomatic","dojo/_base/declare dojo/_base/lang dojo/_base/fx dojo/_base/window dojo/dom-style dojo/_base/sniff ec/fisa/mobile/widget/file/FileMobileInputAuto dojo/io/iframe".split(" "),function(e,f,g,h,d,b,k,l){return e("ec.fisa.mobile.widget.file.FileMobileInputAutoAutomatic",k,{startup:function(){this.inherited(arguments);this.inputNode.value=this.file_name;this.cancelNode.style.opacity="0"},_matchValue:function(){this.inherited(arguments);this._sendFile()},
_onBlur:function(){},_sendFile:function(a){!this._sent&&(!this._sending&&this.fileInput.value)&&(this._sending=!0,d.set(this.fakeNodeHolder,"display","none"),d.set(this.overlay,{opacity:0,display:"block"}),this.setMessage(this.uploadMessage),g.fadeIn({node:this.overlay,duration:this.duration}).play(),9>b("ie")||b("ie")&&b("quirks")?(a=document.createElement('\x3cform enctype\x3d"multipart/form-data" method\x3d"post"\x3e'),a.encoding="multipart/form-data"):(a=document.createElement("form"),a.setAttribute("enctype",
"multipart/form-data"),a.setAttribute("accept_charset","UTF-8")),a.acceptCharset="UTF-8",a.appendChild(this.fileInput),h.body().appendChild(a),l.send({url:this.url,form:a,handleAs:"json",method:"POST",handle:f.hitch(this,"_handleSend"),content:this.onBeforeSend()}))},onComplete:function(a,b,c){a&&(a.status&&"success"==a.status?(c.overlay.innerHTML="",c.reset(),this.inputNode.value=a.details.fileName):(c.reset(),c.overlay.innerHTML="error"))}})});
//@ sourceMappingURL=FileMobileInputAutoAutomatic.js.map