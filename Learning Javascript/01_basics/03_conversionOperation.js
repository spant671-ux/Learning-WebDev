let score = "33abc"

// console.log(typeof score) //string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //NaN

let input = null
// console.log(input) //null
let noInput = Number(input)
// console.log(noInput) //0

let def = undefined
// console.log(def) //undefined
let nodef = Number(def)
// console.log(nodef) //NaN

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn= 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) //true

/*
1 => true; 0 => false
"" => false
"hello" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

// ********************************* Operations ******************************************//

let value = 3
let negValue = -value
// console.log(negValue)

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)
*/

let str1 = "hello"
let str2 = " bro"
let str3 = str1 + str2
console.log(str3)

/*
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
*/

console.log(+true)
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)