const mongoose = require('mongoose');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const userRoutes = require("./Routes/userRoute")

const SERVER_PORT = 3000;
const CONNECTION_STRING = "mongodb+srv://admin:admin@cluster0.ktjqy7e.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('open', () => {
  console.log('MongoDB is connected');
});
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes)

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});



// Instantiate Socket.IO
const serverIO = socketIO(server);

serverIO.on('connection', (socket) => {
  console.log('Socket connection made', socket.id);

    socket.on('message', (data) => {
      console.log(`Message from client: ${data}`);
    });

  });


app.get("/", (req, res) => {
  res.send("Welcome to Chat App!");
});


//   socket.on('chat', (data) => {
//       //serverIO.emit('new_chat_message', data);
//       //console.log(JSON.stringify(serverIO.sockets));
//       //serverIO.sockets.emit('new_chat_message', data);
      
//       socket.broadcast.emit('new_chat_message', data);
//       //socket.emit('new_chat_message', data);
//       console.log(data);
//   })

//   socket.on('join_group', (groupName) => {
//       socket.join(groupName);
//       console.log(`Joined group ${groupName}`);
//   })

//   socket.on('group_chat', (data) => {
//       serverIO.to(data.group_name).emit('new_group_message', data);
//       console.log(data);
      
//   })

//   socket.on('leave_group', (groupName) => {
//       socket.leave(groupName);
//       console.log(`Left group ${groupName}`);
//   })
  
