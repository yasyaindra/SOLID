class ShopService {
    constructor(id, price, product){
        this._id = id;
        this._price = price;
        this._product = product
    }

    changeProductPrice(price, product) {
        product.changePrice(price);
        console.log(`${this._price} telah diganti`)
    }
}

class Product {
    constructor(id, name, price){
        this._id = id;
        this._name = name;
        this._price = price;
    }

    set name(value){
        this._name = value
    }

    get name(){
        return this._name
    }

    set price(value){
        this._price = value
    }

    get price(){
        return this._price
    }

    changePrice(value) {
        this._price = value;
    }

}

const main = () => {
    const produk = new Product()    
    produk.price = 12000
    produk.name = 'gula'
    const tokoIndra = new ShopService()
    tokoIndra.changeProductPrice(produk.price, produk.name)    
}

main()