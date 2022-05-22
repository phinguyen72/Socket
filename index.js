const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")
                 (server, {
                     cors: {    origin: "*" }
                 }
                  );
const cors = require("cors");

app.use(cors({ 
  origin: "*",
  methods: ['GET', 'PUT', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
  credentials: true, 
  maxAge: 600, 
  exposedHeaders: ['*', 'Authorization' ] 
}));

app.get('/', (req, res) => {
  console.log("ddddd")
  
  res.send("S")
});

io.on('connection', (socket) => {
  console.log("first")
    socket.on('mess', (msg) => {
      console.log(msg);
      io.emit('mess', msg.now+"ssss");
      io.emit('time', "fffs");  
    });
    socket.on('time', (msg) => {
      console.log(msg);
     
     
    });
  });
server.listen(3000, () => {
  console.log('listening on *:3000');
});