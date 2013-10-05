// A 'model' is similar to an {} stored as an element in a NoSQL []... 

// Each instance of this 'User' model will be stored in the 'User' collection...
// There will be a new 'User' model instance for each user added...
App.Models.User = Backbone.Model.extend({
	
	// These defaults properties will be utilized if the new model doesn't...
	defaults: {
		
		photoLink: '',
		firstName: '',
		lastName: '',
		githubLink: ''
	
	},

	// Standard Backbone data validation method...
	validate: function(attrs, options) {
		
		if(!attrs.firstName || !attrs.lastName){
			return "Your first and last name is required...";
		}

	},

	// A debugging method...
	initialize: function(attributes) {
		
		var firstName = attributes.firstName || 'N/A';
		var lastName = attributes.lastName || 'N/A';
		console.log("New user model: '" + firstName + " " + lastName + "'.");
	
	}

});

// Just messing around...
App.Models.Test = Backbone.Model.extend({

	// It doesn't need anything...

});