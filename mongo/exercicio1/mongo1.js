'use strict';
(function(){


    var mongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017/dad-mongo';


    var players = [
        {
            name:'Albert Einstein',
            username: 'albert',
            passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
            avatar:'https://api.adorable.io/avatars/285/albert.png',
            totalVictories: 12
        },
        {
            name:'Carl Sagan',
            username: 'carl',
            passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
            avatar:'https://api.adorable.io/avatars/285/carl.png',
            totalVictories: 3
        },
        {
            name:'Richard Feynman',
            username: 'richard',
            passwordHash: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
            avatar:'https://api.adorable.io/avatars/285/richard.png',
            totalVictories: 1
        }
    ];

	// TODO: Connect to mongo database (dad_mongo) and insert
    // 3 players (players variable) on players collection

    mongoClient.connect(url,function(err, db){
        if(err){
            console.log("Error Connecting");
            return;
        }

        console.log("Connected to mongoDB at "+url);

        var playersCollection = db.collection('players');

        playersCollection.insertMany(players,function(err, entries ){

            var ops = entries.ops;

            ops.forEach(function(player){
                console.log(player.name+' - '+player._id);

            })

        })

    });


})();