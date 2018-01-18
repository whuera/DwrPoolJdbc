//>>built
define("dojox/form/TimeSpinner","dojo/_base/lang dojo/_base/event dijit/form/_Spinner dojo/keys dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare".split(" "),function(e,f,g,c,h,d,k,l){return l("dojox.form.TimeSpinner",g,{required:!1,adjust:function(a,b){return h.add(a,"minute",b)},isValid:function(){return!0},smallDelta:5,largeDelta:30,timeoutChangeRate:0.5,parse:function(a,b){return d.parse(a,{selector:"time",formatLength:"short"})},format:function(a,b){return e.isString(a)?a:d.format(a,
{selector:"time",formatLength:"short"})},serialize:k.toISOString,value:"12:00 AM",_onKeyDown:function(a){if((a.keyCode==c.HOME||a.keyCode==c.END)&&!a.ctrlKey&&(!a.altKey&&!a.metaKey)&&"undefined"!=typeof this.get("value")){var b=this.constraints[a.keyCode==c.HOME?"min":"max"];b&&this._setValueAttr(b,!0);f.stop(a)}}})});
//@ sourceMappingURL=TimeSpinner.js.map