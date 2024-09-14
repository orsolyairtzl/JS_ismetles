import { cimKiiras } from "./fuggvenyek.js";
import Kartyak from "./Kartyak.js";
import Kartya from "./Kartya.js";
import { kutyaLista } from "./adaok.js";

let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";

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


cimKiiras(cim);

const tartalomElem = $(".tartalom");
new Kartyak(kutyaLista, tartalomElem)


//adatKiiras(kutyaLista[0])
//adatKiiras(kutyaLista[1])