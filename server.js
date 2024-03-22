const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

// Gestion des routes
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Redirection vers body.html lorsque l'utilisateur accède à la racine
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Gestion des connexions socket
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

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

