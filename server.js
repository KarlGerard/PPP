const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

 // Gérer l'événement moveCharacter
socket.on('moveCharacter', (data) => {
  console.log('Nouvelle position du personnage :', data);
  // Diffuser la nouvelle position à tous les autres utilisateurs
  socket.broadcast.emit('moveCharacter', data);
});

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

