// Main application view...

App.Views.Directory = Backbone.View.extend({

	// Events...
	events: {

		'click .controls .add'		: 'addForm',
		'click .controls .remove'	: 'addFormHide',
		'submit .controls form'		: 'addSubmit'

	},

	initialize: function() {

		// console.log(this);

		// 'this' will refer to the entire view object...
		_.bindAll(this, 'render', 'addForm', 'addFormHide', 'addSubmit');

	},

	render: function() {

		// Clear out the existing elements...
		var $container = this.$('.listing').empty();

		// Iterate over each user in the collection...
		App.Users.each(function(user){
			
			new App.Views.User({
				
				model: user, 

				$container: $container

			}).render();

		});

		return this;

	},

	addForm: function() {

		App.Browser.navigate('users/add');

		this.$('.controls form').show().find('input.profile-url').focus();

		this.$('.remove').show();

	},

	addFormHide: function () {

		App.Browser.navigate('users');

		this.$('.controls form').hide();

		this.$('.remove').hide();

	},

	addSubmit: function() {

		var $form = this.$('.controls form');

		var newUser = new App.Models.User({

			photoLink: $('.profile-url').val(),
			firstName: $('.first-name').val(),
			lastName: $('.last-name').val(),
			githubLink: $('.github-url').val()
		
		});

		if(newUser.isValid()) {

			App.Users.add(newUser);

			newUser.save();
			
			this.addFormHide();
			
			$('input[type=text]', $form).val('').blur();

		} else {

			console.log(newUser.validationError);

		}

	}

});