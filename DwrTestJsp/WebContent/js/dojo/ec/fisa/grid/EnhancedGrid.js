//>>built
define("ec/fisa/grid/EnhancedGrid","dojo/_base/kernel dojo/_base/declare dojox/grid/EnhancedGrid ec/fisa/grid/enhanced/_PluginManager dojo/_base/sniff ec/fisa/grid/_View ec/fisa/grid/_AlignHeaderView ./_base".split(" "),function(d,e,f,g,h){d.experimental("ec.fisa.grid.EnhancedGrid");return e("ec.fisa.grid.EnhancedGrid",f,{_pluginMgrClass:g,fisaEditableGrid:!1,_fr:!1,destroyRendering:function(){this.store&&this._store_connects&&d.forEach(this._store_connects,this.disconnect,this);if(this.store){var a=
this.store;delete this.store;a.destroy&&a.destroy();delete a}},buildViews:function(){var a="ec.fisa.grid._View";this.fisaEditableGrid||(a="ec.fisa.grid._AlignHeaderView");for(var b=0,c;c=this.layout.structure[b];b++)this.createView(c.type||a,b).setStructure(c);this.scroller.setContentNodes(this.views.getContentNodes())},postresize:function(){if(this._autoHeight){var a=null,a=h("ie")?this.views.measureContent()+5:this.views.measureContent(),a=Math.max(a)+"px";this.viewsNode.style.height=a}},refresh:function(){this._refresh(!0)},
resize:function(){this._fr=!0;this.inherited(arguments);this._fr=!1}})});
//@ sourceMappingURL=EnhancedGrid.js.map