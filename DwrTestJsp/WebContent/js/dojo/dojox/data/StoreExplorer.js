//>>built
define("dojox/data/StoreExplorer",["dijit","dojo","dojox","dojo/require!dojox/grid/DataGrid,dojox/data/ItemExplorer,dijit/layout/BorderContainer,dijit/layout/ContentPane"],function(k,d,p){d.provide("dojox.data.StoreExplorer");d.require("dojox.grid.DataGrid");d.require("dojox.data.ItemExplorer");d.require("dijit.layout.BorderContainer");d.require("dijit.layout.ContentPane");d.declare("dojox.data.StoreExplorer",k.layout.BorderContainer,{constructor:function(a){d.mixin(this,a)},store:null,columnWidth:"",
stringQueries:!1,showAllColumns:!1,postCreate:function(){function a(e,a){var b=new k.form.Button({label:e});n.containerNode.appendChild(b.domNode);b.onClick=a;return b}var c=this;this.inherited(arguments);var n=(new k.layout.ContentPane({region:"top"})).placeAt(this),g=n.containerNode.appendChild(document.createElement("span"));g.innerHTML="Enter query: \x26nbsp;";g.id="queryText";var m=n.containerNode.appendChild(document.createElement("input"));m.type="text";m.id="queryTextBox";a("Query",function(){var e=
m.value;c.setQuery(c.stringQueries?e:d.fromJson(e))});n.containerNode.appendChild(document.createElement("span")).innerHTML="\x26nbsp;\x26nbsp;\x26nbsp;";var s=a("Create New",d.hitch(this,"createNew")),t=a("Delete",function(){for(var e=b.selection.getSelected(),a=0;a<e.length;a++)c.store.deleteItem(e[a])});this.setItemName=function(a){s.attr("label","\x3cimg style\x3d'width:12px; height:12px' src\x3d'"+d.moduleUrl("dijit.themes.tundra.images","dndCopy.png")+"' /\x3e Create New "+a);t.attr("label",
"Delete "+a)};a("Save",function(){c.store.save({onError:function(a){alert(a)}});c.tree.refreshItem()});a("Revert",function(){c.store.revert()});a("Add Column",function(){var a=prompt("Enter column name:","property");a&&(c.gridLayout.push({field:a,name:a,formatter:d.hitch(c,"_formatCell"),editable:!0}),c.grid.attr("structure",c.gridLayout))});var g=(new k.layout.ContentPane({region:"center"})).placeAt(this),b=this.grid=new p.grid.DataGrid({store:this.store});g.attr("content",b);b.canEdit=function(a,
b){var c=this._copyAttr(b,a.field);return!(c&&"object"==typeof c)||c instanceof Date};var g=(new k.layout.ContentPane({region:"trailing",splitter:!0,style:"width: 300px"})).placeAt(this),f=this.tree=new p.data.ItemExplorer({store:this.store});g.attr("content",f);d.connect(b,"onCellClick",function(){var a=b.selection.getSelected()[0];f.setItem(a)});this.gridOnFetchComplete=b._onFetchComplete;this.setStore(this.store)},setQuery:function(a,c){this.grid.setQuery(a,c)},_formatCell:function(a){return this.store.isItem(a)?
this.store.getLabel(a)||this.store.getIdentity(a):a},setStore:function(a){function c(a){return d._formatCell(a)}this.store=a;var d=this,g=this.grid;g._pending_requests[0]=!1;var m=this.gridOnFetchComplete;g._onFetchComplete=function(k,p){var b=d.gridLayout=[],f,e,l,h,q;f=a.getIdentityAttributes();for(l=0;l<f.length;l++)e=f[l],b.push({field:e,name:e,_score:100,formatter:c,editable:!1});for(l=0;e=k[l++];){var u=a.getAttributes(e);for(q=0;e=u[q++];){var r=!1;for(h=0;f=b[h++];)if(f.field==e){f._score++;
r=!0;break}r||b.push({field:e,name:e,_score:1,formatter:c,styles:"white-space:nowrap; ",editable:!0})}}b=b.sort(function(a,b){return b._score-a._score});if(!d.showAllColumns)for(h=0;f=b[h];h++)if(f._score<k.length/40*h){b.splice(h,b.length-h);break}for(h=0;f=b[h++];)f.width=d.columnWidth||Math.round(100/b.length)+"%";g._onFetchComplete=m;g.attr("structure",b);m.apply(this,arguments)};g.setStore(a);this.queryOptions={cache:!0};this.tree.setStore(a)},createNew:function(){var a=prompt("Enter any properties (in JSON literal form) to put in the new item (passed to the newItem constructor):",
"{ }");if(a)try{this.store.newItem(d.fromJson(a))}catch(c){alert(c)}}})});
//@ sourceMappingURL=StoreExplorer.js.map