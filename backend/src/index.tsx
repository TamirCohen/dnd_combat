// backend/src/index.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3001;

interface User {
  id: string;
  position: { x: number; y: number };
}

const users: { [key: string]: User } = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    delete users[socket.id];
    io.emit('updateUsers', users);
  });

  socket.on('updatePosition', (position) => {
    users[socket.id] = { id: socket.id, position };
    io.emit('updateUsers', users);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
