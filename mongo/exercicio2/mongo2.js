'use strict';
(function(){
	var restify = require('restify');
	var path = require('path');
	var database = require('./mongo2.database');
	var security = require('./mongo4.security');


	var url = 'mongodb://localhost:27017/dad-mongo';

	var server = restify.createServer();

	security.init(server);

	restify.CORS.ALLOW_HEADERS.push("content-type");

	server.use( restify.bodyParser() );
	server.use( restify.queryParser() );
	server.use( restify.CORS() );
  	server.use( restify.fullResponse() );

	// URL base Rest Api endpoints = /api/v1
  	var players = require('./mongo2.players')
  	players.init(server, '/api/v1/');
  
  	var games = require('./mongo2.games')
  	games.init(server, '/api/v1/');  

  	database.connect(url, function () {
		server.listen(8080, function () {
			console.log('MongoDB App listening on port 8080!')
		});
	});
}());