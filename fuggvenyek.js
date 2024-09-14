export function cimKiiras(cim) {
  // a header h1 tagjébe fűzzük hozzá a címet
  //h1 tag megfogása
  //const h1Elem=document.querySelector("header h1") ez is jó
  const h1Elem = $("header");
  console.log(h1Elem);
  //h1Elem.innerHTML += <p>+cim+</p>;
  h1Elem.append(`<p> ${cim} </p>`);
}

export function adatKiiras(kutya) {
  const tartalomElem = $(".tartalom");
  tartalomElem.append(`<div class ="col-lg-4 col-md-6 card">
    <h3>${kutya.nev}</h3>
    <p>kor: ${kutya.kor}</p>
    <p>nem: ${kutya.nem}</p>
    <button class="kivalaszt btn btn-success">Kiválaszt</button>
    </div>`);
}
