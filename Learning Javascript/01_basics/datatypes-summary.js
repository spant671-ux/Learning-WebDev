//Primitive
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score= 100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp= null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3248583929589292020n


//Reference (Non-Primitive)
// Array, Objects, Functions

const heroes = ["ironman", "spiderman", "thor"]

let myObj = {
    name: "loki",
    age: "29",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp)



