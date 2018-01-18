//>>built
define("ec/fisa/widget/TXDynamicGrid","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/grid/EnhancedGrid dijit/form/CheckBox ec/fisa/widget/Link dijit/form/Select dijit/form/TextBox ec/fisa/widget/OutputTextComplement".split(" "),function(f,g,m,n,p,q,r,h,s,k,t,l,u){return g("ec.fisa.widget.TXDynamicGrid",[h],{selectButtonLabel:"Activar Env\u00edo",tabId:"",pageScopeId:"",parentFisaPageScopeId:"",parentBtId:"",
parentFieldId:"",parentWidgetId:"",onlyRead:!1,labelNumber:"",selectionMode:"none",_onSelectionUpdate:!1,fsv:null,labelProduct:"",labelFormat:"",labelFrecuency:"",selectWidth:"180px",readWidth:"90px",readWidthSummary:"177px",txtWidth:"105",montoId:"monto",montoIdAux:"monto_aux",descId:"desc",montoReadId:"montoRead",descReadId:"descRead",chargeId:"charge",totalAmountId:"totalAmount",summaryId:"summary",summarySaveId:"summarySave",isSortable:!0,postMixInProperties:function(){this.inherited(arguments);
this.autoHeight=!0;this.selectable="true";this.autoWidth=this.fisaEditableGrid=!0;var a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);a.skinParameters&&(this.selectWidth="177px",this.readWidth=this.txtWidth="90px");var e=[];e.push({name:"id",field:"id",width:"auto",hidden:!0,sortable:this.isSortable});e.push({name:"Id Transacci\u00f3n",field:"transactionType",width:"auto",hidden:!0,noresize:!0,sortable:this.isSortable});e.push({name:a.initLabels.transactionName,field:"transactionName",
width:"94px",noresize:!0,sortable:this.isSortable});e.push({name:a.initLabels.outAccount,field:"outAccount",width:"130px",noresize:!0,sortable:this.isSortable});e.push({name:a.initLabels.outAccountTypeName,field:"outAccountTypeName",width:"90px",noresize:!0,sortable:this.isSortable});e.push({name:a.initLabels.beneficiaryBankName,field:"beneficiaryBankName",width:"90px",noresize:!0,sortable:this.isSortable});e.push({name:a.initLabels.beneficiaryName,field:"beneficiaryName",width:"147px",noresize:!0,
sortable:this.isSortable});e.push({name:a.initLabels.amount,field:this.montoId,width:this.selectWidth,widgetClass:ec.fisa.widget.NumberTextBox,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridNumberTextBox(d,b,c,a)})});e.push({name:a.initLabels.desc,field:this.descId,width:this.selectWidth,widgetClass:dijit.form.TextBox,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridTextBox(d,b,c,a)})});e.push({name:a.initLabels.desc,
field:this.descReadId,width:this.readWidth,hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadTextBox(d,b,c,a)})});e.push({name:a.initLabels.amount,field:this.montoReadId,width:"60px",hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadNumberTextBox(d,b,c,a)})});e.push({name:a.initLabels[this.chargeId],
field:this.chargeId,width:"60px",hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadNumberTextBox(d,b,c,a)})});e.push({name:a.initLabels[this.totalAmountId],field:this.totalAmountId,width:this.readWidth,hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadNumberTextBox(d,b,c,a)})});
e.push({name:a.initLabels[this.summaryId],field:this.summaryId,width:this.readWidthSummary,hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadTextBox(d,b,c,a)})});e.push({name:a.initLabels[this.summaryId],field:this.summarySaveId,width:this.readWidthSummary,hidden:!0,widgetClass:ec.fisa.widget.OutputTextComplement,sortable:this.isSortable,noresize:!0,formatter:f.hitch(this,function(d,b,
c){return this.formatterGridReadTextBox(d,b,c,a)})});e.push({name:a.initLabels.amount,field:this.montoIdAux,width:this.selectWidth,hidden:!0,widgetClass:ec.fisa.widget.NumberTextBox,noresize:!0,formatter:f.hitch(this,function(d,b,c){return this.formatterGridReadNumberTextBox(d,b,c,a)})});this.fisaTextBoxAcc=[];this.fisaTextBoxDesc=[];this.structure=[e];this.store=new ec.fisa.dwr.Store("MultipleTransfersControllerDWR","viewDataTransactions",this.tabId,this.pageScopeId,[],null)},startup:function(){this.inherited(arguments);
ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).setTxMDinamicGridId(this.id)},formatterGridLink:function(a,e,d,b){a=a.split("-");a={checked:"true"===a[0],fval:a[1]};if(a.checked||d.fReadOnly)a.readOnly=!0;if(0<=e){var c=new k({label:b.labelsData.addUsersTo,title:b.labelsData.addUsersTo});c.set("enabled",this.fisaChecksValues[e]);c.onClick=b.openAdditionalUsersSelection;c.rowData=a;c.fisaRowItem=d;c.field=d.field;c.parentBtId=b.parentBtId;c.tabId=b.tabId;c.pageScopeId=b.pageScopeId;
c.urlToAdditionalUserPage=b.urlToAdditionalUserPage;c.breadCrumbId=b.breadcrumbId;d.grid.fisaLinks[e]=c.id;return c}},formatterGridNumberTextBox:function(a,e,d,b){d.sortable=this.isSortable;var c=d.grid.getItem(e);void 0==b.listGridData[c]&&(b.listGridData[c]={});a=new ec.fisa.widget.NumberTextBox({value:b.listGridData[c][this.montoId],readOnly:b.inputDisabled,maxLength:8,baseClass:"dijit dijitReset dijitInline dijitLeft dijitTextBox dijitNumberTextBox"});a.grid={};a.grid.tabId=this.tabId;a.grid.pageScopeId=
this.pageScopeId;a.rowGridItem=c;a.name=this.montoId;a.idx=e;a.connect(a,"onChange",function(a){if(this!=window){var b=ec.fisa.controller.utils.getPageController(this.grid.tabId,this.grid.pageScopeId);b.listGridData[this.rowGridItem].id=c;b.listGridData[this.rowGridItem][this.name]=""!=a||0>a?a:0}});return a},formatterGridTextBox:function(a,e,d,b){d.sortable=this.isSortable;var c=d.grid.getItem(e);void 0==b.listGridData[c]&&(b.listGridData[c]={});a=new l({value:b.listGridData[c][this.descId],readOnly:b.inputDisabled,
maxLength:30,baseClass:"dijitTextBox"});a.grid={};a.grid.tabId=this.tabId;a.grid.pageScopeId=this.pageScopeId;a.rowGridItem=c;a.name=this.descId;a.idx=e;a.connect(a,"onChange",function(a){if(this!=window&&""!=a){var b=ec.fisa.controller.utils.getPageController(this.grid.tabId,this.grid.pageScopeId);b.listGridData[this.rowGridItem].id=c;b.listGridData[this.rowGridItem][this.name]=a}});return a},formatterGridReadNumberTextBox:function(a,e,d,b){d.sortable=this.isSortable;a=d.grid.getItem(e);void 0==
b.listGridData[a]&&(b.listGridData[a]={});e=20;try{e=f.byId(d.id).offsetWidth/b.skinParameters.tbtextCharWidth-2}catch(c){console.log(c)}return new ec.fisa.widget.OutputTextComplement({format:"4",value:b.listGridData[a][d.field],baseClass:"textboxBaseClass",complementBaseClass:"fisaOutputText",visualSize:e})},formatterGridReadTextBox:function(a,e,d,b){d.sortable=this.isSortable;a=d.grid.getItem(e);void 0==b.listGridData[a]&&(b.listGridData[a]={});return b.listGridData[a][d.field]}})});
//@ sourceMappingURL=TXDynamicGrid.js.map