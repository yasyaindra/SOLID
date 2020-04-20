class ShopService {
    changeProductPrice(price, product) {
        product.changePrice(price);
    }
}

class Product {
    constructor(id, name, price){
        this._id = id;
        this._name = name;
        this._price = price;
    }

    changePrice(value) {
        this._price = value;
    }
}

const main = () => {
    var mengubahHarga = new ShopService(12000, new Product(1, 'gula',13000))
    console.log(mengubahHarga)
}

main()