// setTimeout(function () {
//     console.log('I waited 10 seconds');
// }, 10000);


// let counter = 0;
// function timeout() {
//     setTimeout(function () {
//         console.log('hi ' + counter++);
//         timeout();
//     }, 2000);
// }

// timeout();

// (function () {
//     console.log('Immediately Invoked Function Expression (IIFE)')
// })();

function add(firstParameter, secondParameter, thirdParameter) {
    console.log(firstParameter + secondParameter * (thirdParameter));
}

add(1, 2, 5, 6);

