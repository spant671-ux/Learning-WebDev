// ==================== Global Scope vs. Block Scope ====================

// Variables declared outside any curly braces {} reside in the Global Scope.
// Global variables are accessible throughout the script.

// Global variable 'a' declared in global scope:
let a = 300;
// var c = 300;

// Curly braces {} define a Block Scope (e.g., inside if statements, loops, functions).
if (true) {
    // Block-scoped variables: 'a' and 'b' exist ONLY within this if-block.
    let a = 10;
    const b = 20;

    // Function/Global-scoped variable: 'var' does NOT respect block scope and leaks outside!
    var c = 30;

    // Variable Shadowing: The block-scoped 'a' shadows the global 'a' inside this block.
    // Expected Output: Inner: 10
    console.log("Inner:", a);
}

// Block Scope in loops:
// 'i' and 'element' declared with 'let'/'const' are scoped strictly to the loop body.
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// Printing global 'a' (retains its global value 300, unaffected by the inner 'a = 10'):
// Expected Output: 300
console.log(a);

// Accessing 'b' outside the block throws a ReferenceError: b is not defined (because 'const' is block-scoped):
// console.log(b);

// Accessing 'c' outside the block succeeds because 'var' leaked out of the if-block into the outer scope!
// Expected Output: 30 (this scope-leaking behavior is why 'var' is generally avoided in modern JS)
// console.log(c);


// Note on Global Scope Environments:
// The Global Scope behavior varies depending on the runtime environment:
// 1. In Browser Developer Console: The global scope object is 'window'.
// 2. In Node.js environment: The top-level scope is the Node module scope / 'global' object.