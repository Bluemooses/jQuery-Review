$(document).ready(onReady); //second event of code running 

function onReady(){
    console.log('jQuery is loaded');
    $(".Hello").append( 'Welcome to my Page!');
    $(".Hello").addClass('blue');
    $('#submit').on('click', handleSubmit); 
    console.log("hello"); //run first because it runs when the scripts loads.
};

function handleSubmit(){
    console.log('Button clicked!');
    let firstName = $('#firstName').val(); //getter
    console.log(firstName);//uses our variable 

    $('#firstName').val('YAY'); //setter
}