'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var xptop = module.exports = {};

xptop.connect = function (url, callback){
	MongoClient.connect(url, function (err, database) {
	  	if(err) throw err;
	  	console.log('Connection established to', url);
	  	xptop.db = database;
		callback();
	});
}

