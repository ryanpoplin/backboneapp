// View's are tied to the model...

App.Views.User = Backbone.View.extend({

	// Store the template object...
	template: _.template($('#template-user').html()), 
	// Will point to the element the 'user views' are in...
	$container: null,

	events: {
		'click .edit': 'edit',
		'click .delete': 'remove'
	},

	// Will run every time the view is instantiated...
	initialize: function(options) {
		
		_.bindAll(this, 'render', 'insert', 'edit', 'remove');
		
		this.$container = options.$container;
		
		this.listenTo(this.model, 'change', this.render);
		
		this.insert();
	
	},

	render: function() {
		
		this.$el.html(this.template(this.model.attributes));
		
		return this;
	
	},

	insert: function() {

		this.$container.append(this.$el);
	
	},

	edit: function () {

		console.log('Show the form...');

	},

	remove: function() {

		this.model.destroy();
	
	}

});