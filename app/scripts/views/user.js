// View's are tied to the model...

App.Views.User = Backbone.View.extend({

	// Backbone stores the template object...
	// jQuery searches for the #, and grabbing the its HTML code...
	// This HTML is passed to the template method...
	// The _.template method parses the string and compiles it for use...
	template: _.template($('#template-user').html()), 	
	
	// Point to the element the 'user views' are inside of...
	// A.K.A. div.listing...
	$container: null,

	// Event listeners & handlers...
	events: {
		'click .edit'			: 'editFormShow',
		'click .remove-edit' 	: 'editFormHide',
		'click .save-edit'		: 'saveEdit',
		'click .delete'			: 'remove'
	},

	// Will run every time the view is instantiated...
	// Pass Backbone extras into the initialization method...
	initialize: function(extras) {
		
		// 'this' will refer to the entire view object...
		_.bindAll(this, 'render', 'insert', 'editFormShow', 'saveEdit', 'editFormHide', 'remove');
		
		console.log(this);

		// The containing element the views are added to...
		// console.log(extras);
		this.$container = extras.$container;
		
		// console.log(this.$container);
		
		// console.log(this.model);
		
		// Add an event handler to the model...
		// When the model is updated, invoke the 'render' method...
		this.listenTo(this.model, 'change', this.render);
		
		// Insert the element into the container...
		this.insert();
	
	},

	// Update the DOM element...
	render: function() {
		
		// Take the models attrs, place it into the template, then assign it to the $el attr.
		// $el === current Views DOM element...
		this.$el.html(this.template(this.model.attributes));
		
		// Return the ref.
		return this;
	
	},

	// Append the element to the container...
	insert: function() {

		this.$container.append(this.$el);
	
	},

	editFormShow: function () {

		App.Browser.navigate('users');

		this.$('form').show().find('input.profile-edit').focus();	

		this.$('.remove-edit').show();	

	},

	editFormHide: function () {

		this.$('.add-edit-form').hide();

		this.$('.remove-edit').hide();

	},

	saveEdit: function () {

		var profile = $('.profile-edit').val();
		var first = $('.first-edit').val();
		var last = $('.last-edit').val();
		var github = $('.github-edit').val();
		this.model.set({
			"photoLink": profile,
			"firstName": first,
			"lastName" : last,
			"githubLink": github
		});
		this.model.save();

	},

	remove: function() {

		this.model.destroy();
	
	}

});