
/* =====================================================
   NAVIGATION.JS
   GRC_PORTFOLIO — SIDEBAR & MOBILE NAVIGATION
   ===================================================== */

(function () {
    "use strict";

    const STORAGE_KEY = "grc-portfolio-sidebar";

    let initialized = false;

    /* -----------------------------------------------------
       ICONS
    ----------------------------------------------------- */

    const icons = {
        home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
        user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
        briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
        "graduation-cap": '<path d="m2 10 10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
        code: '<path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"/>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
        chevron: '<path d="m9 18 6-6-6-6"/>',
        close: '<path d="m18 6-12 12M6 6l12 12"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
        moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>'
    };

    function getIcon(name) {
        const iconContent = icons[name] || "";

        return `
            <svg
                class="icon icon-${name}"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
            >
                ${iconContent}
            </svg>
        `;
    }

    /* -----------------------------------------------------
       HELPERS
    ----------------------------------------------------- */

    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];
        });
    }

    function getCurrentPage() {
        const filename = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        if (!filename || filename === "index.html") {
            return "home";
        }

        return filename.replace(".html", "");
    }

    function getSavedSidebarState() {
        try {
            const savedState = localStorage.getItem(STORAGE_KEY);

            if (savedState === "expanded") {
                return false;
            }

            if (savedState === "collapsed") {
                return true;
            }
        } catch (error) {
            console.warn("Unable to read sidebar preference:", error);
        }

        // Default state: collapsed.
        return true;
    }

    function saveSidebarState(isCollapsed) {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                isCollapsed ? "collapsed" : "expanded"
            );
        } catch (error) {
            console.warn("Unable to save sidebar preference:", error);
        }
    }

    /* -----------------------------------------------------
       NAVIGATION LINKS
    ----------------------------------------------------- */

    function renderNavigationLinks() {
        const data = window.PORTFOLIO_DATA;

        if (!data || !Array.isArray(data.navigation)) {
            console.error("Portfolio navigation data is missing.");
            return "";
        }

        const currentPage = getCurrentPage();

        return data.navigation.map(function (item) {
            const isActive = item.id === currentPage;

            return `
                <a
                    class="sidebar-link ${isActive ? "active" : ""}"
                    href="${escapeHTML(item.href)}"
                    ${isActive ? 'aria-current="page"' : ""}
                    data-nav-link
                    title="${escapeHTML(item.label)}"
                >
                    ${getIcon(item.icon)}
                    <span class="sidebar-link-label">
                        ${escapeHTML(item.label)}
                    </span>
                </a>
            `;
        }).join("");
    }

    /* -----------------------------------------------------
       PROFILE SECTION
    ----------------------------------------------------- */

    function renderProfile() {
        const profile = window.PORTFOLIO_DATA.profile;

        if (!profile) {
            return "";
        }

        
            const avatar = `
                <img
                    src="assets/images/profile.jpg"
                    alt="John's profile photo"
                    class="sidebar-avatar-image"
                >
            `;
            `
                <span class="sidebar-avatar-initials">
                    ${escapeHTML(profile.initials || "JG")}
                </span>
            `;

        return `
            <div class="sidebar-profile">
                <div class="sidebar-avatar">
                    ${avatar}
                </div>

                <div class="sidebar-profile-info">
                    <h2 class="sidebar-profile-name">
                        ${escapeHTML(profile.displayName || profile.name)}
                    </h2>

                    <p class="sidebar-profile-title">
                        ${escapeHTML(profile.title)}
                    </p>
                </div>
            </div>
        `;
    }

    /* -----------------------------------------------------
       THEME CONTROL
    ----------------------------------------------------- */

    function renderThemeButton() {
        return `
            <button
                type="button"
                class="sidebar-theme-toggle"
                data-theme-toggle
                aria-label="Switch to light theme"
                aria-pressed="false"
                title="Switch to light theme"
            >
                <span class="theme-toggle-icon" data-theme-icon>
                    ${getIcon("moon")}
                </span>

                <span class="sidebar-link-label">
                    Toggle Theme
                </span>
            </button>
        `;
    }
    /* -----------------------------------------------------
       SIDEBAR
    ----------------------------------------------------- */

    function renderSidebar() {
        const data = window.PORTFOLIO_DATA;
        const site = data.site;
        const profile = data.profile;

        return `
            <aside
                class="sidebar"
                id="site-sidebar"
                aria-label="Main sidebar"
            >
                <div class="sidebar-header">

                    <a
                        href="index.html"
                        class="sidebar-brand"
                        aria-label="Go to homepage"
                    >
                        <span
                            class="sidebar-brand-image"
                            aria-hidden="true"
                        ></span>

                        <span class="sidebar-brand-name">
                            ${escapeHTML(site.logo || site.name)}
                        </span>
                    </a>

                    <button
                        type="button"
                        class="sidebar-collapse-toggle"
                        data-sidebar-toggle
                        aria-label="Collapse sidebar"
                        aria-expanded="true"
                        aria-controls="site-sidebar"
                        title="Collapse sidebar"
                    >
                        ${getIcon("chevron")}
                    </button>

                    <button
                        type="button"
                        class="sidebar-mobile-close"
                        data-mobile-close
                        aria-label="Close navigation menu"
                    >
                        ${getIcon("close")}
                    </button>

                </div>

                ${renderProfile()}

                <div class="sidebar-divider"></div>

                <nav class="sidebar-navigation" aria-label="Main navigation">
                    <div class="sidebar-navigation-links">
                        ${renderNavigationLinks()}
                    </div>
                </nav>

                <div class="sidebar-footer">
                    ${renderThemeButton()}

                    <div class="sidebar-divider"></div>

                    <p class="sidebar-copyright">
                        ${escapeHTML(data.footer?.copyright || "")}
                    </p>
                </div>
            </aside>
        `;
    }

    /* -----------------------------------------------------
       MOBILE HEADER
    ----------------------------------------------------- */

    function renderMobileHeader() {
        const data = window.PORTFOLIO_DATA;
        const profile = data.profile;

        return `
            <header class="mobile-header">

                <button
                    type="button"
                    class="mobile-menu-toggle"
                    data-mobile-menu-toggle
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="site-sidebar"
                >
                    ${getIcon("menu")}
                </button>

                <a href="index.html" class="mobile-header-brand">
                   <span
                        class="sidebar-brand-image"
                        aria-hidden="true"
                    ></span>

                    <span class="mobile-header-brand-name">
                        ${escapeHTML(data.site.logo || data.site.name)}
                    </span>
                </a>

                <button
                    type="button"
                    class="mobile-theme-toggle"
                    data-theme-toggle
                    aria-label="Switch to dark theme"
                    aria-pressed="false"
                    title="Switch to dark theme"
                >
                    <span
                        class="mobile-theme-toggle-knob"
                        data-theme-icon
                    >
                        ${getIcon("sun")}
                    </span>
                </button>

            </header>
        `;
    }

    /* -----------------------------------------------------
       SIDEBAR STATE
    ----------------------------------------------------- */

    function setSidebarCollapsed(isCollapsed, save = true) {
        const app = document.getElementById("app");
        const button = document.querySelector("[data-sidebar-toggle]");

        if (!app) {
            return;
        }

        app.classList.toggle("sidebar-collapsed", isCollapsed);

        if (button) {
            button.setAttribute(
                "aria-expanded",
                String(!isCollapsed)
            );

            button.setAttribute(
                "aria-label",
                isCollapsed ? "Expand sidebar" : "Collapse sidebar"
            );

            button.setAttribute(
                "title",
                isCollapsed ? "Expand sidebar" : "Collapse sidebar"
            );
        }

        if (save) {
            saveSidebarState(isCollapsed);
        }
    }

    /* -----------------------------------------------------
       MOBILE MENU STATE
    ----------------------------------------------------- */

    function setMobileMenuOpen(isOpen) {
        const app = document.getElementById("app");
        const menuButton = document.querySelector(
            "[data-mobile-menu-toggle]"
        );

        if (!app) {
            return;
        }

        app.classList.toggle("mobile-menu-open", isOpen);
        document.body.classList.toggle("navigation-open", isOpen);

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        }
    }

    /* -----------------------------------------------------
       EVENT LISTENERS
    ----------------------------------------------------- */


function attachEvents() {
    const app = document.getElementById("app");

    if (!app) {
        return;
    }

    const collapseButton = document.querySelector(
        "[data-sidebar-toggle]"
    );

    const mobileMenuButton = document.querySelector(
        "[data-mobile-menu-toggle]"
    );

    const mobileCloseButton = document.querySelector(
        "[data-mobile-close]"
    );

    /* Desktop sidebar toggle */
    if (collapseButton) {
        collapseButton.addEventListener("click", function () {
            const isCollapsed = app.classList.contains(
                "sidebar-collapsed"
            );

            setSidebarCollapsed(!isCollapsed);
        });
    }

    /* Open mobile menu */
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", function () {
            setMobileMenuOpen(true);
        });
    }

    /* Close mobile menu */
    if (mobileCloseButton) {
        mobileCloseButton.addEventListener("click", function () {
            setMobileMenuOpen(false);
        });
    }

    /* Create mobile overlay */
    const overlay = document.createElement("button");

    overlay.type = "button";
    overlay.className = "sidebar-overlay";
    overlay.setAttribute("aria-label", "Close navigation menu");
    overlay.setAttribute("data-sidebar-overlay", "");

    app.appendChild(overlay);

    overlay.addEventListener("click", function () {
        setMobileMenuOpen(false);
    });

    /* Close mobile menu after navigation */
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
        link.addEventListener("click", function () {
            setMobileMenuOpen(false);
        });
    });

    /* Close mobile menu with Escape */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setMobileMenuOpen(false);
        }
    });
}


    /* -----------------------------------------------------
       INITIALIZE NAVIGATION
    ----------------------------------------------------- */

    function initializeNavigation() {
        if (initialized) {
            return;
        }

        const app = document.getElementById("app");
        const pageContent = document.getElementById("page-content");

        if (!app || !pageContent) {
            console.error(
                "Navigation initialization failed: #app or #page-content is missing."
            );
            return;
        }

        if (!window.PORTFOLIO_DATA) {
            console.error(
                "Navigation initialization failed: PORTFOLIO_DATA is missing."
            );
            return;
        }

        initialized = true;

        /* Build the main layout */
        const layout = document.createElement("div");
        layout.className = "site-layout";

        const contentArea = document.createElement("div");
        contentArea.className = "main-content-area";

        /* Add mobile header */
        contentArea.innerHTML = renderMobileHeader();

        /* Preserve and move the existing page content */
        contentArea.appendChild(pageContent);

        /* Add sidebar */
        layout.innerHTML = renderSidebar();
        layout.appendChild(contentArea);

        /* Replace the app's initial contents */
        app.replaceChildren(layout);

        /* Restore saved sidebar preference */
        setSidebarCollapsed(getSavedSidebarState(), false);

        /* Attach interactions */
        attachEvents();

        /* Update dynamically rendered theme controls */
        if (window.PortfolioTheme) {
            window.PortfolioTheme.apply(
                window.PortfolioTheme.getCurrent()
            );
        }

        console.log("Portfolio navigation initialized.");
    }

    /* -----------------------------------------------------
       PUBLIC API
    ----------------------------------------------------- */

    window.PortfolioNavigation = {
        init: initializeNavigation,

        toggleSidebar: function () {
            const app = document.getElementById("app");

            if (!app) {
                return;
            }

            const isCollapsed = app.classList.contains(
                "sidebar-collapsed"
            );

            setSidebarCollapsed(!isCollapsed);
        },

        openMobileMenu: function () {
            setMobileMenuOpen(true);
        },

        closeMobileMenu: function () {
            setMobileMenuOpen(false);
        },

        getCurrentPage: getCurrentPage
    };

    /* Initialize when the document is ready */
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeNavigation
        );
    } else {
        initializeNavigation();
    }

})();
