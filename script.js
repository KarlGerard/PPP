const character = document.getElementById('character');
const advanceButton = document.getElementById('avance');
const retreatButton = document.getElementById('recule');

/*document.addEventListener('DOMContentLoaded', function() {
  const welcomeSound = document.getElementById('welcomeSound');
  
  if (welcomeSound) {
    // Jouer la musique
    welcomeSound.play();
    
    // Arrêter la lecture après 3 secondes
    setTimeout(function() {
      welcomeSound.pause();
      welcomeSound.currentTime = 0; // Revenir au début de la piste
    }, 2500); // Durée en millisecondes
    
    // Démarre le fondu en sortie après 2 secondes (temps de lecture)
    setTimeout(function() {
      // Utilise jQuery pour effectuer le fondu en sortie sur une seconde
      $(welcomeSound).fadeOut(200);
    }, 2000); // 2 secondes (2000 millisecondes)
  }
});*/

// Coordonnées de chaque étape du parcours en zigzag
const moves = [
  { x: '50%', y: '0%' },     
  { x: '60.5%', y: '3%' },     
  { x: '80%', y: '10%' },     
  { x: '64%', y: '16%' },     
  { x: '45%', y: '21%' },     
  { x: '40%', y: '24%' },     
  { x: '34%', y: '33%' },     
  { x: '39%', y: '44%' },     
  { x: '48%', y: '57%' },     
  { x: '50%', y: '68%' },     
  { x: '50%', y: '88%' }
];

let currentPosition = 0; 

advanceButton.addEventListener('click', () => {
  if (currentPosition < moves.length - 1) {
    currentPosition++;
    moveCharacter();
  }
});

retreatButton.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    moveCharacter();
  }
});

// Fonction pour déplacer le personnage à la position actuelle
function moveCharacter() {
  const { x, y } = moves[currentPosition];
  character.style.left = x;
  character.style.bottom = y;
}


const socket = io();

// Exemple de gestion d'un clic sur un bouton
document.getElementById('avance').addEventListener('click', () => {
  // Effectuez l'action utilisateur ici
  // Par exemple, envoyer une interaction au serveur
  socket.emit('interaction', { action: 'avancer' });
});

// Écoutez les interactions provenant d'autres utilisateurs
socket.on('interaction', (data) => {
  // Traitez l'interaction reçue ici
});
