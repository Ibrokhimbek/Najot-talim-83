//? for in, for of
// const obj = {
//   name: "Ibrohim",
//   age: 20,
// };

//* for in
// const objArr = [];

// for (key in obj) {
//   const arr = [];
//   arr.push(key);
//   arr.push(obj[key]);
//   objArr.push(arr);
// }

// console.log(objArr);

//* for of
// const arr = [1,2,3,4,5]

// for (item of arr) {
//   console.log(item);
// }

//* attributes
// const btnEl = document.querySelector("#btn");

// let num = 0;

// btnEl.addEventListener("click", () => {
//   if (num < 3) {
//     btnEl.setAttribute("disabled", "true");
//     num += 1;
//     setTimeout(() => {
//       btnEl.removeAttribute("disabled");
//     }, 1000);
//   }
// });

// const myCar = {
//   company: null,
//   caption: null,
//   color: null,
//   accessories: [],
// };
// //* console.dir(accessories.children[0].children[0].checked);

// const formEl = document.querySelector("#form");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const selectedCompany = document.querySelector("#companyName");
//   const carType = document.getElementsByName("carType");
//   const color = document.querySelector("#color");
//   const accessories = document.querySelectorAll(".accessory__item");

//   myCar.company = selectedCompany.value;

//   for (item of carType) {
//     if (item.checked) {
//       myCar.caption = item.value;
//     }
//   }

//   myCar.color = color.value;

//   for (item of accessories) {
//     if (item.checked) {
//       myCar.accessories.push(item.value);
//     }
//   }

//   console.log(myCar);
// });
