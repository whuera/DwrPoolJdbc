//>>built
define("ec/fisa/widget/NotificationGridUser","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/grid/EnhancedGrid dojox/grid/enhanced/plugins/IndirectSelection dojox/grid/EnhancedGrid".split(" "),function(c,a,d,e,f,g,h,k,l,b){return a("ec.fisa.widget.NotificationGridUser",[b],{tabId:"",pageScopeId:"",parentFisaPageScopeId:"",parentBtId:"",parentFieldId:"",parentWidgetId:"",onlyRead:!1,label:"",_onSelectionUpdate:!1,
fsv:null,labelRole:"",postCreate:function(){this.inherited(arguments);ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).listUserDataGrid=this},postMixInProperties:function(){this.inherited(arguments);this.autoHeight=!0;this.selectable=!this.onlyRead;this.structure=[[{name:this.label,field:"value",width:"50%"},{name:this.labelRole,field:"role",width:"50%"}]];this.store=new ec.fisa.dwr.Store("NotificationTransactionControllerDWR","viewDataUsers",this.tabId,this.pageScopeId,[],
null)},execSelectionChange:function(){ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).obtenerSeleccionados()},startup:function(){this.inherited(arguments)}})});
//@ sourceMappingURL=NotificationGridUser.js.map