class Product {
    constructor(id, name, price) {
        if(this.constructor == Product) {
            throw new TypeError(`Abstract class "${this.constructor.name}" cannot be initiated directly`)
        }
        this._id = id;
        this._name = name;
        this._price = price;
    }
}

class ElectronicProduct extends Product {
    constructor(id, name, price, productionDate) {
        super(id, name,price)
        this._productionDate = productionDate
    }
}

class ConsumableProduct extends Product {
    constructor(id, name, price, expirationDate) {
        super(id, name, price);
        this._expirationDate = expirationDate;

        console.log(`ini adalah ${name} dengan harga ${price} dan akan expire pada tanggal ${expirationDate}`)
    }

}

var ciki = new ConsumableProduct(0,'Roti Tawar', 12000,'12 Juli 2020')
console.log(ciki)