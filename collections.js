var movieCollection = Backbone.Collection.extend({
  model: movieModel,
  initialize: function(options) {
    console.log(options);
  }
})
