// object Practice

// let user = {
//     name: "John",
//     surname: "smith",
// }

// user.name="Peter"
// delete user.name
// console.log(user)

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {
//     name:"devangi"
// };

// const isEmpty = (obj) => {

//     for(let key in obj) {
//        return false
//     }
// return true
// }

// console.log(isEmpty(schedule))

//Sum object properties

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// //   const {John, Ann, Pete} = salaries
// const sumObj = (obj) => {
//   let sum = 0;
//   for (let salarie in obj) {
//     sum = sum + obj[salarie];
//   }
//   return sum;
// };

// console.log(sumObj(salaries));

//Multiply numeric property values by 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const MultiplyNum = (obj) => {

//   for(let mul in obj) {
//     if(typeof obj[mul]=== 'number') {
//       obj[mul] *= 2
//     }

//   }
//   console.log(obj)
// }

// const res = MultiplyNum(menu)

//object using this
//create a calculator
//Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//   read: function() {
//     this.a= +prompt("enter the first value")
//      this.b = +prompt("enter the second value")
//   },
//   sum: function() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b;
//   },

// }
// calculator.read()
// console.log(calculator.a)
// console.log(calculator.sum())
// console.log(calculator.mul())

// let first = ""
// let last = ""
// let name = 0

// let result = first || last || name || "Anonymus"

// console.log(result)

// let hour = 10;
// let time = 0

// let result = time && hour
// console.log(result)

// let age = 30

// if(!(age > 14 && age < 90)) {
//     console.log("the age is between 14 to 90")
// }
// else {
//     console.log("not")
// }

// let age = 12
// console.log(age<14)
// console.log(age>90)
// if(age < 14 || age > 90) {
//     console.log("the age is not between 14 to 90")
// }
//  else  {
//      console.log("the age is between  ")
//  }

// let username = prompt("whos there", '')

// if(username === "Admin") {
// let pass = prompt("enter your password", '')
//     if(pass === "Master") {
//         console.log("Welcome!")
//     } else if ( pass === "" || pass === null) {
//         console.log("Canceled")
//     } else {
//         console.log("wrong password")
//     }
// } else if( username === "" || username===null) {
//     console.log("Canceled")
// } else {
//     console.log("I dont know")
// }

// for(let i = 1; i<=10; i++) {
//     if(i%2==0) {
//         console.log(i)
//     }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// const checkAge= (age) => {
// let result = age>18 ? true : "did"
// return result
// }
// console.log(checkAge(156))

// const min = (a,b) => {
//   return a < b ? a : b
// }

// console.log(min(2,1))
// console.log(min(2,-1))

// const pow = (a, b) => {
//     let res = a
//     for(let i = 1; i < b; i++ ) {
//         res*=a;

//     }

//     return res
// }

// console.log(pow(3,2))
// console.log(pow(3,3))

// let user = {
//     name: "devangi",
//     age: 20,
//     isAdmin: true
// }

// for(let key in user) {
//     console.log(user[key])
// }

// let user = {
//     name: "user",
//     age: 20,
//     isAdmin: true,

// }
// let admin = {
//     name: "admin",
//     age: 20,
//     isAdmin: true,

// }
// function say() {
//     console.log(this.name)
// }
// user.f = say;
// admin.f = say

// user.f()
// admin.f()

// let billion = 7e9
// console.log(billion)

// let num = 255
// console.log(num.toString(2))

// let num = 1.23456;
// console.log((num * 100) / 100)
// alert( Math.round(num);

// alert(num.toFixed())

// let str = "Hello"

// alert(str[0])
// alert( str.at(0))
// alert(str[str.length -1])

// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'[0].toLowerCase() ); // INTERFACE

// let str = 'Widget with id';

// alert( str.indexOf('id', 2) ) // 12

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;

// while(true) {
//     let found = str.indexOf(target, pos);
//     if(found===-1) break;

//     alert(`Found at ${found}`)
//     pos =  found + 1;
// }

// let str = "Widget with id";

// if(str.indexOf("Widget") != -1) {
//     alert("Found")
// }

// alert(str.includes("Widget", 3))

// let str = "stringify";

// console.log(str.slice(0,5))

// let gfg = 'GFG '
// let geeks = 'stands for GeeksforGeeks'

// // Split string on '-'.
// console.log(geeks.split(' '))

// let str = "devangi"

// const ucFirst= (str) => {
//     return str[0].toUpperCase() +  str.slice(1)
// }

// console.log(ucFirst(str))

// const checkSpam = (str) => {
//     if(str.includes("ViAgRA") ||  str.includes("xxxxx")) {
//         return true
//     }
//     else {
//         return false
//     }

// }

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam('innocent rabbit'))

// const trunc = (str, maxlength) => {
//     if(str.length > maxlength) {
//         return str.slice(0, maxlength-1) + "..."
//     } else {
//         return str
//     }
// }

// alert(trunc("What I'd like to tell on this topic is:", 20))

//Extract the money

// const extractCurrencyValue = (str) => {

//   return parseInt(str)
// }

// alert(extractCurrencyValue("$120"))

//for hollow square
// let num = +prompt("Enter number")
// let string = "";

// for(let i=0;i<num;i++)
// {
//   for(let j=0;j<num;j++){
//       if(i>0&&i<num-1&&j>0&&j<num-1){
//         string+=" ";
//       }else{
//         string+="*";
//       }

//   }
//   string += "\n";
// }
// console.log(string);

//for triangle
// let num = 4;

// let string = "";
// for (let row = 1; row <= num; row++) {
//   for (let col = 1; col <= row; col++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)

//for square
// let num = 4

// let string = ""
// for(let row = 1; row<=num; row++) {

//   for (let col = 1; col<=num; col++) {
//     string+= "*"
//   }
//   string+= "\n"
// }
// console.log(string)

//for reverse triangle

//  let num = 4;
// let string = "";

// for (let row = 1; row <= num; row++) {
//    for(let col = 1; col<=num-row +1; col++) {
//        string+="*"
//    }

//    string+= "\n"
//  }
//  console.log(string)

//print number in triangle

// let num = 5;
// let string = "";

// for (let row = 1; row <= num; row++) {
//    for(let col = 1; col<=row; col++) {
//        string+=col
//    }

//    string+= "\n"
//  }
//  console.log(string)

//question 4 


  // let num = 3
  // let string = "";
  // let totalrows = 2* num -1;
  // debugger;
  // for(let row = 0; row <=totalrows; row++) { 
  //   let totalCols = row > num  ? num - (row - num ) : row 
  //   for(let col = 0; col<totalCols; col++) {
  //     string+= "*"
  //   }

  //   string+="\n"
  // }

  // console.log(string)

  // hollow diamond


// let num = 3
// let string = ""

// debugger;

// for(let row = 1; row<= 2 * num; row++) {
//   let totalCols = row> num ? 2 * num -row : row 
//   let totalSpace = num - totalCols
//     for(let s = 0; s<totalSpace; s++) {
//       string+=" "
//     }
    
//   for(let col = 1; col<=totalCols; col++) {
//     if (row === 1 || row === 2 * num || col === 1 || col === totalCols) {
//       string += "* ";
//     } else {
//       string += "  "; // Two spaces for hollow pattern
//     }
//   }
//   string+="\n"
// }
// console.log(string)


let num = 5;
let string = "";
debugger;
for(let row = 1; row<=num; row++) {
   
  for(let col = 1; col<=num; col++) {
    if(row === col || col === num - row + 1) {
      string+="*"
    }
    else {
      string+=" "
    }
  }
   string+= "\n"
}

console.log(string)



