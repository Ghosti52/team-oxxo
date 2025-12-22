function toggleYetkili() {
  const y = document.getElementById("yetkililer");
  const e = document.getElementById("etkinlikler");

  e.style.display = "none";
  y.style.display = y.style.display === "block" ? "none" : "block";
}

function toggleEtkinlik() {
  const e = document.getElementById("etkinlikler");
  const y = document.getElementById("yetkililer");

  y.style.display = "none";
  e.style.display = e.style.display === "block" ? "none" : "block";
}
