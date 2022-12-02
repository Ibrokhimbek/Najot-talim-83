//? Regural function vs Arrow function
//! Declaration
// function showThis() {
//   console.log(this);
// }
// showThis();
//! Arrow function
// const showThis2 = () => {
//   console.log(this);
// };
// showThis2();
//? this in regular function vs arrow function in objects
// const obj = {
//   name: "Object",
//   arr: [
//     function () {
//       console.log(this);
//     },
//     () => {
//       console.log(this);
//     },
//   ],
//   showThis: function () {
//     console.log(this.name);
//   },
//   showThis2: () => {
//     console.log(this);
//   },
//   showThis3() {
//     console.log(this.name);
//   },
// };

// obj.showThis();
// obj.showThis2();
// obj.showThis3();
// obj.arr[0]();
// obj.arr[1]();

// document.querySelector("#btn").addEventListener("click", function () {
//   this.style.background = "red";
// });

//? Array methods
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const stringArr = ["Ravshan", "Abror", "Eshmat", "Toshmat", "Do'smat"];
//* includes
// console.log(arr.includes(2, 0));
// console.log(stringArr.includes("Abror", 0));

// let x = 0;
//* forEach
// stringArr.forEach((v, i) => {
//   console.log(v);
//   // x += value;
// });

// console.log(x);

//* some vs every
// let x = 0;
// console.log(
//   arr.every((val) => {
//     x += val;
//     return val !== 2;
//   })
// );
// console.log(x);

// const result = arr.some((val) => val === 2);
// console.log(result);

//* func([2,3,4,5,6], 5) => false
//* func([5,5,5,5,5], 5) => true