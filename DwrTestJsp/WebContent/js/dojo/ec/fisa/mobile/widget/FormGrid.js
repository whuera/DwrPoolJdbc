//>>built
define("ec/fisa/mobile/widget/FormGrid","dijit/_WidgetBase dojo/_base/declare dojo/_base/kernel dojox/mobile/GridLayout dojox/mobile/_DataListMixin dojo/dom-construct dojo/_base/array dojox/mobile/ContentPane dojox/mobile/TextBox ./_base".split(" "),function(f,l,c,m,n,h,e,k,p){return l("ec.fisa.mobile.widget.FormGrid",[f,n],{fisatabid:"",fisapageid:"",pageLength:"",newButtonLabel:"",selectButtonLabel:"",editButtonLabel:"",deleteButtonLabel:"",addNewButton:"",btId:"",entId:"",structure:null,selectionMode:"",
initialWidth:"",style:"",autoHeight:"",keys:null,block:"",btPos:"",selectable:"",constructor:function(){this.addNewButton=!1},startup:function(){this.inherited(arguments);var a=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid);a.registerTable(this);a.addParamToModel(this,!1)},postMixInProperties:function(){this.inherited(arguments);this.pKeyStr=c.toJson(this.keys.PK);this.fKeyStr=c.toJson(this.keys.FK);this.store=new ec.fisa.dwr.Store("BtControllerDWR","viewEditableMultivalueDataDirect",
this.fisatabid,this.fisapageid,[this["fisa-bt-id"],this.btId,this.entId,this.pKeyStr]);this.store.onNew=this.handleNew;this.store.onSet=this.handleSet},buildRendering:function(){this.inherited(arguments)},generateList:function(a,c){this.append||e.forEach(this.getChildren(),function(a){a.destroyRecursive()},this);var f=new m({cols:this.numberOfCols()},h.create("div",{"class":"multiRegistryGridLayout",style:"width:"+(window.innerWidth-49)+"px;"},this.domNode));e.forEach(a,function(a,c){e.forEach(this.structure[0].cells,
function(d,e){d.grid=this;d.grid.id=this.id;var b=this.store.getValue(a,d.field),g;null!=d.formatter&&(g=d.formatter(b,c,d,a));b=null;0==e%2?(b=new k({"class":"multiregistryOddPane"}),h.place(g,b.domNode,"first")):(b=new k({"class":"multiregistryEvenPane"}),g.placeAt(b.domNode));f.addChild(b)},this)},this)},numberOfCols:function(){return 1},handleSet:function(){},handleNew:function(a,c){},getActionsSelectables:function(){return this.newActions},getActionsNoSelectables:function(){return this.newIndependentActions},
destroy:function(){this.inherited(arguments)},getFisaStore:function(){return ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid).store}})});
//@ sourceMappingURL=FormGrid.js.map