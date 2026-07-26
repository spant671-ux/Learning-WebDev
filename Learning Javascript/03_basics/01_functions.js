function sayMyName(){
    console.log("s")
console.log("a")
console.log("n")
console.log("s")
}

sayMyName() //sayMyName reference, () execution

// function addTwoNumbers(number1, number2){ //parameters
    // console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
    console.log("Hello") // wont print
}

const result = addTwoNumbers(3, 5) //8 //arguments
// console.log("Result:", result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())