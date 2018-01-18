//>>built
define("ec/fisa/format/Utils","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/number dojo/dom-geometry dojo/on dojo/dom-construct dijit/form/TextBox dijit/form/DateTextBox ec/fisa/format/_base dojo/date/locale ec/fisa/widget/Link ec/fisa/widget/DocumentActions dojo/data/ItemFileReadStore ec/fisa/navigation/Utils ec/fisa/controller/Utils dojo/string dijit/form/Select dijit/form/Button ec/fisa/widget/AgendaActions ec/fisa/widget/Priority dijit/form/CheckBox ec/fisa/widget/NumberTextBox ec/fisa/widget/EnhancedSchedulingDateTextBox ec/fisa/widget/QueryTemplateFieldRoutineLink ec/fisa/widget/QueryTemplateFieldAliasLink dijit/form/ValidationTextBox".split(" "),
function(f,n,C,x,y,z,k,A,t,u,m,r,v,B,D,E,w){n=n("ec.fisa.format.Utils",null,{JDBCtimestampFormat:"yyyy-MM-dd HH:mm:ss.S",formatQtParameter:function(a,b){return"format"in b?0==b.format?ec.fisa.format.utils.formatDefaultDate(a):ec.fisa.format.utils.formatQtColumn(b.format,b.formatPattern,a):a},formatField:function(a,b,c,d,e,l,h,g,p){if(isNaN(a))return b="",null!=c&&(b=c),b;if(1==a||2==a||3==a){if(null==c)return"";c=this.parseLongDate(c);return m.format(c,{datePattern:b,selector:"date",locale:f.config.fisaCurrentLocale})}return 4==
a||6==a||5==a?null==c?"":this.formatNumber(c,b):8==a?null==c?"":"0"==c?'\x3cinput type\x3d"checkbox" disabled\x3d"true" disabled\x3d"true"  /\x3e':'\x3cinput type\x3d"checkbox" disabled\x3d"true" checked\x3d"checked" /\x3e':26==a?null==c||"0"==c||""==c?"":'\x3cspan class\x3d"qtCellChecked"/\x3e':27==a?null==c||"0"==c||""==c?"":'\x3cimg src\x3d"'+(f.config.fisaContextPath+"/fisaImages/"+c)+'"  alt\x3d"'+l+'" title\x3d"'+l+'" onerror\x3d"'+("this.src \x3d '"+(f.config.fisaContextPath+"/imageNotFound.jpg")+
"'")+'" width\x3d"16" height\x3d"16" style\x3d" {border:0px}  " /\x3e':null},formatQtColumn:function(a,b,c,d,e,l,h,g,p){var s=p||{};try{if(!0==p.colDef._props.hidden)return"";var m=this.formatField(a,b,c,d,e,l,h,g,p);if(null!=m)return m;if(0>a){var q={fakeBtn:{fc:ec.fisa.controller.utils.getPageController(h,g),tabId:h,pageScopeId:g},fisaScopeSelectedId:d,fisaScopeSelectedAction:e,onClick:function(){this.fakeBtn.fc.executeAction.call(this.fakeBtn,dijit.byId(this.fakeBtn.fc.qtGridId).qtId,this.fisaScopeSelectedAction,
this.fisaScopeSelectedId)}};if(-1==a){q.title=l||"";q.label=c||"";var n=new r(q);return n}if(-3==a)return q.title=l||"",q.label=b||"",new r(q);if(-2==a)return n=new r(q),k.create("img",{src:b,alt:l,title:l,onerror:"this.src \x3d '"+(f.config.fisaContextPath+"/imageNotFound.jpg")+"'",style:{display:"block",margin:"auto",width:"16px",height:"16px",border:"0px"}},n.containerNode),n;if(-4==a)return this.formatQueryTemplateFieldRoutineLink(a,b,c,d,e,l,h,g,p);if(-5==a)return ec.fisa.format.utils.formatQueryTemplateFieldAliasLink({fieldId:s.fieldId,
tabId:h,pageScopeId:g,valueToFormat:c,rowIndex:d,gridId:s.colDef.grid.id,colDef:s.colDef,originalValueIndex:s.colDef.grid.originalValueIndex,maskId:b,substitutionFdk:s.colDef.grid.substitutionFdk})}}catch(t){}return c},formatQueryTemplateFieldRoutineLink:function(a,b,c,d,e,l,h,g,f){return 0<f.rowRoutine.length&&(a=f.colDef,a=a.grid.store.getValue(a.grid.getItem(d),f.rowRoutine),null==a||"0"==a)?(b=this.formatField(f.defaultFormat,b,c,d,e,l,h,g,formatterData),null!=b?b:c):ec.fisa.format.utils.formatQueryTemplateFieldLink({fieldId:f.fieldId,
tabId:h,pageScopeId:g,valueToFormat:c,rowIndex:d,colDef:f.colDef,routine:f.routine})},formatQueryTemplateFieldAliasLink:function(a){var b=a.colDef;return(b=b.grid.store.getValue(b.grid.getItem(a.rowIndex),a.fieldId))?new ec.fisa.widget.QueryTemplateFieldAliasLink({fieldId:a.fieldId,tabId:a.tabId,pageScopeId:a.pageScopeId,rowIndex:a.rowIndex,label:a.valueToFormat,maskedValue:b,gridId:a.gridId,originalValueIndex:a.originalValueIndex,maskId:a.maskId,substitutionFdk:a.substitutionFdk}):a.valueToFormat},
parseLongDate:function(a){if(null!=a){var b=a.lastIndexOf(".");0<=b&&a.length>=b+2?a=a.substring(0,b+2):0<=b&&a.length>=b+1&&(a=a.substring(0,b+1)+"0")}return m.parse(a,{datePattern:this.JDBCtimestampFormat,selector:"date",locale:f.config.fisaCurrentLocale})},getStrDatebyFormatId:function(a,b){var c="",d="";a&&""!=a&&(d=1==b?f.config.fisaShortDatePattern:2==b?f.config.fisaLongDatePattern:f.config.fisaDateTimePattern,"string"==typeof a?(c=m.parse(a,{datePattern:d,selector:"date",locale:f.config.fisaCurrentLocale}),
c=null!=c?m.format(c,{datePattern:this.JDBCtimestampFormat,selector:"date",locale:f.config.fisaCurrentLocale}):a):c=a);return c},formatLongDate:function(a){return m.format(a,{datePattern:this.JDBCtimestampFormat,selector:"date",locale:f.config.fisaCurrentLocale})},formatDate:function(a,b){var c=b.ref.data;return c&&""!=c?(c=this._parseDate(c),m.format(c,{datePattern:a,selector:"date",locale:f.config.fisaCurrentLocale})):""},getStrDateByFormatIdStrDate:function(a,b){var c=this.parseLongDate(a);return this.formatDateByFormatId(c,
b)},formatDateByFormatId:function(a,b){var c=a,d="";a&&""!=a&&("string"==typeof a&&(a=this.parseLongDate(a)),d=1==b?f.config.fisaShortDatePattern:2==b?f.config.fisaLongDatePattern:f.config.fisaDateTimePattern,null!=a&&void 0!=a&&(c=m.format(a,{datePattern:d,selector:"date",locale:f.config.fisaCurrentLocale})));return c},formatDateForStringValue:function(a,b){if(b&&""!=b){var c=m.parse(b,{selector:"date",datePattern:this.JDBCtimestampFormat,locale:f.config.fisaCurrentLocale});return null==c?b:m.format(c,
{datePattern:a,selector:"date",locale:f.config.fisaCurrentLocale})}return""},formatDataGridDate:function(a,b,c){b=c.grid.shortDateFormatTree;return a&&""!=a?(a=this._parseDate(a),m.format(a,{datePattern:b,selector:"date",locale:f.config.fisaCurrentLocale})):""},_parseDate:function(a){return a instanceof Date?a:"string"==typeof a||a instanceof String?this.parseLongDate(a):a},formatterCombo:function(a,b,c,d){var e=d.grid;c=d.grid.getItem(c);var l=d.grid.comboStatusOptions;if(4!=c.type)return"";var h=
[];if(null!=c.notApplicable&&!1==c.notApplicable[0])for(var g=0;g<l.length;g++)"7"!=l[g].value&&h.push(l[g]);else h=l;if(a){if(0<=b){if(!0==d.grid.isDisabled){for(g=0;g<h.length;g++)if(a==h[g].value)return h[g].label;return a}b=new B({data:f.clone({identifier:"value",label:"label",items:h})});a=new dijit.form.Select({store:b,value:a});a.fisaRowItem=c;a.tabId=e.tabIdvar;a.pageScopeId=e.pageScopeIdvar;a.humanChanged=!0;a.treeGridId=e.id;a.connect(a,"onChange",function(a){if(this!=window){var c=""+this.fisaRowItem.status[0];
if(a!=c){var b={callbackScope:this};b.errorHandler=f.hitch(this,this.errorHandler);b.callback=ec.fisa.format.utils.callBckFnctnSelectDocDwr;DocumentControllerDWR.updateDocumentStatus(this.fisaRowItem.id[0],this.tabId,this.pageScopeId,a,c,b)}}});a.startup();return a}return""}},callBckFnctnSelectDocDwr:function(a){this._lastValueReported=a.RESPONSE_DOC_STATUS;if(void 0!=a.details&&null!=a.details){var b=dijit.byId(this.treeGridId);a.details.status=parseInt(a.RESPONSE_DOC_STATUS);ec.fisa.controller.utils.updateRowTreeGrid(b,
a)}else this.set("value",a.RESPONSE_DOC_STATUS,!1)},formatterBooleanCheckbox:function(a,b,c,d){var e=d.grid;c=d.grid.getItem(c);if(4!=c.type)return"";if(null!=a)return 0<=b?(a=new dijit.form.CheckBox({value:a,checked:a,disabled:!0}),a.fisaRowItem=c,a.tabId=e.tabIdvar,a.pageScopeId=e.pageScopeIdvar,a.connect(a,"onChange",function(a){this!=window&&this.fisaRowItem.required!=a&&(this.fisaRowItem.required=a,DocumentControllerDWR.updateDocumentRequired(this.fisaRowItem.id[0],this.tabId,this.pageScopeId,
a))}),a):""},formatterDataGridBooleanCheckbox:function(a,b,c,d,e){if(null!=a){if(0<=b){var l=c.grid.getItem(b);a=new dijit.form.CheckBox({name:"checkBox",value:a,checked:a,disabled:d});a.onChange=function(a){if(this!=window){var b=c.grid.store;b._entries[l].data[e]=a;b.setValue(l,e,a);this.checked=this.value=a}};return a}return""}},formatterMaxDeliveryDate:function(a,b,c,d){var e=d.grid;c=d.grid.getItem(c);if(a&&0<=b){if(4!=c.type)return"";if(4==c.type&&"false"==c.prolongable&&"false"==c.required)return e=
this._parseDate(a),f.date.locale.format(e,{datePattern:d.grid.cusDateFormat,selector:"date",locale:f.config.fisaCurrentLocale});if(4==c.type&&"true"==c.prolongable&&"false"==c.required){if(!0==d.grid.isDisabled)return e=this._parseDate(a),f.date.locale.format(e,{datePattern:d.grid.cusDateFormat,selector:"date",locale:f.config.fisaCurrentLocale});d=new t({value:a,constraints:{datePattern:d.grid.cusDateFormat},fisaRowItem:c});d.tabId=e.tabIdvar;d.pageScopeId=e.pageScopeIdvar;d.connect(d,"onBlur",function(){if(this!=
window&&(null!=this.fisaRowItem.maxDeliveryDate&&this.fisaRowItem.maxDeliveryDate[0]!=this.displayedValue||null==this.fisaRowItem.maxDeliveryDate)){this.fisaRowItem.maxDeliveryDate=[this.displayedValue];var a=m.parse(this.displayedValue,{datePattern:this.constraints.datePattern,selector:"date",locale:f.config.fisaCurrentLocale});DocumentControllerDWR.updateDocumentMaxDeliveryDate(this.fisaRowItem.id[0],this.tabId,this.pageScopeId,a)}});return d}}return""},formatterRecepcionDate:function(a,b,c,d){return 4==
d.grid.getItem(c).type&&a&&0<=b?(a=this._parseDate(a),f.date.locale.format(a,{datePattern:d.grid.cusDateFormat,selector:"date",locale:f.config.fisaCurrentLocale})):""},formatterExpiracionDate:function(a,b,c,d){var e=d.grid;c=d.grid.getItem(c);if(a&&0<=b){if(4==c.type&&"false"==c.changed&&"true"==c.expires)return e=this._parseDate(a),f.date.locale.format(e,{datePattern:d.grid.cusDateFormat,selector:"date",locale:f.config.fisaCurrentLocale});if(4==c.type&&"true"==c.changed&&"true"==c.expires){if(!0==
d.grid.isDisabled)return e=this._parseDate(a),f.date.locale.format(e,{datePattern:d.grid.cusDateFormat,selector:"date",locale:f.config.fisaCurrentLocale});d=new t({value:a,constraints:{datePattern:d.grid.cusDateFormat},fisaRowItem:c});d.tabId=e.tabIdvar;d.pageScopeId=e.pageScopeIdvar;d.connect(d,"onBlur",function(){if(this!=window&&(null!=this.fisaRowItem.expirationDate&&this.fisaRowItem.expirationDate[0]!=this.displayedValue||null==this.fisaRowItem.expirationDate)){this.fisaRowItem.expirationDate=
[this.displayedValue];var a=m.parse(this.displayedValue,{datePattern:this.constraints.datePattern,selector:"date",locale:f.config.fisaCurrentLocale});DocumentControllerDWR.updateDocumentExpirationDate(this.fisaRowItem.id[0],this.tabId,this.pageScopeId,a)}});return d}}return""},formatterDocumentsOptions:function(a,b,c,d){var e=d.grid;c=e.getItem(c);a=e.labelsColm;var l=f.config.fisaContextPath,h=l+"/pages/DocumentDownload/FISATabId/"+e.tabIdvar+"/FisaPageScopeId/"+e.pageScopeIdvar+"/TREEGRID_NODE_ID/"+
c.id[0],e=l+"/pages/DocumentView/FISATabId/"+e.tabIdvar+"/FisaPageScopeId/"+e.pageScopeIdvar+"/TREEGRID_NODE_ID/"+c.id[0];if(4!=c.type)return"";var g=l=!1,p=!1,k=!1;"true"==c.fileUploaded&&(k=l=!0);"true"==c.changed&&(g=!0);"true"==c.historial&&(p=!0);return 0<=b?new v({rowItemData:c,descargaHref:h,previewHref:e,labels:a,treeGrid:d.grid,descargaVisible:l,undoVisible:g,historyVisible:p,previewVisible:k,descargaTitle:a.treeTableDownload,undoAction:function(){return ec.fisa.navigation.utils.undoTreeGridAction(this.labels,
this.treeGrid,this.rowItemData)},historyAction:function(){return ec.fisa.navigation.utils.historyTreeGridAction(this.treeGrid,this.rowItemData)},undoTitle:a.treeTableUndo,historyTitle:a.treeShowHistory,previewTitle:a.treeDocumentViewer}):""},formatterDocumentsHistoryOptions:function(a,b,c){a=c.grid;c=a.getItem(b);var d=a.labels,e=f.config.fisaContextPath,l=e+"/pages/DocumentHistoryDownload/FISATabId/"+a.tabIdvar+"/FisaPageScopeId/"+a.pageScopeIdvar+"/REQUEST_DOC_HISTORY_NODE_ID_DOC/"+c.documentId[0]+
"/REQUEST_DOC_HISTORY_NODE_ID_RECORD/"+c.recordNumber[0],e=e+"/pages/DocumentHistoryViewDownload/FISATabId/"+a.tabIdvar+"/FisaPageScopeId/"+a.pageScopeIdvar+"/REQUEST_DOC_HISTORY_NODE_ID_DOC/"+c.documentId[0]+"/REQUEST_DOC_HISTORY_NODE_ID_RECORD/"+c.recordNumber[0];return 0<=b?new v({rowItemData:c,descargaHref:l,previewHref:e,labels:d,treeGrid:a,descargaVisible:!0,undoVisible:!1,historyVisible:!1,previewVisible:!0,descargaTitle:d.treeTableDownload,undoTitle:d.treeTableUndo,historyTitle:d.treeShowHistory,
previewTitle:d.treeDocumentViewer}):""},formatterDetail:function(a,b,c,d){return 0==d.grid.getItem(c).type&&a&&0<=b?a:""},cloneRowFunction:function(a,b){var c=ec.fisa.format.utils.simpleCloneRowFunction(a);c.actionId=b.actionId;c.btId=b.btId;c.tabId=b.tabId;c.pageScopeId=b.pageScopeId;return c},simpleCloneRowFunction:function(a){var b={};b.changed=a.changed;b.children=a.children;b.complement=a.complement;b.daysValid=a.daysValid;b.description=a.description;b.expirationDate=a.expirationDate;b.expires=
a.expires;b.historial=a.historial;b.id=a.id;b.maxDeliveryDate=a.maxDeliveryDate;b.prolongable=a.prolongable;b.receptionDate=a.receptionDate;b.required=a.required;b.status=a.status;b.type=a.type;return b},linkPopUpFormatter:function(a,b,c,d){c=d.grid.getItem(c);var e={tabId:d.grid.tabIdvar,btId:d.grid.btIdvar,actionId:d.grid.actionIdvar,pageScopeId:d.grid.pageScopeIdvar},l=f.config.fisaContextPath;if(4==c.type&&a&&0<=b){if(!0==d.grid.isDisabled)return a;a=new r({label:a});a.pageScopeVars=e;a.fisaRowItem=
c;a.treeGrid=d.grid;z(a,"click",function(){var a=ec.fisa.format.utils.cloneRowFunction(this.fisaRowItem,this.pageScopeVars);delete a._0;delete a._RRM;delete a._S;ec.fisa.navigation.utils.openFisaDialog(d.titlePopUp,l+"/pages/static/documents/file_upload.jsp",a,this.treeGrid)})}return a},formatterAgendaActions:function(a,b,c,d,e,f,h){a=c.grid.getItem(b);return new ec.fisa.widget.AgendaActions({tarea:c.grid.store._entries[a].data,botonNodeLabel:d,textoNodeMensaje:e,tabId:f,pageScopeId:h})},formatterAgendaPriority:function(a,
b,c,d,e,f){b=c.grid.getItem(b);return new ec.fisa.widget.Priority({initialPriorityValue:a,tarea:c.grid.store._entries[b].data,tabId:d,pageScopeId:e,readOnlyMode:f})},formatterAgendaLink:function(a,b,c,d,e){b=c.grid.getItem(b);return this.defineAgendaLink(a,b,c.grid.store._entries[b].data,d,e)},defineAgendaLink:function(a,b,c,d,e){if(!(!0==c.hasUrl&&!0!=c.canBeDispatched)){if(null==a||void 0==a)a="...";a=new r({label:a});a.tabId=d;a.pageScopeId=e;a.connect(a,"onClick",function(){ec.fisa.controller.utils.getPageController(this.tabId,
this.pageScopeId).processLinkAction(b,c)})}return a},formatterPopUpKeywords:function(a,b,c){var d=c.grid.getItem(b);if(0<=b){b=null;a&&("string"===typeof a&&-1!=a.indexOf("/"))&&(b=a.split("/"),b=new Date(b[2],b[1]-1,b[0]));if("2"==d.keyDataType[0])return a=new ec.fisa.widget.EnhancedSchedulingDateTextBox({value:b,constraints:{datePattern:c.shortDateFormatTree},fisaRowItem:d,"fisa-tab-id":c.grid.tabId,"fisa-page-scope-id":c.grid.pageScopeId,inputInvalidLabel:c.grid.inputInvalidValueLabel}),a.connect(a,
"onChange",function(){this!=window&&(this.fisaRowItem.value=[this.displayedValue])}),a;if("1"==d.keyDataType[0])return a=new A({value:a,fisaRowItem:d}),a.connect(a,"onBlur",function(){this!=window&&(this.fisaRowItem.value=[this.displayedValue])}),a;"3"==d.keyDataType[0]&&(a=new ec.fisa.widget.NumberTextBox({value:a,fisaRowItem:d,baseClass:"dijit dijitReset dijitInline dijitLeft dijitTextBox dijitNumberTextBox"}),a.connect(a,"onChange",function(a){this!=window&&(this.fisaRowItem.value=[a])}));return a}return""},
formatterMediaNotificationValue:function(a,b,c){c=c.grid.getItem(b);if(0<=b){if(null==a||void 0==a)a=!1;a=new dijit.form.CheckBox({value:a,checked:a});a.fisaRowItem=c;a.connect(a,"onChange",function(a){this!=window&&this.fisaRowItem.value!=a&&(this.fisaRowItem.value=[a])});return a}return""},formatDataGridHistoryDetail:function(a,b,c){b=c.grid.getItem(b);return a&&""!=a?a+" - "+b.recordStatus[0]:""},formatNumber:function(a,b){if(null==a||""===a||void 0===a)return"";"number"!=typeof a&&(a=x.parse(a,
{locale:"en"}));if(isNaN(a))return"";var c="";0>a&&(c="-");var d=0,e=f.config.decimalSeparator,l=f.config.groupSeparator;if(b&&0<b.length){var h=b.indexOf(e);-1<h&&(d=b.substring(h+1).length)}var g=b.split(e),k=d,h=String(Math.abs(a)).split("."),m=h[1]||"";g[1]||options.places?(d=void 0!==d?d:g[1]&&g[1].lastIndexOf("0")+1,d>m.length&&(h[1]=w.pad(m,d,"0",!0)),k<m.length&&(h[1]=m.substr(0,k))):h[1]&&h.pop();k=g[0].replace(e,"");d=k.indexOf("0");-1!=d&&(d=k.length-d,d>h[0].length&&(h[0]=w.pad(h[0],d)),
-1==k.indexOf("#")&&(h[0]=h[0].substr(h[0].length-d)));g[0].lastIndexOf(l);g=[];for(d=h[0];d;)k=d.length-3,g.push(0<k?d.substr(k):d),d=0<k?d.slice(0,k):"";h[0]=g.reverse().join(l);e=h.join(e);return c+e},formatPropertyTextBox:function(a,b,c,d){b=c.grid.getItem(b);a=new dijit.form.TextBox({name:"attribute_vale",value:a,style:{width:"225px"},placeHolder:"Ingrese el valor de la propiedad",readOnly:d});a.rowGridItem=b;a.connect(a,"onChange",function(a){this!=window&&(this.rowGridItem.widget=[a])});return a},
toByteArray:function(a){var b=[];if(null!=a)for(var c=0;c<a.length;++c)b.push(a.charCodeAt(c));return b},absNumber:function(a){return 0>a?-1*a:a},formatQueryTemplateFieldLink:function(a){var b=a.colDef;return(b=b.grid.store.getValue(b.grid.getItem(a.rowIndex),a.fieldId))&&"0"!==b?new ec.fisa.widget.QueryTemplateFieldRoutineLink({fieldId:a.fieldId,tabId:a.tabId,pageScopeId:a.pageScopeId,rowIndex:a.rowIndex,label:a.valueToFormat,routine:a.routine}):a.valueToFormat},formatNumberByFormatType:function(a,
b){var c=null;4==b?c=f.config.fisaNumericPattern:5==b?c=f.config.interestRateFormat:6==b&&(c=f.config.percentageFormat);return null==a?"":null!=c?this.formatNumber(a,c):a},formatterAdditionalUsersLink:function(a,b,c){var d=c.grid.getItem(b);if(0<=b){if(a)return a=new r({label:c.grid.labels.labelChoose,rowGridItem:d,gridId:c.grid,breadCrumbId:c.grid.breadCrumbId,onClick:function(){}}),a.connect(a,"onClick",function(){var a=dijit.byId(this.gridId),b=ec.fisa.controller.utils.getPageController(a.tabId,
a.pageScopeId);b.clearPanelMessage();a.selectedRowGridItem=this.rowGridItem;b.idAdditionalDlg=ec.fisa.navigation.utils.showNewDialogAdditionalCm(a.breadCrumbId,a.tabId,a.pageScopeId,c.grid.labels.contactMedia)}),a}else return""},formatterAdditionalUsersName:function(a,b,c){c=c.grid.getItem(b);0<=b&&(void 0!=a&&null!=a)&&(a=new dijit.form.TextBox({value:a,style:{width:"175px"}}),a.rowGridItem=c,a.connect(a,"onChange",function(a){this!=window&&(this.rowGridItem.name=[a])}));return a},formatterAdditionalUsersOptions:function(a,
b,c){var d=c.grid.getItem(b);0<=b&&(a=new dijit.form.Button({iconClass:"imgDelete",baseClass:"fisaGridButton",showLabel:!1,title:c.grid.labels.labelRemovePersonTitle,style:{width:"24px",height:"24px"}}),a.gridId=c.grid.id,a.rowGridItem=d,a.onClick=function(a){if(this!=window&&(a=dijit.byId(this.gridId),null!=a&&null!=a.store)){var b=this.rowGridItem;void 0!=b.recipientId&&(null!=b.recipientId&&null!=b.recipientId[0])&&ec.fisa.controller.utils.getPageController(a.tabId,a.pageScopeId).deletedItems.push({recipientId:b.recipientId[0]});
a.store.deleteItem(b)}});return a},formatterAdditionalCmData:function(a,b,c){var d=c.grid.getItem(b);0<=b&&(void 0!=a&&null!=a)&&(b=d.contactMedia,a=new dijit.form.ValidationTextBox({value:a,style:{width:"175px"},invalidMessage:this.invalidMessage}),a.grid=c.grid,a.rowGridItem=d,a.connect(a,"onChange",function(a){if(this!=window&&""!=a){var b=ec.fisa.controller.utils.getPageController(this.grid.tabId,this.grid.pageScopeId);b.clearPanelMessageCm();this.isValid()?this.rowGridItem.name=[a]:(this.set("value",
""),this.rowGridItem.name=[""],b.updateMsgsPanelCm([{summary:a+" : "+this.grid.labels.invalidValue,detail:"",level:{level:4E4}}]))}}),"SMS"==b?a.set("regExp",c.grid.numberRegex):"MAIL"==b&&a.set("regExp",c.grid.emailRegex));return a},isObjectEmpty:function(a){if(!(void 0==a||null==a))for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},getEditIcon:function(){return'\x26nbsp\x3cspan\x3e\x3cimg src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVQ4jZXNzyuDcQDH8e/58Sc4m5XlYJcd5MRBilbKgRBfslIODpKbg7IfaKZtDyMlChEXDtT2fR7saauxlicOtCZ5nucinrFJPs6y+j5731+9Camyh8kGVaM1pk6FjEEFZ1V4JxqAtOSBQQUYVIBOhYxlvB0NQJZlMMYg+bpgUAEarTEtYbY6jfWYCFVVUSwWwRjD+Vwf7icdGhcr4gRKBkM+0YKY6IeqqlAUBZuRALg4GRlHSWd4T9nxJhHcHjVjNRzEZtjPx5ehsT/4+bQOadGN+MoQH8vLFCU98Q8nQ90W8OIgPivgq6Cbj5mvt+L5cqmTj+Penorni4UOPj6ecKXNpyuY161/sORv5+NDT5PzZmsGP99llAtneDl3IS26wbxtfEwIIQeeRq/5nMOXpqJcSMG82wCbb7WGCSFkf9SR/cjH8ZrbxuPpLE6mXNYxIYSsDdiwN2LP7lH7wS6tH97tt9VW438B20Aa58Vb6TAAAAAASUVORK5CYII\x3d"/\x3e\x3c/span\x3e'},
addToFieldError:function(a,b,c,d){var e=dijit.byId(a);if(!(e instanceof dijit.form.TextBox&&"hidden"===e.domNode.type)){var l=e.domNode.id+"_tooltip",h=f.byId(l);c=c.level;if(null==h){var g=null,h=null;e.customMsgParent&&(h=e.getBeneficiaryNode());g=e.domNode.parentNode;y.getMarginBox(g);var g=k.create("table",{id:e.domNode.id+"_wrap","class":"fisaCmpMsgWrap",cellpadding:"0",cellspacing:"0",border:"0"},g),g=k.create("tbody",{},g),g=k.create("tr",{},g),m=k.create("td",{},g);k.place(e.domNode,m);e.customMsgParent&&
(m=k.create("td",{},g),k.place(h.domNode,m));e=k.create("td",{},g);e=k.create("div",{"class":"fisaValidTooltip fisaValidTooltipRight"},e);k.create("div",{"class":"fisaValidTooltipConnector"},e);e=k.create("div",{"class":"fisaValidTooltipContainer fisaValidTooltipContents"},e);g=k.create("table",{cellpadding:"0",cellspacing:"0",border:"0"},e);g=k.create("tbody",{},g);g=k.create("tr",{},g);e=k.create("td",{valign:"middle"},g);g=k.create("td",{valign:"middle"},g);h=k.create("span",{id:l,"class":ec.fisa.format.utils._getLevelClass(c)},
e);k.create("span",{},g).innerHTML=b;h.level=c;null!=d&&(d[a]=null)}else h.level<c&&(domAttr.set(h,"class",ec.fisa.format.utils._getLevelClass(c)),h.level=c)}},removeFieldError:function(a){a=dijit.byId(a);var b=f.byId(a.domNode.id+"_wrap");if(null!=b){if(a.customMsgParent){var c=a.getBeneficiaryNode();k.place(c.domNode,b.parentNode.parentNode.children[1])}k.place(a.domNode,b.parentNode);k.destroy(b)}},_getLevelClass:function(a){var b="fisaToolTip";4E4==a?b+=" fisaToolTipError":3E4==a?b+=" fisaToolTipWarn":
2E4==a&&(b+=" fisaToolTipInfo");return b}});u.utils=new n;ec.fisa.format.utils=u.utils;return n});
//@ sourceMappingURL=Utils.js.map