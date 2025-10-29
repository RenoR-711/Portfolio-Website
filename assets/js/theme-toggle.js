const html = document.documentElement;
const icon = document.getElementById('currentThemeIcon');
const items = document.querySelectorAll('[data-theme]');

const icons = {
    light: '☀️',
    dark: '🌙',
    blue: '🔵',
    green: '🟢'
};

function applyTheme(theme) {
    html.dataset.theme = theme;
    localStorage.setItem('themeMode', theme);
    icon.textContent = icons[theme];
}

// Auswahl der Buttons
items.forEach(el =>
    el.addEventListener('click', () => applyTheme(el.dataset.theme))
);

// Initial laden
applyTheme(localStorage.getItem('themeMode') || 'light');