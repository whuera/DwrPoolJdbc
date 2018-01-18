//>>built
define("ec/fisa/controller/custom/AgendaController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ./_base ec/fisa/controller/BaseController ec/fisa/format/Utils dojox/mvc ec/fisa/mvc/StatefulModel dojox/lang/functional/object dijit/layout/ContentPane dijit/form/TextBox dojo/store/Memory dijit/layout/ContentPane dojo/data/ItemFileWriteStore dijit/layout/BorderContainer dijit/form/Button dijit/TitlePane dojox/grid/EnhancedGrid dojox/grid/enhanced/plugins/Pagination dijit/TitlePane dijit/form/Select dijit/form/DateTextBox dojo/date/locale dijit/form/Form dijit/form/CheckBox dijit/form/TextBox ec/fisa/navigation/Utils dwr/interface/AgendaControllerDWR dwr/dto/TaskCriteria dwr/dto/TaskVO ec/fisa/dwr/Store".split(" "),
function(e,f,k,l,g,m,n,h,p){return f("ec.fisa.controller.custom.AgendaController",[g],{tabId:null,pageScopeId:null,model:null,cmps:null,initData:null,taskTypeList:null,taskStatusList:null,personalizedTaskTypeList:null,dataGridPriorityList:null,breadcrumb:null,bindingContentPane:null,changeUserStatusNumberOfExecution:0,hiddeSummaryNumberOfExecution:0,summaryW:null,parameters:null,agendaDataGrid:null,paneSearcher:null,tabAgendaShow:null,currenContentPaneId:null,"filtro-agenda":null,labels:null,firstTime:!0,
constructor:function(a,b,c){this.initData=c;c.dateFrom=ec.fisa.format.utils.parseLongDate(c.dateFrom);c.dateTo=ec.fisa.format.utils.parseLongDate(c.dateTo);this.tabId=a;this.pageScopeId=b;this.model={};this.cmps={};this.init(c);this.parameters=[]},init:function(a){this.taskTypeList=a.taskTypeList;delete a.languageList;this.taskStatusList=a.taskStatusList;delete a.taskStatusList;this.personalizedTaskTypeList=a.personalizedTaskTypeList;this.dataGridPriorityList=a.dataGridPriorityList;delete a.dataGridPriorityList;
this.model=new h({})},setLabels:function(a){this.labels=a},setBindingContentPane:function(a){this.bindingContentPane=a},JDBCDateFormat:function(a){return e.date.locale.format(a,{selector:"date",datePattern:"yyyy,MM,dd"})},cargarTareas2:function(a){this.clearPanelMessage();a=this.getCriteria();a=new ec.fisa.dwr.Store("AgendaControllerDWR","viewData",this.tabId,a,this.getCriteriaArray(),null);a.callbackScope=this;this.agendaDataGrid.setStore(a);this.countTasksByFilter(this.tabId)},getCriteria:function(){this.firstTime?
(this.model.setValue("dateFrom",this.initData.dateFrom),this.model.setValue("dateTo",this.initData.dateTo),this.firstTime=!1):(this.model.setValue("dateFrom",null!=this.model.getValue("dateFrom")?this.model.getValue("dateFrom"):this.initData.dateFrom),this.model.setValue("dateTo",null!=this.model.getValue("dateTo")?this.model.getValue("dateTo"):this.initData.dateTo));this.model.setValue("maxResults",this.initData.maxResults);this.model.setValue("orderByPriority",this.initData.orderByPriority);this.model.setValue("personalizedTaskTypeId",
this.initData.personalizedTaskTypeId);for(var a={taskTypeId:this.model.getValue("taskTypeId"),taskStatusId:this.model.getValue("taskStatusId"),taskTab:this.model.getValue("taskTab"),taskType:this.model.getValue("taskType"),companyId:this.model.getValue("companyId"),dateTo:this.model.getValue("dateTo"),dateFrom:this.model.getValue("dateFrom"),maxResults:this.model.getValue("maxResults"),orderByPriority:this.model.getValue("orderByPriority"),personalizedTaskTypeId:this.model.getValue("personalizedTaskTypeId"),
parameters:this.parameters},b=0;b<this.parameters.length;b++)a[this.parameters[b]]=this.model.getValue(this.parameters[b]);this.firstTime=!1;return a},getCriteriaArray:function(){var a=[],b=this.getCriteria();a.push(this.pageScopeId);a.push(e.toJson(b));return a},setTaskStatusId:function(a,b,c){"pendientes"==c?(this.model.setValue("taskStatusId",1),this.model.setValue("taskTypeId",-2)):"despachadas"==c?(this.model.setValue("taskStatusId",7),this.model.setValue("taskTypeId",1)):"notificaciones"==c?
(this.model.setValue("taskStatusId",18),this.model.setValue("taskTypeId",-1)):"tareas"==c&&(this.model.setValue("taskStatusId",1),this.model.setValue("taskTypeId",2))},countTasksByFilter:function(a){a=this.getCriteria();var b={callbackScope:this,callback:function(a){this.totalReg=a;this.updateCurrentContentPaneTitle()}};b.errorHandler=this.errorHandler;AgendaControllerDWR.countTasksByCriteria(a,this.getCriteriaArray(),this.tabId,b)},changeUserStatus:function(a,b){this.clearPanelMessage();0<this.changeUserStatusNumberOfExecution&&
AgendaControllerDWR.changeUserStatusDWR(a,b);this.changeUserStatusNumberOfExecution++},updateSingleTaskPriority:function(a,b){this.clearPanelMessage();var c=[];c[0]=a;var d={callbackScope:this,callback:function(a){this.showMessages(a)}};d.errorHandler=e.hitch(this,this.errorHandler);AgendaControllerDWR.updateTasksPriorityDWR(c,b,d)},initComponentData:function(a,b){},setMessagesPanel:function(a){this.messagesPanelId=a.id;this.breadcrumb=a.getParent().getParent().getParent().getParent().getParent().getParent()},
newTaskAction:function(a,b){this.tabId=b;var c={};c.title=a;c.iconClass="breadcrumbIcon";c.href="./static/agenda/PersonalTask.jsp";c.postClose=this.cargarTareas2;c.postCloseScope=this.id;c.postCloseArgs=[this.tabId,this.pageScopeId];ec.fisa.navigation.utils.openNewBreadCrumb(c,this.breadcrumb)},processLinkAction:function(a,b){if(!0!=b.hasUrl){var c={callbackScope:this};c.errorHandler=e.hitch(this,this.errorHandler);c.callback=this.handelClickAction;AgendaControllerDWR.isTaskAvailableDWR(a,b.customizedActionId,
c)}else!0==b.hasUrl&&!0==b.canBeDispatched&&(c={callbackScope:this},c.errorHandler=e.hitch(this,this.errorHandler),c.callback=this.handleClickBTAction,AgendaControllerDWR.openTask({taskId:b.taskId,customizedActionId:b.customizedActionId,customizedActionFilter:b.customizedActionFilter,newActionStatusFilter:b.newActionStatusFilter,status:b.status,urlInfo:b.urlInfo,dataKey:b.dataKey,btKeys:b.btKeys,taskSystem:b.taskSystem,taskSubSystem:b.taskSubSystem,referenceCode:b.referenceCode,taskTypeId:b.taskTypeId,
taskComment:b.taskComment,requestTabId:this.tabId,$dwrClassName:"TaskVO"},c))},handelClickAction:function(a){if(!0==a.isTaskAvaliable){var b={title:"Editar",iconClass:"breadcrumbIcon"};b.href=null!=a.callUrl&&void 0!=a.callUrl?a.callUrl:"./static/agenda/PersonalTask.jsp";b.postClose=this.cargarTareas2;b.postCloseArgs=[this.tabId,this.pageScopeId];b.ioArgs={content:{taskId:a.taskId,customizedActionId:a.customizedActionId}};ec.fisa.navigation.utils.openNewBreadCrumb(b,this.breadcrumb)}else"error"==
a.wAxn&&(dijit.byId(this.messagesPanelId).clearAllMessages(),this.updateMsgsPanel(a.aMsgs))},handleClickBTAction:function(a){if("error"==a.wAxn)dijit.byId(this.messagesPanelId).clearAllMessages(),this.updateMsgsPanel(a.aMsgs);else if(!0==a.isTaskAvaliable){var b={};b.title=a.btTitle;b.iconClass="breadcrumbIcon";b.href=a.taskProccessingUrl;b.postClose=this.cargarTareas2;b.postCloseScope=this.id;b.postCloseArgs=[this.tabId,this.pageScopeId];ec.fisa.navigation.utils.openNewBreadCrumb(b,this.breadcrumb)}},
dispatchTask:function(a,b,c){this.clearPanelMessage();var d={callbackScope:this,callback:function(a){(null==a||2E4==a.aMsgs[0].level.level)&&this.cargarTareas2(b);this.showMessages(a)}};d.errorHandler=e.hitch(this,this.errorHandler);AgendaControllerDWR.dispatchTaskFromList(a,b,c,d)},clearPanelMessage:function(){var a=dijit.byId(this.messagesPanelId);a&&a.clearAllMessages()},showMessages:function(a){null!=a&&this.updateMsgsPanel(a.aMsgs)},_getSelectedTaskIdList:function(){for(var a=this.agendaDataGrid.selection.selected,
b=[],c=0,d=0;d<a.length;d++)a[d]&&(b[c++]=this.agendaDataGrid.getItem(d));return b},updateTaskAction:function(){this.model.getValue("taskStatusMultipleSelection");this._getSelectedTaskIdList();alert("NO DISPONIBLE. ")},updateCurrentContentPaneTitle:function(){"pendientes"==this["filtro-agenda"]?this.buildTitle(this.labels.pending):"despachadas"==this["filtro-agenda"]?this.buildTitle(this.labels.dispatched):"notificaciones"==this["filtro-agenda"]?this.buildTitle(this.labels.notifications):"tareas"==
this["filtro-agenda"]&&this.buildTitle(this.labels.tasks)},buildTitle:function(a){dijit.byId(this.currenContentPaneId).set("title",a+" ("+this.totalReg+")")},addParamToModel:function(a,b,c){"undefined"!==typeof a&&(this.model.appendObject(a,b,c.id,"value",null,!1),"dateFrom"!=a&&"dateTo"!=a&&this.parameters.push(a))}})});
//@ sourceMappingURL=AgendaController.js.map