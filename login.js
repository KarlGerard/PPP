const loginPage = document.getElementById('login-page');
const gamePage = document.getElementById('game-page');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const togglePasswordButton = document.getElementById('toggle-password');

function checkPassword() {
  const password = passwordInput.value.trim();
  const correctPassword = "1234"; // Utiliser le mot de passe depuis .env

  if (password === correctPassword) {
    document.cookie = "user_authenticated=true; path=/";
    window.location.href = 'body.html';
  } else {
    alert('Mot de passe incorrect');
  }
}

loginButton.addEventListener('click', checkPassword);

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
