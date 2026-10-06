function valtas() {
    document.querySelector(".fiokLetrehozas").classList.remove("d-none")
    document.querySelector(".bejelentkezes").classList.add("d-none")
}
function visszavaltas() {
    felhasznalonev = document.querySelector(".fiokLetrehozas .felhasznalonev").value
    jelszo = document.querySelector(".fiokLetrehozas .jelszo").value
    jelszomegerosites = document.querySelector(".fiokLetrehozas .jelszomegerosites").value

    if (jelszo == jelszomegerosites && felhasznalonev != "") {
        var profil = new Profile(felhasznalonev, jelszo)
        localStorage.setItem("felhasznalonev", felhasznalonev);
        localStorage.setItem("jelszo", jelszo)

        alert("A jelszavát kérjük ne felejtse el mert, váltotoztatásra nincs lehetőség!")

        document.querySelector(".bejelentkezes").classList.remove("d-none")
        document.querySelector(".fiokLetrehozas").classList.add("d-none")

        felhasznalonev = document.querySelector(".fiokLetrehozas .felhasznalonev").value = ""
        jelszo = document.querySelector(".fiokLetrehozas .jelszo").value = ""
        jelszomegerosites = document.querySelector(".fiokLetrehozas .jelszomegerosites").value = ""
    } else if (jelszo == "" || jelszomegerosites == "" || felhasznalonev == "") {
        alert("Az összes mezőt ki kell tölteni!")
    } else {
        alert("A jelszavak nem egyeznek!")
    }
}

function bejelentkezes() {
    megadottNev = document.querySelector(".bejelentkezes .felhasznalonev").value
    megadottJelszo = document.querySelector(".bejelentkezes .jelszo").value

    if (megadottNev == localStorage.getItem("felhasznalonev") && megadottJelszo == localStorage.getItem("jelszo")) {
        window.location.href = "filmezz.html";
    } else {
        alert("Az adatok nem egyeznek!")
    }
}