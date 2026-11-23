/* IMPACT COUNTER */
const counters = document.querySelectorAll(".counter");
let done = false;

function startCount() {
  if (done) return;
  counters.forEach(counter => {
    let target = +counter.dataset.count;
    let speed = 40;
    let count = 0;

    let timer = setInterval(() => {
      count++;
      counter.textContent = count;
      if (count >= target) clearInterval(timer);
    }, speed);
  });
  done = true;
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".impact-section");
  const sectionTop = section.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 100) startCount();
});

/* TEAM POPUP */
const teamData = {
  director: {
    name: "Dr. Said Mohammed",
    role: "Campus Director",
    bio: "Leading overall campus strategy including academic development, partnerships and research growth."
  },
  research: {
    name: "Dr. Hana Kebede",
    role: "Research Lead",
    bio: "Responsible for supporting research teams and building international collaborative projects."
  },
  training: {
    name: "Dr. Abdulahi Yusuf",
    role: "Training Coordinator",
    bio: "Oversees practical medical training programs and student placement in hospitals."
  }
};

const modal = document.getElementById("memberPopup");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.member;
    document.getElementById("mName").textContent = teamData[key].name;
    document.getElementById("mRole").textContent = teamData[key].role;
    document.getElementById("mBio").textContent = teamData[key].bio;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
});
