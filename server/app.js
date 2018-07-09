var express = require('express');
var app    = express();
var cors =  require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var io = require("socket.io").listen(app.listen(8080));
var models    = require('./models');

io.on('connection',function(socket){
	console.log("new connection made")
	 socket.emit('news', { hello: 'world' });

	 socket.on('chat message', function(msg){
	 	console.log(msg,"msg");
	 	let sendMessage = {
			    data:msg.data,
			    senderId : 2,
			    receiverId :1
			} 
		io.emit('chat', sendMessage);
	  });
	  
	 socket.on('disconnect', function(){
		console.log('user disconnected');
	  });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());


module.exports = app;