//>>built
require({cache:{"url:ec/fisa/grid/templates/RowActions.html":'\x3ctable border\x3d"0" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\n\t\x3ctbody\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_add" data-dojo-attach-point\x3d"_addComponent"\n\t\t\t\t data-dojo-type\x3d"dojox.form.BusyButton" iconClass\x3d"imgAdd" tabIndex\x3d"${_tabIndex}"\n\t\t\t\t baseClass\x3d"fisaGridButton" showLabel\x3d"false" title\x3d"${add_title}"\x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_edit" data-dojo-attach-point\x3d"_editComponent"\n\t\t\t\t data-dojo-type\x3d"dojox.form.BusyButton" iconClass\x3d"imgEdit" tabIndex\x3d"${_tabIndex}"\n\t\t\t\t baseClass\x3d"fisaGridButton" showLabel\x3d"false" title\x3d"${edit_title}"\x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_delete" data-dojo-attach-point\x3d"_deleteComponent"\n\t\t\t\t data-dojo-type\x3d"dojox.form.BusyButton" iconClass\x3d"imgDelete" tabIndex\x3d"${_tabIndex}"\n\t\t\t\t  baseClass\x3d"fisaGridButton" showLabel\x3d"false" title\x3d"${delete_title}"\x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_apply" data-dojo-attach-point\x3d"_applyComponent" \n\t\t\t\tdata-dojo-type\x3d"dojox.form.BusyButton" iconClass\x3d"imgApply" tabIndex\x3d"${_tabIndex}"\n\t\t\t\t baseClass\x3d"fisaGridButton" showLabel\x3d"false" title\x3d"${apply_title}"\x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_cancel" data-dojo-attach-point\x3d"_cancelComponent"\n\t\t\t\t data-dojo-type\x3d"dojox.form.BusyButton" iconClass\x3d"imgCancel" tabIndex\x3d"${_tabIndex}"\n\t\t\t\t  baseClass\x3d"fisaGridButton" showLabel\x3d"false" title\x3d"${cancel_title}"\x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tbody\x3e\n\x3c/table\x3e'}});
define("ec/fisa/grid/RowActions","dijit/_Widget dijit/_Templated dojo/_base/declare dojo/text!./templates/RowActions.html dojo/dom-style dojo/html dojo/on dojo/_base/connect dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/controller/Utils dojox/form/BusyButton".split(" "),function(k,l,m,n,r,s,t,f,p,q){return m("ec.fisa.grid.RowActions",[k,l,p,q],{widgetsInTemplate:!0,_editComponent:null,_cancelComponent:null,_applyComponent:null,_deleteComponent:null,_addComponent:null,data:null,rowIndex:null,
viewRowIndex:null,tabId:null,gridId:null,pageScopeId:null,editBlocked:!1,deleteBlocked:!1,tabIndex:null,_tabIndex:0,edit_title:"",delete_title:"",apply_title:"",cancel_title:"",add_title:"",editHandle:null,deleteHandle:null,_destroyOnRemove:!0,templateString:n,constructor:function(){},postMixInProperties:function(){this.inherited(arguments);null!=this.tabIndex&&(this._tabIndex=this.tabIndex)},postCreate:function(){this.inherited(arguments);this.connect(this._cancelComponent,"onClick",this._onClickCancel);
this.connect(this._applyComponent,"onClick",this._onClickApply);this.editHandle=this.connect(this._editComponent,"onClick",this._onClickEdit);this.deleteHandle=this.connect(this._deleteComponent,"onClick",this._onClickDelete);this._cancelComponent.fautoexec=!0;this._applyComponent.fautoexec=!0;this._editComponent.fautoexec=!0;this._deleteComponent.fautoexec=!0;this._addComponent.domNode.style.display="none";this.changeBehavior()},changeBehavior:function(){var a=this.data%10;4==a?(this._cancelComponent.domNode.style.display=
"none",this._applyComponent.domNode.style.display="none",this._editComponent.domNode.style.display=this.editBlocked?"none":"",this._deleteComponent.domNode.style.display=this.deleteBlocked?"none":""):5==a?(this._editComponent.domNode.style.display="none",this._deleteComponent.domNode.style.display="none",this._cancelComponent.domNode.style.display="",this._applyComponent.domNode.style.display=""):6==a?(this.hideAllButtons(),this._addComponent.domNode.style.display=""):7==a?(this.hideAllButtons(),
this._editComponent.domNode.style.display="",f.disconnect(this.editHandle)):8==a?(this.hideAllButtons(),this._deleteComponent.domNode.style.display="",f.disconnect(this.deleteHandle)):(this._editComponent.domNode.style.display="none",this._deleteComponent.domNode.style.display="none",this._cancelComponent.domNode.style.display="none",this._applyComponent.domNode.style.display="none")},hideAllButtons:function(){this._addComponent.domNode.style.display="none";this._editComponent.domNode.style.display=
"none";this._deleteComponent.domNode.style.display="none";this._cancelComponent.domNode.style.display="none";this._applyComponent.domNode.style.display="none"},obtainRowData:function(){return dijit.byId(this.gridId).model.toPlainObject()},obtainRowComplementData:function(){return dijit.byId(this.gridId).complementModel.toPlainObject()},_onClickCancel:function(){this._execAction(BtControllerDWR.execEGridCancel,null,dijit.byId(this.gridId),null)},_onClickApply:function(){this._execAction(BtControllerDWR.execEGridApply,
this.obtainRowData(),dijit.byId(this.gridId),this.obtainRowComplementData())},_onClickEdit:function(){var a=dijit.byId(this.gridId);a.model||this._execAction(BtControllerDWR.execEGridEdit,null,a,null)},_onClickDelete:function(){var a=dijit.byId(this.gridId);a.model||this._execAction(BtControllerDWR.execEGridDelete,null,a,null)},_execAction:function(a,c,b,e){var g=b.getItem(this.rowIndex),h={callbackScope:this,callback:this._handleEditResponse};ec.fisa.controller.utils.getPageController(b.tabId,b.pageScopeId).clearPanelMessage();
null==e?a(b.entId,g,this.rowIndex,this.viewRowIndex,b.btId,b.pKeyStr,b.fKeyStr,b.btPos,b.tabId,b.pageScopeId,c,h):a(b.entId,g,this.rowIndex,this.viewRowIndex,b.btId,b.pKeyStr,b.fKeyStr,b.btPos,b.tabId,b.pageScopeId,c,e,h)},_handleEditResponse:function(a){var c=dijit.byId(this.gridId);if("edit\x26refresh"==a.wAxn)ec.fisa.grid.utils.updateRowData(a,c,!1),c.refresh();else if("refresh"==a.wAxn){delete c.model;c.refresh();var b=ec.fisa.controller.utils.getPageController(a.FISATabId,a.FisaPageScopeId);
b.handleCallBackBackFieldRoutine(this.removeCurrentMRFromOutcome(a,c))}else if("delete"==a.wAxn){if(void 0!=a.multiregisterSize&&null!=a.multiregisterSize&&(b=c.getItem(this.viewRowIndex),null!=c.store.getEntryById(b)&&(b=c.store.getEntryById(b).data,void 0!=b&&null!=b))){var c=dijit.byId(this.gridId),e=ec.fisa.controller.utils.getPageController(c.tabId,c.pageScopeId);dojox.lang.functional.forIn(b,function(a,b){if(void 0!=this.selectIdMap&&null!=this.selectIdMap){var c=this.rowActionScope.rowIndex;
if(void 0!=this.selectIdMap[b+"|"+c]){delete this.selectIdMap[b+"|"+c];for(var d=c+1;d<this.multiregisterSize;d++){var e=this.selectIdMap[b+"|"+d];void 0!=e&&null!=e&&(this.selectIdMap[b+"|"+(d-1)]=e)}d=this.multiregisterSize-1;delete this.selectIdMap[b+"|"+d]}}if(void 0!=this.btSelectDataMap&&null!=this.btSelectDataMap&&void 0!=this.btSelectDataMap[b+"|"+c]){delete this.btSelectDataMap[b+"|"+c];for(d=c+1;d<this.multiregisterSize;d++)c=this.btSelectDataMap[b+"|"+d],void 0!=c&&null!=c&&(this.btSelectDataMap[b+
"|"+(d-1)]=c);d=this.multiregisterSize-1;delete this.btSelectDataMap[b+"|"+d]}},{rowActionScope:this,selectIdMap:e.selectIdMap,multiregisterSize:a.multiregisterSize,btSelectDataMap:e.selectDataMap[c.btId]})}delete c.model;c.refresh();a.msg&&(a.wAxn="refresh",b=ec.fisa.controller.utils.getPageController(a.FISATabId,a.FisaPageScopeId),b.handleCallBackBackFieldRoutine(this.removeCurrentMRFromOutcome(a,c)))}else"error"==a.wAxn&&(b=ec.fisa.controller.utils.getPageController(a.FISATabId,a.FisaPageScopeId),
b.updateMsgsPanel(a.aMsgs),b=null,null!=a.recordId&&(b=c.store.getValue(a.recordId,"rowSts")),null!=b&&5!=b%10&&delete c.model,this.activateComponents())},activateComponents:function(){this.activateCmp(this._addComponent);this.activateCmp(this._editComponent);this.activateCmp(this._deleteComponent);this.activateCmp(this._applyComponent);this.activateCmp(this._cancelComponent)},activateCmp:function(a){"none"!=a.domNode.style.display&&a.cancel()},_getTabIdAttr:function(){return this.tabId},_setTabIdAttr:function(a){this.tabId=
a},_getPageScopeIdAttr:function(){return this.pageScopeId},_setPageScopeIdAttr:function(a){this.pageScopeId=a},removeCurrentMRFromOutcome:function(a,c){null!=a.msg&&(a.msg[c.btId]&&a.msg[c.btId][c.entId])&&delete a.msg[c.btId][c.entId];return a}})});
//@ sourceMappingURL=RowActions.js.map