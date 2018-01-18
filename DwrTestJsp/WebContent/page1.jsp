<%@page contentType="text/html" pageEncoding="UTF-8"%>

    <!DOCTYPE html>
    <html>
        <head>
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <title>JSP Page</title>
           <link rel="stylesheet" href="js/dojo/dijit/themes/claro/claro.css" />
            <script type='text/javascript' src='js/engine.js'> </script>
  <script type='text/javascript' src='js/util.js'> </script>
    <script type='text/javascript' src='js/DWRCall.js'></script>
    <script type="text/javascript" src="js/dojo/dojo/dojo.js" data-dojo-config="parseOnLoad: true, async: true"></script>
    <!--   link rel="stylesheet" href="style.css" media="screen" -->
  

           
            <script type="text/javascript">
            
 function callMethod(){
	
 DWRCall.getString(getData);
 //DWRCall.getDataEx();
 
 }
 function getData(data)
 {
 document.getElementById("dwrdemo").innerHTML = data;
 }
 </script> 
 <script type="text/javascript">
 function errh(msg, exc) {
	  alert("Catch Error message is: " + msg + " - Error Details: " + dwr.util.toDescriptiveString(exc, 2));
	}

	dwr.engine.setErrorHandler(errh);

	//DWRCall.getDataEx(function(data) { alert(data); });
 </script>

 <script type="text/javascript">
 var dojoConfig = {
		    async: true,
		    baseUrl: '.',
		    packages: [
		        'dojo',
		        'dijit',
		        'dojox',
		        'demo'
		    ]
		};

 </script>
 <script type="text/javascript">
 require([
	    'dojo/dom',
	    'dojo/domReady!'
	], function (dom) {
	 //callMethod();
	    var greeting = dom.byId('greeting');
	    greeting.innerHTML += ' DWR / Dojo!';
	   
	});
 </script>
 <script type="text/javascript">
 require(["dijit/form/Button", "dojo/dom", "dojo/domReady!"], function(Button, dom){
	    // Create a button programmatically:
	    var myButton = new Button({
	        label: "getData!",
	        onClick: function(){
	            // Do something:
	            
	            callback:callMethod();
	            dom.byId("result1").innerHTML += "procesando! ";
	        }
	    }, "progButtonNode").startup();
	});
 </script>
 
 <script type="text/javascript">

// DWRCall.getData(42, {
//	  callback:function(str) { alert(str); },
//	  timeout:5000,
//	  errorHandler:function(message) { alert("Oops: " + message); }
//	});


 </script>
       </head>
    <body class="claro">
      <h3>DWR Implementation</h3><br>
<br> 

<h1 id="greeting">Test</h1>
<button id="progButtonNode" type="button"></button>
<div id="result1"></div>
<hr>
<div id="dwrdemo"></div> 
  </body>
</html>