/* ================= TYPEWRITER ================= */
const text = "Happy Birthday My Queen 👑❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

/* ================= TIMER ================= */
const startDate = new Date("2023-01-01"); // date sahi hai (keep)
setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerHTML =
    `${days} Days Together 💞`;
}, 1000);

/* ================= SURPRISE (SHOW VIDEO) ================= */
function revealMessage() {
  // Tap for Surprise button hide
  const btn = document.querySelector(".secret button");
  if (btn) btn.style.display = "none";

  // Video show
  const videoSection = document.getElementById("videoSection");
  if (videoSection) {
    videoSection.style.display = "block";
    videoSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* ================= PROPOSAL ================= */
function acceptProposal() {
  const answer = document.getElementById("proposalAnswer");
  answer.innerHTML = "She said YES 😭💍❤️";
  answer.style.display = "block";
}

/* NO button runaway 😈 */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });
}

/* ================= ROSES ================= */
setInterval(() => {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerText = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 7000);
}, 500);

/* ================= FIREWORKS ================= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function fireworks() {
  ctx.fillStyle = "rgba(0,0,0,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    2,
    0,
    Math.PI * 2
  );
  ctx.fill();

  requestAnimationFrame(fireworks);
}
fireworks();
