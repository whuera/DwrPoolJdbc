//>>built
require({cache:{"url:ec/fisa/mobile/message/templates/ConfirmationPanel.html":'\x3cdiv class\x3d"mblMessagePanelConfirmation" data-dojo-attach-point\x3d"_parentPanelCnt" style\x3d"display:none;visibility:hidden;"\x3e\n\x3c/div\x3e'}});
define("ec/fisa/mobile/message/ConfirmationPanel","./_base dijit/_Widget dijit/_Templated dojo/_base/declare dojo/_base/connect dojo/dom-construct dojo/text!ec/fisa/mobile/message/templates/ConfirmationPanel.html dojo/dom-attr dojo/on dojox/mobile/SimpleDialog".split(" "),function(e,a,b,c,f,g,d,h,k,l){return c("ec.fisa.mobile.message.ConfirmationPanel",[a,b],{_parentPanelCnt:null,errorAdded:"",_msgQuantity:0,tabId:"",pageScopeId:"",bindToController:!1,_fisaOns:null,widgetsInTemplate:!1,templateString:d,
constructor:function(){this._fisaOns=[];errorAdded=this._msgQuantity=0},buildRendering:function(){this.inherited(arguments)},destroyRendering:function(){errorAdded="";this._msgQuantity=0;delete this._parentPanelCnt},startup:function(){this.inherited(arguments);this.bindToController&&ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).setMessagesPanel(this)}})});
//@ sourceMappingURL=ConfirmationPanel.js.map