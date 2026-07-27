const user = {
    username: "sans",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sans"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username= "sans"
    console.log(this)
}

chai()