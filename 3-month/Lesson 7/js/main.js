// function findFive(num) {
//   const numsArr = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 !== 0) {
//       numsArr.push(i);
//     }
//   }
//   return numsArr;
// }
// console.log(findFive(100));

//? concat, join, slice, splice
// const arr = findFive(100);
// console.log(arr);
// console.log(arr.splice(2,6))
// console.log(arr);
// console.log(arr.slice(2, 6))
// console.log(arr.slice(2, -2))
// console.log(arr.slice(-6, -2))
// console.log(arr.slice(2, 3))
// console.log(arr.join(" / "));
// console.log(arr.concat(["Ibrohim", "Ismoil"], [1,2,3], {name: "Userbek", age: 99}));

//? String methods
const username = "Userbek";
//* String.length
// console.log(username.length);
// console.log(username["length"]);
//* String.trim()
// const username2 = "         Userbek           ";
// console.log(username2);
// console.log(username2.trim());
//* String.toUpperCase();
// console.log(username.toUpperCase());
//* String.toLowerCase();
// console.log(username.toLowerCase());
//* String.substring(x,y);
// console.log(username.substring(0, 4));
//* String.split();
// const str = "Ibrohim 20 WIUT Najot-ta'lim";
// console.log(str);
// console.log(str.split(" "));
//* charAt(n)
// console.log(username.charAt(6));

//? DOM => Document Object Model
// alert("Hello")
// console.log(window);

// function reloader() {
//   document.location.reload();
// }

// console.log(document.all[8]);
// console.dir(document.all[8]);

//? Getting html elements
// const btn = document.getElementById("btnId")
// const btn = document.getElementsByClassName("btn")
// const btn = document.getElementsByName("gender");
// const btn = document.getElementsByTagName("button")
//* get... => HTMLCollection

// const btn = document.querySelector("button")
// const btn = document.querySelector(".btn")
// const btn = document.querySelector("#btnId")

// const btns = document.querySelectorAll(".btn")
// const btns = document.querySelectorAll("#btn")
// const btns = document.querySelectorAll("button")
//* query... => NodeList

// console.log(btn);

//? button click
const btn = document.querySelector("#btnId");

let isRed = false;

btn.onclick = function () {
  if (!isRed) {
    btn.classList.add("red");
    isRed = true;
  } else {
    btn.classList.remove("red");
    isRed = false
  }
};

// btn.onmouseover = function() {
//   btn.classList.add("red")
// }

// btn.onmouseout = function() {
//   btn.classList.remove("red")
// }

console.dir(btn);
