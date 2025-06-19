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
  "Hari ini adalah hari yang paling aku tunggu-tunggu, karena di tanggal ini, seseorang yang paling aku cintai di dunia ini lahir. Orang yang bukan cuma cantik secara luar, tapi juga luar biasa di dalam. kamu yang selalu sabar, pemaaf, dan punya senyum yang bisa bikin hariku jauh lebih baik, bahkan dari jauh.🥳",
      "Aku masih ingat jelas momen momen dimana kita masih lucu lucunya pacaran, saat kita pertama kali ketemu waktu itu. Rasanya seneng banget bisa kenal sosok yg paling hebat kaya kamu. Kita juga pernah LDR, meski kita LDR dan cuma bisa ngobrol lewat layar hp bahkan gak sedikit juga kita berantem tapi, setiap kali kamu panggil aku “sayang”, rasanya semua itu langsung jadi kecil banget. Kayak kamu lagi di sampingku.",
      "Aku tahu, hubungan ini nggak selalu mudah. Tapi kamu selalu jadi alasan kenapa aku mau terus berjuang. Kamu nggak cuma sabar, tapi juga pemaaf, bahkan saat aku nyebelin. Kamu selalu bisa bikin aku ngerasa cukup dan diterima, dengan segala kekuranganku. Itu sesuatu yang nggak semua orang bisa lakuin, dan aku bersyukur banget bisa punya kamu.",
      "Kadang aku mikir, kok bisa ya aku seberuntung ini? Punya pacar yang lucu tapi juga bisa serius ngomongin masa depan. Kamu tuh paket lengkap, sayang. Nggak ada yang bisa gantiin kamu di hidupku.",
      "Di ulang tahunmu ini, aku cuma mau kamu tahu satu hal: kamu itu luar biasa. Jangan pernah ragu sama dirimu sendiri, karena dari semua orang yang aku kenal, kamu adalah satu-satunya yang bisa bikin aku ngerasa tenang, disayang, dan dimengerti.",
      "Aku doain semua impian kamu bisa tercapai. Semoga kamu selalu sehat, bahagia, dikelilingi orang-orang baik, dan semoga Tuhan selalu menjaga kamu dalam setiap langkahmu.",
      "Dan pastinya, aku akan terus ada entah kamu lagi nonton marah2 sambil nangis, lagi marah karena kangen, atau lagi bahagia karena hal kecil. Aku ingin jadi bagian dari semua versimu, dan tumbuh bareng kamu, satu hari, satu tahun, satu kehidupan sekalipun.",
      "Selamat ulang tahun, sayangku. Terima kasih udah lahir ke dunia, dan lebih dari itu, terima kasih karena udah milih aku untuk nemenin kamu, dan udah beribu-ribu kali maaf in aku. Happy BirthDay Sayang 🥰🥰🥳🥳✨😍 Aku sayang kamu, selalu. 💗💗",
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

// Mulai dari pesan pertama
window.onload = () => {
  nextMessage();
};
