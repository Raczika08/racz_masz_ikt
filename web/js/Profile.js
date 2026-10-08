class Profile{
    #felhasznalonev
    #jelszo

    constructor(felhasznalonev, jelszo){
        this.setFelhasznalonevev(felhasznalonev)
        this.setJelszo(jelszo)
    }

    setFelhasznalonevev(nev){
        this.#felhasznalonev = nev
    }
    setJelszo(jelszo){
        this.#jelszo = jelszo
    }

    getFelhasznalonev(){
        return this.#felhasznalonev
    }
    getJelszo(){
        return this.#jelszo
    }
}