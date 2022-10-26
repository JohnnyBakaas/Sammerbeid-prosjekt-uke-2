"use strict";

//get Html with this function - Heine
//make an 2d Array to store the products for shopping cart - Rebecka
//make shopping cart - Rebecka
//calculate total price - Heine

//globale Variabler
let eplerAntall = 0;
const eplerPris = 5;

let pærerAntall = 0;
const pærerPris = 10;

let druerAntall = 0;
const druerPris = 7;

let bananerAntall = 0;
const bananerPris = 8;

let plommerAntall = 0;
const plommerPris = 15;

let grapefruktAntall = 0;
const grapefruktPris = 20;

var totalAmount;
//slutt av globale variabler

const fruit = ["epler", "pærer", "druer", "bananer", "plommer", "grapefrukt"];

//Heine
function getHTML(htmlen) {
  let fruitType = htmlen.innerHTML;

  if (fruitType == "Epler") {
    eplerAntall++;
  }
  if (fruitType == "Pærer") {
    pærerAntall++;
  }
  if (fruitType == "Druer") {
    druerAntall++;
  }
  if (fruitType == "Bananer") {
    bananerAntall++;
  }
  if (fruitType == "Plommer") {
    plommerAntall++;
  }
  if (fruitType == "Grapefrukt") {
    grapefruktAntall++;
  }
}

//Rebecka
function storeInShoppingCart() {
  let cartHTML = "";

  if (eplerAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[0] +
      " " +
      eplerAntall +
      ", " +
      eplerAntall * eplerPris +
      "kr" +
      ". " +
      "</div>";
  }
  if (pærerAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[1] +
      " " +
      pærerAntall +
      ", " +
      pærerAntall * pærerPris +
      "kr" +
      ". " +
      "</div>";
  }
  if (druerAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[2] +
      " " +
      druerAntall +
      ", " +
      druerAntall * druerPris +
      "kr" +
      ". " +
      "</div>";
  }
  if (bananerAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[3] +
      " " +
      bananerAntall +
      ", " +
      bananerAntall * bananerPris +
      "kr" +
      ", " +
      "</div>";
  }
  if (plommerAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[4] +
      " " +
      plommerAntall +
      ", " +
      plommerAntall * plommerPris +
      "kr" +
      ", " +
      "</div>";
  }
  if (grapefruktAntall !== 0) {
    cartHTML +=
      "<div>" +
      fruit[5] +
      " " +
      grapefruktAntall +
      ", " +
      grapefruktAntall * grapefruktPris +
      "kr" +
      ", " +
      "</div>";
  }
  document.getElementById("cart").innerHTML = cartHTML;
}
//Heine
function calculatePrice() {
  let totalEplePris = eplerAntall * eplerPris;
  let totalPærePris = pærerAntall * pærerPris;
  let totalDruePris = druerAntall * druerPris;
  let totalBananPris = bananerAntall * bananerPris;
  let totalPlommePris = plommerAntall * plommerPris;
  let totalGrapefruktPris = grapefruktAntall * grapefruktPris;

  totalAmount =
    totalEplePris +
    totalPærePris +
    totalDruePris +
    totalBananPris +
    totalPlommePris +
    totalGrapefruktPris +
    0;

  document.getElementById("cartPriceID").innerHTML =
    "Totalt: " + totalAmount + " kr.";
}

function buy() {
  let returnMoneyText = document.getElementById("returnMoney");

  let wallet = document.getElementById("wallet").value;

  let walletAfterPayment = wallet - totalAmount;

  let tusenLapper = 0;
  let femhundreLapper = 0;
  let tohundreLapper = 0;
  let hundreLapper = 0;
  let femtiLapper = 0;
  let tjueKroning = 0;
  let tiKroning = 0;
  let femKroning = 0;
  let enKroning = 0;

  let kontant = "";

  if (totalAmount === undefined) {
    returnMoneyText.innerHTML = "Du har ikke noe i handlekurven!";
  } else if (walletAfterPayment < 0) {
    returnMoneyText.innerHTML = "Du har ikke råd!";
  } else {
    let i = walletAfterPayment;
    while (i > 0) {
      if (i >= 1000) {
        tusenLapper++;
        i -= 1000;
      } else if (i >= 500) {
        femhundreLapper++;
        i -= 500;
      } else if (i >= 200) {
        tohundreLapper++;
        i -= 200;
      } else if (i >= 100) {
        hundreLapper++;
        i -= 100;
      } else if (i >= 50) {
        femtiLapper++;
        i -= 50;
      } else if (i >= 20) {
        tjueKroning++;
        i -= 20;
      } else if (i >= 10) {
        tiKroning++;
        i -= 10;
      } else if (i >= 5) {
        femKroning++;
        i -= 5;
      } else if (i >= 1) {
        enKroning++;
        i -= 1;
      } else {
        i = 0;
        break;
      }
    }

    console.log(enKroning);

    if (tusenLapper > 0) {
      kontant += `<div> ${tusenLapper} tusenlapper. </div>`;
    }
    if (femhundreLapper > 0) {
      kontant += `<div> ${femhundreLapper} femhundrelapper. </div>`;
    }
    if (tohundreLapper > 0) {
      kontant += `<div> ${tohundreLapper} tohundrelapper. </div>`;
    }
    if (hundreLapper > 0) {
      kontant += `<div> ${hundreLapper} hundrelapper. </div>`;
    }
    if (femtiLapper > 0) {
      kontant += `<div> ${femtiLapper} femtilapper. </div>`;
    }
    if (tjueKroning > 0) {
      kontant += `<div> ${tjueKroning} tjuekroninger. </div>`;
    }
    if (tiKroning > 0) {
      kontant += `<div> ${tiKroning} tikroninger. </div>`;
    }
    if (femKroning > 0) {
      kontant += `<div> ${femKroning} femkroninger. </div>`;
    }
    if (enKroning !== 0) {
      kontant += `<div> ${enKroning} enkroninger. </div>`;
    }

    returnMoneyText.innerHTML =
      "Du får igjen " + walletAfterPayment + " kr; " + kontant;
  }
}

function go(htmlen) {
  getHTML(htmlen);
  storeInShoppingCart();
  calculatePrice();
}

let input = document.getElementById("wallet");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enterbutton").click();
  }
});
