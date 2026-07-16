const name= "sans"
const repoCount= 50

// console.log(name + repoCount + " Value") 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('mikey-sp')    
// console.log(gameName)
// console.log(gameName[0]) //m
// console.log(gameName.__proto__) //{}
// console.log(gameName.length) //8

// console.log(gameName.toUpperCase()) //MIKEY
console.log(gameName.charAt(2)) //k
console.log(gameName.indexOf('e')) //3

const newString = gameName.substring(0, 4)
console.log(newString) //mike

const anotherString = gameName.slice(-7, 4)
console.log(anotherString) //ike

const newStringOne = "    sans    "
console.log(newStringOne) //    sans
console.log(newStringOne.trim()); //sans




