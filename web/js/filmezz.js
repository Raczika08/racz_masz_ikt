document.querySelector(".neve").innerHTML = localStorage.getItem("felhasznalonev");

var filmek1 = new Filmek("A remény rabjai", "FILM", "142 perc", "Dráma", 9.3, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg", "A remény rabjai – plakát", "Két fogoly barátsága a Shawshank-börtön falai között");
var filmek2 = new Filmek("A keresztapa", "FILM", "175 perc", "Dráma", 9.2, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", "A keresztapa – plakát", "A Corleone maffiacsalád feje és a fia a hatalom árnyékában");
var filmek3 = new Filmek("A sötét lovag", "FILM", "152 perc", "Akció", 9.0, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", "A sötét lovag – plakát", "Batman és a Joker összecsapása Gotham városában");
var filmek4 = new Filmek("Schindler listája", "FILM", "195 perc", "Dráma", 9.0, "MEGNEZENDO", "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", "Schindler listája – plakát", "Egy német üzletember zsidók százainak életét menti meg a háborúban");
var filmek5 = new Filmek("Ponyvaregény", "FILM", "154 perc", "Thriller", 8.9, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", "Ponyvaregény – plakát", "Összefonódó gengszter-történetek Los Angelesben");
var filmek6 = new Filmek("A Gyűrűk Ura: A király visszatér", "FILM", "201 perc", "Akció", 9.0, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", "A Gyűrűk Ura: A király visszatér – plakát", "A Gyűrű Szövetsége a végső csata előtt Középföldén");
var filmek7 = new Filmek("Forrest Gump", "FILM", "142 perc", "Dráma", 8.8, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", "Forrest Gump – plakát", "Egy egyszerű férfi életútja az amerikai történelem sodrában");
var filmek8 = new Filmek("Eredet", "FILM", "148 perc", "Sci-fi", 8.8, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg", "Eredet – plakát", "Tolvajok az álmok világában ötletet ültetnek egy üzletember fejébe");
var filmek9 = new Filmek("Harcosok klubja", "FILM", "139 perc", "Dráma", 8.8, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", "Harcosok klubja – plakát", "Egy álmatlan irodista földalatti verekedőklubot alapít");
var filmek10 = new Filmek("Mátrix", "FILM", "136 perc", "Sci-fi", 8.7, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", "Mátrix – plakát", "Egy hacker rájön, hogy a valóság csupán szimuláció");
var filmek11 = new Filmek("Csillagok között", "FILM", "169 perc", "Sci-fi", 8.7, "ELKEZDETT", "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", "Csillagok között – plakát", "Űrhajósok egy féreglyukon át keresnek új otthont az emberiségnek");
var filmek12 = new Filmek("Volt egyszer egy Hollywood", "FILM", "161 perc", "Komédia", 7.6, "MEGNEZENDO", "", "Volt egyszer egy Hollywood – plakát", "Egy színész és kaszkadőrje a hatvanas évek végi Hollywoodban");
var filmek13 = new Filmek("Élősködők", "FILM", "132 perc", "Thriller", 8.5, "MEGNEZENDO", "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", "Élősködők – plakát", "Egy szegény család fokozatosan beszivárog egy gazdag család életébe");
var filmek14 = new Filmek("Gladiátor", "FILM", "155 perc", "Akció", 8.5, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", "Gladiátor – plakát", "Az elárult római tábornok gladiátorként áll bosszút");
var filmek15 = new Filmek("Életrevalók", "FILM", "112 perc", "Komédia", 8.5, "BEFEJEZETT", "", "Életrevalók – plakát", "Egy gazdag mozgássérült férfi és fiatal ápolója különös barátsága");
var filmek16 = new Filmek("Oppenheimer", "FILM", "180 perc", "Dráma", 8.3, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", "Oppenheimer – plakát", "Az atombomba atyjának története a Manhattan-terv idején");
var filmek17 = new Filmek("Dűne", "FILM", "155 perc", "Sci-fi", 8.0, "BEFEJEZETT", "", "Dűne – plakát", "Egy ifjú herceg sorsa a sivatagbolygón, Arrakison");
var filmek18 = new Filmek("Dűne: Második rész", "FILM", "166 perc", "Sci-fi", 8.5, "ELKEZDETT", "", "Dűne: Második rész – plakát", "Paul a fremenekkel szövetkezve szembeszáll ellenségeivel");
var filmek19 = new Filmek("Léon, a profi", "FILM", "110 perc", "Akció", 8.5, "MEGNEZENDO", "", "Léon, a profi – plakát", "Egy magányos bérgyilkos befogad egy árván maradt lányt");
var filmek20 = new Filmek("A bárányok hallgatnak", "FILM", "118 perc", "Thriller", 8.6, "MEGNEZENDO", "", "A bárányok hallgatnak – plakát", "Egy FBI-ügynök egy fogva tartott gyilkos segítségét kéri");
var filmek21 = new Filmek("Mad Max: A harag útja", "FILM", "120 perc", "Akció", 8.1, "BEFEJEZETT", "", "Mad Max: A harag útja – plakát", "Hajsza a kopár sivatagban egy zsarnok hadúr ellen");
var filmek22 = new Filmek("Whiplash", "FILM", "106 perc", "Dráma", 8.5, "MEGNEZENDO", "", "Whiplash – plakát", "Egy fiatal dobos és könyörtelen tanára párharca");
var filmek23 = new Filmek("Joker", "FILM", "122 perc", "Thriller", 8.4, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", "Joker – plakát", "Egy megvetett komikus lassan gonosztevővé válik Gothamben");
var filmek24 = new Filmek("Avatar", "FILM", "162 perc", "Sci-fi", 7.9, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", "Avatar – plakát", "Egy volt tengerészgyalogos a Pandora bolygó őslakosai közé kerül");
var filmek25 = new Filmek("Titanic", "FILM", "195 perc", "Dráma", 7.9, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", "Titanic – plakát", "Egy szerelem története a végzetes óceánjáró fedélzetén");
var filmek26 = new Filmek("Vissza a jövőbe", "FILM", "116 perc", "Sci-fi", 8.5, "BEFEJEZETT", "", "Vissza a jövőbe – plakát", "Egy tinédzser időgéppel utazik vissza a múltba");
var filmek27 = new Filmek("Elveszett jelentés", "FILM", "102 perc", "Dráma", 7.7, "MEGNEZENDO", "", "Elveszett jelentés – plakát", "Két idegen különös kapcsolata egy tokiói szállodában");
var filmek28 = new Filmek("A Truman Show", "FILM", "103 perc", "Dráma", 8.2, "BEFEJEZETT", "", "A Truman Show – plakát", "Egy férfi rájön, hogy élete egy tévéműsor");
var filmek29 = new Filmek("A Grand Budapest Hotel", "FILM", "99 perc", "Komédia", 8.1, "MEGNEZENDO", "", "A Grand Budapest Hotel – plakát", "Egy legendás szállodaportás kalandjai a háborúk közötti Európában");
var filmek30 = new Filmek("Barbie", "FILM", "114 perc", "Komédia", 6.8, "MEGNEZENDO", "", "Barbie – plakát", "Barbie elhagyja Barbie-földet, és szembesül a valós világgal");
var filmek31 = new Filmek("Breaking Bad", "SOROZAT", "5 évad", "Thriller", 9.5, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg", "Breaking Bad – plakát", "Egy kémiatanár drogfőzőként építi a saját birodalmát");
var filmek32 = new Filmek("Trónok harca", "SOROZAT", "8 évad", "Dráma", 9.2, "BEFEJEZETT", "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg", "Trónok harca – plakát", "Nemesi családok harca a Vastrónért Westerosban");
var filmek33 = new Filmek("Csernobil", "SOROZAT", "1 évad", "Dráma", 9.3, "BEFEJEZETT", "", "Csernobil – plakát", "A csernobili atomkatasztrófa és következményeinek története");
var filmek34 = new Filmek("The Wire", "SOROZAT", "5 évad", "Dráma", 9.3, "MEGNEZENDO", "", "The Wire – plakát", "Baltimore drogkereskedelme a rendőrök és bűnözők szemszögéből");
var filmek35 = new Filmek("Sherlock", "SOROZAT", "4 évad", "Thriller", 9.1, "BEFEJEZETT", "", "Sherlock – plakát", "A modern Londonban nyomozó zseniális detektív és doktor Watson");
var filmek36 = new Filmek("Stranger Things", "SOROZAT", "5 évad", "Sci-fi", 8.7, "ELKEZDETT", "", "Stranger Things – plakát", "Gyerekek természetfeletti rejtélyre bukkannak egy kisvárosban");
var filmek37 = new Filmek("Better Call Saul", "SOROZAT", "6 évad", "Dráma", 8.9, "ELKEZDETT", "", "Better Call Saul – plakát", "Egy kisstílű ügyvéd útja Saul Goodmanné válásig");
var filmek38 = new Filmek("Fekete tükör", "SOROZAT", "7 évad", "Sci-fi", 8.7, "ELKEZDETT", "", "Fekete tükör – plakát", "Önálló történetek a technológia sötét oldaláról");
var filmek39 = new Filmek("Peaky Blinders", "SOROZAT", "6 évad", "Dráma", 8.8, "BEFEJEZETT", "", "Peaky Blinders – plakát", "A Shelby bűnbanda felemelkedése a háború utáni Birminghamben");
var filmek40 = new Filmek("A Korona", "SOROZAT", "6 évad", "Dráma", 8.6, "MEGNEZENDO", "", "A Korona – plakát", "II. Erzsébet királynő uralkodásának évtizedei");
var filmek41 = new Filmek("Dark", "SOROZAT", "3 évad", "Sci-fi", 8.7, "BEFEJEZETT", "", "Dark – plakát", "Eltűnt gyerekek és időutazás egy német kisvárosban");
var filmek42 = new Filmek("The Last of Us", "SOROZAT", "2 évad", "Horror", 8.7, "ELKEZDETT", "", "The Last of Us – plakát", "Egy túlélő és egy lány útja a gombafertőzés utáni Amerikában");
var filmek43 = new Filmek("Succession", "SOROZAT", "4 évad", "Dráma", 8.8, "MEGNEZENDO", "", "Succession – plakát", "Egy médiabirodalom örökségéért vívott családi háború");
var filmek44 = new Filmek("Fargo", "SOROZAT", "5 évad", "Thriller", 8.9, "MEGNEZENDO", "", "Fargo – plakát", "Hétköznapi emberek gyilkos ügyekbe keverednek az amerikai északon");
var filmek45 = new Filmek("The Boys", "SOROZAT", "5 évad", "Akció", 8.7, "ELKEZDETT", "", "The Boys – plakát", "Egy csapat szembeszáll a korrupt szuperhősökkel");
var filmek46 = new Filmek("Top Gear", "TV_MUSOR", "33 évad", "Komédia", 8.7, "MEGNEZENDO", "", "Top Gear – plakát", "Autós tesztek és őrült kihívások humorral fűszerezve");
var filmek47 = new Filmek("Jóbarátok", "TV_MUSOR", "10 évad", "Komédia", 8.9, "BEFEJEZETT", "", "Jóbarátok – plakát", "Hat barát élete New Yorkban");
var filmek48 = new Filmek("A Simpson család", "TV_MUSOR", "36 évad", "Komédia", 8.7, "ELKEZDETT", "", "A Simpson család – plakát", "Egy átlagos amerikai család animációs kalandjai Springfieldben");
var filmek49 = new Filmek("Hivatali patkányok (The Office US)", "TV_MUSOR", "9 évad", "Komédia", 9.0, "BEFEJEZETT", "", "Hivatali patkányok – plakát", "Egy papírcég irodai mindennapjai dokumentarista stílusban");
var filmek50 = new Filmek("Planet Earth II", "TV_MUSOR", "6 rész", "Dráma", 9.5, "BEFEJEZETT", "", "Planet Earth II – plakát", "A Föld vadvilága lélegzetelállító felvételeken");

var filmek = [
  filmek1, filmek2, filmek3, filmek4, filmek5,
  filmek6, filmek7, filmek8, filmek9, filmek10,
  filmek11, filmek12, filmek13, filmek14, filmek15,
  filmek16, filmek17, filmek18, filmek19, filmek20,
  filmek21, filmek22, filmek23, filmek24, filmek25,
  filmek26, filmek27, filmek28, filmek29, filmek30,
  filmek31, filmek32, filmek33, filmek34, filmek35,
  filmek36, filmek37, filmek38, filmek39, filmek40,
  filmek41, filmek42, filmek43, filmek44, filmek45,
  filmek46, filmek47, filmek48, filmek49, filmek50
];

function kiiratas() {
    var filmKartyak = document.querySelector(".filmKartyak");
    filmKartyak.innerHTML = "";

    for (let i = 0; i < filmek.length; i++) {
        if (i % 5 === 0) {
            filmKartyak.innerHTML += `<div class="sor"></div>`;

            var sorok = document.querySelectorAll(".sor");
            sorok[sorok.length - 1].classList.add("d-flex", "pe-5", "pb-4");
        }

        var sorok = document.querySelectorAll(".sor");
        sorok[sorok.length - 1].innerHTML += `
            <div class="card zoom-in text-white rounded-5 w-25 mx-2 p-0">
                <img class="rounded-top-5 p-1" src="${filmek[i].getKep()}" alt="${filmek[i].getKepLeiras()}" title="${filmek[i].getKepCim()}">
                <p class="ps-2 pt-2 m-0 fs-3">${filmek[i].getNev()}</p>
                <p class="ps-2 text-secondary">${filmek[i].getMufaj()}</p>
            </div>
        `;
    }
}
kiiratas();