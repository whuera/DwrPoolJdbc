//>>built
define("ec/fisa/mobile/widget/_MvcMixin",["dojo/_base/declare","./_base"],function(f){return f("ec.fisa.mobile.widget._ButtonMixin",null,{addParamToModel:function(){if("BT"==this.ftype||"BT_FOR_READ"==this.ftype||"BT_HOLD"==this.ftype||"BT_AUTORIZATION"==this.ftype||"BT_AUTORIZATION_FOR_READ"==this.ftype){var a=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid);this.data=a.data;this.model=a.model;this.addParamToModelBt(this);delete this.data;delete this.model;delete this.parentData}else"QT"==
this.ftype||"QT_FOR_READ"==this.ftype||"QT_PORTLET"==this.ftype?(a=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid),this.data=a.data,this.model=a.model,this.modelComplement=a.modelComplement,this.parentData=a.parentData,this.parentComplementData=a.parentComplementData,this.addParamToModelQt(this),delete this.data,delete this.model,delete this.modelComplement,delete this.parentData,delete this.parentComplementData):"AGD"==this.ftype&&(a=ec.fisa.controller.utils.getPageController(this.fisatabid,
this.fisapageid),this.addParamModelAgenda(this,a))},addParamToModelBt:function(a){var b=a["bt-id"],c=a["field-id"],d=null;this.data&&(this.data[b]&&this.data[b].dataMessage)&&(d=this.data[b].dataMessage.fields[c]);null==d?(d={value:"",complement:null},a._fStarted=!0):null==d.value?(d.value="",a._fStarted=!0):""==d.value&&(a._fStarted=!0);if(this.model.contains(b))this.model.contains([b,"dataMessage","fields",c])&&this.model.setValue([b,"dataMessage","fields",c,"value"],d.value);else{this.model.appendObject([b,
"dataMessage","fields",c,"value"],d.value,a.id,"value",null,!1);var e=null;void 0!=d.enabled&&(e=d.enabled);this.model.appendObject([b,"dataMessage","fields",c,"enabled"],e,a.id,"enabled",null,!1);a.hasCompl&&this.model.appendObject([b,"dataMessage","fields",c,"complement"],d.complement,a.id,"complement",null,!1)}},addParamToModelQt:function(a){var b=a["field-id"];if(!this.model.contains(b)){var c=this.parentData[b],d=null;c?(d=null,d=c.get?c.get("value"):c):d="";this.model.appendObject([b],d,a.id,
"value",null,!0);a.hasCompl&&((c=this.parentComplementData[b])||(c=""),this.modelComplement.appendObject([b],c,a.id,"complement",null,!1))}},addParamModelAgenda:function(a,b){var c=a["field-id"];fieldValue=b.initData[c];b.model.contains(c)?b.model.setValue([c],fieldValue):b.model.appendObject([c],fieldValue,a.id,"value",null,!1)}})});
//@ sourceMappingURL=_MvcMixin.js.map