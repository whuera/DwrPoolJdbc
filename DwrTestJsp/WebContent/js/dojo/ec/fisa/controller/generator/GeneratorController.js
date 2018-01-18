//>>built
define("ec/fisa/controller/generator/GeneratorController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ec/fisa/controller/BaseController ec/fisa/controller/custom/CustomBtController dojo/on dijit/Dialog dojo/_base/array dojo/dom-construct ec/fisa/mvc/StatefulModel ec/fisa/dwr/proxy/GeneratorControllerDWR ec/fisa/widget/SANotificationGridUser ec/fisa/format/Utils ec/fisa/navigation/Utils".split(" "),function(d,g,n,p,h,q,k,l,f,m){return g("ec.fisa.controller.generator.GeneratorController",
h,{systemQtData:null,sourceQtData:null,channelQtData:null,qtType:null,serviceTypeQtData:null,sourceObjectId:"",systemComboId:"",subsystemComboId:"",aplicationComboId:"",serviceTypeId:"",listComboId:"",txtStNameId:"",txtServiceTemplateId:"",txtSTImplementationId:"",sourceObjectValue:null,qtGridId:"",btGridId:"",stGridId:"",btnSearchId:"",btnNextId:"",objectGridForAction:null,searchParams:null,channelId:"",servAuthGridId:"",dialogTitle:"",authDialogId:"",authenticationType:0,constructor:function(a,
b,c){void 0==c.aMsgs&&(this.systemQtData=c.systemQtData,this.sourceQtData=c.sourceQtData,this.qtType=c.qtType,this.serviceTypeQtData=c.serviceTypeQtData);this.model=new m({});delete c.systemQtData;delete c.sourceQtData;delete c.qtType;delete c.serviceTypeQtData},fillComboBox:function(a,b){var c=[];null!=a?d.forEach(a,function(a,b){c[b]={value:""+a.value,label:a.label};0==b&&(c[b].selected=!0)},this):c[0]={value:"",label:d.config.fisaSelectLabel,selected:!0};b.set("options",c);b.set("value","-1")},
onChangeCombo:function(a,b,c){c=ec.fisa.controller.utils.getPageController(b,c);var e=a.get("value");a.id==this.sourceObjectId&&(c.renderComboBox(c,parseInt(a.value)),c.sourceObjectValue=e);var f={callbackScope:c,callback:c.executeActionComboCallback,errorHandler:d.hitch(c,c.errorHandler)};if((null==a.fatherId||void 0==a.fatherId)&&a.id==this.systemComboId)"-1"!=e?GeneratorControllerDWR.loadComboData(e,a.id,1,b,f):(this.fillComboBox(null,dijit.byId(this.subsystemComboId)),this.fillComboBox(null,dijit.byId(this.aplicationComboId)));
else if(a.fatherId==this.systemComboId)"-1"!=e?GeneratorControllerDWR.loadComboData(e,a.id,2,b,f):this.fillComboBox(null,dijit.byId(this.aplicationComboId));else if(a.fatherId==this.subsystemComboId&&"-1"!=e)switch(parseInt(c.sourceObjectValue)){case 1:c.searchParams={appId:e};break;case 2:c.searchParams={typeId:e}}},searchAction:function(){switch(parseInt(this.sourceObjectValue)){case 1:var a=dijit.byId(this.btGridId);dijit.byId(this.qtGridId).domNode.style.display="none";dijit.byId(this.stGridId).domNode.style.display=
"none";a.domNode.style.display="";a.setQuery(this.searchParams);this.objectGridForAction=a;break;case 2:a=dijit.byId(this.qtGridId);dijit.byId(this.btGridId).domNode.style.display="none";dijit.byId(this.stGridId).domNode.style.display="none";a.domNode.style.display="";a.setQuery(this.searchParams);this.objectGridForAction=a;break;case 3:a=dijit.byId(this.stGridId),dijit.byId(this.qtGridId).domNode.style.display="none",dijit.byId(this.btGridId).domNode.style.display="none",a.domNode.style.display=
"",this.searchParams={stImplId:dijit.byId(this.txtSTImplementationId).value,stId:dijit.byId(this.txtServiceTemplateId).value,stNameId:dijit.byId(this.txtStNameId).value},a.setQuery(this.searchParams),this.objectGridForAction=a}},wizardStep:1,nextAction:function(){var a={callbackScope:this,callback:this.executeNextActionSequence,errorHandler:d.hitch(this,this.errorHandler)};switch(this.wizardStep){case 1:var b=this._getRealIndex(this.objectGridForAction);if(0<=b){var b=this.objectGridForAction.store.getEntryById(b).data,
c=dijit.byId("mainTabContainer");c.selectChild("tabAuthServ");var e={objectReference:b[0],objectType:this.sourceObjectValue};d.byId("itemSelected").value=b[0];d.byId("itemNameSelected").value=b[1];GeneratorControllerDWR.next(this.wizardStep,e,a);this.wizardStep++}else this.errorHandler("Debe seleccionar un Objeto");break;case 2:e={},c=dijit.byId(this.servAuthGridId),b=this._getRealIndex(c),0<b&&(b=c.store.getEntryById(b).data,e.servAuth=b[0]),c=dijit.byId("mainTabContainer"),c.selectChild("tabTrxAuth"),
GeneratorControllerDWR.next(this.wizardStep,e,a),this.wizardStep++}},createAuthenticationPanel:function(a){a=dijit.byId(this.servAuthGridId);var b=this._getRealIndex(a);a=a.store.getEntryById(b).data;this.dialogTitle=this.capitaliseFirstLetter(a[1].toLowerCase());b={callbackScope:this,callback:this.renderDialog,errorHandler:d.hitch(this,this.errorHandler)};GeneratorControllerDWR.obteinFieldsByType(a[0],b)},renderDialog:function(a){if(a.popup){if(a.autheticacionType==this.authenticationType)dijit.byId(this.authDialogId).show();
else{var b=""==this.authDialogId?new k({title:this.dialogTitle,style:"width: 550px; height: auto;padding-bottom: 10px;"}):dijit.byId(this.authDialogId);this.authDialogId=b.id;d.byId("tableForDialog")&&(f.destroy("tableForDialog"),f.destroy("actionTable"));var c=f.create("table",{id:"tableForDialog",border:0,cellpading:0,cellspacing:0,width:"100%",className:"fisaComponentGrid"},b.domNode);l.forEach(a.labelList,function(a){var b=f.create("tr",{className:"evenFieldBt"},c),d=f.create("td",{className:"fisaComponentGridLeftCell"},
b);f.create("label",{innerHTML:a.label},d);b=f.create("td",{className:"fisaComponentGridRightCell"},b);dijit.form.TextBox({className:"dijitReset dijitInputInner",name:a.label,type:1==a.encrypted?"password":"text"},b)},this);var e=f.create("table",{id:"actionTable",className:"fisaBTActionBtns"},b.domNode),e=f.create("tr",{},e),e=f.create("td",{},e);new dijit.form.Button({label:a.labelButton,onClick:d.hitch(this,this.saveAuthenticationData)},e);b.show()}this.authenticationType=a.autheticacionType}},
saveAuthenticationData:function(){alert("Informaci\u00f3n Almacenada");dijit.byId(this.authDialogId).hide()},backAction:function(){var a=dijit.byId("mainTabContainer");switch(this.wizardStep){case 2:a.selectChild("tabObjSele");this.wizardStep--;break;case 3:a.selectChild("tabAuthServ"),this.wizardStep--}},executeNextActionSequence:function(a){},executeActionComboCallback:function(a){a.parentId==this.systemComboId?this.fillComboBox(a.data,dijit.byId(this.subsystemComboId)):a.parentId==this.subsystemComboId&&
this.fillComboBox(a.data,dijit.byId(this.aplicationComboId))},errorHandler:function(a){this.updateMsgsPanel(a)},renderComboBox:function(a,b){switch(b){case 1:a.displayForSt("none");a.displayForQt("none");a.displayForBt("");break;case 2:a.displayForSt("none");a.displayForBt("none");a.displayForQt("");break;case 3:a.displayForQt("none"),a.displayForBt("none"),a.displayForSt("")}},displayForBt:function(a){d.byId("variableRowBt").style.display=a;d.byId("lblSystem").style.display=a;d.byId("lblSubSystem").style.display=
a;d.byId("lblAplication").style.display=a;dijit.byId(this.systemComboId).domNode.style.display=a;dijit.byId(this.subsystemComboId).domNode.style.display=a;dijit.byId(this.aplicationComboId).domNode.style.display=a},displayForQt:function(a){d.byId("variableRowBt").style.display=a;d.byId("lblSystem").style.display=a;d.byId("lblSubSystem").style.display=a;d.byId("lblListado").style.display=a;dijit.byId(this.systemComboId).domNode.style.display=a;dijit.byId(this.subsystemComboId).domNode.style.display=
a;dijit.byId(this.listComboId).domNode.style.display=a},displayForSt:function(a){d.byId("variableRowBt").style.display=a;d.byId("lblImplName").style.display=a;d.byId("lblServiceTemplete").style.display=a;d.byId("lblServiceTemplateImpl").style.display=a;dijit.byId(this.txtStNameId).domNode.style.display=a;dijit.byId(this.txtServiceTemplateId).domNode.style.display=a;dijit.byId(this.txtSTImplementationId).domNode.style.display=a},_getRealIndex:function(a){var b=a.fisaQtPagination.plugin._currentPage,
c=a.fisaQtPagination.plugin._currentPageSize;a=a.selection.selectedIndex;return 0<=a?c*(b-1)+a:-1},capitaliseFirstLetter:function(a){return a.charAt(0).toUpperCase()+a.slice(1)}})});
//@ sourceMappingURL=GeneratorController.js.map