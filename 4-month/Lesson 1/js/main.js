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
