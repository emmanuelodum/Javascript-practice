// let car = {
//     make: 'honda',
//     model: 'cross tour',
//     year: 2010,
//     getPrice: function () {
//         return 50000;
//     },
//     printDescription: function () {
//         console.log(this.make + ' ' + this.model);
//     }
// }

// car.printDescription();
// console.log(car.year);


// // ANOTHER ALTERNATIVE
// console.log(car['year']);


// function first() {
//     return this;
// }

// console.log(first() === global);

// this is Node's global object
// because that's where
// the first method was called.

// function second() {
//     'use strict';

//     return this;
// }

console.log(second() === global);
console.log(second() === undefined);


