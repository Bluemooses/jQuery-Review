$(document).ready(onReady); //second event of code running 

function onReady(){
    console.log('jQuery is loaded');
    $(".Hello").append( 'Welcome to my Page!');
    $("#hello").addClass('blue');
    $('#submit').on('click', handleSubmit); 
    $('#wrapper').on('click', '.extraBtn', handleClick);
    console.log("hello"); //run first because it runs when the scripts loads.
};

function handleSubmit(){
    console.log('Button clicked!');
    let firstName = $('#firstName').val(); //getter
    console.log(firstName);//uses our variable 
   
    $('#wrapper').append('< button class = "extraBtn" > click me < /button>');
    $('#firstName').val('YAY'); //setter
}


function handleClick(){
    console.log("button clicked"); 
    $('#wrapper').append('< button class = "extraBtn" > click me < /button>');
};
