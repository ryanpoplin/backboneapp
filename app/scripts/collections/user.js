// A 'collection' is similar to a NoSQL DB []...

// The 'User' collection will store instances of the 'User' model...
App.Collections.User = Backbone.Collection.extend({

	// The model code must be loaded before the collection code... 
	// The 'User collection' will consist of the 'User model/s'...
	model: App.Models.User,

	// 
	url: 'http://0.0.0.0:3000/collections/users'

});

// Just playing around...
App.Collections.Test = Backbone.Collection.extend({

	// The 'Test collection' will consist of the 'Test model/s'...
	model: App.Models.Test

});