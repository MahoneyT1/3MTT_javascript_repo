export class Product{
    constructor(name, price=0) {
        this.name = name;
        this.price = price;
    }

    set price(price) {
        this.price = price;
    }

    get price() {
        return this.price
    };

}