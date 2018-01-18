//>>built
define("ec/fisa/controller/custom/PlataformaController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ./_base ec/fisa/controller/BaseController ec/fisa/navigation/Utils ec/fisa/menu/Utils dojo/dom-style dojo/dom-construct dojo/dom-geometry dojox/mvc dojo/on ec/fisa/message/ConfirmationPanel ec/fisa/dwr/proxy/PlataformaControllerDWR ec/fisa/widget/Utils".split(" "),function(e,g,p,q,k,r,l,f,s,t,u,v,w){return g("ec.fisa.controller.custom.PlataformaController",[k,l],{tabId:null,pageScopeId:null,
breadCrumbId:null,msg:null,currentBreadCrumbId:null,btContentPaneId:null,parentPageScopeId:null,initData:null,tabContainerId:null,apellidoPaternoIdTxtBox:null,apellidoMaternoIdTxtBox:null,primerNombreIdTxtBox:null,segundoNombreIdTxtBox:null,juridicoNombreIdText:null,agencyTxt:null,executiveTxt:null,sourceTxt:null,clienteNaturalContentPaneId:null,juridicoContentPaneId:null,documentTypeComboId:null,personTypeComboId:null,searchTypeComboId:null,documentNumberTxId:null,borderContainerId:null,menuBarId:null,
menuEnabled:null,titlePaneId:null,labels:null,constructor:function(a,d,b,c){this.tabId=a;this.pageScopeId=d;this.initData=b;this.labels=c;this.menuEnabled=!1},initMenu:function(a){this.menuBarId=a+"menuBarId";this.updateHorizontalMenu(this.initData.menuItems,a,this.menuBarId,!0);this.disableMenu()},enableMenu:function(){ec.fisa.widget.utils.enableWidget(this.menuBarId);var a=dijit.byId(this.menuBarId);e.forEach(a.getChildren(),e.hitch(this,function(a){ec.fisa.widget.utils.enableWidget(a.id)}))},disableMenu:function(){ec.fisa.widget.utils.disableWidget(this.menuBarId);
var a=dijit.byId(this.menuBarId);e.forEach(a.getChildren(),e.hitch(this,function(a){ec.fisa.widget.utils.disableWidget(a.id)}))},addHorizontalMenuItems:function(a,d){null!=d&&e.forEach(d,function(b){if(null!=b.childrenItems){var c=new dijit.Menu({parentMenu:a,baseClass:"dijitHorizontalSubMenu"}),d=new dijit.PopupMenuItem({label:b.name,popup:c,baseClass:"dijitHorizontalSubMenuItem"});a.addChild(d);f.set(d.arrowWrapper,"visibility","");this.addHorizontalMenuItems(c,b.childrenItems)}else c={onClick:e.hitch(this,
function(a){this.menuTreeOnClick(a,null)},b)},c.label=b.name,c.baseClass="dijitHorizontalMenuItem",a.addChild(new dijit.MenuItem(c))},this)},menuTreeOnClick:function(a,d){try{if(null!=a&&(!d||!d.isExpandable)){var b=dijit.byId(this.documentTypeComboId).get("value"),c=dijit.byId(this.personTypeComboId).get("value"),f=dijit.byId(this.documentNumberTxId).get("value"),h=dijit.byId(this.apellidoPaternoIdTxtBox).get("value"),m=dijit.byId(this.apellidoMaternoIdTxtBox).get("value"),n=dijit.byId(this.primerNombreIdTxtBox).get("value"),
g=dijit.byId(this.segundoNombreIdTxtBox).get("value");a.customParam=e.toJson({P_PERSON_LEGAL_ID:f,P_PERSON_LEGAL_TYPE:b,P_PERSON_TYPE:c,_AUTO:"1",dataKey:b+"|"+f+"|"+h+"|"+m+"|"+n+"|"+g+"|"+c});a.FISATabId=this.tabId;a.FisaPageScopeId=this.pageScopeId;ec.fisa.menu.utils.loadMenuTabContainer(a,!1,this.tabContainerId,this.tabContainerId+"inicio")}}catch(k){console.log(k)}},tabIdAdd:function(a){this.tabContainerId=a},apellidoPaternoSet:function(a){this.apellidoPaternoIdTxtBox=a},apellidoMaternoSet:function(a){this.apellidoMaternoIdTxtBox=
a},primerNombreSet:function(a){this.primerNombreIdTxtBox=a},segundoNombreSet:function(a){this.segundoNombreIdTxtBox=a},agencyTxtSet:function(a){this.agencyTxt=a},executiveTxtSet:function(a){this.executiveTxt=a},sourceTxtSet:function(a){this.sourceTxt=a},juridicoNombreSet:function(a){this.juridicoNombreIdText=a},clienteNaturalContentPanetSet:function(a){this.clienteNaturalContentPaneId=a},juridicoContentPaneSet:function(a){this.juridicoContentPaneId=a;a=dijit.byId(this.juridicoContentPaneId);f.set(a.domNode,
"display","none")},setPersonTypeComboId:function(a){this.personTypeComboId=a;a=dijit.byId(this.personTypeComboId);a.connect(a,"onChange",e.hitch(this,function(a){var b={callbackScope:this};b.errorHandler=e.hitch(this,this.errorHandler);b.callback=this._personTypeChangeCallBack;PlataformaControllerDWR.onChangePersonTypeCombo(a,this.tabId,b)}))},setDocumentTypeComboId:function(a){this.documentTypeComboId=a;a=dijit.byId(this.documentTypeComboId);a.connect(a,"onChange",e.hitch(this,function(a){this.resetComponents()}))},
_personTypeChangeCallBack:function(a){if("refresh"==a.wAxn){var d=e.fromJson(a.REQUEST_PLATFORM_DOCUMENT_TYPE),b=dijit.byId(this.documentTypeComboId);b._lastValueReported="";b.set("value","",!0);b.removeOption(b.getOptions());b.set("options",d);b.reset();this.resetComponents();d=dijit.byId(this.clienteNaturalContentPaneId);b=dijit.byId(this.juridicoContentPaneId);"personal"==a.msg?(f.set(d.domNode,"display","block"),f.set(b.domNode,"display","none")):"juridico"==a.msg&&(f.set(d.domNode,"display",
"none"),f.set(b.domNode,"display","block"))}},setDocumentNumberTxId:function(a){this.documentNumberTxId=a},resetComponents:function(){dijit.byId(this.documentNumberTxId).set("value","");dijit.byId(this.apellidoPaternoIdTxtBox).set("value","");dijit.byId(this.apellidoMaternoIdTxtBox).set("value","");dijit.byId(this.primerNombreIdTxtBox).set("value","");dijit.byId(this.segundoNombreIdTxtBox).set("value","");dijit.byId(this.juridicoNombreIdText).set("value","");dijit.byId(this.agencyTxt).set("value",
"");dijit.byId(this.executiveTxt).set("value","");dijit.byId(this.sourceTxt).set("value","");this.disableMenu()},setSearchTypeComboId:function(a){this.searchTypeComboId=a},callLovSearchType:function(){},refreshData:function(){this.clearPanelMessage();var a=dijit.byId(this.documentNumberTxId).get("value");if(void 0==a||null==a||""==a)a=this.generateMsg(this.labels.required,"",4E4),this.resetComponents(),this.updateMsgsPanel(a);else{var d=dijit.byId(this.documentTypeComboId).get("value"),b=dijit.byId(this.personTypeComboId).get("value"),
c={callbackScope:this};c.errorHandler=e.hitch(this,this.errorHandler);c.callback=this._findCustomerCallBack;PlataformaControllerDWR.findCustomer(a,d,b,this.tabId,this.pageScopeId,c)}},_findCustomerCallBack:function(a){"error"==a.wAxn?(this.updateMsgsPanel(a.aMsgs),this.resetComponents()):"cnfrm"==a.wAxn&&(void 0!=a.aMsgs&&null!=a.aMsgs&&this.updateMsgsPanel(a.aMsgs),void 0!=a.response&&(this.setComponentsValue(a.response),this.enableMenu()))},clearData:function(){this.resetComponents()},setComponentsValue:function(a){dijit.byId(this.apellidoPaternoIdTxtBox).set("value",
a.lastName);dijit.byId(this.apellidoMaternoIdTxtBox).set("value",a.secondLastName);dijit.byId(this.primerNombreIdTxtBox).set("value",a.name);dijit.byId(this.segundoNombreIdTxtBox).set("value",a.middleName);dijit.byId(this.juridicoNombreIdText).set("value",a.lastName);dijit.byId(this.agencyTxt).set("value",a.agency);dijit.byId(this.executiveTxt).set("value",a.executive);dijit.byId(this.sourceTxt).set("value",a.source)},setBorderContainerId:function(a){this.borderContainerId=a},setTitlePaneId:function(a,
d,b){dijit.byId(a).watch("open",e.hitch(this,function(c,f,h){c=dijit.byId(a);var g=e.connect(h?c._wipeIn:c._wipeOut,"onEnd",c,e.hitch(this,function(){dijit.byId(this.borderContainerId).resize();var c=dijit.byId(a);!0===h?c.set("title",d):c.set("title",b);e.disconnect(g)}))}))}})});
//@ sourceMappingURL=PlataformaController.js.map