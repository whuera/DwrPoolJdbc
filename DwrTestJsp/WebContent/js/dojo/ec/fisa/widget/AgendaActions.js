//>>built
require({cache:{"url:ec/fisa/widget/templates/AgendaActions.html":'\x3ctable border\x3d"0" cellpadding\x3d"0" cellspacing\x3d"0" width\x3d""\x3e\n\t\x3ctbody\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cdiv id\x3d"${id}_seleccion" data-dojo-attach-point\x3d"_seleccionNode" data-dojo-type\x3d"dijit.form.Select"  \x3e\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\x26nbsp;\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\n\t\t\t\t\x3cbutton id\x3d"${id}_boton" data-dojo-attach-point\x3d"_botonNode" data-dojo-type\x3d"dijit.form.Button"   \x3e\x3c/button\x3e\n\t\t\t\x3c/td\x3e\n\t\t\t\x3ctd\x3e\x26nbsp;\x3c/td\x3e\n\t\t\t\x3ctd\x3e\x3cdiv id\x3d"${id}_indicaciones" data-dojo-attach-point\x3d"_textoNode"  \x3e\x3c/div\x3e\x3c/td\x3e\n\t\t\x3c/tr\x3e\t\n\t\x3c/tbody\x3e\n\x3c/table\x3e\n\t\n\t\n'}});
define("ec/fisa/widget/AgendaActions","dijit/_Widget dijit/_Templated dojo/_base/declare dojo/dom-style dojo/html dojo/on dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!ec/fisa/widget/templates/AgendaActions.html dijit/form/Button dijit/form/Select ./_base".split(" "),function(d,e,f,b,g,c,h,k,l){return f("ec.fisa.widget.AgendaActions",[d,e,h,k],{widgetsInTemplate:!0,_seleccionNode:null,_botonNode:null,_textoNode:null,_destroyOnRemove:!0,botonNodeLabel:null,textoNodeMensaje:null,tarea:null,
tabId:null,pageScopeId:null,templateString:l,constructor:function(){},postCreate:function(){this.inherited(arguments);this._init()},logger:function(a){},_init:function(){this._initSeleccionNode();this._initBotonNode();this._initTextoNode()},_initSeleccionNode:function(){this.tarea.canBeDispatched&&!this.tarea.isPersonalizedTask?(b.set(this._seleccionNode.domNode,"display","block"),this._seleccionNode.set("options",this.tarea.taskActions),(this.tarea.retypeNeeded||this.tarea.isFlowTask)&&this._seleccionNode.set("disabled",
!0),this._seleccionNode.fw=this,c(this._seleccionNode,"change",this._setupSelectedAction)):b.set(this._seleccionNode.domNode,"display","none")},_initBotonNode:function(){this.tarea.canBeDispatched&&!this.tarea.isPersonalizedTask?!this.tarea.retypeNeeded&&!this.tarea.isFlowTask?(b.set(this._botonNode.domNode,"display","block"),this._botonNode.set("label",this.botonNodeLabel),this._botonNode.fw=this,c(this._botonNode,"click",this._dispatchTask)):b.set(this._botonNode.domNode,"display","none"):b.set(this._botonNode.domNode,
"display","none")},_initTextoNode:function(){this.tarea.retypeNeeded&&g.set(this._textoNode,this.textoNodeMensaje)},_dispatchTask:function(){var a=this.fw.tarea,a={taskId:a.taskId,customizedActionId:a.customizedActionId,customizedActionFilter:a.customizedActionFilter,newActionStatusFilter:a.newActionStatusFilter,status:a.status,urlInfo:a.urlInfo,dataKey:a.dataKey,btKeys:a.btKeys,taskSystem:a.taskSystem,taskSubSystem:a.taskSubSystem,referenceCode:a.referenceCode,taskTypeId:a.taskTypeId,taskComment:a.taskComment,
$dwrClassName:"TaskVO"};ec.fisa.controller.utils.getPageController(this.fw.tabId,this.fw.pageScopeId).dispatchTask(a,this.fw.tabId,this.fw.pageScopeId)},_setupSelectedAction:function(a){this.fw.tarea.newActionStatusFilter=a},_getTareaAttr:function(){return this.tarea},_setTareaAttr:function(a){this.tarea=a},_getBotonNodeLabelAttr:function(){return this.botonNodeLabel},_setBotonNodeLabelAttr:function(a){this.botonNodeLabel=a},_getTextoNodeMensajeAttr:function(){return this.textoNodeMensaje},_setTextoNodeMensajeAttr:function(a){this.textoNodeMensaje=
a},_getTabIdAttr:function(){return this.tabId},_setTabIdAttr:function(a){this.tabId=a},_getPageScopeIdAttr:function(){return this.pageScopeId},_setPageScopeIdAttr:function(a){this.pageScopeId=a}})});
//@ sourceMappingURL=AgendaActions.js.map