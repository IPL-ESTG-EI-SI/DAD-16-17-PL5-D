'use strict';
(function(){
	var restify = require('restify');

	var path = require('path');

	var server = restify.createServer();

	server.use(restify.bodyParser());
	server.use(restify.queryParser());
	server.use(restify.fullResponse());
	server.use(restify.CORS());

	// REQUEST  / -> angular

	server.get(/^\/(?!api).*$/,restify.serveStatic({
		"directory":path.join(__dirname,'angular'),
		"default":"index.html"
	}))

	var leaderboard = [
                {name:'Albert Einstein',maxScore:9500,avatar:'https://api.adorable.io/avatars/285/albert.png'},
                {name:'Carl Sagan',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/carl.png'},
                {name:'Richard Feynman',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/richard.png'}
            ];

	// REQUEST /api/leaderboard  -> JSON
	server.get('/api/leaderboard',function(req,res,next){

		res.json(leaderboard);
		next();
	});



	server.listen(8080,function(){
		console.log("Running on port 8080");
	})

})();