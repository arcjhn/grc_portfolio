/* =====================================================
   SCRIPT.JS
   GRC_PORTFOLIO — MAIN APPLICATION CONTROLLER
   ===================================================== */

(function () {
    "use strict";

    /* -----------------------------------------------------
       INITIALIZATION
    ----------------------------------------------------- */

    let initialized = false;

    function initializePortfolio() {
        if (initialized) {
            return;
        }

        const pageContent = document.getElementById("page-content");
        const data = window.PORTFOLIO_DATA;

        if (!pageContent) {
            console.error("Portfolio initialization failed: #page-content is missing.");
            return;
        }

        if (!data) {
            console.error("Portfolio initialization failed: PORTFOLIO_DATA is missing.");
            return;
        }

        initialized = true;

        renderCurrentPage(pageContent, data);

        document.dispatchEvent(
            new CustomEvent("portfolio:ready")
        );

        console.log("Portfolio content initialized.");
    }

    /* -----------------------------------------------------
       GENERAL HELPERS
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

    function getArray(value) {
        return Array.isArray(value) ? value : [];
    }

    function getText(value, fallback = "") {
        return value === undefined || value === null || value === ""
            ? fallback
            : String(value);
    }

    function getCurrentPage() {
        if (window.PortfolioNavigation) {
            return window.PortfolioNavigation.getCurrentPage();
        }

        const filename = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        return !filename || filename === "index.html"
            ? "home"
            : filename.replace(".html", "");
    }

    function safeURL(value) {
        if (!value) {
            return "";
        }

        const url = String(value).trim();

        if (
            /^(https?:\/\/|\/|\.\/|\.\.\/|#)/i.test(url)
        ) {
            return url;
        }

        return "";
    }

    function renderPageHeader(eyebrow, title, description) {
        return `
            <header class="page-header">
                <span class="page-eyebrow">
                    ${escapeHTML(eyebrow)}
                </span>

                <h1 class="page-title">
                    ${escapeHTML(title)}
                </h1>

                ${description ? `
                    <p class="page-description">
                        ${escapeHTML(description)}
                    </p>
                ` : ""}
            </header>
        `;
    }

    function renderTagList(items) {
        return getArray(items).map(function (item) {
            const label = typeof item === "object"
                ? item.name || item.label || item.title
                : item;

            if (!label) {
                return "";
            }

            return `
                <span class="skill-tag">
                    ${escapeHTML(label)}
                </span>
            `;
        }).join("");
    }

    function renderSectionTitle(title, description = "") {
        return `
            <div class="section-heading">
                <h2>${escapeHTML(title)}</h2>

                ${description ? `
                    <p>${escapeHTML(description)}</p>
                ` : ""}
            </div>
        `;
    }


/* -----------------------------------------------------
   HOME PAGE — DASHBOARD LAYOUT
----------------------------------------------------- */

function renderHome(data) {
    const profile = data.profile || {};
    const home = data.home || {};
    const navigation = getArray(data.navigation);

    const statistics = getArray(home.statistics);

    /* Safely allow links to the portfolio's HTML pages */
    function getPageHref(value) {
        const href = String(value || "").trim();

        return /^[a-z0-9_-]+\.html$/i.test(href)
            ? href
            : "";
    }

    /* Generate a short content preview for each page */
    function getPagePreview(pageId) {
        switch (pageId) {
            case "about":
                return getArray(data.about?.paragraphs)[0] ||
                    "Learn more about my background and interests.";

            case "experience": {
                const experience = getArray(data.experience)[0];

                return experience
                    ? `${experience.position} — ${experience.organization}`
                    : "Explore my professional background and experience.";
            }

            case "education": {
                const education = getArray(data.education)[0];

                return education
                    ? `${education.degree} — ${education.institution}`
                    : "Explore my academic background.";
            }

            case "projects": {
                const project = getArray(data.projects)[0];

                return project
                    ? `${project.title}. ${project.description}`
                    : "Discover projects and work I've developed.";
            }

            case "contact":
                return data.contact?.subtitle ||
                    "Get in touch for professional opportunities and inquiries.";

            default:
                return "";
        }
    }

    /* Render What I Do highlights */
    const highlights = getArray(home.highlights);

    const renderedHighlights = highlights.map(function (item) {
        return `
            <article class="glass-card home-highlight-card">

                <h3>
                    ${escapeHTML(item.title || "")}
                </h3>

                <p>
                    ${escapeHTML(item.description || "")}
                </p>

            </article>
        `;
    }).join("");


const previewCards = navigation
    .filter(function (item) {
        return item.id !== "home";
    })
    .map(function (item, index) {

        const preview = getPagePreview(item.id);
        const href = getPageHref(item.href || item.url);

        if (!href) {
            return "";
        }

       
    



/* Generate two compact grass bundles */

const bundleCount = 2;
const bladesPerBundle = 12;

const bundleCenters = [32, 72];
const bundleWidth = 35;

const grassBlades = Array.from(
    { length: bundleCount * bladesPerBundle },
    function (_, bladeIndex) {

        const bundleIndex = Math.floor(
            bladeIndex / bladesPerBundle
        );

        const bladeInBundle = bladeIndex % bladesPerBundle;

        const position =
            bundleCenters[bundleIndex]
            - bundleWidth / 2
            + (bladeInBundle / (bladesPerBundle - 1)) * bundleWidth
            + (Math.random() - 0.5) * 3;

        const height = 7 + Math.random() * 12;
        const delay = Math.random() * -4;
        const duration = 2.5 + Math.random() * 2.5;

        const startAngle = -7 - Math.random() * 9;
        const endAngle = 7 + Math.random() * 9;
        const opacity = 0.65 + Math.random() * 0.35;

        return `
            <span
                class="grass-blade"
                style="
                    --blade-position: ${position}%;
                    --blade-height: ${height}px;
                    --blade-delay: ${delay}s;
                    --blade-duration: ${duration}s;
                    --blade-start: ${startAngle}deg;
                    --blade-end: ${endAngle}deg;
                    --blade-opacity: ${opacity};
                "
            ></span>
        `;
    }
).join("");






        return `
            <a
                href="${escapeHTML(href)}"
                class="glass-card home-preview-card grass-card grass-variation-${index % 3}"
                aria-label="Explore ${escapeHTML(item.label || item.title || item.name || "")}"
            >
                <div class="card-grass" aria-hidden="true">
                    ${grassBlades}
                </div>

                <div class="home-preview-card-top">
                    <span class="home-preview-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="home-preview-arrow" aria-hidden="true">
                        →
                    </span>
                </div>

                <div class="home-preview-card-content">
                    <h3>${escapeHTML(item.label || item.title || item.name || "")}</h3>
                    <p>${escapeHTML(preview)}</p>
                </div>

                <span class="home-preview-link">
                    Explore section
                </span>
            </a>
        `;
    })
    .join("");


    /* Render hero action buttons */
    const primaryButton = home.primaryButton || {};
    /* Generate grass decoration for the homepage hero */

    /* Generate four grass bundles for the homepage hero */

    const bundleCount = 4;
    const bladesPerBundle = 9;

    const bundleCenters = [12, 37, 63, 88];
    const bundleWidth = 22;

    const heroGrassBlades = Array.from(
        { length: bundleCount * bladesPerBundle },
        function (_, bladeIndex) {

            const bundleIndex = Math.floor(
                bladeIndex / bladesPerBundle
            );

            const bladeInBundle = bladeIndex % bladesPerBundle;

            const position =
                bundleCenters[bundleIndex]
                - bundleWidth / 2
                + (bladeInBundle / (bladesPerBundle - 1)) * bundleWidth
                + (Math.random() - 0.5) * 2;

            const height = 8 + Math.random() * 13;
            const delay = Math.random() * -4;
            const duration = 2.5 + Math.random() * 2.5;

            const startAngle = -7 - Math.random() * 9;
            const endAngle = 7 + Math.random() * 9;
            const opacity = 0.65 + Math.random() * 0.35;

            return `
                <span
                    class="grass-blade"
                    style="
                        --blade-position: ${position}%;
                        --blade-height: ${height}px;
                        --blade-delay: ${delay}s;
                        --blade-duration: ${duration}s;
                        --blade-start: ${startAngle}deg;
                        --blade-end: ${endAngle}deg;
                        --blade-opacity: ${opacity};
                    "
                ></span>
            `;
        }
    ).join("");

    const secondaryButton = home.secondaryButton || {};

    const primaryHref = getPageHref(primaryButton.href);
    const secondaryHref = getPageHref(secondaryButton.href);

    return `
        <section class="page-section home-page home-dashboard">

            <!-- DASHBOARD INTRODUCTION -->
            <section class="glass-panel home-dashboard-hero">
             <div class="card-grass" aria-hidden="true">
                ${heroGrassBlades}
            </div>

                <div class="home-dashboard-intro">

                    <span class="page-eyebrow">
                        ${escapeHTML(home.eyebrow || profile.greeting || "WELCOME TO MY PORTFOLIO")}
                    </span>

                    <h1 class="home-title">
                        ${escapeHTML(home.heading || `Hi, I'm ${profile.displayName || "John Myro"}`)}
                    </h1>

                    <h2 class="home-subtitle">
                        ${escapeHTML(home.subheading || profile.title || "")}
                    </h2>

                    <p class="home-description">
                        ${escapeHTML(home.description || profile.introduction || "")}
                    </p>

                    <div class="home-actions">

                        ${primaryHref ? `
                            <a
                                href="${escapeHTML(primaryHref)}"
                                class="glass-button"
                            >
                                ${escapeHTML(primaryButton.label || "Explore My Work")}
                            </a>
                        ` : ""}

                        ${secondaryHref ? `
                            <a
                                href="${escapeHTML(secondaryHref)}"
                                class="glass-button secondary"
                            >
                                ${escapeHTML(secondaryButton.label || "Get in Touch")}
                            </a>
                        ` : ""}

                    </div>

                </div>

                <div class="home-dashboard-profile">

                  <div class="home-avatar">
                        <img
                            src="assets/images/profile.jpg"
                            alt="${escapeHTML(profile.displayName || profile.name || "Profile photo")}"
                        >
                    </div>

                    <h3>
                        ${escapeHTML(profile.displayName || profile.name || "")}
                    </h3>

                    <p>
                        ${escapeHTML(profile.location || "")}
                    </p>

                    <span class="home-dashboard-availability">
                        ${escapeHTML(profile.availability || "")}
                    </span>

                </div>

            </section>

            <!-- WHAT I DO -->
            ${highlights.length ? `
                <section class="home-dashboard-highlights">

                    ${renderSectionTitle(
                        home.highlightsTitle || "What I Do",
                        home.highlightsDescription || ""
                    )}

                    <div class="home-highlights-grid">
                        ${renderedHighlights}
                    </div>

                </section>
            ` : ""}

            <!-- PAGE PREVIEWS -->
            <section class="home-dashboard-sections">

                ${renderSectionTitle(
                    "Explore My Portfolio",
                    "A quick look at my background, experience, and work."
                )}

                <div class="home-dashboard-grid">
                    ${previewCards}
                </div>

            </section>

        </section>
    `;
}


    

/* -----------------------------------------------------
   ABOUT PAGE
----------------------------------------------------- */

function renderAbout(data) {
    const about = data.about || {};

    const paragraphs = getArray(about.paragraphs);
    const skills = getArray(about.skills);
    const technologies = getArray(about.technologies);

    return `
        <section class="page-section about-page">

            ${renderPageHeader(
                "GET TO KNOW ME",
                about.heading || "About Me",
                about.subtitle || "A little introduction"
            )}

            <!-- ABOUT INTRODUCTION -->
            ${about.introduction ? `
                <section class="about-introduction glass-panel">
                    <p>${escapeHTML(about.introduction)}</p>
                </section>
            ` : ""}

            
        <!-- PROFESSIONAL BACKGROUND -->
        ${paragraphs.length ? `
            <section class="about-background glass-panel">


                <div class="about-background-image">
                    <img
                        src="assets/images/about.svg"
                        alt="Professional background illustration"
                        loading="lazy"
                    >
                </div>

                <div class="about-background-content">

                    ${renderSectionTitle("Professional Background")}

                    <div class="about-text">
                        ${paragraphs.map(function (paragraph) {
                            return `
                                <p>${escapeHTML(
                                    typeof paragraph === "object"
                                        ? paragraph.text || paragraph.description || ""
                                        : paragraph
                                )}</p>
                            `;
                        }).join("")}
                    </div>

                </div>

            </section>
        ` : ""}


            <!-- AREAS OF EXPERTISE -->
            ${skills.length ? `
                <section class="about-skills">

                    ${renderSectionTitle("Areas of Expertise")}

                    <div class="about-skills-grid">
                        ${skills.map(function (skill) {
                            return `
                                <article class="glass-card about-skill-card">

                                    <div class="about-skill-image">
                                        <img
                                            src="${escapeHTML(skill.image || "")}"
                                            alt="${escapeHTML(skill.imageAlt || skill.title || "Skill illustration")}"
                                            loading="lazy"
                                        >
                                    </div>

                                    <div class="about-skill-content">
                                        <h3>${escapeHTML(skill.title || "")}</h3>
                                        <p>${escapeHTML(skill.description || "")}</p>
                                    </div>

                                </article>
                            `;
                        }).join("")}
                    </div>

                </section>
            ` : ""}

            <!-- TECHNOLOGIES AND TOOLS -->
            ${technologies.length ? `
                <section class="about-technologies">

                    ${renderSectionTitle("Programming & Design Technologies")}

                    <div class="about-technologies-grid">
                        ${technologies.map(function (technology) {
                            return `
                                <article class="glass-card about-technology-card">

                                    <div class="about-technology-image">
                                        <img
                                            src="${escapeHTML(technology.image || "")}"
                                            alt="${escapeHTML(technology.imageAlt || technology.name || "Technology logo")}"
                                            loading="lazy"
                                        >
                                    </div>

                                    <span>${escapeHTML(technology.name || "")}</span>

                                </article>
                            `;
                        }).join("")}
                    </div>

                </section>
            ` : ""}

        </section>
    `;
}



 
/* -----------------------------------------------------
   EXPERIENCE PAGE
----------------------------------------------------- */

function renderExperience(data) {
    const experiences = getArray(data.experience);

    return `
        <section class="page-section experience-page">

            ${renderPageHeader(
                "MY PROFESSIONAL JOURNEY",
                "Work Experience",
                "My work experience, responsibilities, and professional development."
            )}

            ${experiences.length ? `
                <div class="experience-timeline">

                    ${experiences.map(function (item) {

                        const responsibilities = getArray(
                            item.responsibilities ||
                            item.duties ||
                            item.description
                        );

                        const startDate = item.startDate || "";
                        const endDate = item.endDate || "";

                        const period = startDate || endDate
                            ? `${startDate}${startDate && endDate ? " — " : ""}${endDate}`
                            : item.period || item.date || "";

                        return `
                            <article class="experience-item">

                                <div class="experience-marker"></div>

                                <div class="glass-card experience-card">

                                    <div class="experience-card-header">

                                        <div class="experience-meta">

                                            ${item.category ? `
                                                <span class="experience-category">
                                                    ${escapeHTML(item.category)}
                                                </span>
                                            ` : ""}

                                            ${period ? `
                                                <span class="experience-period">
                                                    ${escapeHTML(period)}
                                                </span>
                                            ` : ""}

                                        </div>

                                        <h2 class="experience-position">
                                            ${escapeHTML(item.position || item.title || "")}
                                        </h2>

                                        <p class="experience-company">
                                            ${escapeHTML(
                                                item.organization ||
                                                item.company ||
                                                item.employer ||
                                                ""
                                            )}
                                        </p>

                                        ${item.department ? `
                                            <p class="experience-department">
                                                ${escapeHTML(item.department)}
                                            </p>
                                        ` : ""}

                                    </div>

                                    <div class="experience-details">

                                        ${item.location || item.employmentType ? `
                                            <div class="experience-info">

                                                ${item.location ? `
                                                    <span class="experience-location">
                                                        <span class="experience-info-label">Location</span>
                                                        ${escapeHTML(item.location)}
                                                    </span>
                                                ` : ""}

                                                ${item.employmentType ? `
                                                    <span class="experience-employment">
                                                        <span class="experience-info-label">Employment Type</span>
                                                        ${escapeHTML(item.employmentType)}
                                                    </span>
                                                ` : ""}

                                            </div>
                                        ` : ""}

                                        ${item.description ? `
                                            <div class="experience-description">
                                                <h3>Overview</h3>
                                                <p>${escapeHTML(item.description)}</p>
                                            </div>
                                        ` : ""}

                                        ${responsibilities.length ? `
                                            <div class="experience-responsibilities-section">

                                                <h3>Key Responsibilities</h3>

                                                <ul class="experience-responsibilities">
                                                    ${responsibilities.map(function (duty) {
                                                        return `
                                                            <li>
                                                                ${escapeHTML(
                                                                    typeof duty === "object"
                                                                        ? duty.text || duty.description || ""
                                                                        : duty
                                                                )}
                                                            </li>
                                                        `;
                                                    }).join("")}
                                                </ul>

                                            </div>
                                        ` : ""}

                                    </div>

                                </div>

                            </article>
                        `;
                    }).join("")}

                </div>
            ` : `
                <div class="glass-card empty-state">
                    <p>Work experience information will be added soon.</p>
                </div>
            `}

        </section>
    `;
}



/* -----------------------------------------------------
   EDUCATION PAGE
----------------------------------------------------- */

function renderEducation(data) {
    const education = getArray(data.education);

    return `
        <section class="page-section education-page">

            ${renderPageHeader(
                "MY ACADEMIC JOURNEY",
                "Educational Background",
                "My educational background, academic achievements, and foundation."
            )}

            ${education.length ? `
                <div class="education-timeline">

                    ${education.map(function (item) {

                        const startDate = item.startDate || "";
                        const endDate = item.endDate || "";

                        const period = startDate || endDate
                            ? `${startDate}${startDate && endDate ? " — " : ""}${endDate}`
                            : item.period || item.year || "";

                        const achievements = getArray(item.achievements);

                        return `
                            <article class="education-item">

                                <div class="education-marker"></div>

                                <div class="glass-card education-card">

                                    <div class="education-card-header">

                                        <div class="education-meta">

                                            ${item.category ? `
                                                <span class="education-category">
                                                    ${escapeHTML(item.category)}
                                                </span>
                                            ` : ""}

                                            ${period ? `
                                                <span class="education-period">
                                                    ${escapeHTML(period)}
                                                </span>
                                            ` : ""}

                                        </div>

                                        <h2 class="education-degree">
                                            ${escapeHTML(
                                                item.degree ||
                                                item.qualification ||
                                                item.title ||
                                                ""
                                            )}
                                        </h2>

                                        <h3 class="education-institution">
                                            ${escapeHTML(
                                                item.institution ||
                                                item.school ||
                                                ""
                                            )}

                                            ${item.abbreviation ? `
                                                <span class="education-abbreviation">
                                                    (${escapeHTML(item.abbreviation)})
                                                </span>
                                            ` : ""}
                                        </h3>

                                    </div>

                                    <div class="education-details">

                                        ${item.location ? `
                                            <p class="education-location">
                                                ${escapeHTML(item.location)}
                                            </p>
                                        ` : ""}

                                        ${item.description ? `
                                            <div class="education-description">
                                                <h4>Overview</h4>
                                                <p>${escapeHTML(item.description)}</p>
                                            </div>
                                        ` : ""}

                                        ${achievements.length ? `
                                            <div class="education-achievements">

                                                <h4>Academic Achievements</h4>

                                                <ul>
                                                    ${achievements.map(function (achievement) {
                                                        return `
                                                            <li>
                                                                ${escapeHTML(
                                                                    typeof achievement === "object"
                                                                        ? achievement.text || achievement.description || ""
                                                                        : achievement
                                                                )}
                                                            </li>
                                                        `;
                                                    }).join("")}
                                                </ul>

                                            </div>
                                        ` : ""}

                                    </div>

                                </div>

                            </article>
                        `;
                    }).join("")}

                </div>
            ` : `
                <div class="glass-card empty-state">
                    <p>Education information will be added soon.</p>
                </div>
            `}

        </section>
    `;
}


    /* -----------------------------------------------------
       SKILLS SECTION
    ----------------------------------------------------- */

    function renderSkills(data) {
        const skills = data.skills || {};

        if (Array.isArray(skills)) {
            return `
                <section class="skills-section">
                    ${renderSectionTitle("Skills & Technologies")}

                    <div class="tag-list">
                        ${renderTagList(skills)}
                    </div>
                </section>
            `;
        }

        const categories = Object.entries(skills);

        if (!categories.length) {
            return "";
        }

        return `
            <section class="skills-section">

                ${renderSectionTitle("Skills & Technologies")}

                <div class="skills-grid">

                    ${categories.map(function ([category, items]) {
                        const skillItems = Array.isArray(items)
                            ? items
                            : items && typeof items === "object"
                                ? items.items || items.skills || []
                                : [items];

                        const title = items && !Array.isArray(items) && typeof items === "object"
                            ? items.title || category
                            : category;

                        return `
                            <article class="glass-card skill-category">

                                <h3>
                                    ${escapeHTML(title)}
                                </h3>

                                <div class="tag-list">
                                    ${renderTagList(skillItems)}
                                </div>

                            </article>
                        `;
                    }).join("")}

                </div>

            </section>
        `;
    }

   
/* -----------------------------------------------------
   PROJECTS PAGE
----------------------------------------------------- */

function renderProjects(data) {
    const projects = getArray(data.projects);

    return `
        <section class="page-section projects-page">

            ${renderPageHeader(
                "SELECTED WORK",
                "Projects",
                "A collection of projects that demonstrate my skills and experience."
            )}

            <div class="projects-grid">

                ${projects.length
                    ? projects.map(function (project) {

                        const technologies = getArray(
                            project.technologies ||
                            project.techStack ||
                            project.tools
                        );

                        const title = project.title || project.name || "";

                        const liveURL = safeURL(
                            project.liveUrl ||
                            project.url ||
                            project.link ||
                            project.liveDemo
                        );

                        const sourceURL = safeURL(
                            project.sourceUrl ||
                            project.githubUrl ||
                            project.repository
                        );

                        const image = project.image || "";

                        return `
                            <article class="glass-card project-card">

                                <div class="project-visual">

                                    ${image ? `
                                        <img
                                            src="${escapeHTML(image)}"
                                            alt="${escapeHTML(
                                                project.imageAlt || title
                                            )}"
                                            loading="lazy"
                                        >
                                    ` : `
                                        <div class="project-image-placeholder">
                                            <span>PROJECT PREVIEW</span>
                                        </div>
                                    `}

                                </div>

                                <div class="project-content">

        

                                    <h2 class="project-title">
                                        ${escapeHTML(title)}
                                    </h2>

                                    ${project.type ? `
                                        <p class="project-type">
                                            ${escapeHTML(project.type)}
                                        </p>
                                    ` : ""}

                                    ${project.description ? `
                                        <p class="project-description">
                                            ${escapeHTML(project.description)}
                                        </p>
                                    ` : ""}

                                    ${project.details ? `
                                        <p class="project-details">
                                            ${escapeHTML(project.details)}
                                        </p>
                                    ` : ""}

                                    ${technologies.length ? `
                                        <div class="project-technologies">

                                            <span class="project-section-label">
                                                TOOLS & TECHNOLOGIES
                                            </span>

                                            <div class="project-tags">
                                                ${renderTagList(technologies)}
                                            </div>

                                        </div>
                                    ` : ""}

                                    ${liveURL || sourceURL ? `
                                        <div class="project-actions">

                                            ${liveURL ? `
                                                <a
                                                    href="${escapeHTML(liveURL)}"
                                                    class="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Project
                                                </a>
                                            ` : ""}

                                            ${sourceURL ? `
                                                <a
                                                    href="${escapeHTML(sourceURL)}"
                                                    class="project-source-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Source Code
                                                </a>
                                            ` : ""}

                                        </div>
                                    ` : ""}

                                </div>

                            </article>
                        `;
                    }).join("")
                    : `
                        <div class="glass-card empty-state">
                            <p>Projects will be added soon.</p>
                        </div>
                    `
                }

            </div>

        </section>
    `;
}



/* -----------------------------------------------------
   CONTACT PAGE
----------------------------------------------------- */

function renderContact(data) {
    const contact = data.contact || {};

    const email = getText(contact.email);
    const phone = getText(contact.phone);
    const address = getText(contact.address);

    return `
        <section class="page-section contact-page">

            <div class="contact-header">

                <span class="contact-eyebrow">
                    GET IN TOUCH
                </span>

                <h1 class="contact-heading">
                    Let's start a conversation.
                </h1>

                <p class="contact-introduction">
                    Have a question or an opportunity? Feel free to reach out using the details below.
                </p>

            </div>

            <div class="contact-content glass-panel">

                <div class="contact-illustration">
                    <img
                        src="assets/images/contact.svg"
                        alt="Contact illustration"
                        loading="lazy"
                    >
                </div>

                <div class="contact-information">

                    ${phone ? `
                        <article class="contact-item">

                            <div class="contact-item-heading">

                                <svg class="contact-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                                        19.79 19.79 0 0 1-8.63-3.07
                                        19.5 19.5 0 0 1-6-6
                                        19.79 19.79 0 0 1-3.07-8.67
                                        A2 2 0 0 1 4.11 2h3
                                        a2 2 0 0 1 2 1.72
                                        c.12.96.36 1.9.7 2.8
                                        a2 2 0 0 1-.45 2.11L8.09 9.91
                                        a16 16 0 0 0 6 6l1.27-1.27
                                        a2 2 0 0 1 2.11-.45
                                        c.9.34 1.84.58 2.8.7
                                        A2 2 0 0 1 22 16.92z"/>
                                </svg>

                                <span class="contact-label">
                                    Phone Number
                                </span>

                            </div>

                            <a href="tel:${escapeHTML(phone.replace(/[^\d+]/g, ""))}">
                                ${escapeHTML(phone)}
                            </a>

                        </article>
                    ` : ""}

                    ${email ? `
                        <article class="contact-item">

                            <div class="contact-item-heading">

                                <svg class="contact-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <path d="m22 7-10 6L2 7"/>
                                </svg>

                                <span class="contact-label">
                                    Email Address
                                </span>

                            </div>

                            <a href="mailto:${escapeHTML(email)}">
                                ${escapeHTML(email)}
                            </a>

                        </article>
                    ` : ""}

                    ${address ? `
                        <article class="contact-item">

                            <div class="contact-item-heading">

                                <svg class="contact-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true">
                                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10
                                        a8 8 0 1 1 16 0z"/>
                                    <circle cx="12" cy="10" r="2.5"/>
                                </svg>

                                <span class="contact-label">
                                    Address
                                </span>

                            </div>

                            <p>${escapeHTML(address)}</p>

                        </article>
                    ` : ""}

                </div>

            </div>

        </section>
    `;
}



    /* -----------------------------------------------------
       PAGE ROUTER
    ----------------------------------------------------- */

    function renderCurrentPage(container, data) {
        const currentPage = getCurrentPage();

        const pageRenderers = {
            home: renderHome,
            about: renderAbout,
            experience: renderExperience,
            education: renderEducation,
            projects: renderProjects,
            contact: renderContact
        };

        const renderer = pageRenderers[currentPage];

        if (!renderer) {
            console.warn(
                "No page renderer found for:",
                currentPage
            );

            container.innerHTML = `
                <section class="page-section">
                    <div class="glass-card empty-state">
                        <h1>Page Not Found</h1>
                        <p>The requested portfolio page could not be found.</p>
                        <a href="index.html" class="glass-button">
                            Return Home
                        </a>
                    </div>
                </section>
            `;

            return;
        }

        container.dataset.page = currentPage;
        container.innerHTML = renderer(data);
    }

    /* -----------------------------------------------------
       PUBLIC API
    ----------------------------------------------------- */

    window.PortfolioApp = {
        init: initializePortfolio,

        render: function () {
            const container = document.getElementById("page-content");

            if (container && window.PORTFOLIO_DATA) {
                renderCurrentPage(container, window.PORTFOLIO_DATA);
            }
        },

        getCurrentPage: getCurrentPage
    };

    /* -----------------------------------------------------
       START APPLICATION
    ----------------------------------------------------- */

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializePortfolio
        );
    } else {
        initializePortfolio();
    }

})();