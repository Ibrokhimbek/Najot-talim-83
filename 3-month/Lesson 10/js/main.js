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

