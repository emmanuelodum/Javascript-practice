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
console.log(car["year"]);
console.log(car[1]);

// var anotherCar = {};
// anotherCar.enzo = 'byke';
// console.log(anotherCar.enzo);

var a = {
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b);

var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'can' },
        { g: 'can' }
    ]
};

console.log(c.myProperty);