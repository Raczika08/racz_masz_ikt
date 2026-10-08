var voltProba = false

function valtas() {
    document.querySelector(".fiokLetrehozas").classList.remove("d-none")
    document.querySelector(".bejelentkezes").classList.add("d-none")

    if (voltProba) {
        document.querySelector(".bejelentkezes").classList.remove("rosszulMegadott")
        document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = ""
    }
}

function visszavaltas() {
    felhasznalonev = document.querySelector(".fiokLetrehozas .felhasznalonev").value
    jelszo = document.querySelector(".fiokLetrehozas .jelszo").value
    jelszomegerosites = document.querySelector(".fiokLetrehozas .jelszomegerosites").value

    document.querySelector(".fiokLetrehozas").classList.remove("rosszulMegadott")
    document.querySelector(".fiokLetrehozas .rosszAdatok").innerHTML = ""
    document.querySelector(".fiokLetrehozas .rosszAdatok").classList.remove("bg-danger")

    if (jelszo == jelszomegerosites && felhasznalonev != "") {

        localStorage.setItem("felhasznalonev", felhasznalonev);
        localStorage.setItem("jelszo", jelszo)

        alert("A jelszavát kérjük ne felejtse el mert, váltotoztatásra nincs lehetőség!")

        document.querySelector(".bejelentkezes").classList.remove("d-none")
        document.querySelector(".fiokLetrehozas").classList.add("d-none")

        felhasznalonev = document.querySelector(".fiokLetrehozas .felhasznalonev").value = ""
        jelszo = document.querySelector(".fiokLetrehozas .jelszo").value = ""
        jelszomegerosites = document.querySelector(".fiokLetrehozas .jelszomegerosites").value = ""
    } else if (jelszo == "" || jelszomegerosites == "" || felhasznalonev == "") {

        document.querySelector(".fiokLetrehozas").classList.add("rosszulMegadott")
        document.querySelector(".fiokLetrehozas .rosszAdatok").innerHTML = "Minden mezőt ki kell tölteni!!"
        document.querySelector(".fiokLetrehozas .rosszAdatok").classList.add("bg-danger")
    } else {

        document.querySelector(".fiokLetrehozas").classList.add("rosszulMegadott")
        document.querySelector(".fiokLetrehozas .rosszAdatok").innerHTML = "A jelszavaknak egyezniük kell!!"
        document.querySelector(".fiokLetrehozas .rosszAdatok").classList.add("bg-danger")
    }
}

function bejelentkezes() {
    megadottNev = document.querySelector(".bejelentkezes .felhasznalonev").value
    megadottJelszo = document.querySelector(".bejelentkezes .jelszo").value

    document.querySelector(".bejelentkezes").classList.remove("rosszulMegadott")
    document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = ""
    document.querySelector(".bejelentkezes .rosszAdatok").classList.remove("bg-danger")
    
    if (megadottNev == "" || megadottJelszo == "") {
        voltProba = true
        document.querySelector(".bejelentkezes").classList.add("rosszulMegadott")
        document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = "Minden mezőt ki kell tölteni!!"
        document.querySelector(".bejelentkezes .rosszAdatok").classList.add("bg-danger")

    }else if (megadottNev == localStorage.getItem("felhasznalonev") && megadottJelszo == localStorage.getItem("jelszo")) {
        window.location.href = "filmezz.html";
        megadottNev = document.querySelector(".bejelentkezes .felhasznalonev").value = ""
        megadottJelszo = document.querySelector(".bejelentkezes .jelszo").value = ""
    }else {

        voltProba = true
        document.querySelector(".bejelentkezes").classList.add("rosszulMegadott")
        document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = "A megadott adatok nem egyeznek, vagy nincsen még fiókja!!"
        document.querySelector(".bejelentkezes .rosszAdatok").classList.add("bg-danger")

        megadottNev = document.querySelector(".bejelentkezes .felhasznalonev").value = ""
        megadottJelszo = document.querySelector(".bejelentkezes .jelszo").value = ""
    }
}