//? object
// var username = "Abror";
// var age = 20;
// var isStudent = false;

// var user_one = {
//   name: "Ibrohim",
//   age: 20,
//   isStudent: true,
//   location: "Tashkent",
// };

// var user_two = {
//   name: "Asilbek",
//   age: 28,
//   isStudent: false,
//   location: "Tokyo",
// };

// var element = document.querySelector()
// element.textContent
// console.log(user_two.name, user_two.age)
// console.log(user_one["name"], user_one["age"])

// var key = prompt("Enter your key:") // typeof key => string
// var key2 = "name"

// alert(user_one[key])
// alert(user_one.key)

//? const vs let
// var num = 5;
// console.log(num);
// num = "Ibrohim"
// console.log(num);
// var key = 5;
// var key = 10;
// console.log(key);

//? let
// let num = 5;
// console.log(num);
// num = true;
// console.log(num);

//? const
// const num = 10;
// console.log(num);
// let num = 30;
// console.log(num);

//? function
// function calcAge(currentYear, birthyear) {
//   const result = currentYear - birthyear;
//   alert(result)
// }

// const year = prompt("Enter current year:")
// const birthyear = prompt("Enter your birthyear:");
// calcAge(year, birthyear)

//? amaliyot
// function calc(a, b, amal) {
//   let result = null;
//   if (amal === "+") {
//     result = a + b;
//   } else if (amal === "-") {
//     result = a - b;
//   } else if (amal === "*") {
//     result = a * b;
//   } else if (amal === "/") {
//     result = a / b;
//   } else {
//     alert("Noto'g'ri amal");
//   }

//   console.log(result);
// }

// calc(5, 5, "+");
// calc(2, 8, "-");
// calc(10, 5, "/");
// calc(10, 5, "*");

// function daraja(a, b) {
//   console.log(a**b)
// }
// daraja(4, 2)

// function sayHello() {
//   return "Hello world!"
// }
// const text = sayHello();
// console.log(text)

//! Amaliyot
//? 1. User object ochish
//? 2. Userdan ma'lumotlar olish
//? 3. Ma'lumotlarni qayta ishlash
//? 4. HTMLda ma'lumotlarni ko'rsatish
function sayHello(name) {
  return `Assalomu alaikum ${name} aka!`
}

function calcAge(birthyear) {
  return 2022 - birthyear;
}

const user = {
  name: null,
  age: null,
};

const username = prompt("Enter your firstname:");
user.name = username;
const birthyear = prompt("Enter your birthyear:");
user.age = calcAge(birthyear);

const headingEl = document.querySelector("#text");

const template = `${sayHello(user.name)} Sizning yoshingiz ${user.age}da`;

headingEl.textContent = template;
