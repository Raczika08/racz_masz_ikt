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

    constructor(nev, kategoria, hossz, mufaj, ertekeles, statusz, kep, kepCim, kepLerias){
        this.setNev(nev);
        this.setKategoria(kategoria);
        this.setHossz(hossz);
        this.setMufaj(mufaj);
        this.setErtekeles(ertekeles);
        this.setStatusz(statusz);
        this.setKep(kep);
        this.setKepCim(kepCim);
        this.setKepLeiras(kepLerias);
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
}