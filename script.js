// Balon animasi acak
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.background = `radial-gradient(circle at 30% 30%, 
    hsl(${Math.random() * 360}, 80%, 70%), 
    hsl(${Math.random() * 360}, 80%, 40%))`;
  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 6000);
}

setInterval(createBalloon, 500);

// Logika pesan ucapan
const messages = [
  "Semoga panjang umur dan sehat selalu! 🥳",
  "Semoga hari ini seindah senyumanmu 😊",
  "Jangan lupa traktirannya ya! 🍕🍰",
  "Sukses dan bahagia selalu untukmu 🎁",
  "Hari ini milikmu, nikmatilah setiap momennya! 🌟"
];

let index = 0;

function typeMessage(text, i = 0) {
  const msgDiv = document.getElementById('message');
  if (i < text.length) {
    msgDiv.innerHTML = text.substring(0, i + 1);
    setTimeout(() => typeMessage(text, i + 1), 50);
  }
}

function nextMessage() {
  typeMessage(messages[index]);
  index = (index + 1) % messages.length;
}

// Mulai dari pesan pertama
window.onload = () => {
  nextMessage();
};
