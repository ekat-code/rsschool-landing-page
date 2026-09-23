const root = document.documentElement;
const btnToggle = document.querySelector('.theme-switch');
const userKey = 'user-theme';
const storedLocalStorage = localStorage.getItem(userKey);
const initialTheme = storedLocalStorage ? storedLocalStorage : 'light';

root.setAttribute('data-theme', initialTheme);

const updateState = () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (btnToggle) {
    btnToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }
};

btnToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  localStorage.setItem(userKey, next);
  root.setAttribute('data-theme', next);

  updateState();
});

updateState();