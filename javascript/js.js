window.addEventListener("load", sidenVises);

const serveau = document.querySelector("#serveau");

// Burger menu
function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);

  serveau.addEventListener("click", effekt);
}

// index logo knap
// hjem.addEventListener("click", kontakt);
// const hjem = document.querySelector("#logo");

// function kontakt() {
//   window.location.href = "index.html";
// }

// h1 animation forside

function effekt() {
  serveau.classList.add("pulse");
  document;
  serveau.addEventListener("animationend", igen);
}

function igen() {
  console.log("igen");
  serveau.classList.remove("pulse");
  window.location.href = "om_mig.html";
}

// bruger menu//

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "╳";
  }
}
