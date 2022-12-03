//? Scopes => Global, Local or Function scope, Block scope

// const arr = []; //* Global

// function sayHello(item) {
//   const localScope = "Local scope"; //* Local scope
//   arr.push(item);
//   console.log(localScope);
// }

// if(true) {
//   const item = "item"; //* Block scope
// }

// console.log(item);

//? var in scopes

// if (true) {
//   var item = "Item";
// }
// console.log(item);

//* Amaliyot
// const btnEl = document.querySelector("#btn");
// const inputEl = document.querySelector("#input");

// const arr = [];

// btnEl.addEventListener("click", () => {
//   arr.push(inputEl.value);
//   console.log(arr);
// });

//* Amaliyot
// const inputs = document.querySelectorAll(".input");

// const arr = [];

// document.querySelector("#btn").addEventListener("click", () => {
//   console.log("Clicked");
//   for(let i = 0; i < inputs.length; i++) {
//     arr.push(inputs[i].value);
//   }
//   console.log(arr);
// });

//* Hoisting
// console.log(x);

// console.log(x);

// x=5;
// let x;
