var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/dad-mongo';

mongoClient.connect(url,function(err, db){
	if(err){
		console.log("Error Connecting");
		return;
	}

	console.log("Connected to mongoDB at "+url);



});