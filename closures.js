function sayHello(name) {
    return function () {
        console.log('Hello ' + name);
    }
}

let bob = sayHello('bob');
let Emma = sayHello('Emma');
let Chibu = sayHello('Chibu');

bob();
Emma();
Chibu();