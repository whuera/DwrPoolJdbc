//>>built
define("ec/fisa/widget/authorization/ApplicationGrid","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/grid/EnhancedGrid dojox/grid/enhanced/plugins/IndirectSelection dojox/grid/EnhancedGrid ./_base".split(" "),function(e,c,f,g,h,k,l,m,n,d){return c("ec.fisa.widget.authorization.ApplicationGrid",[d],{tabId:"",pageScopeId:"",parentFisaPageScopeId:"",parentBtId:"",parentFieldId:"",parentWidgetId:"",onlyRead:!1,
selectionMode:"single",_onSelectionUpdate:!1,fsv:null,packageName:"",appName:"",btName:"",selectButtonLabel:"seleccionar",postCreate:function(){this.inherited(arguments);ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).listAppDataGrid=this},postMixInProperties:function(){this.inherited(arguments);var a={headerSelector:!1,width:"64px",name:this.selectButtonLabel,styles:"text-align: center;"},b={pageSizes:[],description:!1,sizeSwitch:!0,pageStepper:!0,gotoButton:!0,maxPageStep:4,
position:"bottom"};this.plugins?(this.plugins.indirectSelection=a,this.plugins.pagination=b):this.plugins={indirectSelection:a,pagination:b};this.autoHeight=!0;this.selectable=!this.onlyRead;a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);this.structure=[[{name:this.packageName,field:"packageName",width:"50%"},{name:this.appName,field:"appName",width:"50%"},{name:this.btName,field:"btId",width:"40%",hidden:!0},{name:this.btName,field:"id",width:"40%",hidden:!0}]];this.store=
a.appStore},execSelectionChange:function(){ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId)},startup:function(){this.inherited(arguments)}})});
//@ sourceMappingURL=ApplicationGrid.js.map