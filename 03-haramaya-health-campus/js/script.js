/* =========================================================
   MOBILE MENU
   ========================================================= */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
}

/* Close mobile when clicking a link */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});


/* =========================================================
   STICKY NAVBAR
   ========================================================= */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


/* =========================================================
   SMOOTH SCROLL FOR ANCHORS
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


/* =========================================================
   VIDEO POPUP
   ========================================================= */
const videoPopup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const videoClose = document.getElementById("videoClose");

document.querySelectorAll(".play-video").forEach(btn => {
  btn.addEventListener("click", () => {
    if (videoPopup && popupVideo) {
      videoPopup.style.display = "flex";
      popupVideo.play();
      document.body.classList.add("no-scroll");
    }
  });
});

if (videoClose) {
  videoClose.addEventListener("click", () => {
    videoPopup.style.display = "none";
    popupVideo.pause();
    document.body.classList.remove("no-scroll");
  });
}

if (videoPopup) {
  videoPopup.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
      videoPopup.style.display = "none";
      popupVideo.pause();
      document.body.classList.remove("no-scroll");
    }
  });
}


/* =========================================================
   COURSE DETAILS POPUP
   ========================================================= */
const coursePopup = document.getElementById("coursePopup");
const popupClose = document.getElementById("popupClose");
const popupContent = document.getElementById("popupContent");

/* Course details data */
const courseDetails = {
  "Medicine (MD)": `
  Full medical education including clinical rotations,
  surgery, pediatrics, internal medicine, community practice,
  and research work.
  `,

  "Nursing (BSc)": `
  Professional nursing education with hands-on
  patient care, emergency response, and leadership training.
  `,

  "Pharmacy (BPharm)": `
  Pharmaceutical science including chemistry,
  clinical pharmacy, pharmacology and drug design.
  `,

  "Dentistry (DDS)": `
  Dental medical practice including oral care,
  dental surgery, diagnosis, and orthodontics basics.
  `,

  "Medical Laboratory Science": `
  Biomedical diagnostics, microbiology, hematology,
  clinical chemistry, and research lab skills.
  `,

  "Public Health (MPH)": `
  Epidemiology, health policy, biostatistics,
  global health promotion, and environmental health.
  `,

  "Midwifery (BSc)": `
  Maternal care, reproductive health,
  newborn care, and clinical midwife practice.
  `,

  "Physiotherapy (BPT/MPT)": `
  Physical rehabilitation, sports injury recovery,
  neurology, mobility treatment, and therapy practice.
  `
};

/* Open popup */
document.querySelectorAll(".btn-course").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const title = btn.parentElement.querySelector("h3").textContent.trim();
    const detail = courseDetails[title] || "Program details coming soon.";

    popupContent.innerHTML = `
      <h2>${title}</h2>
      <p>${detail}</p>
    `;

    coursePopup.style.display = "flex";
    document.body.classList.add("no-scroll");
  });
});

/* Close popup */
if (popupClose) {
  popupClose.addEventListener("click", () => {
    coursePopup.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
}

/* Close when clicking overlay */
if (coursePopup) {
  coursePopup.addEventListener("click", (e) => {
    if (e.target === coursePopup) {
      coursePopup.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });
}

/* ESC key close */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && coursePopup.style.display === "flex") {
    coursePopup.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});



/* =========================================================
   DARK / LIGHT MODE TOGGLE
   ========================================================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
}

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "light") {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateIcon("dark");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    updateIcon("light");
  }
});

/* Update icon */
function updateIcon(theme) {
  if (theme === "light") {
    themeIcon.className = "fa-solid fa-moon";
  } else {
    themeIcon.className = "fa-solid fa-sun";
  }
}

