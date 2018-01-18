//>>built
define("dojox/editor/plugins/Save","dojo dijit dojox dijit/_editor/_Plugin dijit/form/Button dojo/_base/connect dojo/_base/declare dojo/i18n dojo/i18n!dojox/editor/plugins/nls/Save".split(" "),function(b,c,g,e){var d=b.declare("dojox.editor.plugins.Save",e,{iconClassPrefix:"dijitAdditionalEditorIcon",url:"",logResults:!0,_initButton:function(){var a=b.i18n.getLocalization("dojox.editor.plugins","Save");this.button=new c.form.Button({label:a.save,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+
"Save",tabIndex:"-1",onClick:b.hitch(this,"_save")})},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(a){this.editor=a;this._initButton()},_save:function(){var a=this.editor.get("value");this.save(a)},save:function(a){var f={"Content-Type":"text/html"};this.url?(a={url:this.url,postData:a,headers:f,handleAs:"text"},this.button.set("disabled",!0),a=b.xhrPost(a),a.addCallback(b.hitch(this,this.onSuccess)),a.addErrback(b.hitch(this,this.onError))):console.log("No URL provided, no post-back of content: "+
a)},onSuccess:function(a,b){this.button.set("disabled",!1);this.logResults&&console.log(a)},onError:function(a,b){this.button.set("disabled",!1);this.logResults&&console.log(a)}});b.subscribe(c._scopeName+".Editor.getPlugin",null,function(a){!a.plugin&&"save"===a.args.name.toLowerCase()&&(a.plugin=new d({url:"url"in a.args?a.args.url:"",logResults:"logResults"in a.args?a.args.logResults:!0}))});return d});
//@ sourceMappingURL=Save.js.map