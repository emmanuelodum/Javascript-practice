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

function reuseableFunction() {
  console.log("Hi world");
}

reuseableFunction();

function sayHello(name) {
  let msg = "Hello, " + name + ". How are you?";
  return msg;
}

console.log(sayHello("world"));

function sayGoodbye(name) {
  let msg = "Goodbye, " + name + ". See you later!";
  return msg;
}

console.log(sayGoodbye("Bob"));

function sayMonth(month) {
  let msg = "I can't believe it's already " + month + "!";
  return msg;
}

console.log(sayMonth("March"));

function sayAge(age) {
  let msg = "Hi, I'm " + age + " years old.";
  return msg;
}

console.log(sayAge("twenty-four"));

function sayFruit(fruit) {
  let msg = "Would you like to eat a " + fruit + "?";
  return msg;
}

console.log(sayFruit("banana"));

function sayFavoriteFood(food) {
  let msg = "I really love eating " + food + "!";
  return msg;
}

console.log(sayFavoriteFood("chili-cheese fries"));

function sayFavoriteColor(color) {
  let msg = "I think " + color + " is the best color.";
  return msg;
}

console.log(sayFavoriteColor("red"));

function sayTime(time) {
  let msg = "It is currently " + time + ". Where did the time go?";
  return msg;
}

console.log(sayTime("6pm"));

function sayDog(dogName) {
  let msg = "Isn't " + dogName + " the best dog ever?";
  return msg;
}

console.log(sayDog("Bambi"));

function sayWoof(dogSound) {
  let msg = "Dog goes " + dogSound + "!";
  return msg;
}

console.log(sayWoof("WOOF"));

