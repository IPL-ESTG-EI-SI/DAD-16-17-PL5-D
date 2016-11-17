'use strict';

var mongodb = require('mongodb');
var database = require('./mongo2.database');
var security = require('./mongo4.security');
var players = module.exports = {};

function getPlayers(request, response, next){
	// TODO: query players collection 
	// and return a JSON response will all players
	database.db.collection('players').find({}).toArray(function(err,players){
		if(err){
			console.log(err);
			next();
		}

		response.json(players);
		next();
	});
}

function getPlayer(request, response, next){
	// TODO: obtain one player (by ObjectID) from players collection 
	// and return a JSON response with that player
	// Endpoint URL example: api/v1/players/34299dfa515f3da86af58060

	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('players').find({_id:id}).toArray(function(err,players){
		if(err){
			console.log(err);
			next();
		}
		response.json(players);
		next();
	});
}

function updatePlayer(request, response, next){
	// TODO: updates one player of the players collection
	// from the object sent on the request body. 
	// Return a JSON response with that player 

	var id = new mongodb.ObjectId(request.params.id);

	var data = request.body;
	data._id = id;

	database.db.collection('players').save(data,function(err,result){
		if(err){
			console.log(err);
			next();
		}

		database.db.collection('players').find({_id:id}).toArray(function(err,players){
			if(err){
				console.log(err);
				next();
			}
			response.json(players);
			next();
		});
	}); 	

}

function createPlayer(request, response, next){
	// TODO: create a new player and save it on the players collection
	// New player data is obtained from the object sent on the request body. 
	// Return a JSON response with that player  

	var data = request.body;

	database.db.collection('players').insert(data,function(err,result){
		if(err){
			console.log(err);
			next();
		}

		response.json(result.ops[0]);
		next();
	}); 	
}

function deletePlayer(request, response, next){
	// TODO: removes one player from the players collection
	// Return a JSON response with a message "Player -XXX- Deleted"

	var id = new mongodb.ObjectId(request.params.id);

	database.db.collection('players').findOneAndDelete({_id:id},function(err,result){
		if(err){
			console.log(err);
			next();
		}
		response.json({msg:'Player'});
		next();
	});

}

function findTopTen(request, response, next){

	database.db.collection('players')
		.find({})
		.sort({totalVictories: -1})
		.limit(10)
		.toArray(function(err,players){
		if(err){
			console.log(err);
			next();
		}


		response.json(players);
		next();
	});
}
function login(request, response, next){
	var player = request.user;
	var id = player._id;
	console.log(player);

	var date = new Date();
	var timestamp = date.getTime();
	player.token = sha1(player.username+timestamp)
	
	database.db.collection("players").save(player,function(err, player) {
		if(err) {
	        console.log(err);
	        next();
	    } else {

		    database.db.collection("players").findOne({_id:id},function(err, player) {
		  		if(err) {
			        console.log(err);
			        next();
			    } else {
				    response.json(player);
				    next();
			    }
			  });
	    }
    });

};


// Routes for the players
players.init = function(server,apiBaseUri){
	server.post(apiBaseUri+'login',
	security.passport.authenticate('local'),
	login);
	server.get(apiBaseUri+'players',
		security.passport.authenticate('bearer', { session: false }),
		getPlayers);
	server.get(apiBaseUri+'players/:id',getPlayer);
	server.put(apiBaseUri+'players/:id',updatePlayer);
	server.post(apiBaseUri+'players',createPlayer);
	server.del(apiBaseUri+'players/:id',deletePlayer);
	server.get(apiBaseUri+'topten',findTopTen);
	console.log("Players routes registered");
}



  