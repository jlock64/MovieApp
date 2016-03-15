

$(document).ready(function() {
  // page.init();
  var movieCollection = new MovieCollection(movies);
  new ListView({collection: movieCollection});
  var formMarkup = new FormView({collection: movieCollection});
  // $('.container').html(formMarkup.render().el);
});

// var movieCollection = new movieCollection(movies);
// var page = {
//   init:function() {
//     page.addAll();
//     page.initEvents();
//   },
//
//   initEvents: function() {
//     //delete button
//     $('.container').on('click', '.delete', function(event) {
//       event.preventDefault();
//       var movieId = $(this).closest('article').data('id');
//       movieCollection.remove(movieId);
//       page.addAll();
//     });
//     //edit button
//     /* when i hit the edit button a form appends to the bottom of
//     the article with each input box populated with the current data.
//     There will also be another button labeled update to complete edits. */
//     var editedForm = $('.editForm').html();
//
//     $('.container').on('click', '.edit', page.editMovie);
//
//     $('.container').on('click', '.submitEdit', page.submitEdit);
//
//     $('.container').on('click', 'img', page.logSelectedModel);
//
//     //create a new movie submission
//     $('form').on('submit', function(event) {
//       event.preventDefault();
//       var newMovie = {
//         title: $('.title').val(),
//         director: $('.director').val(),
//         stars: $('.stars').val(),
//         img: $('.image').val(),
//         desc: $('.desc').val()
//       };
//       var newMovieModel = new movieModel(newMovie);
//       movieCollection.add(newMovieModel);
//       page.addAll();
//       $('form').children('input[type="text"], textarea').val('');
//     });
//
//   },
//     logSelectedModel: function(event) {
//       event.preventDefault();
//       var movieId = $(this).closest('article').data('id');
//       console.log('here is the selected movie', movieCollection.get(movieId).toJSON());
//       movieCollection.get(movieId).set({title: 'New title'});
//     },
//
//     editMovie: function() {
//       var editMovietmpl = _.template(templates.editMovie);
//       var movieId = $(this).closest('article').data('id');
//       console.log("MOVIE ID", movieId);
//       var myModel = movieCollection.get(movieId);
//       $(this).parent('article').append(editMovietmpl(myModel.toJSON()));
//     },
//
//     submitEdit: function() {
//       event.preventDefault();
//       var newMovieObject = {
//         title: $('.titleEdit').val(),
//         director: $('.directorEdit').val(),
//         stars: $('.starsEdit').val(),
//         img: $('.imageEdit').val(),
//         desc: $('.descEdit').val()
//       }
//       console.log(newMovieObject);
//       var cid = $('.formEdit').data('id');
//       console.log(cid);
//       myModel = movieCollection.get(cid).set(newMovieObject);
//       page.addAll();
//     },
//
//       //create movie template variable with underscore
//       movietmpl: _.template(templates.movie),
//
//
//       addAll: function() {
//         $('.container').html('');
//         _.each(movieCollection.models, function(el) {
//           el.attributes.id = el.cid;
//           // console.log(el.toJSON());;
//           var markup = page.movietmpl({movie: el.toJSON()});
//           $('.container').append(markup);
//         });
//       }
//
// }
