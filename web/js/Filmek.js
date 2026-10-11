class Filmek{
    #nev;
    #kategoria;
    #hossz;
    #mufaj;
    #ertekeles;
    #statusz;
    #kep;
    #kepCim;
    #kepLeiras;
    #filmLeiras;

    constructor(nev, kategoria, hossz, mufaj, ertekeles, statusz, kep, kepCim, kepLerias, filmLeiras){
        this.setNev(nev);
        this.setKategoria(kategoria);
        this.setHossz(hossz);
        this.setMufaj(mufaj);
        this.setErtekeles(ertekeles);
        this.setStatusz(statusz);
        this.setKep(kep);
        this.setKepCim(kepCim);
        this.setKepLeiras(kepLerias);
        this.setFilmLeiras(filmLeiras);
    }

    setNev(nev){
        this.#nev = nev;
    }
    setKategoria(kategoria){
        this.#kategoria = kategoria;
    }
    setHossz(hossz){
        this.#hossz = hossz;
    }
    setMufaj(mufaj){
        this.#mufaj = mufaj;
    }
    setErtekeles(ertekeles){
        this.#ertekeles = ertekeles;
    }
    setStatusz(statusz){
        this.#statusz = statusz;
    }
    setKep(kep){
        this.#kep = kep;
    }
    setKepCim(kepCim){
        this.#kepCim = kepCim;
    }
    setKepLeiras(kepLeiras){
        this.#kepLeiras = kepLeiras;
    }
    setFilmLeiras(filmLeiras){
        this.#filmLeiras = filmLeiras;
    }

    getNev(){
        return this.#nev;
    }
    getKategoria(){
        return this.#kategoria;
    }
    getHossz(){
        return this.#hossz;
    }
    getMufaj(){
        return this.#mufaj;
    }
    getErtekeles(){
        return this.#ertekeles;
    }
    getStatusz(){
        return this.#statusz;
    }
    getKep(){
        return this.#kep;
    }
    getKepCim(){
        return this.#kepCim;
    }
    getKepLeiras(){
        return this.#kepLeiras;
    }
    getFilmLeiras(){
        return this.#filmLeiras;
    }

    toString() {
        return  `${this.getNev()}, ${this.getKategoria()}, ${this.getHossz()}, ${this.getMufaj()}, ${this.getErtekeles()}, ${this.getStatusz()}, ${this.getKep()}, ${this.getKepCim()}, ${this.getKepLeiras()}, ${this.getFilmLeiras()}`
    }
}