// Single Inheritance
// class Animal {
//     constructor(nama) {
//         this._nama = nama
//     }

//     makan() {
//         console.log(`${this._nama} sedang makan!`)
//     }
// }

// class Carnivore extends Animal {
    
// }

// const kucing = new Carnivore('singa')
// kucing.makan()

// Multilevel Inheritance
class Animal {
    walk() {
        console.log(`${this.constructor.name} berjalan!`)
    }

}

class Carnivore extends Animal {
    eat() {
        console.log(`${this.constructor.name} makan!`)
    }
}

class Cat extends Carnivore {
}

kucing = new Cat('persia','tangerang')
kucing.eat()

// Multiple Inheritance
// let panthera = Base => class extends Base {
//     eat() {
//         console.log(`${this.constructor.name} makan!`)
//     }
//  };
// let tigris = Base => class extends Base {
//     walk() {
//         console.log(`${this.constructor.name} berjalan!`)
//     }
//  };

// class KucingBesar {
//     // sebagai subclass
//  }

// class Panthera extends panthera(tigris(KucingBesar)) {

// }

// harimau = new Panthera()

// harimau.eat()

//Hierarical Class
// class Animal {
//     walk() {
//         console.log(`${this.constructor.name} berjalan`)
//     }
// }

// class Carnivore extends Animal {
//     eat() {
//         console.log(`${this.constructor.name} makan`)
//     }
// }

// class Singa extends Carnivore {
    
// }

// class Macan extends Carnivore {

// }

// singa = new Singa()

// singa.eat()

// Hybird Inheritance
// class Animal {
//     // Class A
//     walk() {
//         console.log(`${this.constructor.name} berjalan`)
//     }
// }

// let herbivora = Base => class extends Base {
//     // Class B
//     eat(tumbuhan) {
//         console.log(`${this.constructor.name} makan ${tumbuhan}`)
//     }
// }

// let karnivora = Base => class extends Base {
//     // Class C
//     consume(daging) {
//         console.log(`${this.constructor.name} makan ${daging}`)
//     }
// }

// class Omnivore {
//     // Class D
// }

// class Beruang extends karnivora(herbivora(Omnivore)) {

// }

// beruang = new Beruang()
// beruang.consume('Ayam')