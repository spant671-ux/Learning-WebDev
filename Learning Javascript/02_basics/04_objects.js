// ==================== Objects (Singleton, Merging & Methods) ====================

// 1. Creating Singleton vs Non-Singleton Objects
// const tinderUser = new Object() // Singleton object
const tinderUser = {} // Non-singleton object

tinderUser.id = "123abs"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// 2. Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Santosh",
            lastname: "Pant"
        }
    }
}

// Accessing nested properties using dot notation
// Optional chaining (?.) can be used to safely access deeply nested properties
// console.log(regularUser.fullname.userfullname.firstname)


// ==================== Merging Objects ====================

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// Method A: Object.assign(target, ...sources)
// Note: Passing an empty object {} as target ensures source objects are not mutated.
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// Method B: Spread Operator (...) -> Most common & modern syntax
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


// ==================== Array of Objects ====================
// Commonly returned from API endpoints & Database queries

const users = [
    {
        id: 1,
        email: "u1@gmail.com"
    },
    {
        id: 2,
        email: "u2@gmail.com"
    },
    {
        id: 3,
        email: "u3@gmail.com"
    },
]

// Accessing array element and object property
// console.log(users[1].email)


// ==================== Useful Object Class Methods ====================

// Object.keys(obj): Returns an array of an object's keys
console.log(Object.keys(tinderUser)) // Output: ['id', 'name', 'isLoggedIn']

// Object.values(obj): Returns an array of an object's values
console.log(Object.values(tinderUser)) // Output: ['123abs', 'Sam', false]

// Object.entries(obj): Returns an array of key-value pairs as nested arrays
console.log(Object.entries(tinderUser))

// hasOwnProperty(prop): Returns boolean indicating whether object has specified property directly
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Output: true


// ==================== Object Destructuring ====================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Standard property access: course.courseInstructor
// Destructuring syntax: Extract property directly into variable
const { courseInstructor } = course
console.log(courseInstructor) // Output: "hitesh"

// Destructuring with alias: Extract property and assign to a custom variable name 'instructor'
const { courseInstructor: instructor } = course
console.log(instructor) // Output: "hitesh"