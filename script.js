function toggleYetkililer() {
  const y = document.getElementById("yetkililer");
  const d = document.getElementById("duyurular");

  d.style.display = "none";
  y.style.display = y.style.display === "block" ? "none" : "block";
}

function toggleDuyurular() {
  const d = document.getElementById("duyurular");
  const y = document.getElementById("yetkililer");

  y.style.display = "none";
  d.style.display = d.style.display === "block" ? "none" : "block";
}
