// second event code runs at 
$(document).ready(onReady);

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
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    // getter
    console.log(firstName, lastName);


    // $('#firstName').val('YAY!!');
    // setter
    $('#wrapper').append('<button class="extraBtn">click me</button>');
}