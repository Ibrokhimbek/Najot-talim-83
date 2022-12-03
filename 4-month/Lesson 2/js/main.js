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

//* Array reduce()
// const arr = [1, 2, 3, 4, 5, 6];

// console.log(
//   arr.reduce((prev, curr) => {
//     console.log(prev);
//     return prev - curr;
//   }, 0)
// );

// function reducer(cb, initialVal = 0) {
//   let val = initialVal;
//   for (let i = 0; i < arr.length; i++) {
//     val = cb(val, arr[i]);
//   }
//   return val;
// }

// console.log(
//   reducer((prev, curr) => {
//     return prev + curr;
//   })
// );

// console.log($("#btn"));

// console.log(isEmptyArray(["Hello"]));

// render("#btn", "Clicker");

// $("#input").addEventListener("change", (e) => {
//   $("#text").textContent += e.target.value;
//   console.log(e.target.value);
// });

// $("#input").onchange = function (e) {
//   $("#text").textContent += e.target.value;
// };
