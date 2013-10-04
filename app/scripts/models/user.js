// Each instance of this model acts like an object and element in the collections DB []...

// There will be a different model for each user to be stored/organized in the collection...

// The 'model'...
App.Models.User = Backbone.Model.extend({
	
	// urlRoot: 'http:0.0.0.0:3000/collections/users',

	// These defaults will be utilized if the new model doesn't have them...
	defaults: {
		
		photoLink: '',
		firstName: '',
		lastName: '',
		githubLink: ''
	
	},

	// Model data validation...
	validate: function(attrs) {
		
		console.log(attrs);

		if(!attrs.firstName){
			return "Your first name is required...";
			console.log('Your first name is required...');
		}

	},

	// My debugging message...
	initialize: function(attributes) {

		console.log(attributes);
		
		var firstName = attributes.firstName || 'N/A';
		var lastName = attributes.lastName || 'N/A';
		console.log("New user model: '" + firstName + " " + lastName + "'.");
	
	}

});