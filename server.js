const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

  // Gérer les événements ici
  // Par exemple : 
  socket.on('interaction', (data) => {
    console.log('Nouvelle interaction :', data);
    // Diffusez cette interaction à tous les autres utilisateurs
    socket.broadcast.emit('interaction', data);
  });

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});