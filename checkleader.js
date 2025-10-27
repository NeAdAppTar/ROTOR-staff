document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const userFromURL = params.get('user');

  if (userFromURL) {
    localStorage.setItem('username', userFromURL);
    localStorage.setItem('role', 'leader');
    history.replaceState(null, '', window.location.pathname);
  }

  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');

  if (!username || role !== 'leader') {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    document.cookie = "userLogin=; path=/; domain=.rotorbus.ru; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    window.location.replace('https://auth.rotorbus.ru/');
  } else {
    const el = document.getElementById('leaderName');
    if (el) el.textContent = username;
  }
});
