var templates = {};
templates.movie = [
  // "<article data-id='<%= cid %>'>",
  "<img src='<%= img %>'/>",
  "<h1> <%= title %> </h1>",
  "<p> <%= desc %> </p>",
  "<b><h3>Directors: </h3></b><p> <%= director %> </p>",
  "<b><h3>Stars: </h3></b><p> <%= stars %> </p>",
  "<button class='delete'>delete</button>",
  "<button class='edit'>edit</button>",
  // "</article>"
].join('');

templates.editMovie = [
  // '<form class="formEdit" data-id="<%= id %>">',
    '<h2>Make your edits here, then hit update.</h2>',
    'Title:<input class="titleEdit" type="text" value="<%= title %>">',
    'Director:<input class="directorEdit" type="text" value="<%= director %>">',
    'Stars:<input class="starsEdit" type="text" value="<%= stars %>">',
    'Update Image:<input class="imageEdit" type="text" value="<%= img %>">',
    '<textarea class="descEdit" name="esc" placeholder="<%= desc %>"></textarea>',
    '<input type="button" class="submitEdit" name="name" value="Update">',
  // '</form>'
].join('');

templates.addMovie = [
  // '<form class="createForm">',
    '<h2>Create your own movie submission here</h2>',
    '<input class="title" type="text" placeholder="Title">',
    '<input class="director" type="text" placeholder="Director">',
    '<input class="stars" type="text" placeholder="Stars">',
    '<input class="image" type="text" placeholder="Add Image">',
    '<textarea class="desc" name="esc" placeholder="Enter your description here"></textarea>',
    '<input type="button" class="submitButton" name="name" value="Update">',
  // '</form>'
].join('');
