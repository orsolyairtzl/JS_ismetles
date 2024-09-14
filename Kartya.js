export default class Kartya {
#kutya = {}
constructor(kutya, szuloElem){
    /* inicializálja az adattagokat */
    this.#kutya =kutya
    this.szuloElem = szuloElem
    this.#adatKiiras()
    this.gombElem = $(".kivalaszt:last")
    this.#esemenyKezelo()
}
    #esemenyKezelo(){
        //eseménykezelő a gombokhoz
        this.gombElem.on("click", ()=>{
        console.log(this) //az a html elem ami kiváltotta az eseményt
        //létrehozunk egy saját eseményt
        const e = new CustomEvent("kivalaszt", {detail:this.#kutya})
        window.dispatchEvent(e)
    })
    }
    /*nem kell elé az export parancs,ez egy tagfüggvény*/
    #adatKiiras() {
        
        this.szuloElem.append(`<div class ="col-lg-4 col-md-6 card">
          <h3 class="card-title">${this.#kutya.nev}</h3>
          <p class="card-text">kor: ${this.#kutya.kor}</p>
          <p class="card-text">nem: ${this.#kutya.nem}</p>
          <button class="kivalaszt btn btn-success">Kiválaszt</button>
          </div>`);
      }
}