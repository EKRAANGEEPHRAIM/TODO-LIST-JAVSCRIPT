class Car {
    constructor(brand , year){
        this.brand = brand;
        this.year =  year ;
    }

    getInfo() {
        return `Brand: ${this.brand} , year : ${this.year}`;
    }
}


const car1 = new Car("Toyota",2025);

console.log(car1.getInfo());