const loginPage = document.getElementById('login-page');
const gamePage = document.getElementById('game-page');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const togglePasswordButton = document.getElementById('toggle-password');


function checkPassword() {
  const password = passwordInput.value.trim();
  if (password === '1234') { // Remplacez par votre mot de passe réel
    document.cookie = "user_authenticated=true; path=/";
    window.location.href = 'body.html'; // Redirige vers la page principale du jeu
  } else {
    alert('Mot de passe incorrect');
  }
}

loginButton.addEventListener('click', checkPassword);

// Ajout d'un gestionnaire d'événement pour la touche "Entrée"
passwordInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});

togglePasswordButton.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.innerHTML = type === 'password' ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
});


passwordInput.setAttribute('type', 'password');