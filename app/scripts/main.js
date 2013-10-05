// Global App object...
var App = {
	
	// Templates that will contain different backbone extended objects...
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Browser: null,
	// The collection instance...
	Users: null,
	Tests: null,
	Directory: null

};

// jQuery's DOM ready function...
$(function(){

	// Me testing around...
	window.byrdann = new App.Models.Test({
		firstName: 'Byrdann',
		lastName: 'Foxx'
	});

	// A new instance of the 'User' collection to utilize the models...
	App.Users = new App.Collections.User();

	// Testing...
	App.Tests = new App.Collections.Test();

	// Testing...
	App.Tests.add(window.byrdann);	

	// Me testing around, again...
	App.Tests.add({
		profileLink: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=420',
		firstName: 'Ryan',
		lastName: 'Poplin',
		githubLink: 'https://github.com/ryanpoplin',
		id: 15
	});

	// Just to see it...
	App.Tests.each(function(user){
		console.log(user.get('firstName') + " " + user.get('lastName'));
	});

	App.Directory = new App.Views.Directory({

		el: $('#display')

	});

	App.Directory.render();

	App.Users.on('add remove', function(){

		console.log('Rendered on event...');
		App.Directory.render();

	});

	App.Browser = new App.Routers.User;

	Backbone.history.start();

	App.Users.fetch();

});