



  const players = [
  // ===== ACTIVE PLAYERS (Aapne bheje) =====
  { name: "Mohammad Amir", country: "Pakistan", debut: 2009, retirement: "Still Playing (White Ball)", age: 33, img: "images/amir.jpg" },
  { name: "Virat Kohli", country: "India", debut: 2008, retirement: "Still Playing (ODI only)", age: 37, img: "images/virat.jpg" },
  { name: "Babar Azam", country: "Pakistan", debut: 2015, retirement: "Still Playing", age: 30, img: "images/babar.jpg" },
  { name: "Steve Smith", country: "Australia", debut: 2010, retirement: "Still Playing (Test/T20I)", age: 35, img: "images/smith.jpg" },
  { name: "Rohit Sharma", country: "India", debut: 2007, retirement: "Still Playing (ODI/T20I)", age: 38, img: "images/rohit.jpg" },
  ]

let currentIndex = 0;
const total = players.length;

const imgEl = document.getElementById("playerImg");
const nameEl = document.getElementById("playerName");
const countryEl = document.getElementById("playerCountry");
const debutEl = document.getElementById("debut");
const retirementEl = document.getElementById("retirement");
const ageEl = document.getElementById("age");
const counterEl = document.getElementById("counter");

function updatePlayer(index) {
  const p = players[index];
  imgEl.src = p.img;
  nameEl.innerText = p.name;
  countryEl.innerText = p.country;
  debutEl.innerText = p.debut;
  if (p.retirement === "Still Playing") {
    retirementEl.innerHTML = "🎯 Still Playing";
  } else {
    retirementEl.innerText = p.retirement;
  }
  ageEl.innerText = p.age;
  counterEl.innerText = `${index+1} / ${total}`;
}

function nextPlayer() {
  currentIndex = (currentIndex + 1) % total;
  updatePlayer(currentIndex);
}

function prevPlayer() {
  currentIndex = (currentIndex - 1 + total) % total;
  updatePlayer(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", nextPlayer);
document.getElementById("prevBtn").addEventListener("click", prevPlayer);

// Keyboard left/right arrow support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextPlayer();
  if (e.key === "ArrowLeft") prevPlayer();
});

// Initial load
if (total > 0) updatePlayer(0);
else {
  nameEl.innerText = "No players";
  counterEl.innerText = "0 / 0";
}