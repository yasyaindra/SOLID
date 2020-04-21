// class Seller {
//     constructor(id, name) {
//         this._id = id
//         this._name =  name;
//     }
//     set name(value) {
//         this._name = value
//     }
//     get name() {
//         return this._name
//     }
// }

// class User {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
//     beli(seller){
//         console.log(`${this._name} beli ke ${seller}`)
//     }
// }

// const penjual = new Seller()
// penjual.name = 'Pak Indra';

// // console.log(penjual.name)
// const pengguna = new User(2, 'Budi', penjual.name)
// pengguna.beli(penjual.name)

// Aggregation
// class Shop {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//         console.log(`Nama saya adalah ${name} bernomor ${id}`)
//     }

//     set seller(value) {
//         this._seller = value;
//         console.log(`${value}`)
//     }

//     get seller() {
//         return this._seller;
//     }
// }

// class Seller {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//         console.log(`${id}. ${name}`)
//     }
// }

// Compoisition
class User {
    constructor(id, name, address){
        this._id = id;
        this._name = name;
        this._address = address;
    }

    set id(value) {
        this._id = value
    }
    get id(){
        return this._id
    }
    
}

class Address {
    constructor(id, district){
        this._id = id;
        this._district = district;
    }

    tampilkanAlamat() {
        console.log(`No. ${this._id} ${this._district} `)
    }
}

const main = () => {
    const indra = new User()
    indra.id = 12
    const tempatLahir = new Address(indra.id, 'Rajeg, Tangerang')
    tempatLahir.tampilkanAlamat()
}

main()