//>>built
define("ec/fisa/_base/kernel",["dojo/_base/kernel","dojo/_base/lang","dijit/form/_TextBoxMixin"],function(c,d){var b={fisa:{}};this.ec=b;c.fisa=b.fisa;dijit.form._TextBoxMixin.prototype.filter=function(a){if(null===a)return this._blankValue;if("string"!=typeof a)return a;this.trim&&(a=d.trim(a));this.uppercase&&(a=a.toUpperCase());this.lowercase&&(a=a.toLowerCase());this.propercase&&(a=a.toLowerCase().replace(/[^\s]+/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}));return a};
return b.fisa});
//@ sourceMappingURL=kernel.js.map