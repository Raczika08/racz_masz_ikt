document.querySelector(".neve").innerHTML = localStorage.getItem("felhasznalonev");

function oszlopSzam() {
    var szelesseg = window.innerWidth;

    if (szelesseg >= 1300) return 5;
    if (szelesseg >= 768 || szelesseg > 1024 && szelesseg < 1300) return 4;
    if (szelesseg < 580) return 2;
    return 3
}

function normalizal(szoveg) {
    return szoveg.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function kivalasztottak(csoportSelector) {
    var jeloltek = document.querySelectorAll(csoportSelector + " input[type='checkbox']:checked");
    var ertekek = [];
    for (let i = 0; i < jeloltek.length; i++) {
        ertekek.push(jeloltek[i].value);
    }
    return ertekek;
}

function szurtFilmek() {
    var mufajok = kivalasztottak(".mufajok");
    var statuszok = kivalasztottak(".statusz");

    return filmek.filter(function (film) {
        var mufajOk = mufajok.length === 0 || mufajok.includes(normalizal(film.getMufaj()));
        var statuszOk = statuszok.length === 0 || statuszok.includes(normalizal(film.getStatusz()));
        return mufajOk && statuszOk;
    });
}

function kiiratas() {
    var filmKartyak = document.querySelector(".filmKartyak");
    var db = oszlopSzam();
    var lista = szurtFilmek();
    var html = "";

    if (lista.length === 0) {
        filmKartyak.innerHTML = `<p class="text-white fs-4 text-center pt-4">Nincs a szűrésnek megfelelő találat.</p>`;
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        if (i % db === 0) {
            html += `<div class="sor d-flex pb-4">`;
        }

        html += `
            <div class="card kartya-${db} ${i} zoom-in text-white rounded-5 mx-2 p-0" onclick="megnyitas(${i})">
                <img class="rounded-top-5 p-1" src="${lista[i].getKep()}" alt="${lista[i].getKepLeiras()}" title="${lista[i].getKepCim()}">
                <p class="ps-2 pt-2 m-0 fs-3">${lista[i].getNev()}</p>
                <p class="ps-2 text-secondary">${lista[i].getMufaj()}</p>
            </div>
        `;

        if (i % db === db - 1 || i === lista.length - 1) {
            html += `</div>`;
        }
    }

    filmKartyak.innerHTML = html;
}

var aktualisOszlop = oszlopSzam();
kiiratas();

document.querySelector(".szuro form").addEventListener("change", kiiratas);

window.addEventListener("resize", function () {
    var uj = oszlopSzam();
    if (uj !== aktualisOszlop) {
        aktualisOszlop = uj;
        kiiratas();
    }
});

function megnyitas(i) {
    window.open("megnyitott.html?id=" + i, "_blank");
};