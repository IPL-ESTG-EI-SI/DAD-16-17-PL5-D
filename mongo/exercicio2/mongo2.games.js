'use strict';

var mongodb = require('mongodb');
var database = require('./mongo2.database');
var games = module.exports = {};

function getGames(request, response, next){
	// TODO: query games collection 
	// and return a JSON response will all games
	database.db.collection('games').find({}).toArray(function(err,players){
		if(err){
			console.log(err);
			next();
		}

		response.json(players);
		next();
	});

}

function getGame(request, response, next){
	// TODO: obtain one game (by ObjectID) from games collection 
	// and return a JSON response with that game
	// Endpoint URL example: api/v1/games/58299dfa515f3da86af58060
	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('games').find({_id:id}).toArray(function(err,players){
		if(err){
			console.log(err);
			next();
		}
		response.json(players);
		next();
	});
}

function updateGame(request, response, next){
	// TODO: updates one game of the games collection
	// from the object sent on the request body. 
	// Return a JSON response with that game  
	var id = new mongodb.ObjectId(request.params.id);

	var data = request.body;
	data._id = id;

	database.db.collection('games').save(data,function(err,result){
		if(err){
			console.log(err);
			next();
		}

		database.db.collection('games').find({_id:id}).toArray(function(err,players){
			if(err){
				console.log(err);
				next();
			}
			response.json(players);
			next();
		});
	}); 	
}

function createGame(request, response, next){
	// TODO: create a new game and save it on the games collection
	// New game data is obtained from the object sent on the request body. 
	// Return a JSON response with that game  
	var data = request.body;

	database.db.collection('games').insert(data,function(err,result){
		if(err){
			console.log(err);
			next();
		}

		response.json(result.ops[0]);
		next();
	}); 
}

function deleteGame(request, response, next){
	// TODO: removes one game from the games collection
	// Return a JSON response with a message "Game -XXX- Deleted"
	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('games').findOneAndDelete({_id:id},function(err,result){
		if(err){
			console.log(err);
			next();
		}
		response.json({msg:'Game deleted'});
		next();
	});
}

// Routes for the games
games.init = function(server,apiBaseUri){
	server.get(apiBaseUri+'games',getGames);
	server.get(apiBaseUri+'games/:id',getGame);
	server.put(apiBaseUri+'games/:id',updateGame);
	server.post(apiBaseUri+'games',createGame);
	server.del(apiBaseUri+'games/:id',deleteGame);
	console.log("Games routes registered");
}



  