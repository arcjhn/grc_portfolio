
/* =====================================================
   GRC_PORTFOLIO
   THEME MANAGEMENT
   ===================================================== */

(function () {
    "use strict";

    const STORAGE_KEY = "grc-portfolio-theme";

    const root = document.documentElement;

    const systemTheme = window.matchMedia(
        "(prefers-color-scheme: light)"
    );

    /**
     * Get the saved theme.
     * If none exists, follow the system preference.
     */
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return systemTheme.matches ? "light" : "dark";
    }

    /**
     * Apply the selected theme to the document.
     */
    function applyTheme(theme) {
        if (theme !== "light" && theme !== "dark") {
            return;
        }

        root.setAttribute("data-theme", theme);

        root.style.colorScheme = theme;

        updateThemeControls(theme);
    }

    /**
     * Update the appearance and accessibility
     * information of theme toggle buttons.
     */

function updateThemeControls(theme) {
    const toggleButtons = document.querySelectorAll(
        "[data-theme-toggle]"
    );

    toggleButtons.forEach((button) => {
        const isDark = theme === "dark";

        const label = isDark
            ? "Switch to light theme"
            : "Switch to dark theme";

        button.setAttribute("aria-label", label);
        button.setAttribute("title", label);
        button.setAttribute("aria-pressed", String(isDark));

        const icon = button.querySelector("[data-theme-icon]");

        if (!icon) {
            return;
        }

        if (button.classList.contains("mobile-theme-toggle")) {
            icon.innerHTML = isDark
                ? `
                    <svg viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true">
                        <path d="M20.9 13A9 9 0 0 1 11 3.1
                            9 9 0 1 0 20.9 13Z"/>
                    </svg>
                `
                : `
                    <svg viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true">
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 2v2"/>
                        <path d="M12 20v2"/>
                        <path d="m4.93 4.93 1.42 1.42"/>
                        <path d="m17.65 17.65 1.42 1.42"/>
                        <path d="M2 12h2"/>
                        <path d="M20 12h2"/>
                        <path d="m4.93 19.07 1.42-1.42"/>
                        <path d="m17.65 6.35 1.42-1.42"/>
                    </svg>
                `;

            return;
        }

        icon.innerHTML = isDark
            ? `
                <svg viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.42 1.42"/>
                    <path d="m17.65 17.65 1.42 1.42"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m4.93 19.07 1.42-1.42"/>
                    <path d="m17.65 6.35 1.42-1.42"/>
                </svg>
            `
            : `
                <svg viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true">
                    <path d="M20.9 13A9 9 0 0 1 11 3.1
                        9 9 0 1 0 20.9 13Z"/>
                </svg>
            `;
    });
}


    /**
     * Toggle between light and dark themes.
     */
    function toggleTheme() {
        const currentTheme = root.getAttribute("data-theme");

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        localStorage.setItem(STORAGE_KEY, newTheme);

        applyTheme(newTheme);
    }

    /**
     * Attach click events to theme toggle buttons.
     */
  function initializeThemeControls() {
    document.addEventListener("click", function (event) {
        const button = event.target.closest("[data-theme-toggle]");

        if (!button) {
            return;
        }

        toggleTheme();
    });
}

    /**
     * Follow system theme changes only when
     * the user has not manually selected a theme.
     */
    function handleSystemThemeChange(event) {
        const savedTheme = localStorage.getItem(STORAGE_KEY);

        if (savedTheme) {
            return;
        }

        applyTheme(event.matches ? "light" : "dark");
    }

    /**
     * Reset the saved preference so the website
     * follows the system theme again.
     */
    function resetThemePreference() {
        localStorage.removeItem(STORAGE_KEY);

        applyTheme(
            systemTheme.matches ? "light" : "dark"
        );
    }

    /**
     * Initialize theme functionality.
     */
    function initializeTheme() {
        applyTheme(getPreferredTheme());

        initializeThemeControls();

        systemTheme.addEventListener(
            "change",
            handleSystemThemeChange
        );
    }

    /**
     * Public theme methods.
     */
    window.PortfolioTheme = {
        init: initializeTheme,
        toggle: toggleTheme,
        apply: applyTheme,
        reset: resetThemePreference,
        getCurrent: function () {
            return root.getAttribute("data-theme");
        }
    };

    /*
     * Apply the theme immediately to prevent
     * an incorrect theme from briefly appearing.
     */
    applyTheme(getPreferredTheme());

    /*
     * Initialize controls after the DOM is ready.
     */
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );
    } else {
        initializeTheme();
    }

})();
