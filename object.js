let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function () {
        return 5000;
    },
    printDescription: function () {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year + " price: 5000 ");
// console.log(car["year"]);
// console.log(car[1]);

var anotherCar = {};
anotherCar.enzo = 'bob';
console.log(car.enzo);