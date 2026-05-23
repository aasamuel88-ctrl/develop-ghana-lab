// Login System
let currentUser = null;

function showLoginModal() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function hideLoginModal() {
  document.getElementById('login-modal').classList.add('hidden');
}

function loginAs(role) {
  const email = document.getElementById('login-email').value;
  
  currentUser = {
    name: role === 'admin' ? 'Admin' : 'Samuel Appiah',
    email: email,
    role: role
  };

  localStorage.setItem('developGhanaUser', JSON.stringify(currentUser));
  updateNavbar();
  hideLoginModal();
  
  if (role === 'admin') {
    alert('✅ Logged in as Admin!\n\nYou now have access to Admin Dashboard.');
  } else {
    alert('✅ Logged in as User!');
  }
}

function updateNavbar() {
  const user = JSON.parse(localStorage.getItem('developGhanaUser'));
  if (user) {
    const loginBtn = document.getElementById('login-btn');
    loginBtn.innerHTML = `
      <span class="text-sm">${user.name}</span>
      <button onclick="logout()" class="ml-3 text-xs bg-gray-200 px-3 py-1 rounded-xl">Logout</button>
    `;
  }
}

function logout() {
  localStorage.removeItem('developGhanaUser');
  location.reload();
}

// Initialize
window.onload = () => {
  updateNavbar();
};

// Dark Mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}