//>>built
define("ec/fisa/grid/_View",["dojo/_base/declare","dojox/grid/util","./_AlignHeaderView","./_base"],function(a,b,c){return a("ec.fisa.grid._View",[c],{postCreate:function(){this.connect(this.scrollboxNode,"onscroll","doscroll");b.funnelEvents(this.headerNode,this,"doHeaderEvent","dblclick mouseover mouseout mousemove mousedown click contextmenu".split(" "));this.content=new this._contentBuilderClass(this);this.header=new this._headerBuilderClass(this);this.grid.isLeftToRight()||(this.headerNodeContainer.style.width=
"")}})});
//@ sourceMappingURL=_View.js.map