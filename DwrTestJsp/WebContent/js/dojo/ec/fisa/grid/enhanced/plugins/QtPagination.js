//>>built
define("ec/fisa/grid/enhanced/plugins/QtPagination","dojo/_base/kernel dojo/_base/declare dojo/dom-construct dojo/_base/connect dojo/dom-style dojox/grid/EnhancedGrid dojox/grid/enhanced/plugins/Pagination dijit/form/Button dijit/form/Select".split(" "),function(c,e,d,h,b,f,g,k,l){c=e("ec.fisa.grid.enhanced.plugins.QtPagination",[g],{name:"fisaQtPagination",description:!1,pageStepper:!0,pageSizes:null,maxPageStep:4,position:"bottom",selectButton:null,execButton:null,closeButton:null,select:null,buttonArray:null,
init:function(){this.pageSizes=[this.grid.pageLength?this.grid.pageLength:10];this.inherited(arguments);this.initExecOptions();this.hidePageSizes();this._paginator._updatePageStepNodesStyleBK=this._paginator._updatePageStepNodesStyle;this._paginator._updatePageStepNodesStyle=this._updatePageStepNodesStyle},destroy:function(){this.option&&(this.option.onSelect&&delete this.option.onSelect,this.option.onExecute&&delete this.option.onExecute,this.option.onClose&&delete this.option.onClose);this.inherited(arguments);
if(this.selectButton){var a=this.selectButton;delete this.selectButton;a.destroy(!1)}this.execButton&&(a=this.execButton,delete this.execButton,a.destroy(!1));this.closeButton&&(a=this.closeButton,delete this.closeButton,a.destroy(!1));this.select&&(a=this.select,delete this.select,a.destroy(!1));null!=this.buttonArray&&dojo.forEach(this.buttonArray,function(a){delete a;a.destroy(!1)})},initExecOptions:function(){if(this.option.islov)!1!=this.option.indirectSelectionVar?(this.selectButton=new dijit.form.Button({id:this.grid.id+
"_selectButton",label:this.grid.selectButtonLabel,tabIndex:0},d.create("div",null,this._paginator.descriptionTd)),this.connect(this.selectButton,"onClick",this.option.onSelect)):!0==this.option.lovInfoMode&&(this.closeButton=new dijit.form.Button({id:this.grid.id+"_closeButton",label:this.grid.closeButtonLabel,tabIndex:0},d.create("div",null,this._paginator.descriptionTd)),this.connect(this.closeButton,"onClick",this.option.onClose));else if(this.option.options&&this.option.options.length)if("1"==
this.option.isFinalUser)this.buttonArray=[],dojo.forEach(this.option.options,dojo.hitch(this,function(b){var c=new dijit.form.Button({id:a,label:b.label,tabIndex:0},d.create("div",null,this._paginator.descriptionTd));this.connect(c,"onClick",dojo.hitch(this,function(){this.grid.executeAction(this.grid.qtId,b.value)}));this.buttonArray.push(c)}));else{var a=this.grid.id+"_execButton";this.select=new dijit.form.Select({id:this.grid.id+"_options",options:this.option.options,tabIndex:0},d.create("div",
null,this._paginator.descriptionTd));this.execButton=new dijit.form.Button({id:a,label:this.grid.execButtonLabel,tabIndex:0},d.create("div",null,this._paginator.descriptionTd));this.connect(this.execButton,"onClick",this.option.onExecute)}this.grid._messagesId=this.grid.id+"_messages";d.create("span",{id:this.grid._messagesId,"class":"dojoxGridMessages"},this._paginator.descriptionTd)},hidePageSizes:function(){b.set(this._paginator.sizeSwitchTd,"visibility","hidden");b.set(this._paginator.sizeSwitchTd,
"width","0%");b.set(this._paginator.descriptionTd,"width","65%")},_updatePageStepNodesStyle:function(){this._updatePageStepNodesStyleBK();var a=this.plugin.getTotalPageNum();if(!this.islov&&(null==this.options||0==this.options.length))1>=a?b.set(this.plugin._paginator.pageStepperTd,"visibility","hidden"):b.set(this.plugin._paginator.pageStepperTd,"visibility","")}});f.registerPlugin(c);return c});
//@ sourceMappingURL=QtPagination.js.map