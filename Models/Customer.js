class Customer{
    constructor(id, name, firstName, adresse, codePostal, ville, email, tel){
        this._id = id;
        this._name = name;
        this._firstName = firstName;
        this._adresse = adresse;
        this._codePostal = codePostal;
        this._ville = ville;
        this._email = email;
        this._tel = tel;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get adresse() {
        return this._adresse;
    }

    set adresse(value) {
        this._adresse = value;
    }

    get codePostal() {
        return this._codePostal;
    }

    set codePostal(value) {
        this._codePostal = value;
    }

    get ville() {
        return this._ville;
    }

    set ville(value) {
        this._ville = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get tel() {
        return this._tel;
    }

    set tel(value) {
        this._tel = value;
    }


    
}