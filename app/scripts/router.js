App.Routers.User = Backbone.Router.extend({

	routes: {

		''					: 'users',
		'users/add'			: 'usersAdd'

	},

	users: function() {

		App.Directory.render();

		App.Directory.addFormHide();

	},

	usersAdd: function() {

		App.Directory.addForm();

	},

});