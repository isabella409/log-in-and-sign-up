// Variables
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginToggle = document.getElementById("loginToggle");
const registerToggle = document.getElementById("registerToggle");

const loginMsg = document.getElementById("loginMsg");
const registerMsg = document.getElementById("registerMsg");

let users = {}; // Simulación de base de datos en memoria

// Cambiar entre formularios
loginToggle.onclick = () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginMsg.textContent = "";
  registerMsg.textContent = "";
};

registerToggle.onclick = () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  loginMsg.textContent = "";
  registerMsg.textContent = "";
};

// Registro
registerForm.onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById("regUser").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value;
  const confirm = document.getElementById("regConfirm").value;

  if (!user || !email || !pass || !confirm) {
    registerMsg.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (pass !== confirm) {
    registerMsg.textContent = "Las contraseñas no coinciden.";
    return;
  }

  if (users[user]) {
    registerMsg.textContent = "El usuario ya existe.";
    return;
  }

  // Registro exitoso
  users[user] = { email, pass };
  registerMsg.style.color = "green";
  registerMsg.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
  registerForm.reset();
};

// Login
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value;

  if (!user || !pass) {
    loginMsg.textContent = "Por favor completa todos los campos.";
    return;
  }

  if (!users[user]) {
    loginMsg.textContent = "Usuario no encontrado.";
    return;
  }

  if (users[user].pass !== pass) {
    loginMsg.textContent = "Contraseña incorrecta.";
    return;
  }

  // Inicio de sesión exitoso
  loginMsg.style.color = "green";
  loginMsg.textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
  loginForm.reset();
};
