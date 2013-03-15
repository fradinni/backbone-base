define(['backbone', 'router', 'models/session'], function(Backbone, Router) {

	var initialize = function() {

		// Initalise App Router
		Router.initialize();

		// Bind Session
		this.session = new Backbone.Session();
	}

	return {
		initialize: initialize
	}

});