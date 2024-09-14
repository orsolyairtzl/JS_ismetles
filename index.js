import Kartyak from "./Kartyak.js";
import { kutyaLista } from "./adaok.js";

const kivalasztottLista = [];
let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";

//melyik kártyára kattintunk? Az adatait tegyük listába
//getter osztályba - getter meghívása


const tartalomElem = $(".tartalom");
const kivElem = $(".kivalasztottak");
new Kartyak(kutyaLista, tartalomElem)

$(window).on("kivalaszt", (event) =>{
  console.log(event.detail)
  kivalasztottLista.push(event.detail)
  console.log(kivalasztottLista)
  new Kartyak(kivalasztottLista, kivElem)
})



//adatKiiras(kutyaLista[0])
//adatKiiras(kutyaLista[1])
/* //objektumomat hozunk létre összetett adatszerkezet esetén
const kutya1 = {
  nev: "Floki",
  kor: 12,
  nem: "kan",
};
const kutya2 = {
  nev: "Dézi",
  kor: 2,
  nem: "nőstény",
};
kutya1.nev = "Jenő"; //így kell objektumok tulajdonságait változtatni, mert azobjektum const, de a tulajdonságai nem
console.log("1. kutya: ", kutya1);
console.log("cim: ", cim);

//lista - csak azonos típusú adatok lehetnek
const nevlista = ["Dézi", "Jenő", "Béla"];
const szamlista = [12, 23, 43, -23, 15.2];
nevlista[0] = "Floki";
console.log("lista: ", nevlista); */