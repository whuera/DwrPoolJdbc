//>>built
define("ec/fisa/mobile/widget/QtParameterButton",["dojo/_base/declare","dojox/mobile/Button","ec/fisa/controller/Utils","./_base"],function(a,b){return a("ec.fisa.mobile.widget.QtParameterButton",[b],{"field-id":"",fisatabid:"",fisapageid:"",buildRendering:function(){this.inherited(arguments);"LBL_SEARCH"==this["field-id"]&&(this.onClick=this.searchAction)},searchAction:function(){this.getController().search(!0,!0)},getController:function(){return ec.fisa.controller.utils.getPageController(this.fisatabid,
this.fisapageid)}})});
//@ sourceMappingURL=QtParameterButton.js.map