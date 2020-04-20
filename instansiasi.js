// Class
class Kucing {
    constructor(color=null, height=null, length=null, weight=null) {
        this._color = color;
        this._height = height;
        this._length = length;
        this._weight = weight;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    set length(value) {
        this._length = value;
    }

    get length() {
        return this._length;
    }

    set weight(value) {
        this._weight = value
    }

    get weight() {
        return this._weight;
    }

    yawn() {
        console.log(`${this.constructor.name} menguap!`)
    }
}
// }

const main = () => {
    const persian = new Kucing();
    // Property
    persian.color = 'oranye';
    persian.height = 24.0
    persian.length = 46.0
    persian.weight = 2
    persian.yawn()
    // console.log(persian.height)
    const bengal = new Kucing('Hitam',20,30,2)
}

main()

