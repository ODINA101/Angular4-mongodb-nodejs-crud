const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app).listen(3000);
const io = require('socket.io')(server);
const mongo = require('mongodb');

console.log('server running on port 3000');

app.use(express.static('dist'));

const db_url = "mongodb://localhost:27017/data";
mongo.MongoClient.connect(db_url,(err,db)=>{

	console.log(err ?'error in mongo connection':'mongo connected');
	db.createCollection('todos',(err,res)=>{
		console.log('collection created');
	});
});






app.get('/todos',(req,res)=>{


mongo.connect(db_url,(err,db)=>{
 db.collection('todos').find().sort({}).toArray((err,result)=>{


res.send(JSON.stringify(result));


});
 });
});


io.sockets.on('connection',(socket)=>{


socket.on('delete',(id)=>{
mongo.connect(db_url,(err,db)=>{
	db.collection("todos").deleteMany(id,(err,obj)=>{


app.get('/todos',(req,res)=>{


mongo.connect(db_url,(err,db)=>{
 db.collection('todos').find().sort({}).toArray((err,result)=>{


res.send(JSON.stringify(result));


});
 });
});


	});
});

io.emit('deleted');
});





	

	console.log('new user has connected');
	socket.on('add',(data)=>{
		var myobj = { todo:data };

mongo.MongoClient.connect(db_url,(err,db)=>{
db.collection('todos').insertOne(myobj,(err,res)=>{
	console.log('todo is inserted');
});
 


app.get('/todos',(req,res)=>{


mongo.connect(db_url,(err,db)=>{
 db.collection('todos').find().sort({}).toArray((err,result)=>{


res.send(JSON.stringify(result));


});
 });
});


io.emit('deleted');







 
 });

});



	});


 