require.config({
	paths: {
	    backbone: 'libs/backbone-min'
  	},
	shim: {
		backbone: {
	  		deps: [
	  			"libs/underscore-min", 
	  			"libs/jquery-1.9.1.min", 
	  			"libs/jquery.cookie",
	  			"libs/xdate"
	  		],
	  		exports: "Backbone"
		},
		underscore: {
	  		exports: '_'
		}
	}
});

// MAIN Function - Bootstrap
require(['app'], function (App) {

	// Redefine console.log
	console || (console = {log: function(){}})
	console._log = console.log;
	console.log = function(msg, object) {
		var date = new XDate();
		var dateStr = date.toString("dd-MM-yyyy HH:mm:ss")
		if(object !== "undefined") {
			console._log("["+dateStr+"] ["+object._super_.constructor+"] " + msg);
		} else {
			console._log("["+dateStr+"] " + msg);
		}
	}

	// Launch application
	App.initialize();

});