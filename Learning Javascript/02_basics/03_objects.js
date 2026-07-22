//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sans",
    [mySym]: "myKey1",
    age: 21,
    location: "Pithoragarh",
    email: "sans@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser[mySym])

JsUser.email= "mikey@gmail.com"
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

console.log(JsUser.greeting())
console.log(JsUser.greeting)

JsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())