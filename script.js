// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Set initial theme
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-mode');
            if (themeIcon) themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        }

        // Toggle theme on click
        themeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

            if (themeIcon) {
                themeIcon.classList.replace(
                    isDarkMode ? 'bi-moon-fill' : 'bi-sun-fill',
                    isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'
                );
            }
        });
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        let scrollTimeout;
        const scrollHandler = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                backToTop.classList.toggle('show', window.pageYOffset > 300);
            }, 100);
        };

        window.addEventListener('scroll', scrollHandler);
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Smooth scroll for tabs
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', (e) => {
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for fade-in
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.visibility = 'hidden';
        fadeObserver.observe(el);
    });

    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (typeof bootstrap !== 'undefined' && tooltipElements.length) {
        [...tooltipElements].map(el => new bootstrap.Tooltip(el));
    }

    // Initialize EmailJS and form handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm && typeof emailjs !== 'undefined') {
        emailjs.init("vRDRj0SlZD5LhAW4d"); // Your public key
        const formToastEl = document.getElementById("formToast");
        const formToast = formToastEl ? new bootstrap.Toast(formToastEl) : null;

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
                time: new Date().toLocaleString(),
            };

            emailjs.send("service_fvfir5p", "template_13lefqq", formData)
                .then(() => {
                    if (formToast) formToast.show();
                    contactForm.reset();
                })
                .catch(error => {
                    console.error("Email sending failed:", error);
                    alert("❌ Failed to send: " + error.text);
                });
        });
    }


    // ---------------------------------------------------------------------------------------------------------------------------------------------------------

    //  ----------------------------------------- This Section To Add Manualy Your Education , Projects , Certifcates , And Skills -------------------------

    // ---------------------------------------------------------------------------------------------------------------------------------------------------------


    /* ----------------------------------------------------------------------------------------------------
       📌 Education Section To add Your Education to add manually in This Below content (Manual JSON)
    ------------------------------------------------------------------------------------------------------- */


    const educationData = [

        // ---------------------------------------------------------
        // ✅ Add more Education manually here:
        // ---------------------------------------------------------


        // Uncoment this Below content Add your Content


        // {
        //     degree: "MBA in Business Analytics",
        //     institution: "Indian Institute of Management Bangalore",
        //     period: "Expected 2026",
        //     description: "Specialization in business intelligence, strategic decision-making, and advanced analytics."
        // }

    ];

    const eduContainer = document.querySelector('#education .row');
    if (eduContainer) {
        educationData.forEach((edu, index) => {
            const col = document.createElement('div');
            col.className = "col-md-6";

            col.innerHTML = `
      <div class="edu-card fade-in delay-${index}">
        <strong>${edu.degree}</strong> — <em>${edu.institution}</em>
        <small class="text-muted d-block mt-2">${edu.period}</small>
        <p class="mt-2 mb-0">${edu.description}</p>
      </div>
    `;

            eduContainer.appendChild(col);
        });
    }


    // ---------------------------------------------------------------- Education Section End---------------------------------------------------------------------------------------


    /* ----------------------------------------------------------------------------------------------
       📌 Project Section To add Your project to add manually in This Below content (Manual JSON)
    ------------------------------------------------------------------------------------------------- */
    const projectsData = [
        // -------------------------------------------------
        // ✅ Add more projects manually here:
        // -------------------------------------------------



        // Uncoment this below content Add your Content

        // {
        //     title: "Disaster Relief Resource Manager",
        //     description: "Developed a resource allocation tool to manage and distribute supplies effectively during emergencies.",
        //     badge: { text: "30% Faster Response", class: "bg-danger" },
        //     cardClass: "border-left-danger"
        // }


    ];

    const projectsContainer = document.querySelector('#projects .row');
    if (projectsContainer) {
        projectsData.forEach((project, index) => {
            const col = document.createElement('div');
            col.className = "col-md-6 col-lg-3";

            col.innerHTML = `
                <div class="project-card ${project.cardClass} fade-in delay-${index}">
                    <h5>${project.title}</h5>
                    <p>${project.description}</p>
                    <span class="badge ${project.badge.class}">${project.badge.text}</span>
                </div>
            `;

            projectsContainer.appendChild(col);
        });
    }


    // --------------------------------------------------------------- Project Section End -------------------------------------------------------------




    /* -------------------------------------------------------------------------------------------------
    📌 Certification Section To add certification in the below content (Manual JSON)
    ---------------------------------------------------------------------------------------------------- */
    const certificationsData = [

        // -------------------------------------------------
        // ✅ Add more Certification Details Manually here:
        // -------------------------------------------------


        // uncomment this Below content add Your Content 



        // {
        //     "title": "Advanced Excel for Data Analysis",
        //     "issued": "Issued Feb 2024",
        //     "description": "Mastered pivot tables, advanced formulas, and dashboard reporting for business insights.",S

        //     "image": "excel_cert.png",                    <-----------------------------// add your local Image to the Your File and type the Image name And Refresh Your Page  ------------->


        //     "alt": "Excel Data Analysis Certificate"
        // }

    ];

    const certsContainer = document.querySelector('#certifications .row');
    if (certsContainer) {
        certificationsData.forEach(cert => {
            const col = document.createElement('div');
            col.className = "col-lg-6 col-md-8 col-sm-10";

            col.innerHTML = `
      <div class="edu-card p-3 shadow-sm rounded text-center fade-in">
        <img src="${cert.image}" class="img-fluid mb-3 rounded" alt="${cert.alt}">
        <h5>${cert.title}</h5>
        <small class="text-muted d-block mt-1">${cert.issued}</small>
        <p class="mt-2 mb-0">${cert.description}</p>
      </div>
    `;

            certsContainer.appendChild(col);
        });
    }

});

// ---------------------------------------------------------- End Of the Certification Section ---------------------------------------------------------------------



// Inside your DOMContentLoaded event (add this below certificationsData rendering)

// -------------------------------------------------------------------------------------------------
// 📌 Skills Section To add skills manually in JSON
// -------------------------------------------------------------------------------------------------
const skillsData = [

    // -------------------------------------------------
    // ✅ Add more Skills manually here:
    // -------------------------------------------------


    // Uncoment this content to add Manully Your Data 


    // {
    //     name: "Cloud Platforms",
    //     level: 75,
    //     tooltip: "AWS, Azure, and Google Cloud (Compute, Storage, Networking)",
    //     barClass: "gradient-orange",
    //     delay: "delay-1"
    // }

];

const skillsContainer = document.querySelector('#skills .row');
if (skillsContainer) {
    skillsData.forEach((skill, index) => {
        const col = document.createElement('div');
        col.className = "col-md-6 col-lg-4";

        col.innerHTML = `
            <div class="skill-item p-3 shadow-sm rounded fade-in ${skill.delay}" 
                 data-bs-toggle="tooltip" data-bs-placement="top" 
                 title="${skill.tooltip}">
                <div class="skill-name d-flex justify-content-between mb-2">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="progress rounded">
                    <div class="progress-bar ${skill.barClass}" role="progressbar" 
                         style="width: ${skill.level}%" aria-valuenow="${skill.level}" 
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        `;
        skillsContainer.appendChild(col);
    });
}







