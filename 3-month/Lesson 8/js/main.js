// function execiseOne(num, str) {
//   const arr = []
//   for(let i=0; i<num; i++) {
//     arr.push(str)
//   }
//   return arr
// }
// console.log(execiseOne(30000, "a"));

// function execiseTwo(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(execiseTwo([false, true, 3, undefined, "Hello", 5, 11, null]));

// function execiseThree(arrOne, arrTwo) {
//   if (arrOne.length !== arrTwo.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arrOne.length; i++) {
//       if (arrOne[i] !== arrTwo[i]) {
//         return false;
//       }
//     }

//     return true;
//   }
// }
// console.log(execiseThree([1, 4, 3], [1, 2, 3]));
// console.log(execiseThree([1, 2, 3], [1, 2, 3, 5]));
// console.log(execiseThree([1], ["salom"]));
// console.log(execiseThree([true, false, 1, 4, 3, 5], [true, false, 1, 4, 3, 5]));

//* ([1,4,3], [1,2,3]) => false
//* ([1,2,3], [1,2,3,5]) => false
//* ([1], [“salom”]) => false
//* ([1,4,3,5], [1,4,3,5]) => true

//? Ternary operator
// const arr = [1, 2, 3];
// const nums = [3, 4, 5];
// const isEqual = arr.length === nums.length ? true : arr[0] === nums[0] ? true : false;
// console.log(isEqual);

//? Switch case
// const username = prompt("Name:");
// switch (username) {
//   case "Ibrohim":
//     console.log("Salom " + username);
//     break;
//   case "Abror":
//     console.log("Salom Abror");
//     break;
//   default:
//     console.log("Salom hurmatli mijoz");
//     break;
// }

// const obj = {
//   name: "Ibrohim"
// }
// obj.name = "Abror"
// console.log(obj.name)

// const heading = document.querySelector("#heading");
// heading.style.color = "blue";
// heading.style.textAlign = 'center';
// console.dir(heading);

