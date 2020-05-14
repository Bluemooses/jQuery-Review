// second event code runs at 
$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $('#hello').append('Welcome to my Page!');
    // $('#hello').css('color', 'red');
    $('#hello').addClass('blue');
    $('#submit').on('click', handleSubmit);
    $('#wrapper').on('click', '.extraBtn', handleClick);
}

// 1st event code runs at
console.log("hello");

function handleClick() {
    console.log("button clicked!!");
       $(this).addClass('blue');
}

function handleSubmit() {
    let firstName = $('#firstName').val();
    // getter
    console.log(firstName);

    $('#firstName').val('YAY!!');
    // setter
    $('#wrapper').append('<button class="extraBtn">click me</button>');
}