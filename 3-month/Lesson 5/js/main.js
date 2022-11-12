// ? return
const username = prompt("Enter your username:");

function $(name) {
  if (name === "Ibrohim") {
    return "Bu Ibrohim";
  } else if (name === "Jasur") {
    return "Bu Jasur";
  } else {
    return "Bu xechkim";
  }
}

alert($(username));

// ? Type Coercion and Type Conversion
console.log(3*"3")
const num = prompt("Enter your loved number:")
const realNum = Number(num);
const string = String(3)
const realTrue = Boolean();
console.log(+num);

// ? Truthy and Falsy values
// * 0 / false / "" / null / undefined / NaN
if (+"0") {
  console.log("Hello world");
} else {
  console.log("Bu false qiymat");
}

// ? Objects
const school = 324;
const user = {
  name: "Ibrohim",
  age: 40,
  school: school,
  fullName: function () {
    console.log(this.age);
  },
  sayHello() {
    console.log(this)
  },
};
user.sayHello();

// ? Logical and vs or
const x = 20 > 10 && 30 == 30 && 19 == 20;

if (2 == 3 || 6 != 5) {
  console.log(true);
} else {
  console.log(false);
}

// ? Array
const arr = ["Abror", 20, false, undefined, null, { name: "Hello", age: 40 }];

arr[3] = arr[2]
arr = ["Lalaku"]

arr[5].name = 0

console.log(arr[5]);
