// Application dependency checker...
var object = {};

_.extend(object, Backbone.Events);

object.on("confirm", function(msg){
	
	console.log(jQuery() !== undefined, _.VERSION, Backbone.VERSION);
	console.log(msg);

});

object.trigger("confirm", "Backbone is ready to go...");

// Global App object...
var App = {
	
	// Templates that will contain different backbone extended objects...
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Brower: null,
	// The collection instance...
	Users: null,
	Directory: null

};

// DOM ready function...
$(function(){

	// A new instance of the 'User' collection to utilize the models...
	App.Users = new App.Collections.User();

	App.Users.add({
		profileLink: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=420',
		firstName: 'Ryan',
		lastName: 'Poplin',
		githubLink: 'https://github.com/ryanpoplin',
		id: 15
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