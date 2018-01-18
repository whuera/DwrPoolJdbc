//>>built
define("ec/fisa/widget/Utils","dojo/_base/declare ./_base dojo/keys dojo/_base/connect dojo/_base/lang dijit/focus dojo/has dojo/_base/sniff".split(" "),function(e,f,c,l,h,d,k){e=e("ec.fisa.widget.Utils",null,{regexpr:/[0-9\-]|\.|,|[mtMT]/,regexprNoShorcut:/[0-9\-]|\.|,/,curNodeFocus:null,prevNodeFocus:null,_lastExec:null,setAcceptOnlyNumeric:function(b,a){var c=null,c=!1==a?this.regexpr:this.regexprNoShorcut;b.textbox.onkeypress=function(a){a=a||window.event;var b=a.keyCode||a.which;return ec.fisa.widget.utils.verifyKey(a)&&
ec.fisa.widget.utils.verifyKeyPaste(a)?(b=String.fromCharCode(b),(b=c.test(b))||dojo.stopEvent(a),b):!0}},setAcceptByLength:function(b,a){null!=a&&0<a&&(b.domNode.reval=a-1,b.domNode.onkeydown=dojo.hitch(b.domNode,function(a){a=a||window.event;if(ec.fisa.widget.utils.verifyKey(a)){var b=this.reval>this.value.length;b||dojo.stopEvent(a);return b}return!0}))},inputConstraint:function(b,a){a=RegExp(a);b.textbox.onkeypress=function(b){b=b||window.event;var c=b.keyCode||b.which;return ec.fisa.widget.utils.verifyKey(b)?
(c=String.fromCharCode(c),(c=a.test(c))||dojo.stopEvent(b),c):!0}},verifyKeyPaste:function(b){return b.ctrlKey&&118==b.charCode?(dojo.stopEvent(theEvent),!1):!0},verifyKey:function(b){var a=!0,g=b.keyCode;if(dojo.isChrome)return a;if(dojo.isIE){switch(g){case c.ENTER:a=!1;break;case c.BACKSPACE:a=!1}return a}if(k("trident"))return a;if(b.ctrlKey||b.altKey)return!1;switch(g){case c.BACKSPACE:a=!1;break;case c.TAB:a=!1;break;case c.CLEAR:a=!1;break;case c.ENTER:a=!1;break;case c.SHIFT:a=!1;break;case c.CTRL:a=
!1;break;case c.ALT:a=!1;break;case c.META:a=!1;break;case c.PAUSE:a=!1;break;case c.CAPS_LOCK:a=!1;break;case c.ESCAPE:a=!1;break;case c.SPACE:a=!1;break;case c.PAGE_UP:a=!1;break;case c.PAGE_DOWN:a=!1;break;case c.END:a=!1;break;case c.HOME:a=!1;break;case c.LEFT_ARROW:a=!1;break;case c.UP_ARROW:a=!1;break;case c.RIGHT_ARROW:a=!1;break;case c.DOWN_ARROW:a=!1;break;case c.INSERT:a=!1;break;case c.DELETE:a=!1;break;case c.HELP:a=!1;break;case c.LEFT_WINDOW:a=!1;break;case c.RIGHT_WINDOW:a=!1;break;
case c.SELECT:a=!1;break;case c.NUMPAD_0:a=!1;break;case c.NUMPAD_1:a=!1;break;case c.NUMPAD_2:a=!1;break;case c.NUMPAD_3:a=!1;break;case c.NUMPAD_4:a=!1;break;case c.NUMPAD_5:a=!1;break;case c.NUMPAD_6:a=!1;break;case c.NUMPAD_7:a=!1;break;case c.NUMPAD_8:a=!1;break;case c.NUMPAD_9:a=!1;break;case c.NUMPAD_MULTIPLY:a=!1;break;case c.NUMPAD_PLUS:a=!1;break;case c.NUMPAD_ENTER:a=!1;break;case c.NUMPAD_MINUS:a=!1;break;case c.NUMPAD_PERIOD:a=!1;break;case c.NUMPAD_DIVIDE:a=!1;break;case c.F1:a=!1;break;
case c.F2:a=!1;break;case c.F3:a=!1;break;case c.F4:a=!1;break;case c.F5:a=!1;break;case c.F6:a=!1;break;case c.F7:a=!1;break;case c.F8:a=!1;break;case c.F9:a=!1;break;case c.F10:a=!1;break;case c.F11:a=!1;break;case c.F12:a=!1;break;case c.F13:a=!1;break;case c.F14:a=!1;break;case c.F15:a=!1;break;case c.NUM_LOCK:a=!1;break;case c.SCROLL_LOCK:a=!1;break;case c.UP_DPAD:a=!1;break;case c.DOWN_DPAD:a=!1;break;case c.LEFT_DPAD:a=!1;break;case c.RIGHT_DPAD:a=!1}return a},initPostRoutineActions:function(){dojo.connect(dojo.global,
"onclick",function(){ec.fisa.widget.utils.handleMouseInteraction()});dojo.connect(dojo.global,"onkeydown",function(b){ec.fisa.widget.utils.handleKeyboardInteraction(b)})},programaticChange:function(b){ec.fisa.widget.utils.prevNodeFocus=null==b?ec.fisa.widget.utils.curNodeFocus:b;ec.fisa.widget.utils.curNodeFocus=d.curNode;null!=ec.fisa.widget.utils.curNodeFocus&&null!==ec.fisa.widget.utils.curNodeFocus.id&&(ec.fisa.widget.utils.curNodeFocus=ec.fisa.widget.utils.curNodeFocus.id)},hasFocusChanged:function(){return ec.fisa.widget.utils.prevNodeFocus!=
ec.fisa.widget.utils.curNodeFocus},handleKeyboardInteraction:function(b){ec.fisa.widget.utils.prevNodeFocus=ec.fisa.widget.utils.curNodeFocus;ec.fisa.widget.utils.curNodeFocus=d.curNode;ec.fisa.widget.utils.execDelayedEvent=(b||dojo.global.event).charOrCode==c.ENTER?!0:!1},handleMouseInteraction:function(){ec.fisa.widget.utils.prevNodeFocus=ec.fisa.widget.utils.curNodeFocus;ec.fisa.widget.utils.curNodeFocus=d.curNode;ec.fisa.widget.utils.execDelayedEvent=null==ec.fisa.widget.utils.curNodeFocus?!0:
!1},isDiferentExec:function(){var b=this._lastExec;if(null==b)return!0;if(b=this.curNodeFocus==b)this._lastExec=null;return!b},execFocused:function(b){b.click&&h.isFunction(b.click)&&(this._lastExec=b)},resetFocusManager:function(){ec.fisa.widget.utils.prevNodeFocus=null;ec.fisa.widget.utils.curNodeFocus=null;ec.fisa.widget.utils._lastExec=null;d.focus(dojo.byId(dojo.config.fisaStandbyId))},enableWidget:function(b){b=dijit.byId(b);null!=b&&(b.set("disabled",!1),(b=dojo.byId(b.id))&&dojo.removeAttr(b,
"disabled"))},disableWidget:function(b){b=dijit.byId(b);null!=b&&(b.set("disabled",!0),(b=dojo.byId(b.id))&&dojo.setAttr(b,"disabled","disabled"))},isEnabled:function(b){b=dijit.byId(b);return null!=b?!b.get("disabled"):!1},parseTextAreaSize:function(b){var a={};if(0<b)if(1E3<=b){var c=b%1E3;0<c&&(a.cols=c,a.rows=(b-c)/1E3)}else a.cols=b;return a},destroyMultiregisterWidget:function(b){if(!0==b.parentEditableGrid&&!0==b._destroyOnRemove){var a=dijit.byId(b.gridId);if(void 0!=a&&null!=a){var c=b.get("value"),
d=a.model;void 0!=d&&null!=d&&(!0==a.fisaEditableGrid&&void 0==a.fisaEditableDirectGrid?d.setValueDestroyFldData([b.fieldId],c):!0==a.fisaEditableGrid&&!0==a.fisaEditableDirectGrid&&(void 0!=b.gridRealRowIndex&&null!=b.gridRealRowIndex)&&(a=d[b.gridRealRowIndex],void 0!=a&&a.setValueDestroyFldData([b.fieldId],c)))}}},updateGridRowHeight:function(b,a){null!=b&&dijit.byId(a).scroller.rowHeightChanged(b,!0)}});f.utils=new e;return ec.fisa.widget.utils=f.utils});
//@ sourceMappingURL=Utils.js.map