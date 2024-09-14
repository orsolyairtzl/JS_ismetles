import Kartya from "./Kartya.js";

export default class Kartyak {
    constructor(lista, szuloElem){
        this.szuloElem = szuloElem;
        this.lista = lista
        this.#kartyaKiir()
    }
    #kartyaKiir (){
        //lista kiíratás
        this.lista.forEach((kutya) =>{
        //adatKiiras(kutya)
        new Kartya(kutya, this.szuloElem)
} 
)
    }
}