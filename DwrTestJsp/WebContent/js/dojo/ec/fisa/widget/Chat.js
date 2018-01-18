//>>built
require(["dojo","ec/fisa/cometd/main","ec/fisa/cometd/timestamp","ec/fisa/cometd/ack","ec/fisa/cometd/reload"],function(d,b){var a={_lastUser:null,_username:null,_connected:!1,_disconnecting:!1,_chatSubscription:null,_membersSubscription:null,_init:function(){a.join(d.config.fisaChatUsername);d.query("#phrase").attr({autocomplete:"off"}).onkeyup(function(c){c.keyCode==d.keys.ENTER&&a.chat()});d.query("#sendButton").onclick(function(c){a.chat()});d.query("#leaveButton").onclick(a,"leave");var c=d.cookie("org.cometd.demo.state"),
e=c?d.fromJson(c):null;e&&(d.byId("username").value=e.username,setTimeout(function(){a.join(e.username)},0))},join:function(c){a._disconnecting=!1;null==c||0==c.length?alert("Please enter a username"):(b.ackEnabled=!1,b.init({url:location.protocol+"//"+location.host+config.contextPath+"/cometd",logLevel:"debug"}),a._username=c)},_unsubscribe:function(){a._chatSubscription&&b.unsubscribe(a._chatSubscription);a._chatSubscription=null;a._membersSubscription&&b.unsubscribe(a._membersSubscription);a._membersSubscription=
null},_subscribe:function(){a._chatSubscription=b.subscribe("/chat/demo",a.receive);a._membersSubscription=b.subscribe("/members/demo",a.members)},leave:function(){b.batch(function(){b.publish("/chat/demo",{user:a._username,membership:"leave",chat:a._username+" has left"});a._unsubscribe()});b.disconnect();d.byId("members").innerHTML="";a._username=null;a._lastUser=null;a._disconnecting=!0;ec.fisa.navigation.utils.closeChat()},chat:function(){var c=d.byId("phrase").value;d.byId("phrase").value="";
if(c&&c.length){var e=c.indexOf("::");0<e?b.publish("/service/privatechat",{room:"/chat/demo",user:a._username,chat:c.substring(e+2),peer:c.substring(0,e)}):b.publish("/chat/demo",{user:a._username,chat:c})}},receive:function(c){var e=c.data.user,b=c.data.join||c.data.leave,g=c.data.chat;!b&&e==a._lastUser?e="...":(a._lastUser=e,e+=":");var f=d.byId("chat");null!=f&&(b?(f.innerHTML+='\x3cspan class\x3d"membership"\x3e\x3cspan class\x3d"from"\x3e'+e+'\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"text"\x3e'+
g+"\x3c/span\x3e\x3c/span\x3e\x3cbr/\x3e",a._lastUser=null):f.innerHTML="private"==c.data.scope?f.innerHTML+('\x3cspan class\x3d"private"\x3e\x3cspan class\x3d"from"\x3e'+e+'\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"text"\x3e[private]\x26nbsp;'+g+"\x3c/span\x3e\x3c/span\x3e\x3cbr/\x3e"):f.innerHTML+('\x3cspan class\x3d"from"\x3e'+e+'\x26nbsp;\x3c/span\x3e\x3cspan class\x3d"text"\x3e'+g+"\x3c/span\x3e\x3cbr/\x3e"),f.scrollTop=f.scrollHeight-f.clientHeight)},members:function(a){var b=d.byId("members"),
h="",g;for(g in a.data)h+=a.data[g]+"\x3cbr/\x3e";b.innerHTML=h},_connectionInitialized:function(){b.batch(function(){a._subscribe();b.publish("/chat/demo",{user:a._username,membership:"join",chat:a._username+" has joined"})})},_connectionEstablished:function(){a.receive({data:{user:"system",chat:"Connection to Server Opened"}});b.publish("/service/members",{user:a._username,room:"/chat/demo"})},_connectionBroken:function(){a.receive({data:{user:"system",chat:"Connection to Server Broken"}});d.byId("members").innerHTML=
""},_connectionClosed:function(){a.receive({data:{user:"system",chat:"Connection to Server Closed"}})},_metaHandshake:function(c){c.successful&&a._connectionInitialized()},_metaConnect:function(c){if(a._disconnecting)a._connected=!1,a._connectionClosed();else{var b=a._connected;a._connected=!0===c.successful;!b&&a._connected?a._connectionEstablished():b&&!a._connected&&a._connectionBroken()}}};b.addListener("/meta/handshake",a,a._metaHandshake);b.addListener("/meta/connect",a,a._metaConnect);ec.fisa.widget.chat=
{room:a};d.addOnUnload(function(){a._username?(b.reload(),d.cookie("org.cometd.demo.state",d.toJson({username:a._username}),{"max-age":5}),b.getTransport().abort()):b.disconnect()})});
//@ sourceMappingURL=Chat.js.map