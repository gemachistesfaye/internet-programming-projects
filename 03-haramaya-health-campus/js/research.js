// Popup Elements
const popup = document.getElementById("researchPopup");
const closeBtn = document.getElementById("popupClose");
const image = document.getElementById("popupImage");
const title = document.getElementById("popupTitle");
const text = document.getElementById("popupText");
const achievements = document.getElementById("popupAchievements");

// DATA
const researchData = {

  communicable: {
    title: "Communicable Diseases",
    image: "../images/communicable.jpg",
    description: "Research focused on TB, Malaria and HIV/AIDS with strong community-centered methodology and vaccine trials.",
    achievements: [
      "Published 22 papers with WHO collaboration",
      "Community-based malaria prevention program",
      "Early TB detection using mobile labs",
      "Vaccine trial with CDC partnership"
    ]
  },

  ncd: {
    title: "Non-Communicable Diseases",
    image: "../images/ncd.jpg",
    description: "Studies on diabetes, cardiovascular diseases and cancer interventions focusing on prevention and treatment.",
    achievements: [
      "Screened 9,000 people for diabetes",
      "Heart health awareness program",
      "6 international research grants",
      "Cancer screening pilot underway"
    ]
  },

  mch: {
    title: "Maternal & Child Health",
    image: "../images/mch.jpg",
    description: "Research to reduce maternal mortality and improve child health outcomes in rural communities.",
    achievements: [
      "Maternal nutrition program with UNICEF",
      "Reduced neonatal mortality by 12%",
      "Published 17 peer-reviewed studies",
      "Clinical training for midwives"
    ]
  }

};

// OPEN POPUP
document.querySelectorAll(".research-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.research;
    const data = researchData[key];

    image.src = data.image;
    title.textContent = data.title;
    text.textContent = data.description;

    achievements.innerHTML = "";
    data.achievements.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      achievements.appendChild(li);
    });

    popup.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

// CLOSE
closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  document.body.style.overflow = "";
});
