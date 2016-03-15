//adding a new Movie to our collections
var FormView = Backbone.View.extend ({
  el: ".addMovie",
  template: _.template(templates.addMovie),
  events: {
    'click .submitButton': 'addMovie'
  },
  addMovie: function(event) {
    event.preventDefault();
    console.log('HELLO', this);
    window.glob = this;
    this.model.set({
      title: this.$el.find('.title').val(),
      director: this.$el.find('.director').val(),
      desc: this.$el.find('.desc').val(),
      stars: this.$el.find('.stars').val(),
      img: this.$el.find('img').val(),
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    this.collection.add(this.model);
    // this.render();
  },
  initialize: function() {
    if(!this.model) {
      this.model = new MovieModel({});
    }
    this.render();
  },
  render: function() {
    //  var markup = this.template(this.model.toJSON());
     var markup = this.template(this.model.toJSON());
     this.$el.html(markup);
     return this;
  },
})

 //create ModelView
var MovieView = Backbone.View.extend({
  tagName: 'article',
  templateEdit: _.template(templates.editMovie),
  template: _.template(templates.movie),
  events: {
    'click .delete': 'removeMovie',
    'click .edit': 'toggleEdit',
    'click .submitEdit': 'editMovie'
  },
  editMovie: function(event) {
    event.preventDefault();

    this.model.set({
      title: this.$el.find('.titleEdit').val(),
      director: this.$el.find('.directorEdit').val(),
      stars: this.$el.find('.starsEdit').val(),
      desc: this.$el.find('.descEdit').val(),
      img: this.$el.find('.imgEdit').val()
    });
    console.log('this.model');
  },
  toggleEdit: function() {
    // this.$el.find('editSelection').toggleClass('editing');
    console.log("CLCICKY")
    this.$el.append(this.templateEdit(this.model.toJSON())).toggleClass();
  },
  removeMovie: function() {
    this.model.destroy();
    // this.remove();
  },
  initialize: function() {
    console.log(this.model);
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

// adding markup to the DOM
var ListView = Backbone.View.extend({
  collection: null,
  el: '.container',
  initialize: function() {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function(el) {
    var modelView = new MovieView({model: el});

    this.$el.append(modelView.render().el);

  },
  addAll: function() {
    $('.container').html('');
    _.each(this.collection.models, this.addOne, this)
  }
})
