class ProductService {
    constructor(){
        throw new TypeError(`abstract class "${this.constructor.name}"  cannot be initiated directly`)
    }

    getProduct(id) {
        throw new Error('You have to implement the method getProduct!')
    }
    calculateProductPrice() {
        throw new Error('You have to implement the method calculateProductPrice!');
    }
}

class ProductServiceImpl extends ProductService {
    getProduct(id) {
        this._id = id
        console.log(id)
    }
  
    calculateProductPrice() {
        console.log(id)
    }
 }

 const produkServis = new ProductServiceImpl()
 produkServis.calculateProductPrice()