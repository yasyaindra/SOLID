class Animal {
    walk(){
        console.log(`${this.constructor.name} berjalan`)
    }
}

class Kucing extends Animal {
    walk(){
        super.walk();
        console.log(`${this.constructor.name} berjalan jalan!`)
    }
}

const main = () => {
    const persian = new Kucing();
    persian.walk();
}

main();