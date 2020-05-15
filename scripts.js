// second event code runs at 
$(document).ready(onReady);
let personArray = [];

function onReady() {
    console.log('jQuery is loaded');
    $('#hello').append('Welcome to my Page!');
    // $('#hello').css('color', 'red');
    $('#hello').addClass('blue');
    $('#submit').on('click', handleSubmit); //attachs a click event to #submit
    $('#wrapper').on('click', '.extraBtn', handleClick); //attachs a click event to extraBtn via descendent selector..
}

// 1st event code runs at
console.log("hello");

function handleClick() {
    console.log("button clicked!!");
    $(this).addClass('blue');
}

function handleSubmit() {
    //here we are making a variable of what the user INPUTS
    // getter

    let personObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
    }
    console.log(personObject);
    console.log('This is the person array!', personArray);
    // $('#firstName').val(''); //
    // $('#lastName').val(' '); // here we are getting the inputs and clearing the DOM. 
    personArray.push(personObject);
    $('#firstName').val('');
    $('#lastName').val('');
    // $('#firstName').val('YAY!!');
    // setter
    $('#wrapper').append('<button class="extraBtn">click me</button>');

}

// function personObject(firstName, lastName) {
//     this.firstName = $('#firstName').val();  AN EXAMPLE OF A CONSTRUCTOR FUNCTION.
//     this.lastName = $('#lastName').val();
// };

//For each person being input, we are going to create a person object which we are going to push to an ARRAY.