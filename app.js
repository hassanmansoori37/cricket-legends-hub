



  const players = [
  // ===== ACTIVE PLAYERS (Aapne bheje) =====
  { name: "Mohammad Amir", country: "Pakistan", debut: 2009, retirement: "2024", age: 33, img: "images/amir.jpg" },
  { name: "Virat Kohli", country: "India", debut: 2008, retirement: "Still Playing (ODI only)", age: 37, img: "images/virat.jpg" },
  { name: "Babar Azam", country: "Pakistan", debut: 2015, retirement: "Still Playing", age: 30, img: "images/babar.jpg" },
  { name: "Steve Smith", country: "Australia", debut: 2010, retirement: "Still Playing (Test/T20I)", age: 35, img: "images/smith.jpg" },
  { name: "Rohit Sharma", country: "India", debut: 2007, retirement: "Still Playing (ODI only)", age: 38, img: "images/rohit.jpg" },
   { name: "Kane Williamson", country: "New Zealand", debut: 2010, retirement: "Still Playing", age: 35, img: "images/williamson.jpg" },
  { name: "Joe Root", country: "England", debut: 2012, retirement: "Still Playing", age: 34, img: "images/root.jpg" },
  { name: "Ben Stokes", country: "England", debut: 2013, retirement: "Still Playing", age: 34, img: "images/stokes.jpg" },
  { name: "Jasprit Bumrah", country: "India", debut: 2016, retirement: "Still Playing", age: 31, img: "images/bumrah.jpg" },
  { name: "Shaheen Afridi", country: "Pakistan", debut: 2018, retirement: "Still Playing", age: 25, img: "images/shaheen.jpg" },
  { name: "Chris Gayle", country: "West Indies", debut: 1999, retirement: 2021, age: 45, img: "images/gayle.jpg" },
  { name: "Finn Allen", country: "New Zealand", debut: 2021, retirement: "Still Playing", age: 26, img: "images/finnallen.jpg" },
  { name: "Jofra Archer", country: "England", debut: 2019, retirement: "Still Playing", age: 30, img: "images/archer.jpg" },
  { name: "Brendon McCullum", country: "New Zealand", debut: 2002, retirement: 2016, age: 43, img: "images/mccullum.jpg" },
  { name: "Darren Sammy", country: "West Indies", debut: 2007, retirement: 2016, age: 41, img: "images/sammy.jpg" },
  { name: "Salman Ali Agha", country: "Pakistan", debut: 2022, retirement: "Still Playing", age: 31, img: "images/salman.jpg" },

  { name: "Jacques Kallis", country: "South Africa", debut: 1995, retirement: 2014, age: 48, img: "images/kallis.jpg" },
  { name: "Sachin Tendulkar", country: "India", debut: 1989, retirement: 2013, age: 52, img: "images/sachin.jpg" },
  { name: "Ricky Ponting", country: "Australia", debut: 1995, retirement: 2012, age: 51, img: "images/ponting.jpg" },
  { name: "Wasim Akram", country: "Pakistan", debut: 1984, retirement: 2003, age: 59, img: "images/wasim.jpg" },
  { name: "Brian Lara", country: "West Indies", debut: 1990, retirement: 2007, age: 56, img: "images/lara.jpg" },
  { name: "Muttiah Muralitharan", country: "Sri Lanka", debut: 1992, retirement: 2010, age: 53, img: "images/murali.jpg" },
  { name: "AB de Villiers", country: "South Africa", debut: 2004, retirement: 2018, age: 42, img: "images/abd.jpg" },
  { name: "Kumar Sangakkara", country: "Sri Lanka", debut: 2000, retirement: 2015, age: 48, img: "images/sangakkara.jpg" },
  { name: "MS Dhoni", country: "India", debut: 2004, retirement: 2020, age: 44, img: "images/dhoni.jpg" },
  { name: "Shane Warne", country: "Australia", debut: 1992, retirement: 2007, age: 52, img: "images/warne.jpg" },
  { name: "Dale Steyn", country: "South Africa", debut: 2004, retirement: 2020, age: 42, img: "images/steyn.jpg" },

  { name: "Sunil Gavaskar", country: "India", debut: 1971, retirement: 1987, age: 75, img: "images/gavaskar.jpg" },
  { name: "Viv Richards", country: "West Indies", debut: 1974, retirement: 1991, age: 72, img: "images/viv.jpg" },
  { name: "Glenn McGrath", country: "Australia", debut: 1993, retirement: 2007, age: 55, img: "images/mcgrath.jpg" },
  
  
];

let currentIndex = 0;
let total = players.length;

let imgEl = document.getElementById("playerImg");
let nameEl = document.getElementById("playerName");
let countryEl = document.getElementById("playerCountry");
let debutEl = document.getElementById("debut");
let retirementEl = document.getElementById("retirement");
let ageEl = document.getElementById("age");
let counterEl = document.getElementById("counter");

function updatePlayer(index) {
  let p = players[index];
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