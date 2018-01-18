//>>built
define("dojox/lang/observable",["dijit","dojo","dojox"],function(c,e,g){e.provide("dojox.lang.observable");e.experimental("dojox.lang.observable");g.lang.observable=function(p,k,c,h){return g.lang.makeObservable(k,c,h)(p)};g.lang.makeObservable=function(c,k,e,h){function q(b,d,a){return function(){return e(b,d,a,arguments)}}h=h||{};e=e||function(b,d,a,l){return d[a].apply(b,l)};if(g.lang.lettableWin){var m=g.lang.makeObservable;m.inc=(m.inc||0)+1;var r="gettable_"+m.inc;g.lang.lettableWin[r]=c;var s=
"settable_"+m.inc;g.lang.lettableWin[s]=k;var t={};return function(b){if(b.__observable)return b.__observable;if(b.data__)throw Error("Can wrap an object that is already wrapped");var d=[],a,l;for(a in h)d.push(a);l={type:1,event:1};for(a in b)a.match(/^[a-zA-Z][\w\$_]*$/)&&(!(a in h)&&!(a in l))&&d.push(a);var c=d.join(","),f;a=t[c];if(!a){var e="dj_lettable_"+m.inc++,k=e+"_dj_getter",n=["Class "+e,"\tPublic data__"];a=0;for(l=d.length;a<l;a++){f=d[a];var p=typeof b[f];"function"==p||h[f]?n.push("  Public "+
f):"object"!=p&&n.push("\tPublic Property Let "+f+"(val)","\t\tCall "+s+'(me.data__,"'+f+'",val)',"\tEnd Property","\tPublic Property Get "+f,"\t\t"+f+" \x3d "+r+'(me.data__,"'+f+'")',"\tEnd Property")}n.push("End Class");n.push("Function "+k+"()","\tDim tmp","\tSet tmp \x3d New "+e,"\tSet "+k+" \x3d tmp","End Function");g.lang.lettableWin.vbEval(n.join("\n"));t[c]=a=function(){return g.lang.lettableWin.construct(k)}}console.log("starting5");c=a();c.data__=b;console.log("starting6");try{b.__observable=
c}catch(w){}a=0;for(l=d.length;a<l;a++){f=d[a];try{var u=b[f]}catch(v){console.log("error ",f,v)}if("function"==typeof u||h[f])c[f]=q(c,b,f)}return c}}return function(b){if(b.__observable)return b.__observable;var d=b instanceof Array?[]:{};d.data__=b;for(var a in b)"_"!=a.charAt(0)&&("function"==typeof b[a]?d[a]=q(d,b,a):"object"!=typeof b[a]&&function(a){d.__defineGetter__(a,function(){return c(b,a)});d.__defineSetter__(a,function(c){return k(b,a,c)})}(a));for(a in h)d[a]=q(d,b,a);return b.__observable=
d}};if(!{}.__defineGetter__)if(e.isIE)document.body?(c=document.createElement("iframe"),document.body.appendChild(c)):(document.write("\x3ciframe id\x3d'dj_vb_eval_frame'\x3e\x3c/iframe\x3e"),c=document.getElementById("dj_vb_eval_frame")),c.style.display="none",e=c.contentWindow.document,g.lang.lettableWin=c.contentWindow,e.write('\x3chtml\x3e\x3chead\x3e\x3cscript language\x3d"VBScript" type\x3d"text/VBScript"\x3eFunction vb_global_eval(code)ExecuteGlobal(code)End Function\x3c/script\x3e\x3cscript type\x3d"text/javascript"\x3efunction vbEval(code){ \nreturn vb_global_eval(code);}function construct(name){ \nreturn window[name]();}\x3c/script\x3e\x3c/head\x3e\x3cbody\x3evb-eval\x3c/body\x3e\x3c/html\x3e'),
e.close();else throw Error("This browser does not support getters and setters");g.lang.ReadOnlyProxy=g.lang.makeObservable(function(c,e){return c[e]},function(c,e,g){})});
//@ sourceMappingURL=observable.js.map