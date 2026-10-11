document.querySelector(".neve").innerHTML = localStorage.getItem("felhasznalonev");


function oszlopSzam() {
    var szelesseg = window.innerWidth;

    if (szelesseg >= 1300) return 5;
    if (szelesseg >= 768 || szelesseg > 1024 && szelesseg < 1300) return 4;
    if (szelesseg < 580) return 2;
    return 3
}

function kiiratas() {
    var filmKartyak = document.querySelector(".filmKartyak");
    var db = oszlopSzam();
    var html = "";

    for (let i = 0; i < filmek.length; i++) {
        if (filmek[i].getKategoria() == "FILM") {
        if (i % db === 0) {
            html += `<div class="sor d-flex pb-4">`;
        }

        html += `
            <div class="card kartya-${db} ${i} zoom-in text-white rounded-5 mx-2 p-0" onclick="megnyitas(${i})">
                <img class="rounded-top-5 p-1" src="${filmek[i].getKep()}" alt="${filmek[i].getKepLeiras()}" title="${filmek[i].getKepCim()}">
                <p class="ps-2 pt-2 m-0 fs-3">${filmek[i].getNev()}</p>
                <p class="ps-2 text-secondary">${filmek[i].getMufaj()}</p>
            </div>
        `;

        if (i % db === db - 1 || i === filmek.length - 1) {
            html += `</div>`;
        }
    }
    }

    filmKartyak.innerHTML = html;
}

var aktualisOszlop = oszlopSzam();
kiiratas();

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