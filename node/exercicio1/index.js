'use strict';
(function(){

	var http = require('http');
	var concat = require('concat-stream');

	var query = process.argv[2];
	var urlBase = 'http://www.omdbapi.com/?s=';
	var url = urlBase+query;

	http.get(url,function(response){
		response.setEncoding('utf8');
		response.pipe(concat(responseHandler));
		response.on('error',console.log);
	});

	function responseHandler(data){
		var json = JSON.parse(data);

		if(json.Search == undefined){
			console.log("No Movies");
			return;
		}

		json.Search.forEach(function(movie){
			console.log(movie.Title);
		});
	}

})();