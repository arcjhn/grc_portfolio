/* =====================================================
   GRC_PORTFOLIO
   CENTRALIZED PORTFOLIO DATA
   ===================================================== */

window.PORTFOLIO_DATA = {

    /* ================================================
       WEBSITE INFORMATION
       ================================================ */

    site: {
        name: "grc_arc",
        title: "grc_arc | Developer Portfolio",
        description: "Personal portfolio showcasing web development, software development, and UI/UX design.",
        author: "John Myro N. Garcia",
        logo: "jhn arc",
        copyright: "John Myro N. Garcia"
    },


    /* ================================================
       NAVIGATION
       ================================================ */

    navigation: [
        {
            id: "home",
            label: "Home",
            description: "Portfolio overview",
            href: "index.html",
            icon: "home"
        },
        {
            id: "about",
            label: "About Me",
            description: "Personal introduction",
            href: "about.html",
            icon: "user"
        },
        {
            id: "experience",
            label: "Experience",
            description: "Professional background",
            href: "experience.html",
            icon: "briefcase"
        },
        {
            id: "education",
            label: "Education",
            description: "Academic background",
            href: "education.html",
            icon: "graduation-cap"
        },
        {
            id: "projects",
            label: "Projects",
            description: "Selected work and projects",
            href: "projects.html",
            icon: "code"
        },
        {
            id: "contact",
            label: "Contact",
            description: "Get in touch",
            href: "contact.html",
            icon: "mail"
        }
    ],



/* ================================================
   PERSONAL PROFILE
   ================================================ */

profile: {
    name: "John Myro N. Garcia",
    displayName: "John",
    username: "grc_arc",

    initials: "",

    title: "Full Stack Developer & UI/UX Designer",

    tagline: "Building thoughtful digital experiences.",

    introduction:
        "I'm an Information Technology graduate passionate about web development, software development, and user-centered design.",

    greeting: "WELCOME TO MY PORTFOLIO",

    location: "Ilocos Norte, Philippines",

    profileImage: "",

    availability: "Open to professional opportunities",

    resume: ""
},


/* ================================================
   HOME PAGE
   ================================================ */

home: {
    eyebrow: "WELCOME TO MY PORTFOLIO",

    heading: "Hi, I'm John",

    subheading: "Full Stack Developer & UI/UX Designer",

    description:
        "I'm a Full Stack Developer and UI/UX Designer interested in building functional, accessible, and visually engaging digital experiences.",

    primaryButton: {
        label: "Explore My Work",
        href: "projects.html"
    },

    secondaryButton: {
        label: "Get in Touch",
        href: "contact.html"
    },

    statistics: [
        {
            value: "IT",
            label: "Academic Background"
        },
        {
            value: "Web",
            label: "Development Interest"
        },
        {
            value: "UI/UX",
            label: "Design Focus"
        }
    ],

    highlightsTitle: "What I Do",

    highlightsDescription:
        "I bring development and design together to create practical digital solutions.",

    highlights: [
        {
            title: "Web Development",
            description:
                "Building responsive websites with a focus on usability, structure, and maintainability."
        },
        {
            title: "UI/UX Design",
            description:
                "Designing intuitive interfaces and thoughtful user experiences."
        },
        {
            title: "Software Development",
            description:
                "Developing practical software solutions based on user and project requirements."
        }
    ]
},



/* ================================================
   ABOUT PAGE
   ================================================ */

about: {
    heading: "About Me",
    subtitle: "I am an Information Technology graduate interested in creating practical, accessible, and user-friendly digital solutions. I enjoy combining development and design to turn ideas into meaningful experiences.",

    introduction:'',
        

    paragraphs: [
        "My background includes web development, software development, and UI/UX design. I enjoy exploring technologies, improving interfaces, and developing solutions that respond to real user needs.",

        "I value continuous learning, collaboration, attention to detail, and writing maintainable code. I aim to keep improving my technical skills while creating useful digital products."
    ],

    skills: [
        {
            id: "web-development",
            title: "Web Development",
            description: "Creating responsive and user-friendly websites.",
            image: "assets/images/skills/web-development.svg",
            imageAlt: "Web development illustration"
        },
        {
            id: "ui-ux-design",
            title: "UI/UX Design",
            description: "Designing intuitive interfaces and user-centered experiences.",
            image: "assets/images/skills/ui-ux-design.svg",
            imageAlt: "UI/UX design illustration"
        },
        {
            id: "software-development",
            title: "Software Development",
            description: "Developing applications to address practical requirements.",
            image: "assets/images/skills/software-development.svg",
            imageAlt: "Software development illustration"
        },
        {
            id: "frontend-development",
            title: "Front-End Development",
            description: "Building interactive interfaces with modern web technologies.",
            image: "assets/images/skills/frontend-development.svg",
            imageAlt: "Front-end development illustration"
        },
        {
            id: "problem-solving",
            title: "Problem Solving",
            description: "Analyzing requirements and finding practical solutions.",
            image: "assets/images/skills/problem-solving.svg",
            imageAlt: "Problem-solving illustration"
        },
        {
            id: "data-entry",
            title: "Data Entry and Management",
            description: "Accurate and efficient input of data.",
            image: "assets/images/skills/data-entry.svg",
            imageAlt: "Data management illustration"
        },
        {
            id: "team-collaboration",
            title: "Team Collaboration",
            description: "Work effectively with diverse group members.",
            image: "assets/images/skills/team.svg",
            imageAlt: "Teamwork illustration"
        },
        {
            id: "time-management",
            title: "Time Management",
            description: "Prioritize tasks to meet strict deadlines.",
            image: "assets/images/skills/time.svg",
            imageAlt: "Time management illustration"
        },
        {
            id: "communication",
            title: "Communication",
            description: "Clear exchange of ideas and information.",
            image: "assets/images/skills/communication.svg",
            imageAlt: "Communication illustration"
        },
        {
            id: "adaptability",
            title: "Adaptability and Continuous Learning",
            description: "Quickly adjust and embrace new knowledge.",
            image: "assets/images/skills/adapt.svg",
            imageAlt: "Adaptability illustration"
        }
    ],

    technologies: [
        {
            id: "html",
            name: "HTML",
            image: "assets/images/technologies/html.png",
            imageAlt: "HTML logo"
        },
        {
            id: "css",
            name: "CSS",
            image: "assets/images/technologies/css.png",
            imageAlt: "CSS logo"
        },
        {
            id: "javascript",
            name: "JavaScript",
            image: "assets/images/technologies/javascript.png",
            imageAlt: "JavaScript logo"
        },
        {
            id: "vue",
            name: "Vue.js",
            image: "assets/images/technologies/vue.png",
            imageAlt: "Vue.js logo"
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            image: "assets/images/technologies/bootstrap.png",
            imageAlt: "Bootstrap logo"
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            image: "assets/images/technologies/tailwind-css.png",
            imageAlt: "Tailwind CSS logo"
        },
        {
            id: "figma",
            name: "Figma",
            image: "assets/images/technologies/figma.png",
            imageAlt: "Figma logo"
        },
        {
            id: "nodejs",
            name: "Node.js",
            image: "assets/images/technologies/nodejs.png",
            imageAlt: "Node.js logo"
        },
        {
            id: "mysql",
            name: "MySQL",
            image: "assets/images/technologies/mysql.png",
            imageAlt: "MySQL logo"
        },
        {
            id: "laravel",
            name: "Laravel",
            image: "assets/images/technologies/laravel.png",
            imageAlt: "Laravel logo"
        },
        {
            id: "github",
            name: "GitHub",
            image: "assets/images/technologies/github.png",
            imageAlt: "GitHub logo"
        },
        {
            id: "react",
            name: "React",
            image: "assets/images/technologies/react.png",
            imageAlt: "React logo"
        }
    ]
},



    /* ================================================
       PROFESSIONAL EXPERIENCE
       ================================================ */

    experience: [
        {
            id: 1,

            position: "Administrative Aide (Government Internship Program)",

            organization: "Land Transportation Office",

            department: "LTO Burgos District Office",

            location: "Burgos, Ilocos Norte",

            employmentType: "Government Internship Program (GIP)",

            startDate: "October 2024",

            endDate: "September 2025",

            description:
                "Provided administrative and operational support for office transactions and records management.",

            responsibilities: [
                "Verified records and supporting documents for office transactions.",
                "Assisted with the distribution and release of license plates.",
                "Supported the handling and organization of CR and RRPL records.",
                "Assisted Licensing Officers, Evaluation Officers, and Public Assistance and Complaints Desk personnel.",
                "Performed data encoding and record-related tasks using the LTO registry."
            ],

            technologies: [],

            category: "Professional Experience"
        },

        {
            id: 2,

            position: "Software Developer Intern",

            organization: "Mariano Marcos State University",

            department: "Information Technology Center (ITC)",

            location: "Batac City, Ilocos Norte",

            employmentType: "Internship",

            startDate: "September 2023",

            endDate: "December 2023",

            description:
                "Participated in the development of a Facility Reservation Management System for administrative facility reservation processes.",

            responsibilities: [
                "Developed front-end and back-end functionality for the reservation system.",
                "Designed user interfaces and considered user experience requirements.",
                "Prepared system documentation, including Use Case Diagrams, Entity Relationship Diagrams, and Flowcharts.",
                "Conducted client interviews and gathered system requirements.",
                "Proposed system designs and improvements based on identified requirements.",
                "Performed troubleshooting and collaborated with team members throughout development."
            ],

            technologies: [
                "Laravel",
                "Vue.js",
                "Tailwind CSS",
                "JavaScript",
                "MySQL"
            ],

            category: "Internship"
        }
    ],


  
/* ================================================
   EDUCATION
   ================================================ */

education: [
    {
        id: "mmsu-bsit",

        category: "College",

        degree: "Bachelor of Science in Information Technology",

        institution: "Mariano Marcos State University",

        abbreviation: "MMSU",

        location: "Batac City, Ilocos Norte",

        startDate: "2020",

        endDate: "2024",

        description:
            "Studied information technology with an interest in web development, software development, and user interface design.",

        achievements: [
            "College Scholar.",
            "Research Colloquium — 3rd Place, NEDA Business Presentation."
        ]
    },

    {
        id: "senior-highschool",

        category: "Senior High School",

        degree: "Senior High School",

        institution: "Burgos Agro Industrial School",

        abbreviation: "BAIS",

        location: "Ilocos Norte, Philippines",

        startDate: "2018",

        endDate: "2020",

        description:
            "The General Academic Strand (GAS) provided versatile skills in research, communication, and adaptability for diverse opportunities.",

        achievements: [
            "With Honors"
        ]
    },

    {
        id: "junior-highschool",

        category: "Junior High School",

        degree: "Junior High School",

        institution: "Burgos Agro Industrial School",

        abbreviation: "BAIS",

        location: "Ilocos Norte, Philippines",

        startDate: "2014",

        endDate: "2018",

        description:
            "Technical Vocational Education provided hands-on training in electrical circuits, troubleshooting, and device maintenance, building practical skills for technical careers.",

        achievements: [
            "With Honors"
        ]
    },

    {
        id: "elementary",

        category: "Elementary",

        degree: "Elementary School",

        institution: "Burgos Central Elementary School",

        abbreviation: "BCES",

        location: "Ilocos Norte, Philippines",

        startDate: "2008",

        endDate: "2014",

        description:
            "Elementary School built my foundation in learning, discipline, and social skills, shaping my growth and curiosity.",

        achievements: [
            "With Honors"
        ]
    }
],



    /* ================================================
       TECHNICAL SKILLS
       ================================================ */

    skills: [
        {
            category: "Web Development",

            description: "Technologies for building modern web applications.",

            items: [
                "HTML",
                "CSS",
                "JavaScript",
                "Vue.js",
                "Bootstrap",
                "Tailwind CSS"
            ]
        },

        {
            category: "UI/UX Design",

            description: "Tools and practices for designing user experiences.",

            items: [
                "Figma",
                "Wireframing",
                "Interface Design",
                "Prototyping"
            ]
        },

        {
            category: "Software Development",

            description: "Development concepts and supporting technologies.",

            items: [
                "Laravel",
                "Node.js",
                "MySQL"
            ]
        }
    ],



projects: [
    {
        id: "facility-reservation-system",
        title: "Facility Reservation Management System",
        category: "Web Application",
        type: "Academic / Internship Project",
        description:
            "A web-based system developed to support facility reservation management and administrative processes.",
        technologies: [
            "Laravel",
            "Vue.js",
            "Tailwind CSS",
            "JavaScript",
            "MySQL"
        ],
        image: "assets/images/projects/facility-reservation.svg",
        imageAlt: "Facility Reservation Management System",
        liveUrl: "",
        sourceUrl: "",
        featured: true,
        status: "Completed"
    },
    {
        id: "lto-plate-verification",
        title: "Plate Verification and Data Management System",
        category: "Web Application",
        description:
            "A plate verification application designed to help users search vehicle plate records and manage related information.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "CSV"
        ],
        image: "assets/images/projects/plate-verification.png",
        imageAlt: "Plate Verification and Data Management System"
    },
    {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        category: "Web Development",
        description:
            "A responsive portfolio website presenting professional information, technical skills, experience, education, and selected projects.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        image: "assets/images/projects/portfolio.png",
        imageAlt: "Personal Portfolio Website"
    },
    {
        id: "hotel-website",
        title: "Hotel Management System",
        category: "Web Application",
        description:
            "A system for managing hotel bookings, guest information, and daily operations.",
        technologies: [
            "React",
            "Bootstrap",
            "MongoDB"
        ],
        image: "assets/images/projects/facility-reservation.svg",
        imageAlt: "Hotel Management System"
    },
    {
        id: "data-grouping",
        title: "Data Grouping Program",
        category: "Utility Application",
        description:
            "A program that analyzes, filters, separates, and detects missing data for efficient information management.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "CSV"
        ],
        image: "assets/images/projects/data-grouping.png",
        imageAlt: "Data Grouping Program"
    },
    {
        id: "travel-design",
        title: "Travel App Design",
        category: "UI/UX Design",
        description:
            "A design concept for an easy-to-use travel app for planning and managing trips.",
        technologies: [
            "Figma",
            "Wireframe"
        ],
        image: "assets/images/projects/travel.png",
        imageAlt: "Travel App Design"
    },
    {
        id: "app-design",
        title: "Econnect App Design",
        category: "UI/UX Design",
        description:
            "A mobile-based e-commerce application concept for entrepreneurs.",
        technologies: [
            "Figma",
            "Wireframe"
        ],
        image: "assets/images/projects/app.png",
        imageAlt: "Econnect App Design"
    }
],


/* -----------------------------------------------------
   8. CONTACT INFORMATION
----------------------------------------------------- */

contact: {
    phone: "09267520381",
    email: "garciajohnmyro@gmail.com",
    address: "Ilocos Norte, Philippines",

    // Keep blank unless you want to provide a map URL.
    mapUrl: ""
},




    /* ================================================
       FOOTER
       ================================================ */

    footer: {
        message: "Designed and developed with care.",

        copyright: "©",

        author: "John Myro N. Garcia",

        brand: "grc_arc"
    }

};