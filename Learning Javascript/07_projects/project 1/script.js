// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button')
// Select the body element to change its background color
const body = document.querySelector('body')

// Loop through each button and attach a click event listener
buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target); // e.target is the button that was clicked

        // Change background color based on the clicked button's id
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
    })
});