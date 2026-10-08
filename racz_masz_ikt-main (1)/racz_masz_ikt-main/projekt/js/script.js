function valtas() {
    document.querySelector(".fiokLetrehozas").classList.remove("d-none")
    document.querySelector(".bejelentkezes").classList.add("d-none")
}

function visszavaltas() {
    felhasznalonev = document.querySelector(".fiokLetrehozas .felhasznalonev").value
    jelszo = document.querySelector(".fiokLetrehozas .jelszo").value
    jelszomegerosites = document.querySelector(".fiokLetrehozas .jelszomegerosites").value

    if (jelszo == jelszomegerosites && felhasznalonev != "") {
        document.querySelector(".fiokLetrehozas").classList.remove("rosszulMegadott")
        document.querySelector(".rosszAdatok").innerHTML = ""


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
        document.querySelector(".fiokLetrehozas").classList.add("rosszulMegadott")
        document.querySelector(".fiokLetrehozas .rosszAdatok").innerHTML = "Minden mezőt ki kell tölteni!!"
    } else {
        document.querySelector(".fiokLetrehozas").classList.add("rosszulMegadott")
        document.querySelector(".fiokLetrehozas .rosszAdatok").innerHTML = "A jelszavaknak egyezniük kell!!"
    }
}

function bejelentkezes() {
    megadottNev = document.querySelector(".bejelentkezes .felhasznalonev").value
    megadottJelszo = document.querySelector(".bejelentkezes .jelszo").value
    document.querySelector(".bejelentkezes").classList.remove("rosszulMegadott")
    document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = ""
    
    if (megadottNev == "" || megadottJelszo == "") {
        document.querySelector(".bejelentkezes").classList.add("rosszulMegadott")
        document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = "Minden mezőt ki kell tölteni!!"
    }else if (megadottNev == localStorage.getItem("felhasznalonev") && megadottJelszo == localStorage.getItem("jelszo")) {
        window.location.href = "filmezz.html";
    }else {
        document.querySelector(".bejelentkezes").classList.add("rosszulMegadott")
        document.querySelector(".bejelentkezes .rosszAdatok").innerHTML = "A megadott adatok nem egyeznek, vagy nincsen még fiókja!!"
    }
}