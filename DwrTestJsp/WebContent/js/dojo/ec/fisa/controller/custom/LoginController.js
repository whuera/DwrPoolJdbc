//>>built
define("ec/fisa/controller/custom/LoginController","dojo/_base/declare dojo/_base/lang ec/fisa/controller/BaseController dojo/dom-geometry dojo/dom-style dojo/dom-construct dojox/widget/DialogSimple ./_base ec/fisa/widget/security/Keyboard".split(" "),function(d,l,h,g,e,k){d=d("ec.fisa.controller.custom.LoginController",[h],{currentPasswdId:null,currentRPasswdId:null,currentTabId:null,currentPageScopeId:null,launchCreateUser:function(){this.openDlg("Solicitue su nombre de Usuario",dojo.config.fisaContextPath+
"/pages/static/security/remember-user.jsp","rememberUserDialogId",{w:620,h:300})},launchForgotPassword:function(){this.openDlg("Solicite su Contrase\u00f1a?",dojo.config.fisaContextPath+"/pages/static/security/remember-password.jsp","forgotPasswordDialogId",{w:620,h:300})},launchAskPaswword:function(){this.openDlg("Solicite su Contrase\u00f1a?",dojo.config.fisaContextPath+"/PUBLIC_BUSINESS_TEMPLATE/BUSINESS_TEMPLATE/BPT_PER_MNC_NFIS0004/actionMode/IN/TI/0/FPSC/true/index.jsp","askPasswordDialogId",
{w:620,h:195})},openDlg:function(a,b,c,f){b={title:a,href:b,executeScripts:!0,ioMethod:dojo.xhrPost};c=g.getMarginBox(dojo.byId("content"));a=null;a=f?f:{h:0.9*c.h,w:0.9*c.w};b.style="height:"+a.h+"px;width:"+a.w+"px;";b.style="height:"+a.h+"px;width:"+a.w+"px;overflow: auto;";b.splitter="true";f=new dojox.widget.DialogSimple(b);f.show();this._resizeContainerNode(f,a)},_resizeContainerNode:function(a,b){var c=g.getMarginBox(a.titleNode);e.set(a.containerNode,"height",b.h-c.h-4*c.t+"px");e.set(a.containerNode,
"overflowY","auto");e.set(a.containerNode,"overflowX","auto")},initKeyboard:function(a,b){var c=k.create("div",null,a.domNode);this.keyboard=new ec.fisa.widget.security.Keyboard({currentPasswdId:this.currentPasswdId,currentRPasswdId:this.currentRPasswdId,isLogin:!0,data:b,onClick:function(a,b){this.inherited("onClick",arguments);var c=dijit.byId(this.currentRPasswdId),d=dijit.byId(this.currentPasswdId),e=d.get("value");c.get("value");c.set("value",this.selectedValue);d.set("value",e+"*")},onClickSpecialBtn:function(a,
b){this.inherited("onClickSpecialBtn",arguments);var c=dijit.byId(this.currentRPasswdId),d=dijit.byId(this.currentPasswdId);"DELETE"==b&&(d.set("value",""),c.set("value",""))}},c);this.keyboard.startup()},setRPasswdId:function(a){this.currentRPasswdId=a.id},setPasswdId:function(a){this.currentPasswdId=a.id;a.set("readOnly",!0)},setTabId:function(a){this.currentTabId=a.id},setPageScopeId:function(a){this.currentPageScopeId=a.id}});ec.fisa.controller.custom.loginController=new d;return d});
//@ sourceMappingURL=LoginController.js.map