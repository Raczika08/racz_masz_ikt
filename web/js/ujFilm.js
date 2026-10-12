document.querySelector(".neve").innerHTML = localStorage.getItem("felhasznalonev");

const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false
})

function uzenetMutat(cim, uzenet, siker) {
    document.querySelector(".modal-title").innerHTML = cim
    document.querySelector(".modal-body p").innerHTML = uzenet
    if (siker) {
        document.querySelector(".modal-footer .btn").className = "btn btn-success"
    } else {
        document.querySelector(".modal-footer .btn").className = "btn btn-danger"
    }
    myModal.show()
}

function ujFilmMentes() {
    var cim = document.querySelector(".cim").value.trim()
    var kategoria = document.querySelector(".kategoria").value
    var hosszSzoveg = document.querySelector(".hossz").value.trim()
    var mufaj = document.querySelector(".mufaj").value
    var ertekelesSzoveg = document.querySelector(".ertekeles").value.trim().replace(",", ".")
    var kep = document.querySelector(".kepURL").value.trim()
    var leiras = document.querySelector(".leiras").value.trim()
    var evszam = document.querySelector(".evszam").value

    var hibak = ""

    if (cim.length < 1 || cim.length > 99) {
        hibak += "A cím 2 és 99 karakter között legyen!<br>"
    }
    for (var i = 0; i < filmek.length; i++) {
        if (filmek[i].getNev().toLowerCase() == cim.toLowerCase()) {
            hibak += "Ilyen című film már szerepel a listában!<br>"
        }
    }

    if (evszam < 1800 || evszam > 2026) {
        hibak += "Invalid évszám, az évszámnak 1800 - 2026 kell legyen!<br>"
    }

    var hossz = Number(hosszSzoveg)
    if (hosszSzoveg == "" || !Number.isInteger(hossz) || hossz < 1 || hossz > 999) {
        hibak += "A hossz 1 és 999 közötti egész szám legyen!<br>"
    }

    var ertekeles = Number(ertekelesSzoveg)
    if (ertekelesSzoveg == "" || isNaN(ertekeles) || ertekeles < 0 || ertekeles > 10) {
        hibak += "Az értékelés 0 és 10 közötti szám legyen!<br>"
    }

    if (!kep.startsWith("http://") && !kep.startsWith("https://")) {
        hibak += "A kép URL-je http:// vagy https:// kezdetű legyen!<br>"
    }

    if (leiras.length < 10 || leiras.length > 999) {
        hibak += "A leírás 10 és 999 karakter között legyen!<br>"
    }

    if (hibak != "") {
        uzenetMutat("Hibaüzenet!", hibak, false)

    } else {
        if (kategoria == "FILM") {
            hosszFelirat = hossz + " perc"
        } else if (kategoria == "SOROZAT") {
            hosszFelirat = hossz + " évad"
        } else {
            var hosszFelirat = hossz + " rész"
        }

        var kepcim = cim + " - plakát"
        var film = new Filmek(cim, kategoria, hosszFelirat, mufaj, ertekeles, "MEGNEZENDO", kep, kepcim, kepcim, leiras, evszam)

        filmek.push(film)

        var mentettFilmek = JSON.parse(localStorage.getItem("ujFilmek")) || []
        mentettFilmek.push({
            nev: cim, kategoria: kategoria, hossz: hosszFelirat, mufaj: mufaj, ertekeles: ertekeles,
            statusz: "MEGNEZENDO", kep: kep, kepCim: kepcim, kepLeiras: kepcim, filmLeiras: leiras, evszam: evszam
        })
        localStorage.setItem("ujFilmek", JSON.stringify(mentettFilmek))

        document.querySelector("form").reset()
        uzenetMutat("Siker!", "A film sikeresen hozzáadva!", true)
    }
}