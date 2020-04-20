// class Seller {
//     constructor(id, name) {
//         this._id = id
//         this._name =  name;
//     }
// }

// class User {
//     constructor(id, name, sellers) {
//         this._id = id;
//         this._name = name;
//         this._sellers = sellers;
//     }
// }

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
// class User {
//     constructor(id, name, address){
//         this._id = id;
//         this._name = name;
//         this._address = address;
//         console.log(`${id}. ${name}, ${address}`)
//     }
// }

// class Address {
//     constructor(id, district){
//         this._id = id;
//         this._district = district;
//     }
// }

// const main = () => {
//     const indra = new User(8, 'Indra Maulana Yasya', new Address(22, 'Rajeg'))
// }

// main()