var http = require('http').Server();
var io = require('socket.io')(http);

var board = [];
for (let i = 0; i<100; i++){
    board.push(0);
}
var boards = [];
boards.push(board.slice(0))
boards.push(board.slice(0))
boards.push(board.slice(0))



io.on('connection', function(socket){
    
    console.log("New Connection \n Sending Board");


    socket.emit('board', boards);

    socket.on('click',data => {
        
        boards[data.index] = data.board;

        io.sockets.emit('board',boards);
    });

});

http.listen(7777, function(){
  console.log('listening on *:3000');
});