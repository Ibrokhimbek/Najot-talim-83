//? Nested loops
// for(let i=0; i<5; i++) {
//   console.log(i + " --------------------------------------------------")
//   for(let j=0; j<10; j++) {
//     console.log(j)
//   }
// }
//! Amaliyot
// const arr = [
//   ["Ibrohim", "Userbek", "Vscode", "Javabek", "Sublime jiyan"],
//   ["Ismoil", "C bobo", "Paskal ajdod", "C# tog'o"],
//   ["Abdulla", "Playstation aka", "Python kalla"],
//   ["Jasur", "Asu", "Kamol", "Amir"],
//   ["Mishkabek", "Klaviaturajon", "Ekranoy"],
// ];

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

//? Loops from backwards
// const list = ["Ibrohim", "Userbek", "Vscode", "Javabek", "Sublime jiyan"];

// for (let i = list.length-1; i >= 0; i--) {
//   console.log(list[i]);
// }

//? Object methods
// const obj = {
//   name: "Userbek",
//   age: 99,
//   country: "Processor",
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//? isNaN
// const num = 9 * 10;
// console.log(isNaN(num));

//? textContent vs innerHTML
// const h1El = document.querySelector("#heading")
// h1El.textContent = `<span> Hello </span>`
// h1El.innerHTML = `<span> Hello </span>`

//* Amaliyot
// function $(selector) {
//   return document.querySelector(selector);
// }

// const allUsers = [];
// const userForm = $("#UserForm");

// userForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const userImage = $("#userImage");
//   const userName = $("#userName");
//   const userInfo = $("#userInfo");

//   const userObject = {
//     name: userName.value,
//     image: userImage.value,
//     info: userInfo.value,
//   };

//   allUsers.push(userObject);
//   console.log(allUsers);
//   render();
// });

// function render() {
//   const cardsBox = $("#cards");

//   cardsBox.innerHTML = ""

//   for (let i = 0; i < allUsers.length; i++) {
//     const card = `
//       <div class="card" style="width: 18rem;">
//         <img src="${allUsers[i].image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${allUsers[i].name}</h5>
//           <p class="card-text">${allUsers[i].info}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     `;

//     cardsBox.innerHTML = cardsBox.innerHTML + card;
//   }
// }

// convert([["name", "Ibrohim"],["age", "20"],["country", "Uzbekistan"],]); 
// //* ==> [{name: "Ibrohim", age: "20", country: "Uzbekistan"}]
