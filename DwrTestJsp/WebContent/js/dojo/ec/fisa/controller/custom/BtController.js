//>>built
define("ec/fisa/controller/custom/BtController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dijit/focus dojo/aspect ec/fisa/controller/BaseController ec/fisa/format/Utils ec/fisa/widget/Link ec/fisa/navigation/Utils dojo/data/ItemFileWriteStore dojo/dom-construct dojo/dom-geometry dijit/tree/ForestStoreModel dojox/grid/TreeGrid ec/fisa/widget/DocumentActions ec/fisa/mvc/StatefulModel dojo/on ec/fisa/controller/custom/QtController dojo/topic dojo/dom-style ec/fisa/grid/FisaEditableGridDirect ec/fisa/widget/DialogSecurity ./_base ec/fisa/widget/DateTextBox dojox/lang/functional/object ec/fisa/dwr/proxy/BtControllerDWR ec/fisa/dwr/proxy/EventReportActionDWR ec/fisa/dwr/proxy/RuleFieldSelectorControllerDWR dojox/lang/functional ec/fisa/widget/Select ec/fisa/grid/FisaFormGrid".split(" "),
function(g,y,q,G,z,A,H,B,I,C,D,J,K,E,F,r,L,M,N,n){var s=y("ec.fisa.controller.custom.BtController",[A],{tabId:null,pageScopeId:null,model:null,data:null,documentData:null,comboStatusOptions:null,initMsgs:null,shortDateFormatTree:null,breadcrumbId:null,btnsContainer:null,selectDataMap:null,lovData:null,labels:null,btId:null,actionId:null,contextPath:g.config.fisaContextPath,isDisabled:null,tableRegistry:null,treeGridDocuments:null,saveAsTemplateChckBoxId:null,notificationAdditionalsWdgId:null,initLabels:null,
btContentPaneId:null,dateFields:null,secBeforeListFactor:null,secAfterListFactor:null,subscriptions:null,parentConfBtPageScopeId:null,documentContentPaneWdgId:null,btTabContainerId:null,selectComponentToReload:null,selectIdMap:null,btInitialActionMode:null,sequenceBtScheduleButtonData:null,constructor:function(a,b,c,d,e,f,h,g,m,p,l){this.tabId=a;this.pageScopeId=b;this.data=c;this.initMsgs=d;this.selectDataMap=e;this.lovData=f;this.tableRegistry={};this.model=new r({});this.notificationAdditionalsWdgId=
[];this.secBeforeListFactor=h;this.secAfterListFactor=g;this.initLabels=m;this.verifyBeforeSecurity();this.subscriptions={};this.parentConfBtPageScopeId=l;this.selectIdMap={};this.btInitialActionMode=p},copyInitData:function(a,b,c,d,e,f,h,g,m,p){this.tabId=a;this.pageScopeId=b;this.data=c;this.initMsgs=d;this.selectDataMap=e;this.lovData=f;this.tableRegistry={};this.model=new r({});this.notificationAdditionalsWdgId=[];this.secBeforeListFactor=h;this.secAfterListFactor=g;this.initLabels=m;this.verifyBeforeSecurity();
this.subscriptions={};this.btInitialActionMode=btActionMode},updateInitData:function(a,b,c){c=c||{};this.selectDataMap=this.mergeObjects(this.selectDataMap,a);this.lovData=this.mergeObjects(this.lovData,b);this.data=this.mergeObjects(this.data,c)},mergeObjects:function(a,b){a||(a={});if(b)for(var c in b)a[c]=b[c];return a},destroy:function(){null!=this.model&&this.model.clearAllMessages();this.notificationAdditionalsWdgId=this.initMsgs=this.tableRegistry=this.lovData=this.model=this.data=null;dojox.lang.functional.forIn(this.subscriptions,
function(a,b){a.remove&&q.isFunction(a.remove)&&a.remove()},this)},verifyBeforeSecurity:function(){null!=this.secBeforeListFactor&&(void 0!=this.secBeforeListFactor&&0<this.secBeforeListFactor.length&&"true"!=this.showConfirmation)&&this.createDialogSecurityFactor(this.secBeforeListFactor)},verifyAfterSecurity:function(a){null!=this.secAfterListFactor&&void 0!=this.secAfterListFactor&&0<this.secAfterListFactor.length?(a={callbackScope:this,errorHandler:g.hitch(this,this.errorHandler),callback:this.handleVerifyAfterLastSecurity,
arg:a},EventSequenceActionDWR.verifyRuleForValidationBt(this.tabId,this.pageScopeId,a)):this._execActionInternal(a)},verifyAfterSecurityLast:function(a){null!=this.secAfterListFactor&&void 0!=this.secAfterListFactor&&0<this.secAfterListFactor.length?(a={callbackScope:this,errorHandler:g.hitch(this,this.errorHandler),callback:this.handleSequenceVerifyAfterLastSecurity,arg:a},EventSequenceActionDWR.verifyRuleForValidationBt(this.tabId,this.pageScopeId,a)):this.sequenceLastAction(a)},handleVerifyAfterLastSecurity:function(a,
b){this.createDialogSecurityFactor(this.secAfterListFactor,b["fisa-bt-id"],a.RULE_NUMBER_OF_FACTOR_TO_VALIDATE).dlgSuccessEvent=g.hitch(this,function(a,b){this._execActionInternal(a)},b)},handleSequenceVerifyAfterLastSecurity:function(a,b){this.createDialogSecurityFactor(this.secAfterListFactor,b["fisa-bt-id"],a.RULE_NUMBER_OF_FACTOR_TO_VALIDATE).dlgSuccessEvent=g.hitch(this,function(a,b){this.sequenceLastAction(a)},b)},cancelAuthenticationFactorDialog:function(a){if(a){var b={callbackScope:this};
b.errorHandler=g.hitch(this,this.errorHandler);b.callback=g.hitch(this,function(){this.handleWindowAction({wAxn:"close"})});EventActionDWR.executeCommandButtonCancel(this.tabId,this.pageScopeId,a,b)}else this.handleWindowAction({wAxn:"close"})},verifyAfterSecuenceSecurity:function(a,b){null!=this.secAfterListFactor&&void 0!=this.secAfterListFactor&&0<this.secAfterListFactor.length&&("true"!=this.showDocuments||"true"!=this.showConfirmation)?this.createDialogSecurityFactor(this.secAfterListFactor).dlgSuccessEvent=
g.hitch(this,function(a,b,e){this._handleSeqNextActionInternal(a,b)},a,b):this._handleSeqNextActionInternal(a,b)},createDialogSecurityFactor:function(a,b,c){var d=ec.fisa.controller.utils.getGlobalModalSize(0.5);d.h+=100;a=new ec.fisa.widget.DialogSecurity({title:this.initLabels.titleSecurityPopup,draggable:!1,wdgtWidth:d.w,wdgtHeight:d.h,tabId:this.tabId,secListFactor:a,pageScopeId:this.pageScopeId+"sec_pop",secBeforeListFactorIndex:c,style:{width:d.w+"px",height:d.h+"px"},dlgCancelEvent:g.hitch(this,
function(a){this.cancelAuthenticationFactorDialog(b)})});a.show();return a},renewInitData:function(a){this.data=a},loadSaveAsTemplateChckBoxId:function(a){this.saveAsTemplateChckBoxId=a},loadNotificationAdditionalsWdgId:function(a,b){this.notificationAdditionalsWdgId.push({btId:b,notifWdgId:a})},getComponent:function(a,b){return this.model.getComponent([a,"dataMessage","fields",b,"value"])},addParamToModel:function(a){var b=a["bt-id"],c=a["field-id"],d=null;this.data&&(this.data[b]&&this.data[b].dataMessage)&&
(d=this.data[b].dataMessage.fields[c]);null==d?(d={value:"",complement:null},a._fStarted=!0):null==d.value?(d.value="",a._fStarted=!0):""==d.value&&(a._fStarted=!0);var e=!1;a instanceof ec.fisa.grid.FisaEditableGridDirect?e=!0:a instanceof ec.fisa.grid.FisaFormGrid&&(e=!0);this.model.contains(b)?this.model.contains([b,"dataMessage","fields",c])&&(!0==e?this.model.setValue([b,"dataMessage","fields",c,"multivalueList"],d.value):this.model.setValue([b,"dataMessage","fields",c,"value"],d.value)):(!0==
e?this.model.appendObject([b,"dataMessage","fields",c,"multivalueList"],d.value,a.id,"value",null,!1):this.model.appendObject([b,"dataMessage","fields",c,"value"],d.value,a.id,"value",null,!1),e=null,void 0!=d.enabled&&(e=d.enabled),this.model.appendObject([b,"dataMessage","fields",c,"enabled"],e,a.id,"enabled",null,!1),a.hasCompl&&this.model.appendObject([b,"dataMessage","fields",c,"complement"],d.complement,a.id,"complement",null,!1));if(a instanceof ec.fisa.widget.Select&&(!0==a.hasBeneficiarySelectionLink||
"true"==a.hasBeneficiarySelectionLink))this.selectComponentToReload=a},addRuleParamToModel:function(a){this.addParamToModel(a);var b=a["bt-id"],c=a["field-id"],d=null;this.data&&(this.data[b]&&this.data[b].tscRules)&&(d=this.data[b].tscRules[c]);null==d?(d={value:"",complement:null},a._fStarted=!0):this._getAdditionalFieldsInformationForRuleComponent(a);this.model.contains([b])&&this.model.contains([b,"tscRules",c])?this.model.setValue([b,"tscRules",c],d):this.model.appendObject([b,"tscRules",c],
d,a.id,"ruleValue",null,!1)},_getAdditionalFieldsInformationForRuleComponent:function(a){var b=a.get("relatedFieldBt"),b=this.getFieldModel(a["bt-id"],b);if(void 0!=b&&null!=b&&""!=b){var c={callbackScope:this};c.errorHandler=g.hitch(this,this.errorHandler);c.callback=function(b){this._handleCallBackAdditionalFieldsInformationForRuleComponent(b,a)};RuleFieldSelectorControllerDWR.loadAdditionalFieldsInformationForRuleComponent(b,c)}},_handleCallBackAdditionalFieldsInformationForRuleComponent:function(a,
b){var c=a.comboData;b.set("additionalFieldInfo",a.additionalFieldInfo);b.set("comboData",c);b.renderRuleComponent()},registerTable:function(a){this.tableRegistry[a.btId]||(this.tableRegistry[a.btId]={});var b=this.tableRegistry[a.btId];b[a.entId]||(b[a.entId]=a.id)},containsFieldModel:function(a,b){return this.model.contains([a,"dataMessage","fields",b,"value"])},getFieldModel:function(a,b){return this.model.getValue([a,"dataMessage","fields",b,"value"])},setFieldModelValue:function(a,b,c,d){this.model.setValue([a,
"dataMessage","fields",b,"value"],c,d)},setFieldModelEnabled:function(a,b,c){this.model.setValue([a,"dataMessage","fields",b,"enabled"],c)},setFieldModelComplement:function(a,b,c){this.model.setValue([a,"dataMessage","fields",b,"complement"],c)},getFieldModelComplement:function(a,b){return this.model.getValue([a,"dataMessage","fields",b,"complement"])},setIsDisabled:function(a){this.isDisabled=a},addControllerRef:function(a){a.fc=this},execAction:function(a){var b=dijit.byId(this.messagesPanelId);
null!=b&&b.clearAllMessages();null!=this.model&&this.model.clearAllMessages();if(a&&a["fisa-action-id"]){var b=a["fisa-action-id"],c=a["fisa-bt-id"],d=a.is_sequence,e=a.template_over_call;a=a["from-agenda"];this.btId=c;this.btActionMode=b;this.isSequence=d;this.fromAgenda=a;a={callbackScope:this};a.errorHandler=g.hitch(this,this.errorHandler);ec.fisa.widget.utils.resetFocusManager();if("CANCEL"==b||"closeBt"==b)a.callback=this.handleCancelAction,EventActionDWR.executeCommandButtonCancel(this.tabId,
this.pageScopeId,c,a);else if("close"==b)this.handleWindowAction({wAxn:"close"});else{a={callbackScope:this};a.errorHandler=g.hitch(this,this.errorHandler);a.callback=this._validateBtCallBack;var d=this.model.toPlainObject(),f=this._addNotificationValData(),h=!1;null!=this.saveAsTemplateChckBoxId&&!0==dijit.byId(this.saveAsTemplateChckBoxId).get("checked")&&(h=!0);EventActionDWR.executeCommandButtonAction(this.tabId,this.pageScopeId,c,b,h,e,d,f,a)}}},_addNotificationValData:function(){var a={};null!=
this.notificationAdditionalsWdgId&&void 0!=this.notificationAdditionalsWdgId&&g.forEach(this.notificationAdditionalsWdgId,g.hitch(this,function(b){var c=b.btId;b=dijit.byId(b.notifWdgId).get("value");null==a[c]&&void 0==a[c]&&(a[c]={});a[c]=b}));return a},updateNotificationData:function(a,b){null!=this.notificationAdditionalsWdgId&&void 0!=this.notificationAdditionalsWdgId&&g.forEach(this.notificationAdditionalsWdgId,g.hitch(this,function(c){c.btId==b&&dijit.byId(c.notifWdgId).set("value",a)}))},
addNotificationValDataForLinkAction:function(){return this._addNotificationValData()},_validateBtCallBack:function(a){if("cnfrm"==a.wAxn){var b={};b["fisa-action-id"]=a.btAction;b["fisa-bt-id"]=a.btId;this.verifyAfterSecurity(b)}else"error"==a.wAxn&&this.updateMsgsPanel(a.aMsgs)},_execActionInternal:function(a){var b=a["fisa-action-id"];a=a["fisa-bt-id"];var c={callbackScope:this};c.errorHandler=g.hitch(this,this.errorHandler);c.callback=this.handleInAction;EventActionDWR.executeValidatedBtAction(this.tabId,
this.pageScopeId,a,b,c)},execActionSchedule:function(a){ec.fisa.navigation.utils.navigateToSchedulePage(a["fisa-bt-id"],a["fisa-bt-id-to-render"],a.tab_id,a.label,a.data_key,this.btContentPaneId,this.pageScopeId)},execActionPU:function(a){dijit.byId(this.messagesPanelId).clearAllMessages();this.model.clearAllMessages();if(a&&a["fisa-action-id"]){var b=a["fisa-action-id"];a=a["fisa-bt-id"];var c={callbackScope:this};c.errorHandler=g.hitch(this,this.errorHandler);ec.fisa.widget.utils.resetFocusManager();
if("CANCEL"==b)c.callback=this.handleCancelAction,EventActionDWR.executeCommandButtonCancel(this.tabId,this.pageScopeId,a,c);else{c.callback=this.handleInAction;var d=this.model.toPlainObject();EventActionDWR.executeCommandButtonActionPopUp(this.tabId,this.pageScopeId,a,b,d,c)}}},handleInAction:function(a){this.model&&(a&&a.ftMsgs&&"true"!=this.fromAgenda)&&(this.data=a.ftMsgs,dojox.lang.functional.forIn(this.data,function(a,c){this.model.contains([c])&&dojox.lang.functional.forIn(a.dataMessage.fields,
function(a,b){this.model.setValue([c,"dataMessage","fields",b,"value"],a.value,!1);this.model.setValue([c,"dataMessage","fields",b,"complement"],a.complement,!1)},this)},this));this.handleWindowAction(a)},handleCancelAction:function(a){this.handleWindowAction(a)},handleWindowAction:function(a){null!=this.fromAgenda&&("true"==this.fromAgenda&&"error"!=a.wAxn)&&(a.wAxn="close");if("close"==a.wAxn){a=dijit.byId(this.breadcrumbId).selectedChildWidget;var b=!1;if(null!=a.postClose&&void 0!=a.postClose&&
void 0!=a.postCloseScope&&null!=a.postCloseScope){var c=dijit.byId(a.postCloseScope);null!=c&&a.postClose.apply(c,a.postCloseArgs)}else b=!0;ec.fisa.navigation.utils.closeCurrentBreadCrumb(this.breadcrumbId);null!=a&&(null!=a.postCloseArgs&&void 0!=a.postCloseArgs&&null!=a.postCloseArgs.btBreadCrumbId&&void 0!=a.postCloseArgs.btBreadCrumbId&&void 0!=a.postClose&&void 0!=a.postCloseScope)&&ec.fisa.navigation.utils.closeCurrentBreadCrumb(a.postCloseArgs.btBreadCrumbId);b&&ec.fisa.menu.utils.addEmptyTabAllClosed(g.config.fisaNewTabLabel)}else"cnfrm"==
a.wAxn?this.handleConfirmationBt(a):"error"==a.wAxn?(this.updateMsgsPanel(a.aMsgs),this.refreshTableRegistry()):"close\x26refresh"==a.wAxn?(ec.fisa.navigation.utils.closeCurrentBreadCrumb(this.breadcrumbId),b=ec.fisa.controller.utils.getPageController(a.parentFisaTabId,a.parentFisaPageScopeId),void 0!=b&&b instanceof s&&(c=dijit.byId(b.tableRegistry[a.parentBtId][a.parentEntityId]),void 0!=c&&null!=c&&c.refresh(),a.msg&&(a.wAxn="refresh",b.handleCallBackBackFieldRoutine(b.removeCurrentMRFromOutcome(a,
c))))):"showDlg"==a.wAxn?void 0!=this.isSequence&&null!=this.isSequence&&"true"===this.isSequence?ec.fisa.navigation.utils.templateSequenceDlgShowAction(a.respBtLabels,this.tabId,this.pageScopeId,this.sequenceId):ec.fisa.navigation.utils.templateDlgShowAction(a.respBtLabels,this.tabId,this.pageScopeId,this.btId,this.btActionMode,this.isSequence):alert("unknown action!")},handleConfirmationBt:function(a){var b=a.respBtLabels[0],c=a.aMsgs,d=a.postBtId,e=a.pBtId,f=a.postBtIdDataKey,h=a.principalPostBtIdDataKey,
g=a.parentBtInAuthorization,m=a.showReportModule;a=a.showReportAuto;dijit.byId(this.messagesPanelId).clearAllMessages();this.model.clearAllMessages();null==d?ec.fisa.navigation.utils.showNewBreadCrumbConfirmation(b,c,this.breadcrumbId,this.tabId,this.pageScopeId,this.btId,this.btActionMode,this.isSequence,m,a):(b=dijit.byId(this.breadcrumbId),ec.fisa.navigation.utils.showPostBtBreadCrumb(b.params.title,c,this.tabId,this.pageScopeId,d,e,this.btContentPaneId,f,h,this.isSequence,m,a,g,!1))},setMessagesPanel:function(a){this.inherited(arguments);
if("undefined"===typeof this.breadcrumbId||null==this.breadcrumbId){var b=ec.fisa.controller.utils.findCurrentBreadCrumb(a);b&&(this.breadcrumbId=b.id,b.tabId||(b.tabId=this.tabId))}this.updateMsgsPanel(this.initMsgs);this.btContentPaneId=a.getParent().getParent().id;delete this.initMsgs},setDocumentData:function(a){this.documentData=a},setComboStatusData:function(a){this.comboStatusOptions=a},setBtId:function(a){this.btId=a},setActionId:function(a){this.actionId=a},setShortDateFormatTree:function(a){this.shortDateFormatTree=
a},setLabels:function(a){this.labels=a},initTreeGrid:function(a){var b=[{name:this.labels.treeTableNameColumn,field:"description",width:"290px",editable:!1,cellType:dojox.grid.cells._Widget,widgetClass:B,titlePopUp:this.labels.titlePopUp,formatter:function(a,b,c,h){return ec.fisa.format.utils.linkPopUpFormatter(a,b,c,h)}},{name:this.labels.detailColumn,field:"complement",width:"100px",formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterDetail(a,b,c,h)}},{name:this.labels.statusColumn,
field:"status",width:"100px",cellType:dojox.grid.cells._Widget,editable:!1,widgetClass:dijit.form.Select,formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterCombo(a,b,c,h)}},{name:this.labels.requiredColumn,field:"required",width:"105px",cellType:dojox.grid.cells._Widget,editable:!1,widgetClass:dijit.form.CheckBox,formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterBooleanCheckbox(a,b,c,h)}},{name:this.labels.maxDeliveryColumn,field:"maxDeliveryDate",width:"100px",formatter:function(a,
b,c,h){return ec.fisa.format.utils.formatterMaxDeliveryDate(a,b,c,h)}},{name:this.labels.receptionColumn,field:"receptionDate",width:"100px",formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterRecepcionDate(a,b,c,h)}},{name:this.labels.expirationColumn,field:"expirationDate",width:"100px",formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterExpiracionDate(a,b,c,h)}},{name:this.labels.optionsColumn,field:"a",width:"100px",cellType:dojox.grid.cells._Widget,editable:!1,widgetClass:F,
formatter:function(a,b,c,h){return ec.fisa.format.utils.formatterDocumentsOptions(a,b,c,h)}}],c=new C({data:this.documentData}),c=new dijit.tree.ForestStoreModel({store:c,rootId:"rootNode",rootLabel:"Documentos",childrenAttrs:["children"]});a=D.create("div",null,a.domNode);this.treeGridDocuments=new E({treeModel:c,structure:b,defaultOpen:!0,autoHeight:!0,autoWidth:!0},a);this.treeGridDocuments.contextPath=this.contextpath;this.treeGridDocuments.cusDateFormat=this.shortDateFormatTree;this.treeGridDocuments.comboStatusOptions=
this.comboStatusOptions;this.treeGridDocuments.tabIdvar=this.tabId;this.treeGridDocuments.btIdvar=this.btId;this.treeGridDocuments.actionIdvar=this.actionId;this.treeGridDocuments.pageScopeIdvar=this.pageScopeId;this.treeGridDocuments.labelsColm=this.labels;this.treeGridDocuments.isDisabled=this.isDisabled;this.treeGridDocuments.startup()},loadSelectData:function(a,b){var c=b||!1,d=a["bt-id"],e=a["field-id"];!0==a.parentEditableGrid&&null!=a.gridRealRowIndex&&(e=e+"|"+a.gridRealRowIndex);var f=[];
if(this.selectDataMap&&null!=this.selectDataMap[d]&&null!=this.selectDataMap[d][e]&&null!=this.selectDataMap[d][e].data)f=this._obtainListOptionsFromMap(e,d,a);else if(!0==a.parentEditableGrid){var h=a["field-id"],f=this._obtainListOptionsFromMap(h,d,a),h=this.selectDataMap[d][h].data;void 0==this.selectDataMap[d][e]&&(this.selectDataMap[d][e]={});this.selectDataMap[d][e].data=h}c||a.set("options",f);return f},_obtainListOptionsFromMap:function(a,b,c){var d=[];a=this.selectDataMap[b][a].data;d[0]=
{value:"",label:g.config.fisaSelectLabel,selected:!0};g.forEach(a,function(a,b){d[b+1]={value:""+a[c.valueColumn],label:a[c.labelColum]}},this);return d},findComboBoxOptions:function(a,b){var c=null;this.selectDataMap&&this.selectDataMap[a][b].data&&(c=this.selectDataMap[a][b].data);return c},findDescription:function(a,b,c){var d="";(a=this.findComboBoxOptions(a,b))&&g.forEach(a,function(a){c==a[0]&&(d=a[1])});return d},setBreadcrumb:function(a){this.breadcrumbId=a.id},setQtDocBreadcrumb:function(a){if(a=
ec.fisa.controller.utils.findCurrentBreadCrumb(a))this.breadcrumbId=a.id},addFieldRoutineEvent:function(a,b){var c=a["bt-id"],d=a["field-id"];a.fw=this;"QY"!=b&&"DE"!=b&&(a.attachOnChangeEvent&&q.isFunction(a.attachOnChangeEvent))&&a.attachOnChangeEvent(this,c,d,b)},attachCCYFormatEvent:function(a,b){var c=a["bt-id"];a.fw=this;"QY"!=b&&"DE"!=b&&a.connect(a,"onChange",function(){this.fw.formatCCYRelatedField(c,a,!0)})},executeFieldRoutines:function(a,b,c,d){this.clearPanelMessage();var e={callbackScope:this,
callback:function(a){this.handleCallBackBackFieldRoutine(a,!0)}};e.errorHandler=g.hitch(this,this.errorHandler);var f=this.model.toPlainObject();EventActionDWR.executeFieldRoutines(this.tabId,this.pageScopeId,a,b,c,f,d,e)},handleOnChangeComponent:function(a,b,c,d,e,f,h,k,m){this.clearPanelMessage();var p=this.model.toPlainObject();if(!0==h&&void 0!=k&&null!=k){var l=this.tableRegistry[b];null!=l&&(k=l[k],null!=k&&(l=dijit.byId(k),k=null,!0==g.isArray(l.model)?(l=l.model[m],void 0!=l&&null!=l&&(k=
l.toPlainObject())):k=l.model.toPlainObject(),null!=k&&null!=p&&dojox.lang.functional.forIn(k,g.hitch(this,function(a,c){p[b].dataMessage.fields[c]={value:a}}))))}k={callbackScope:{ctrl:this,notifyComboId:d,gridRealRowIndex:m}};k.callback=this.handleCallBackOnChangeComponent;k.errorHandler=g.hitch(this,this.errorHandler);EventActionDWR.handleOnChangeComponent(this.tabId,this.pageScopeId,a,b,c,p,d,e,f,h,m,k)},handleCallBackOnChangeComponent:function(a){var b=a.aMsgs;if("error"==a.wAxn)this.ctrl.clearPanelMessage(),
this.ctrl.updateMsgsPanel(b),a.wAxn="refresh";else if("refresh_dataType"==a.wAxn)this.ctrl.clearPanelMessage(),this.ctrl.updateMsgsPanel(b),a.wAxn="refresh";else if(null!=a.dataUpdate&&void 0!=a.dataUpdate&&(b=a.dataUpdate,null!=b&&void 0!=b&&dojox.lang.functional.forIn(b,g.hitch(this,function(a,b){this.ctrl.updateSelectByOutcome(b,a,this.ctrl,this.gridRealRowIndex)}))),null!=a.multiMsg&&void 0!=a.multiMsg&&void 0!=a.multiRegisterEntity&&null!=a.multiRegisterEntity){var c=a.multiRegisterEntity;dojox.lang.functional.forIn(a.multiMsg,
g.hitch(this,function(a,b){if(this.ctrl.model.contains([b])){var f=this.ctrl.tableRegistry[b];if(null!=f&&(f=f[c],null!=f)){var f=dijit.byId(f),h=null;!0==g.isArray(f.model)?(f=f.model[this.gridRealRowIndex],void 0!=f&&null!=f&&(h=f)):h=f.model;dojox.lang.functional.forIn(a.dataMessage.fields,g.hitch(this,function(a,b){h.setValue([b],a.value,!1)}))}}}))}g.hitch(this.ctrl,this.ctrl.handleCallBackBackFieldRoutine(a))},updateSelectByOutcome:function(a,b,c,d){var e=c.selectIdMap[a];if(void 0!=d&&null!=
d){var f=c.selectIdMap[a+"|"+d];void 0==f||null==f?c.selectIdMap[a+"|"+d]=e:e=f}a=dijit.byId(e);e=a["bt-id"];f=a["field-id"];void 0!=d&&null!=d&&(f=f+"|"+d);c.selectDataMap[e][f].data=b;a.setControlValue("");a.removeOption(a.getOptions());c.loadSelectData(a)},formatCCYRelatedField:function(a,b,c){var d=b.CCYDependentFields;b=b.get("value");var e={callbackScope:this,callback:function(b){this.handleCallBackBackFormatCCYRelatedField(b,d,a,c)}};e.errorHandler=g.hitch(this,this.errorHandler);EventActionDWR.getCurrencyPatternByCode(b,
e)},handleCallBackBackFormatCCYRelatedField:function(a,b,c,d){var e=this.model,f=a.CCYPattern;g.forEach(b,function(a,b){if(e._fldDta[c].dataMessage.fields[a]){var g=dijit.byId(e._fldDta[c].dataMessage.fields[a].value._cmpId),p=g.get("value");g._componentNode._componentNode.numericFormat=f;g._componentNode._componentNode.set("constraints",{pattern:f});g._setValueAttr(p,d)}})},handleCallBackBackFieldRoutine:function(a,b){this.showMessages(a);"refresh"==a.wAxn&&(this.model&&a&&a.msg)&&(affectedFieldData=
a.msg,dojox.lang.functional.forIn(affectedFieldData,function(b,d){if(this.model.contains([d])){var e=null,e="undefined"===typeof b.dataMessage?b:b.dataMessage.fields;dojox.lang.functional.forIn(e,function(b,c){if(null!=b&&!0===b.multivalue){var e=this.tableRegistry[d];null!=e&&(e=e[c],null!=e&&(e=dijit.byId(e),e.model=null,e.refresh()))}else null!=b&&!1===b.multivalue&&(e=!1,void 0!=this.lovData&&void 0!=this.lovData[d]&&void 0!=this.lovData[d][c]?e=a&&a.priorityChange&&"false"===a.priorityChange?
!1:!0:a&&(a.priorityChange&&"true"===a.priorityChange)&&(e=!0),this.model.setValue([d,"dataMessage","fields",c,"value"],b.value,e),this.model.setValue([d,"dataMessage","fields",c,"complement"],b.complement),void 0!=b.enabled&&null!=b.enabled&&this.setFieldModelEnabled(d,c,b.enabled))},this)}},this))},showMessages:function(a){null!=a&&(this.clearPanelMessage(),this.updateMsgsPanel(a.aMsgs))},clearPanelMessage:function(){this.messagesPanelId&&(dijit.byId(this.messagesPanelId).clearAllMessages(),this.model.clearAllMessages())},
sequenceNextAction:function(a){var b=a.previous_button;dijit.byId(this.messagesPanelId);this.clearPanelMessage();if(a&&a.next_step){var c=a.next_step,d=a.seq_id,e=a["fisa-action-id"],f=a["fisa-bt-id"],h=a.tab_id,k=a.page_scope_id,m=a.is_last_bt,p=a.is_sequence,l=a.has_documents,n=a.show_documents,q=a.accept_button,r=a.has_confirmation_bt,t=a.show_confirmation,u=a.next_button,s=a.sequence_step,v=a.hold_button,w=a["is-scheduling"],x=a["sch-frequency"];this.sequenceMode=a.sequence_mode;this.isSequence=
p;this.sequenceId=d;this.nextStep=c;this.tabId=h;this.pageScopeId=k;this.hasDocuments=l;this.showDocuments=n;this.hasConfirmationBt=r;this.showConfirmation=t;this.previousButton=b;this.actionMode=e;this.sequenceStep=s;a=this.model.toPlainObject();h={callbackScope:this};h.errorHandler=g.hitch(this,this.errorHandler);null!=n&&"true"==n&&"null"==t?null!=v&&"true"==v||"true"==q||"true"==u?(h.callback=this.handleNextSequence,EventSequenceActionDWR.validateDocuments(this.tabId,this.pageScopeId,d,e,a,h)):
ec.fisa.navigation.utils.navigateSequenceFromDocTo(d,c,this.btContentPaneId,this.tabId,this.pageScopeId,this.sequenceMode,this.previousButton,"true"):"null"==n&&"true"==t?null!=q&&"true"==q?this.verifyAfterSecurityLast(d):"true"==l?this.sequenceHasDocumentsAction(d,this.previousButton):ec.fisa.navigation.utils.navigateSequenceTo(d,c,this.btContentPaneId,this.tabId,this.pageScopeId,this.sequenceMode,this.previousButton):(h.callback=this.handleNextSequence,l=this._addNotificationValData(),"true"==m?
EventSequenceActionDWR.validateBtInSequence(this.tabId,this.pageScopeId,f,d,e,a,!0,u,b,null,this.sequenceMode,l,w,x,h):EventSequenceActionDWR.validateBtInSequence(this.tabId,this.pageScopeId,f,d,e,a,!1,u,b,c,this.sequenceMode,l,w,x,h))}},handleNextSequence:function(a){this.handleSeqNextAction(a,this.sequenceId,this.nextStep)},handleSeqNextAction:function(a,b,c){"cnfrm"==a.wAxn?this.verifyAfterSecuenceSecurity(b,c):"error"==a.wAxn?this.updateMsgsPanel(a.aMsgs):alert("unknown action!")},_handleSeqNextActionInternal:function(a,
b){dijit.byId(this.messagesPanelId).clearAllMessages();this.model.clearAllMessages();"null"==b?"true"==this.hasDocuments&&"null"==this.showDocuments?this.sequenceHasDocumentsAction(a,this.previousButton):"true"==this.hasDocuments&&"true"==this.showDocuments&&"true"==this.hasConfirmationBt?this.sequenceHasConfirmationAction(a,this.previousButton):"true"==this.hasConfirmationBt&&"null"==this.showConfirmation?this.sequenceHasConfirmationAction(a,this.previousButton):this.sequenceLastAction(a):ec.fisa.navigation.utils.navigateSequenceTo(a,
b,this.btContentPaneId,this.tabId,this.pageScopeId,this.sequenceMode,this.previousButton)},sequencePrevAction:function(a){dijit.byId(this.messagesPanelId).clearAllMessages();this.model.clearAllMessages();a&&a.prev_step&&ec.fisa.navigation.utils.navigateSequenceTo(a.seq_id,a.prev_step,this.btContentPaneId,a.tab_id,a.page_scope_id,this.previousButton)},sequenceLastAction:function(a){var b={callbackScope:this};b.errorHandler=g.hitch(this,this.errorHandler);b.callback=this.handleInAction;var c=!1;null!=
this.saveAsTemplateChckBoxId&&!0==dijit.byId(this.saveAsTemplateChckBoxId).get("checked")&&(c=!0);EventSequenceActionDWR.callExecAction(this.tabId,this.pageScopeId,a,this.sequenceMode,this.actionMode,this.sequenceStep,c,this.templateOverCall,b)},sequenceTemplateLastAction:function(a,b){this.templateOverCall=b;this.sequenceLastAction(a)},sequenceHasDocumentsAction:function(a,b){var c="",c=g.config.fisaContextPath,c=c+"/BUSINESS_TEMPLATE",c=c+"/",c=c+a,c=c+"/FISATabId/",c=c+this.tabId,c=c+"/FisaPageScopeId/",
c=c+this.pageScopeId,c=c+"/REQUEST_SEQUENCE_DRAW_DOCUMENTS/",c=c+"true",c=c+"/SEQUENCE_PRINCIPAL_BT_MODE/",c=c+this.sequenceMode;"true"===b&&(c+="/PREVIOUS_BUTTON_CLICKED/",c+=b);var d={};d.href=c;ec.fisa.navigation.utils.updateCurrentBreadCrumb(d,this.btContentPaneId,this.tabId,this.pageScopeId)},sequenceHasConfirmationAction:function(a,b){var c="",c=g.config.fisaContextPath,c=c+"/BUSINESS_TEMPLATE",c=c+"/",c=c+a,c=c+"/FISATabId/",c=c+this.tabId,c=c+"/FisaPageScopeId/",c=c+this.pageScopeId,c=c+"/REQUEST_SEQUENCE_DRAW_CONFIRMATION/",
c=c+"true",c=c+"/SEQUENCE_PRINCIPAL_BT_MODE/",c=c+this.sequenceMode;"true"===b&&(c+="/PREVIOUS_BUTTON_CLICKED/",c+=b);var d={};d.href=c;ec.fisa.navigation.utils.updateCurrentBreadCrumb(d,this.btContentPaneId,this.tabId,this.pageScopeId)},isComponentMsg:function(a){return"fieldId"in a&&"ftmId"in a&&null!=a.fieldId&&""!=a.fieldId&&null!=a.ftmId&&""!=a.ftmId},addComponentMsg:function(a){return this.model.setMessage([a.ftmId,"dataMessage","fields",a.fieldId,"value"],a.fieldMsg,a.origLevel)},saveDocumentsQtButton:function(){var a=
{callbackScope:this};a.errorHandler=g.hitch(this,this.errorHandler);a.callback=this.saveDocumentsQtFnctnDwr;DocumentControllerDWR.saveDocumentAction(this.tabId,this.pageScopeId,a)},saveDocumentsQtFnctnDwr:function(a){"cnfrm"==a.wAxn?ec.fisa.navigation.utils.showNewBreadCrumbConfirmation(a.respBtLabels[0],a.respBtLabels[1],this.breadcrumbId,this.tabId,this.pageScopeId,null,null,null):"error"==a.wAxn&&this.updateMsgsPanel(a.aMsgs)},cancelDocumentsQtButton:function(){ec.fisa.navigation.utils.closeCurrentBreadCrumb(this.breadcrumbId)},
getSelectedIndex:function(a){var b=-1;a=a.getOptions();for(var c=0,c=0;c<a.length;c++)if(!0===a[c].selected){b=c;break}return b-1},fetchSelectOptions:function(a,b,c,d){this.clearPanelMessage();var e={callbackScope:this,errorHandler:g.hitch(this,this.errorHandler),callback:this.callBackFetchSelectOptions},f=this.model.toPlainObject();BtControllerDWR.loadBtSelectOptionsData(a,d,b,c,f,e)},reloadSelectOptions:function(a,b,c,d,e,f,h){this.clearPanelMessage();var k={callbackScope:this,errorHandler:g.hitch(this,
this.errorHandler),callback:this.callBackFetchSelectOptions},m=this.model.toPlainObject();BtControllerDWR.reloadSelectOptions(a,d,e,b,c,m,f,h,k)},callBackFetchSelectOptions:function(a){var b=a.data,c=a.aMsgs;if(c)this.updateMsgsPanel(c);else{a=dijit.byId(a.fieldId);var c=a["bt-id"],d=a["field-id"],e=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);e.selectDataMap[c][d].data=b;e.loadSelectData(a)}},launchReportAuto:function(){this.clearPanelMessage();var a={callbackScope:this};
a.errorHandler=g.hitch(this,this.errorHandler);a.callback=this._launchReportAutoCallBack;EventReportActionDWR.openReportAuto(this.tabId,this.parentConfBtPageScopeId,a)},launchReportModule:function(){this.clearPanelMessage();var a={callbackScope:this};a.errorHandler=g.hitch(this,this.errorHandler);a.callback=this._launchReportModuleCallBack;EventReportActionDWR.openReportModule(this.tabId,this.parentConfBtPageScopeId,a)},_launchReportAutoCallBack:function(a){"error"==a.wAxn?this.updateMsgsPanel(a.aMsgs):
ec.fisa.navigation.utils.showNewReportBreadCrumb(a.responseReportLabels.title,this.breadcrumbId,this.tabId,this.parentConfBtPageScopeId,a.responseReportUrl,a.responseShowNextReportButton,a.responseShowEndReportButton)},_launchReportModuleCallBack:function(a){"error"==a.wAxn?this.updateMsgsPanel(a.aMsgs):ec.fisa.navigation.utils.showNewReportBreadCrumb(a.responseReportLabels.title,this.breadcrumbId,this.tabId,this.parentConfBtPageScopeId,a.responseReportUrl,null,null)},setDocumentContentPaneWdgId:function(a){this.documentContentPaneWdgId=
a},setBtTabContainerId:function(a){this.btTabContainerId=a;a=dijit.byId(a);a.tabId=this.tabId;a.pageScopeId=this.pageScopeId;z.around(a,"selectChild",function(a){return function(c){if(this.selectedChildWidget!=c){var d=this.selectedChildWidget.action_mode,e=this.selectedChildWidget["field-id"],f=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);f.clearPanelMessage();null!=f.model&&f.model.clearAllMessages();var h={callbackScope:{btController:f,selectChild:a,arguments:arguments,
tabContainer:this}};h.errorHandler=g.hitch(f,f.errorHandler);h.callback=f._updatedFtmLaunchCallBack;f=f.model.toPlainObject();EventActionDWR.validateBtKeys(f,this.tabId,this.pageScopeId,d,e,h)}}})},_updatedFtmLaunchCallBack:function(a){"open"==a.wAxn?this.selectChild.apply(this.tabContainer,this.arguments):"error"==a.wAxn&&this.btController.updateMsgsPanel(a.aMsgs)},refreshTableRegistry:function(){for(var a in this.tableRegistry)for(var b in this.tableRegistry[a]){var c=dijit.byId(this.tableRegistry[a][b]);
void 0!=c&&null!=c&&c.refresh()}},updateBtSequenceButtonScheduleData:function(a){this.sequenceBtScheduleButtonData=a;var b=this.pageScopeId,b=b.replace("_resourceIn",""),c=ec.fisa.controller.utils.getPageController(this.tabId,b),b=c.sequencePrevButtonId,d=c.sequenceNextButtonId,c=c.schedulingAcceptButtonId;if(void 0!=b&&null!=b&&void 0!=d&&null!=d&&void 0!=c&&null!=c){var b=dijit.byId(b),d=dijit.byId(d),c=dijit.byId(c),e=a.showNextButton,f=a.showAcceptButton;"true"==a.showPrevButton?n.set(b.domNode,
"display","block"):n.set(b.domNode,"display","none");"true"==e?n.set(d.domNode,"display","block"):n.set(d.domNode,"display","none");"true"==f?n.set(c.domNode,"display","block"):n.set(c.domNode,"display","none")}},schedulePrevButtonAction:function(){var a=q.clone(this.sequenceBtScheduleButtonData);a.next_step=a.prev_step;a.is_last_bt="false";a.previous_button="true";this.sequenceNextAction(a)},scheduleNextButtonAction:function(a){void 0!==a&&(a=ec.fisa.controller.utils.getPageController(a["tab-id"],
a["pagescope-id"]),this.sequenceBtScheduleButtonData["is-scheduling"]=!0,this.sequenceBtScheduleButtonData["sch-frequency"]=a.model.getValue(["frequency","value"]));a=q.clone(this.sequenceBtScheduleButtonData);a.next_button="true";this.sequenceNextAction(a)},removeCurrentMRFromOutcome:function(a,b){null!=a.msg&&(a.msg[b.btId]&&a.msg[b.btId][b.entId])&&delete a.msg[b.btId][b.entId];return a}});return s});
//@ sourceMappingURL=BtController.js.map