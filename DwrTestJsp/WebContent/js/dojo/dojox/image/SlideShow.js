//>>built
define("dojox/image/SlideShow",["dijit","dojo","dojox","dojo/require!dojo/string,dojo/fx,dijit/_Widget,dijit/_Templated"],function(k,b,n){b.provide("dojox.image.SlideShow");b.require("dojo.string");b.require("dojo.fx");b.require("dijit._Widget");b.require("dijit._Templated");b.declare("dojox.image.SlideShow",[k._Widget,k._Templated],{imageHeight:375,imageWidth:500,title:"",titleTemplate:'${title} \x3cspan class\x3d"slideShowCounterText"\x3e(${current} of ${total})\x3c/span\x3e',noLink:!1,loop:!0,
hasNav:!0,images:[],pageSize:20,autoLoad:!0,autoStart:!1,fixedHeight:!1,imageStore:null,linkAttr:"link",imageLargeAttr:"imageUrl",titleAttr:"title",slideshowInterval:3,templateString:b.cache("dojox.image","resources/SlideShow.html",'\x3cdiv dojoAttachPoint\x3d"outerNode" class\x3d"slideShowWrapper"\x3e\n\t\x3cdiv style\x3d"position:relative;" dojoAttachPoint\x3d"innerWrapper"\x3e\n\t\t\x3cdiv class\x3d"slideShowNav" dojoAttachEvent\x3d"onclick: _handleClick"\x3e\n\t\t\t\x3cdiv class\x3d"dijitInline slideShowTitle" dojoAttachPoint\x3d"titleNode"\x3e${title}\x3c/div\x3e\n\t\t\x3c/div\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"navNode" class\x3d"slideShowCtrl" dojoAttachEvent\x3d"onclick: _handleClick"\x3e\n\t\t\t\x3cspan dojoAttachPoint\x3d"navPrev" class\x3d"slideShowCtrlPrev"\x3e\x3c/span\x3e\n\t\t\t\x3cspan dojoAttachPoint\x3d"navPlay" class\x3d"slideShowCtrlPlay"\x3e\x3c/span\x3e\n\t\t\t\x3cspan dojoAttachPoint\x3d"navNext" class\x3d"slideShowCtrlNext"\x3e\x3c/span\x3e\n\t\t\x3c/div\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"largeNode" class\x3d"slideShowImageWrapper"\x3e\x3c/div\x3e\t\t\n\t\t\x3cdiv dojoAttachPoint\x3d"hiddenNode" class\x3d"slideShowHidden"\x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e'),
_imageCounter:0,_tmpImage:null,_request:null,postCreate:function(){this.inherited(arguments);var a=document.createElement("img");a.setAttribute("width",this.imageWidth);a.setAttribute("height",this.imageHeight);this.hasNav&&(b.connect(this.outerNode,"onmouseover",this,function(a){try{this._showNav()}catch(b){}}),b.connect(this.outerNode,"onmouseout",this,function(a){try{this._hideNav(a)}catch(b){}}));this.outerNode.style.width=this.imageWidth+"px";a.setAttribute("src",this._blankGif);this.largeNode.appendChild(a);
this._tmpImage=this._currentImage=a;this._fitSize(!0);this._loadImage(0,b.hitch(this,"showImage",0));this._calcNavDimensions();b.style(this.navNode,"opacity",0)},setDataStore:function(a,e,c){this.reset();var d=this;this._request={query:{},start:e.start||0,count:e.count||this.pageSize,onBegin:function(a,b){d.maxPhotos=a}};e.query&&b.mixin(this._request.query,e.query);c&&b.forEach(["imageLargeAttr","linkAttr","titleAttr"],function(a){c[a]&&(this[a]=c[a])},this);this.imageStore=a;this._request.onComplete=
function(a){d.maxPhotos=a.length;d._request.onComplete=null;d.autoStart?(d.imageIndex=-1,d.toggleSlideShow()):d.showImage(0)};this._request.start=0;this.imageStore.fetch(this._request)},reset:function(){b.query("\x3e *",this.largeNode).orphan();this.largeNode.appendChild(this._tmpImage);b.query("\x3e *",this.hiddenNode).orphan();b.forEach(this.images,function(a){a&&a.parentNode&&a.parentNode.removeChild(a)});this.images=[];this.isInitialized=!1;this._imageCounter=0},isImageLoaded:function(a){return this.images&&
this.images.length>a&&this.images[a]},moveImageLoadingPointer:function(a){this._imageCounter=a},destroy:function(){this._slideId&&this._stop();this.inherited(arguments)},showNextImage:function(a,e){if(a&&this._timerCancelled)return!1;if(this.imageIndex+1>=this.maxPhotos)if(a&&(this.loop||e))this.imageIndex=-1;else return this._slideId&&this._stop(),!1;this.showImage(this.imageIndex+1,b.hitch(this,function(){a&&this._startTimer()}));return!0},toggleSlideShow:function(){if(this._slideId)this._stop();
else{b.toggleClass(this.domNode,"slideShowPaused");this._timerCancelled=!1;var a=this.imageIndex;if(0>a||this.images[a]&&this.images[a]._img.complete)this.showNextImage(!0,!0)||this._stop();else{var e=b.subscribe(this.getShowTopicName(),b.hitch(this,function(c){setTimeout(b.hitch(this,function(){c.index==a&&(this.showNextImage(!0,!0)||this._stop(),b.unsubscribe(e))}),1E3*this.slideshowInterval)}));b.publish(this.getShowTopicName(),[{index:a,title:"",url:""}])}}},getShowTopicName:function(){return(this.widgetId||
this.id)+"/imageShow"},getLoadTopicName:function(){return(this.widgetId?this.widgetId:this.id)+"/imageLoad"},showImage:function(a,e){!e&&this._slideId&&this.toggleSlideShow();var c=this,d=this.largeNode.getElementsByTagName("div");this.imageIndex=a;var g=function(){if(c.images[a]){for(;c.largeNode.firstChild;)c.largeNode.removeChild(c.largeNode.firstChild);b.style(c.images[a],"opacity",0);c.largeNode.appendChild(c.images[a]);c._currentImage=c.images[a]._img;c._fitSize();b.fadeIn({node:c.images[a],
duration:300,onEnd:function(d,m,g){var f=c.images[a].firstChild;"img"!=f.tagName.toLowerCase()&&(f=f.firstChild);var h=f.getAttribute("title")||"";c._navShowing&&c._showNav(!0);b.publish(c.getShowTopicName(),[{index:a,title:h,url:f.getAttribute("src")}]);e&&e(d,m,g);c._setTitle(h)}}).play()}else c._loadImage(a,function(){c.showImage(a,e)})};d&&0<d.length?b.fadeOut({node:d[0],duration:300,onEnd:function(){c.hiddenNode.appendChild(d[0]);g()}}).play():g()},_fitSize:function(a){!this.fixedHeight||a?b.style(this.innerWrapper,
"height",this._currentImage.height+(this.hasNav?20:0)+"px"):b.style(this.largeNode,"paddingTop",this._getTopPadding()+"px")},_getTopPadding:function(){return!this.fixedHeight?0:(this.imageHeight-this._currentImage.height)/2},_loadNextImage:function(){if(this.autoLoad){for(;this.images.length>=this._imageCounter&&this.images[this._imageCounter];)this._imageCounter++;this._loadImage(this._imageCounter)}},_loadImage:function(a,e){if(!this.images[a]&&this._request){var c=a-a%(this._request.count||this.pageSize);
this._request.start=c;this._request.onComplete=function(b){var d=a-c;b&&b.length>d&&k(b[d])};var d=this,g=this.imageStore,k=function(c){var k=d.imageStore.getValue(c,d.imageLargeAttr),f=new Image,h=b.create("div",{id:d.id+"_imageDiv"+a});h._img=f;var l=d.imageStore.getValue(c,d.linkAttr);!l||d.noLink?h.appendChild(f):b.create("a",{href:l,target:"_blank"},h).appendChild(f);b.connect(f,"onload",function(){g==d.imageStore&&(d._fitImage(f),b.attr(h,{width:d.imageWidth,height:d.imageHeight}),b.publish(d.getLoadTopicName(),
[a]),setTimeout(function(){d._loadNextImage()},1),e&&e())});d.hiddenNode.appendChild(h);b.create("div",{className:"slideShowTitle"},h);d.images[a]=h;b.attr(f,"src",k);(c=d.imageStore.getValue(c,d.titleAttr))&&b.attr(f,"title",c)};this.imageStore.fetch(this._request)}},_stop:function(){this._slideId&&clearTimeout(this._slideId);this._slideId=null;this._timerCancelled=!0;b.removeClass(this.domNode,"slideShowPaused")},_prev:function(){1>this.imageIndex||this.showImage(this.imageIndex-1)},_next:function(){this.showNextImage()},
_startTimer:function(){var a=this.id;this._slideId=setTimeout(function(){k.byId(a).showNextImage(!0)},1E3*this.slideshowInterval)},_calcNavDimensions:function(){b.style(this.navNode,"position","absolute");b.style(this.navNode,"top","-10000px");b.style(this.navPlay,"marginLeft",0);this.navPlay._size=b.marginBox(this.navPlay);this.navPrev._size=b.marginBox(this.navPrev);this.navNext._size=b.marginBox(this.navNext);b.style(this.navNode,{position:"",top:""})},_setTitle:function(a){this.titleNode.innerHTML=
b.string.substitute(this.titleTemplate,{title:a,current:1+this.imageIndex,total:this.maxPhotos||""})},_fitImage:function(a){var b=a.width,c=a.height;b>this.imageWidth&&(c=Math.floor(c*(this.imageWidth/b)),a.height=c,a.width=b=this.imageWidth);c>this.imageHeight&&(b=Math.floor(b*(this.imageHeight/c)),a.height=this.imageHeight,a.width=b)},_handleClick:function(a){switch(a.target){case this.navNext:this._next();break;case this.navPrev:this._prev();break;case this.navPlay:this.toggleSlideShow()}},_showNav:function(a){if(!this._navShowing||
a){this._calcNavDimensions();b.style(this.navNode,"marginTop","0px");a=b.style(this.navNode,"width")/2-this.navPlay._size.w/2-this.navPrev._size.w;console.log("navPlayPos \x3d "+b.style(this.navNode,"width")/2+" - "+this.navPlay._size.w+"/2 - "+this.navPrev._size.w);b.style(this.navPlay,"marginLeft",a+"px");b.marginBox(this.outerNode);a=this._currentImage.height-this.navPlay._size.h-10+this._getTopPadding();a>this._currentImage.height&&(a+=10);b[1>this.imageIndex?"addClass":"removeClass"](this.navPrev,
"slideShowCtrlHide");b[this.imageIndex+1>=this.maxPhotos?"addClass":"removeClass"](this.navNext,"slideShowCtrlHide");var e=this;this._navAnim&&this._navAnim.stop();this._navShowing||(this._navAnim=b.fadeIn({node:this.navNode,duration:300,onEnd:function(){e._navAnim=null}}),this._navAnim.play(),this._navShowing=!0)}},_hideNav:function(a){if(!a||!this._overElement(this.outerNode,a)){var e=this;this._navAnim&&this._navAnim.stop();this._navAnim=b.fadeOut({node:this.navNode,duration:300,onEnd:function(){e._navAnim=
null}});this._navAnim.play();this._navShowing=!1}},_overElement:function(a,e){if("undefined"==typeof b)return!1;a=b.byId(a);var c=e.pageX,d=e.pageY,g=b.position(a,!0);return c>=g.x&&c<=g.x+g.w&&d>=g.y&&d<=top+g.h}})});
//@ sourceMappingURL=SlideShow.js.map