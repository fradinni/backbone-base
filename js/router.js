define(['backbone'], function(Backbone, Router) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"*actions" : "defaultRoute"
		},

		defaultRoute: function(actions) {
			
		}
	});

	var initialize = function() {
		var app = new AppRouter();
		Backbone.history.start();
	}

	return {
		initialize: initialize
	}

});