function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-250px";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("tentangContent").classList.remove("show");
  document.getElementById("kontakLinks").classList.remove("show");
  document.getElementById("tentangArrow").innerHTML = "&#9662;";
  document.getElementById("kontakArrow").innerHTML = "&#9662;";
}

function toggleTentang() {
  const content = document.getElementById("tentangContent");
  const arrow = document.getElementById("tentangArrow");
  content.classList.toggle("show");
  arrow.innerHTML = content.classList.contains("show") ? "&#9650;" : "&#9662;";
}

function toggleKontak() {
  const content = document.getElementById("kontakLinks");
  const arrow = document.getElementById("kontakArrow");
  content.classList.toggle("show");
  arrow.innerHTML = content.classList.contains("show") ? "&#9650;" : "&#9662;";
}
