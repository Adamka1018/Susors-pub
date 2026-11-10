const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close-btn");

// Ablak megnyitása animációval
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // Megjelenítjük a DOM-ban
  setTimeout(() => {
    modal.classList.add("show"); // Elindítjuk a CSS animációt
  }, 10); // Egy minimális csúszás kell a böngészőnek a váltáshoz
});

// Ablak bezárása funkció (animáció megvárásával)
function closeModal() {
  modal.classList.remove("show"); // Elindítjuk az eltűnő animációt
  setTimeout(() => {
    modal.style.display = "none"; // Ha lefutott az animáció, elrejtjük
  }, 400); // 400ms = a CSS-ben megadott 0.4s animációs idő
}

// Bezárás az X-re kattintva
closeBtn.addEventListener("click", closeModal);

// Bezárás a sötét háttérre kattintva
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


// -----------------------------------------------------------------------------------------


const keresGomb = document.querySelector("#GombKerek");
const megallitGomb = document.querySelector("#GombStop");
const osszegbefizetesGomb = document.querySelector("#osszegbefizetes");
const KeszGomb = document.querySelector("#GombDone");
const visszajelzes = document.querySelector("#review");
const osztasok = document.querySelector("#dealerosztasok");

let lapjaim = document.querySelector("#kartyaszam");
let osszegem = document.querySelector("#egyenleg");


