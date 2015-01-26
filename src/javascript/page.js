// Browserify entry point for the page.js bundle (yay JavaScript!)

var $ = require('jquery');
var _ = require('underscore');
// global.js already contains jQuery, so in our config.js file, we
// are exposing it to other files like this one in the `require` array.
// Also in config.js, jquery is listed in `external` array for this bundle.
// This combination lets this file use the jquery module bundled with
<<<<<<< HEAD
// global.js, instead of including it twice!
=======
// global.js, instead including it twice!
>>>>>>> Initial commit of a new project

// var messageTemplate = _.template("<p>Made with <%= feels %> at <a href='<%= url %>'><%= bestCompanyEvar %>!</a></p>");
// 
// var message = messageTemplate({
//   bestCompanyEvar: 'Viget',
//   feels: '♥',
//   url: 'http://viget.com'
// });
// 
// $('body').append(message);
// 
<<<<<<< HEAD
=======
console.log('page.js loaded!');
>>>>>>> Initial commit of a new project
