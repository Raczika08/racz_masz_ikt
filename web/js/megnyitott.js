document.querySelector(".neve").innerHTML = localStorage.getItem("felhasznalonev");

const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false
})

var cim = window.location.search;
var i = cim.split("=")[1];

function kiir() {
    document.querySelector(".kep").innerHTML = `<img class="w-75 rounded" src="${filmek[i].getKep()}" alt="${filmek[i].getKepLeiras()}" title="${filmek[i].getKepCim()}">`;
    document.querySelector(".filmCim").innerHTML = filmek[i].getNev();
    document.querySelector(".filmMufaj").innerHTML = filmek[i].getMufaj();
    document.querySelector(".filmHossz").innerHTML = filmek[i].getHossz();
    document.querySelector(".filmErtekeles").innerHTML = filmek[i].getErtekeles() + `<i class="bi bi-star-fill ps-2"></i>`;
    document.querySelector(".filmEvszam").innerHTML = filmek[i].getFilmEvszam()
    document.querySelector(".filmLeiras").innerHTML = filmek[i].getFilmLeiras();

    if (normalizal(filmek[i].getStatusz()) == "befejezett") {
        document.querySelector(".megnez").classList.add("d-none")
    }
}

function formMegnyitas() {
    document.querySelector(".szerkesztes").classList.remove("d-none")
    document.querySelector(".ertekeles").value = filmek[i].getErtekeles()
}

function normalizal(szoveg) {
    return szoveg.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function save() {
    var ujErtekeles = parseFloat(document.querySelector(".ertekeles").value)

    if (ujErtekeles >= 0 && ujErtekeles <= 10) {
        filmek[i].setErtekeles(ujErtekeles)
        mentes()
        document.querySelector(".modal-body p").innerHTML = "Sikeres módósítás!"
        myModal.show()
        kiir()
        document.querySelector(".szerkesztes").classList.add("d-none")
    } else {
        document.querySelector(".modal-body p").innerHTML = "Invalid számot adott meg!"
        myModal.show()
    }
}

function elkezdett() {
    filmek[i].setStatusz("ELKEZDETT")
    mentes()
}
function befejezett() {
    filmek[i].setStatusz("BEFEJEZETT")
    mentes()
    kiir()
}

kiir()