define(['backbone', 'app'], function(Backbone, App) {

	Backbone.Session = Backbone.Model.extend({
		defaults: {
			'access_token': null,
			'user_id': null
		},
 
		initialize: function() {
			this.load();
			console.log("[Session] Session initialized", this);
		},

		authenticated: function() {
			return new Boolean(this.get('access_token'));
		},

		save: function(auth_hash) {
			$.cookie('user_id', auth_hash.id);
			$.cookie('access_token', auth_hash.access_token);
		},

		load: function() {
			this.set({
				user_id: $.cookie('user_id'),
				access_token: $.cookie('access_token')
			});
		}
	});

});