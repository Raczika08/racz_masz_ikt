var cim = window.location.search;
var i = cim.split("=")[1];


document.querySelector(".kep").innerHTML = `<img class="w-75 rounded" src="${filmek[i].getKep()}" alt="${filmek[i].getKepLeiras()}" title="${filmek[i].getKepCim()}">`;
document.querySelector(".filmCim").innerHTML = filmek[i].getNev();
document.querySelector(".filmMufaj").innerHTML = filmek[i].getMufaj();
document.querySelector(".filmHossz").innerHTML = filmek[i].getHossz();
document.querySelector(".filmErtekeles").innerHTML = filmek[i].getErtekeles() + `<i class="bi bi-star-fill ps-2"></i>`;
document.querySelector(".filmLeiras").innerHTML = filmek[i].getFilmLeiras();