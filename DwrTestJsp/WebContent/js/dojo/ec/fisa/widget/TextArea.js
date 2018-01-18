//>>built
require({cache:{"url:ec/fisa/widget/TextArea.conf":"{\n\tfisaClassic:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20,\n\t\tvOffset:0,\n\t\thOffset:0\n\t\t\n\t},\n\tfisaDesert:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20,\n\t\tvOffset:0,\n\t\thOffset:0\n\t}\n\n}","url:ec/fisa/widget/templates/TextArea.html":'\x3cdiv\x3e\n\t\x3cdiv id\x3d"${id}_textArea" data-dojo-attach-point\x3d"_componentNode" tabIndex\x3d"${_tabIndex}"\n\t\tdojoType\x3d"dijit.form.SimpleTextarea" ${_readOnlyExp} rows\x3d"${rows}" cols\x3d"${cols}" data-dojo-props\x3d\'${_dojoProps}\'\n\t\t title\x3d"${title}" baseClass\x3d"${textAreaBaseClass}"  ${styleExp} ${_maxLengthExp}\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("ec/fisa/widget/TextArea","dijit/_Widget dijit/_Templated dojo/_base/declare dojo/number dojo/on dojo/keys dijit/form/TextBox ec/fisa/widget/NumberTextBox ec/fisa/widget/Utils dojo/text!ec/fisa/widget/templates/TextArea.html dojo/text!ec/fisa/widget/TextArea.conf dojo/_base/sniff dojo/dom-style ec/fisa/widget/OutputText ec/fisa/controller/Utils dijit/form/SimpleTextarea ./_base".split(" "),function(f,g,h,p,q,r,s,t,e,k,l,m,n){return h("ec.fisa.widget.TextArea",[f,g],{readOnly:!1,_readOnlyExp:"",
title:"",style:"",textAreaBaseClass:"",textAreaConfig:dojo.fromJson(l),widgetsInTemplate:!0,_componentNode:null,actionMode:"",tabId:"",pageScopeId:"",maxLength:-1,visualSize:-1,cols:50,rows:5,styleExp:"",tabIndexField:null,_tabIndex:0,templateString:k,isARoutineField:!1,routineActionMode:null,parentEditableGrid:!1,inputConstraint:"",entityMrId:null,hasBeneficiarySelectionLink:!1,javaScriptValidator:"",additionalInfo:"",_destroyOnRemove:!0,gridId:null,fieldId:null,customMsgParent:!1,_dojoProps:"trim:true",
textTransform:"",postMixInProperties:function(){this.inherited(arguments);0<=this.maxLength&&(this._maxLengthExp="maxLength\x3d"+this.maxLength);var a=ec.fisa.widget.utils.parseTextAreaSize(this.visualSize);null!=a.cols&&(this.cols=a.cols);null!=a.rows&&(this.rows=a.rows);this.styleExp="style\x3d'";if("QY"==this.actionMode||"QH"==this.actionMode||"DE"==this.actionMode||"DH"==this.actionMode)this.styleExp+="border-color:white;background:white;";0<this.cols&&(this.styleExp+="width:",this.styleExp+=
this.textAreaConfig[dojo.config.fisaTheme].textCharWidth*this.cols+this.textAreaConfig[dojo.config.fisaTheme].vOffset,this.styleExp+="px;");0<this.rows&&(this.styleExp+="height:",this.styleExp+=this.textAreaConfig[dojo.config.fisaTheme].textCharHeight*this.rows+this.textAreaConfig[dojo.config.fisaTheme].hOffset,this.styleExp+="px;");null!=this.tabIndexField&&(this._tabIndex=this.tabIndexField);"1"==this.textTransform?(this._dojoProps+=", uppercase:true ",this.styleExp+="text-transform:uppercase;"):
"2"==this.textTransform?(this._dojoProps+=", lowercase:true ",this.styleExp+="text-transform:lowercase;"):"3"==this.textTransform?(this._dojoProps+=", propercase:true ",this.styleExp+="text-transform:capitalize;"):this._dojoProps="";this.styleExp+="'"},buildRendering:function(){this.inherited(arguments);(!0==this.readOnly||"QY"==this.actionMode||"QH"==this.actionMode||"DE"==this.actionMode||"DH"==this.actionMode)&&this._componentNode.set("disabled",this.readOnly);null!=this.inputConstraint&&""!=this.inputConstraint&&
e.inputConstraint(this._componentNode,this.inputConstraint);m("ie")&&e.setAcceptByLength(this._componentNode,this.maxLength)},startup:function(){this.inherited(arguments);var a=this._componentNode;a.connect(a,"onChange",dojo.hitch(this,this._execChange));(!0==this.hasBeneficiarySelectionLink||"true"==this.hasBeneficiarySelectionLink)&&n.set(this.domNode,"float","left")},destroy:function(){ec.fisa.widget.utils.destroyMultiregisterWidget(this);this.inherited(arguments)},_getRefAttr:function(){return this._componentNode.get("ref")},
_setRefAttr:function(a){this._componentNode.set("ref",a)},_getValueAttr:function(){return this._componentNode.get("value")},_setValueAttr:function(a,c,b){this._componentNode.set("value",a,c,b);"boolean"===typeof c&&!c&&(this._componentNode._pendingOnChange=!1,this._componentNode._lastValueReported=a)},attachOnChangeEvent:function(a,c,b,d){!0==this._fStarted&&(this._componentNode._fStarted=!0,delete this._fStarted);this.isARoutineField=!0;this.routineBtId=c;this.routineFieldId=b;this.routineActionMode=
d},_execChange:function(){var a=this["field-id"],c=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);if(!0==c.applyValidator(this)){var b=this["notify-combo-id"];if(null!=b&&void 0!=b||!0==this.isARoutineField){var d=this["bt-id"];void 0!=c&&null!=c&&c.handleOnChangeComponent(a,d,this.routineActionMode,b,this.isARoutineField,null,this.parentEditableGrid,this.entityMrId)}}},_setEnabledAttr:function(a){null!=a&&(a?ec.fisa.widget.utils.enableWidget(this._componentNode):ec.fisa.widget.utils.disableWidget(this._componentNode))},
_getEnabledAttr:function(){return ec.fisa.widget.utils.isEnabled(this._componentNode)},getParentMsgComponent:function(){return this.customMsgParent?this.domNode.parentNode.parentNode.parentNode.parentNode.parentNode:this.domNode.parentNode},getBeneficiaryNode:function(){if(this.customMsgParent){var a,c=this.domNode.parentNode.parentNode.children[1].childNodes;void 0!==c&&dojox.lang.functional.forIn(c,dojo.hitch(this,function(b){void 0!=b&&(null!=b&&void 0!=b.id&&null!=b.id&&""!=b.id)&&(a=b.id)}));
return dijit.byId(a)}return this.domNode}})});
//@ sourceMappingURL=TextArea.js.map