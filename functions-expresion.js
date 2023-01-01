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


function sayWoof(dogSound) {
  let msg = "Dog goes " + dogSound + "!";
  return msg;
}

console.log(sayWoof("WOOF"));

function whisper(str) {
  // your code here...
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
console.log(whisper("Hey Buddy")); // => "...hey buddy..."


function averageOfFour(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5