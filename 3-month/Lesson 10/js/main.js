//? Callback
// function handler(b) {
//   console.log(b())
// }

// handler(function () {
//   console.log("This is coming from callback!")
// })

//? Nested loops

// let x = 0
// x++
// console.log(x);

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
//   for(let j=1; j<4; j++) {
//     console.log(`${i} => ${j}`)
//   }
// }

//? eventListener
// const obj = {
//   addEventListener(event, callback) {
//     if (event === "submit") {
//       callback({
//         preventDefault() {
//           console.log("Prevented");
//         },
//       });
//     }
//   },
// };

// obj.addEventListener("submit", (event) => {
//   event.preventDefault();
// })

//? toggle, add, remove, contains
// const buttonEl = document.querySelector("#btn");

// buttonEl.addEventListener("click", () => {
// buttonEl.classList.add("btn");
// buttonEl.classList.remove("btn");
// buttonEl.classList.toggle("btn");
// const isExist = buttonEl.classList.contains("btn");
// console.log(isExist);
// });

//? Math object
// const PI = Math.PI; //* 3.14
// console.log(Math.floor(3.9)) //* 3
// console.log(Math.round(4.5)) //* 4.5 => 5 / 4.4 => 4
// console.log(Math.ceil(3.1)) //* 4

//* Amaliyot
const arr = [
  "Ravshan",
  "Abdulla",
  "Jahongir",
  "Shaxzod",
  "Ozodbek",
  "Jasur",
  "Muhammadqodir",
  "Azizbek",
  "Murodjon",
  "Sardor",
];

document.querySelector("#btn").addEventListener("click", () => {
  const randomUser = Math.round(Math.random() * arr.length);
  console.log(arr[randomUser]);
});

// setInterval(() => {
//   const randomUser = Math.round(Math.random() * arr.length);
//   console.log(arr[randomUser]);
// }, 2000);

// console.log(arr[0]);
