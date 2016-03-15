var FormView = Backbone.View.extend ({
  collection: null,
  model: null,
  template: _.template(templates.addMovie),
  events: {
    'submit form': 'addMovie'
  },
  addMovie: function(event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]'.val()),
      desc: this.$el.find('input[name="title"]'.val()),
      director: this.$el.find('input[name="title"]'.val()),
      stars: this.$el.find('input[name="title"]'.val()),
      img: this.$el.find('input[name="title"]'.val()),
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    this.collection.add(this.model);
  }
  initialize: function() {
    if(!this.model) {
      this.model = new MovieModel({});
    }
  },
  render: function() {
     var markup = this.template(this.model.toJSON());
     this.$el.html(markup);
     return this;
  },
})

var MovieView = Backbone.View.extend({
  model: null,
  tagName: 'article',
  template: '_.template(templates.movie)',
  events: {
    'click .delete': 'removeMovie',
    'click .edit': 'toggleEdit',
    'click .editSubmit': 'editMovie'
  },
  editMovie: function(event) {
    event.preventDefault(0;);

    this.model.set({
      title: this.$el.find('.titleEdit').val(),
      desc: this.$el.find('descEdit').val(),
      img: this.$el.find('imgEdit').val()
    });
    console.log('this.model');
  },
  toggleEdit: function() {
    this.$el.find('editSelection').toggleClass('editing');
  },
  removeMovie: function() {
    this.model.destroy();
    // this.remove();
  },
  initialize: function() {
    console.log(this.model);
    this.listenTo.(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var ListView = Backbone.View.extend({
  collection: null,
  el: '.content',
  initialize: function() {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function() {
    var modelView = new MovieView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function() {
    $('.content').html('');
    _.each(this.collection.models, this.addOne())
  }
})
