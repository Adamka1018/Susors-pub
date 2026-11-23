const keresGomb = document.querySelector("#GombKerek");
const megallitGomb = document.querySelector("#GombStop");
const osszegbefizetesGomb = document.querySelector("#osszegbefizetes");
const KeszGomb = document.querySelector("#GombDone");
const visszajelzes = document.querySelector("#review");
const osztasok = document.querySelector("#dealerosztasok");

let lapjaim = document.querySelector("#kartyaszam");
let osszegem = document.querySelector("#egyenleg");

// Ezek után jönnek a functionok, jó ha a gombokkal kezdjük és közvetlenül hozzá az egyenleg változások.
// a szabályok csak ezután: tétek limitje, minuszba nem mehet, ha nem ír semmit hibakódot írjon ki stb
// dealer mechanizmusa és a lapok számainak összeadása

