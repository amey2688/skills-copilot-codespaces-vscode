// Create web server application with Node.js
// Run with: node comments.js
// and visit http://localhost:8080/ in your browser

// Import the http module to create an HTTP server.
var http = require('http');

// Import the url module to parse url parameters.
var url = require('url');

// Import the fs module to read files.
var fs = require('fs');

// Import the path module to manipulate file paths.
var path = require('path');

// Import the qs module to parse query strings.
var qs = require('querystring');

// Import the comments module to store comments.
var comments = require('./comments');

// Import the template module to render templates.
var template = require('./template');

// Import the mime module to determine MIME type.
var mime = require('mime');

// Import the formidable module to parse file uploads.
var formidable = require('formidable');

// Import the util module to inspect objects.
var util = require('util');

// Import the marked module to convert markdown to HTML.
var marked = require('marked');

// Import the sanitize-html module to sanitize HTML.
var sanitizeHtml = require('sanitize-html');

// Import the escape-html module to escape HTML.
var escapeHtml = require('escape-html');

// Import the slug module to convert text to slugs.
var slug = require('slug');

// Import the moment module to format dates.
var moment = require('moment');

// Import the lodash module to manipulate arrays.
var _ = require('lodash');

// Import the express module to create an Express app.
var express = require('express');

// Create the Express app.
var app = express();

// Configure the Express app to serve files from the public folder.
app.use(express.static('public'));

// Configure the Express app to parse form data.
app.use(express.urlencoded({ extended: true }));

// Configure the Express app to parse JSON.
app.use(express.json());

// Configure the Express app to parse cookies.
app.use(express.cookieParser());

// Configure the Express app to use the session middleware.
app.use(express.cookieSession({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// Configure the Express app to use the flash middleware.
app.use(function (req, res, next) {
    var flash = req.session.flash;
    delete req.session.flash;
    res.locals.flash = flash;
    next();
});

// Configure the Express app to use the passport middleware
