/*
Inspired from the design made by 'Teodora':
https://www.webdesignerforum.co.uk/files/file/63-free-psd-cv-template/
https://dribbble.com/shots/1141520-PSD-CV-template?list=searches&offset=17

Dark-wall pattern: https://subtlepatterns.com/dark-wall/

Lato Font: https://www.google.com/fonts/specimen/Lato

We love font icons: http://weloveiconfonts.com/

*/


const THEME_KEY = 'theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

/**
 * Applies the requested theme to the document and persists the choice.
 * @param {string} theme - Either 'light' or 'dark'.
 * @param {HTMLButtonElement|null} toggleButton - The theme toggle control.
 */
function applyTheme(theme, toggleButton) {
    const requestedTheme = theme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;

    if (requestedTheme === LIGHT_THEME) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    localStorage.setItem(THEME_KEY, requestedTheme);
    updateToggleState(toggleButton, requestedTheme);
}

/**
 * Updates toggle button accessibility attributes and tooltip copy.
 * @param {HTMLButtonElement|null} toggleButton
 * @param {string} activeTheme
 */
function updateToggleState(toggleButton, activeTheme) {
    if (!toggleButton) {
        return;
    }

    const isLightMode = activeTheme === LIGHT_THEME;
    toggleButton.setAttribute('aria-pressed', String(isLightMode));
    const label = isLightMode ? 'Switch to dark theme' : 'Switch to light theme';
    toggleButton.setAttribute('aria-label', label);
    toggleButton.title = label;
}

/**
 * Computes the next theme relative to the current one and applies it.
 * @param {string} currentTheme
 * @param {HTMLButtonElement|null} toggleButton
 */
function toggleTheme(currentTheme, toggleButton) {
    const nextTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    applyTheme(nextTheme, toggleButton);
}

document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('light-toggle');
    if (!modeToggle) {
        return;
    }

    const storedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = storedTheme || DARK_THEME;

    applyTheme(initialTheme, modeToggle);

    modeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('light-mode') ? LIGHT_THEME : DARK_THEME;
        toggleTheme(currentTheme, modeToggle);
    });

    // If the user has not explicitly chosen a theme, follow system preference changes.
    if (!storedTheme && window.matchMedia) {
        const schemeWatcher = window.matchMedia('(prefers-color-scheme: light)');
        const handleSchemeChange = function(event) {
            if (!localStorage.getItem(THEME_KEY)) {
                applyTheme(event.matches ? LIGHT_THEME : DARK_THEME, modeToggle);
            }
        };

        if (typeof schemeWatcher.addEventListener === 'function') {
            schemeWatcher.addEventListener('change', handleSchemeChange);
        } else if (typeof schemeWatcher.addListener === 'function') {
            schemeWatcher.addListener(handleSchemeChange);
        }
    }
});

