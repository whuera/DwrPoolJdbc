//>>built
require({cache:{"url:ec/fisa/mobile/widget/templates/Select.html":'\x3cdiv\x3e\n\t\x3cselect id\x3d"${id}_select" data-dojo-attach-point\x3d"_select" class\x3d"mblSelect"\x3e${initOptions}\x3c/select\x3e\n\t\x3cdiv class\x3d"mblMobileSelectArrow"\x3e\x3c/div\x3e\n\x3c/div\x3e'}});
define("ec/fisa/mobile/widget/Select","dijit/_WidgetBase dijit/_Templated dojo/text!./templates/Select.html dojo/on dojo/dom-construct ./_MvcMixin dojo/_base/declare dojo/window dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_base/manager dojox/mobile dojox/mobile/compat dojox/mobile/parser dojox/mobile/TextBox ./_base".split(" "),function(e,f,g,l,m,h,k,n,p,q){return k("ec.fisa.mobile.widget.Select",[e,f,h],{_select:null,ftype:"bt",_options:[],widgetsInTemplate:!0,classStyle:"",ioParametters:null,
valueColumn:-1,labelColum:-1,initOptions:"",templateString:g,hasFieldRoutineOrPolicy:!1,actionModeReq:"QY",readOnlyValue:!1,placeHolder:"",isARoutineField:!1,routineActionMode:null,parentEditableGrid:!1,entityMrId:null,gridRealRowIndex:null,postMixInProperties:function(){this.inherited(arguments);var a=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid);null!=a&&(null==this.parentGridId&&(this.value=a.obtainInitialValue(this)),this.options=a.loadSelectData(this,!0));"string"==
typeof this.ioParametters&&(this.ioParametters=eval(this.ioParametters));!0==this.hasFieldRoutineOrPolicy&&(a.addFieldRoutineEvent(this,this.actionModeReq),this._fStarted=!0);!0===this.readOnlyValue&&this._componentNode.set("disabled",this.readOnlyValue);if(null!=this.CCYDependentFields){var b=this.get("value");null!=b&&""!=b&&a.formatCCYRelatedField(this["bt-id"],this,!1)}this._setOptionsAttr()},startup:function(){this.addParamToModel()},buildRendering:function(){this.inherited(arguments);this.on("change",
dojo.hitch(this,this._execChange));initOptions=null},attachOnChangeEvent:function(a,b,c,d){this.isARoutineField=!0;this.routineBtId=b;this.routineFieldId=c;this.routineActionMode=d},_setOptionsAttr:function(a){(this.options=a||this.options)&&dojo.forEach(this.options,function(a,c){this.initOptions+="\x3coption value\x3d'"+a.value+"'";this.value==a.value&&(this.initOptions+="selected\x3d'true'");this.initOptions+=0==c?"\x3e"+this.placeHolder+"\x3c/option\x3e":"\x3e"+a.label+"\x3c/option\x3e"},this)},
_getValueAttr:function(){return this._select.value},_setValueAttr:function(a,b,c){this._select.value=a},_execChange:function(){var a=this["notify-combo-id"],b=this["bt-id"],c=this["field-id"],d=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid);d.clearPanelMessage();void 0!=d&&null!=d&&d.handleOnChangeComponent(c,b,this.routineActionMode,a,this.isARoutineField,this._select.selectedIndex-1,this.parentEditableGrid,this.entityMrId,this.gridRealRowIndex)}})});
//@ sourceMappingURL=Select.js.map