//>>built
require({cache:{"url:ec/fisa/widget/TextBox.conf":"{\n\tfisaClassic:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t},\n\tfisaDesert:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t}\n\n}","url:ec/fisa/mobile/widget/templates/OutputText.html":'\x3cdiv\x3e\n\t\x3cdiv id\x3d"${id}_complement" data-dojo-attach-point\x3d"_componentNode" class\x3d"${styleClass}"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("ec/fisa/mobile/widget/OutputText","./_base dijit/_Widget dijit/_Templated dojo/_base/declare dojo/number dojo/text!./templates/OutputText.html dojo/text!ec/fisa/widget/TextBox.conf ./_MvcMixin".split(" "),function(k,c,d,e,l,f,g,h){return e("ec.fisa.mobile.widget.OutputText",[c,d,h],{readOnly:!0,_componentNode:null,styleClass:"",password:!1,widgetsInTemplate:!1,value:"",ftype:"",format:0,textBoxConfig:dojo.fromJson(g),numericFormat:dojo.config.fisaNumericPattern,tasasFormat:dojo.config.interestRateFormat,
porcentajeFormat:dojo.config.percentageFormat,currencyFormat:dojo.config.fisaDefaultCurrency,decimalSeparator:dojo.config.decimalSeparator,groupSeparator:dojo.config.groupSeparator,templateString:f,postMixInProperties:function(){this.inherited(arguments);null==this.value&&(this.value="")},postCreate:function(){this.inherited(arguments);this.value&&this._valueSetter(this.value)},buildRendering:function(){this.inherited(arguments)},startup:function(){this.addParamToModel()},destroyRendering:function(){delete this._componentNode;
this.inherited(arguments)},_setBindingAttr:function(){this._componentNode.set("binding",value)},_getValueAttr:function(){return this.value},_setValueAttr:function(a,b,c){this._valueSetter(a)},_valueSetter:function(a){this.value=a;!0==this.password&&(a=this._maskValue(a));null==this.value||""==this.value?this._componentNode.innerHTML="":!0==this.password?this._componentNode.innerHTML=a:(1==this.format||2==this.format||3==this.format?this.value=this.formatDatebyFormatId(a,this.format):4==this.format?
this.value=this.formatNumber(a,{pattern:this.numericFormat}):5==this.format?this.value=this.formatNumber(a,{pattern:this.tasasFormat}):6==this.format&&(this.value=this.formatNumber(a,{pattern:this.porcentajeFormat})),this._componentNode.innerHTML=this.value)},_maskValue:function(a){var b="";null!=a&&""!=a&&(b=a.replace(/./g,"*"));return b},formatNumber:function(a,b){return ec.fisa.format.utils.formatNumber(a,b.pattern)},formatDatebyFormatId:function(a,b){return ec.fisa.format.utils.formatDateByFormatId(a,
b)}})});
//@ sourceMappingURL=OutputText.js.map