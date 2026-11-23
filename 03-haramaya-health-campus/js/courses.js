// =============================
//   POPUP ELEMENTS
// =============================
const popup = document.getElementById('coursePopup');
const popupClose = document.getElementById('popupClose');
const popupContent = document.getElementById('popupContent');

// =============================
//   FULL COURSE DETAILS DATA
// =============================
const courseDetails = {
  "Medicine (MD)": {
    intro: "Comprehensive medical training program focused on scientific knowledge, clinical practice, and community health research.",
    duration: "6 Years",
    level: "Doctor of Medicine (MD)",
    skills: [
      "Surgery & Clinical Procedures",
      "Internal Medicine",
      "Pediatrics & Obstetrics",
      "Diagnostic Skills",
      "Emergency Medicine",
      "Medical Research"
    ]
  },

  "Nursing (BSc)": {
    intro: "Hands-on nursing education designed to create highly skilled and compassionate professionals ready for clinical service and healthcare leadership.",
    duration: "4 Years",
    level: "Bachelor of Science (Nursing)",
    skills: [
      "Patient Care & Management",
      "Emergency Nursing",
      "Psychology & Counselling",
      "Infection Prevention",
      "Clinical Procedures",
      "Leadership & Ethics"
    ]
  },

  "Pharmacy (BPharm)": {
    intro: "Advanced pharmaceutical training focusing on medicine design, production, and clinical pharmacy.",
    duration: "5 Years",
    level: "Bachelor of Pharmacy (BPharm)",
    skills: [
      "Pharmacology",
      "Pharmaceutical Chemistry",
      "Drug Manufacturing",
      "Clinical Pharmacy",
      "Toxicology",
      "Patient Care"
    ]
  },

  "Dentistry (DDS)": {
    intro: "Professional training in dental surgery including orthodontics, oral diagnosis, and community dental service.",
    duration: "6 Years",
    level: "Doctor of Dental Surgery (DDS)",
    skills: [
      "Dental Surgery",
      "Oral Diagnosis",
      "Restorative Dentistry",
      "Orthodontics Basics",
      "Dental Radiology",
      "Community Dental Care"
    ]
  },

  "Medical Laboratory Science": {
    intro: "Biomedical laboratory training for disease diagnosis and clinical research.",
    duration: "4 Years",
    level: "BSc in Medical Laboratory",
    skills: [
      "Microbiology",
      "Hematology",
      "Clinical Chemistry",
      "Parasitology",
      "Diagnostic Methods",
      "Research Methods"
    ]
  },

  "Public Health (MPH)": {
    intro: "Leadership-focused program for community health management, research and policy development.",
    duration: "2 Years",
    level: "Masters in Public Health",
    skills: [
      "Epidemiology",
      "Health Policy",
      "Community Health Programs",
      "Environmental Health",
      "Biostatistics",
      "Research & Analysis"
    ]
  },

  "Midwifery (BSc)": {
    intro: "Training for maternal care and neonatal treatment with focus on community health.",
    duration: "4 Years",
    level: "Bachelor of Midwifery (BSc)",
    skills: [
      "Maternal Health",
      "Skilled Childbirth Assistance",
      "Reproductive Health",
      "Newborn Care",
      "Emergency Obstetrics",
      "Community Awareness"
    ]
  },

  "Physiotherapy (BPT/MPT)": {
    intro: "Therapy program focused on physical rehabilitation, mobility support and injury recovery.",
    duration: "4–6 Years",
    level: "BPT / MPT",
    skills: [
      "Rehabilitation Science",
      "Neurotherapy",
      "Musculoskeletal Therapy",
      "Pain Management",
      "Sports Therapy",
      "Mobility Training"
    ]
  }
};

// =============================
//   OPEN POPUP
// =============================
document.querySelectorAll('.btn-course').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const title = btn.parentElement.querySelector('h3').textContent;
    const data = courseDetails[title];

    popupContent.innerHTML = `
      <h2>${title}</h2>

      <p class="intro">${data.intro}</p>

      <div class="meta">
        <p><strong>Duration:</strong> ${data.duration}</p>
        <p><strong>Program Level:</strong> ${data.level}</p>
      </div>

      <h3>What You Will Learn</h3>
      <ul class="skills">
        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;

    popup.style.display = "flex";

    // === disable scrolling background
    document.body.classList.add("no-scroll");
  });
});

// =============================
//   CLOSE POPUP
// =============================
popupClose.addEventListener('click', () => {
  popup.style.display = "none";

  // === enable scrolling back
  document.body.classList.remove("no-scroll");
});

// Close when clicking overlay
popup.addEventListener('click', (e) => {
  if(e.target === popup){
    popup.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

