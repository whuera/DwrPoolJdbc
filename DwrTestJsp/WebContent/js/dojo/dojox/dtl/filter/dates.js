//>>built
define("dojox/dtl/filter/dates",["dojo/_base/lang","../_base","../utils/date"],function(f,g,e){var c=f.getObject("filter.dates",!0,g);f.mixin(c,{_toDate:function(a){if(a instanceof Date)return a;a=new Date(a);return a.getTime()==(new Date(0)).getTime()?"":a},date:function(a,b){a=c._toDate(a);return!a?"":e.format(a,b||"N j, Y")},time:function(a,b){a=c._toDate(a);return!a?"":e.format(a,b||"P")},timesince:function(a,b){a=c._toDate(a);if(!a)return"";var d=e.timesince;return b?d(b,a):d(a)},timeuntil:function(a,
b){a=c._toDate(a);if(!a)return"";var d=e.timesince;return b?d(b,a):d(new Date,a)}});return c});
//@ sourceMappingURL=dates.js.map