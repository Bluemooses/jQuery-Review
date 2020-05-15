// second event code runs at 
$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $('#hello').append('Welcome to my Page!');
    // $('#hello').css('color', 'red');
    $('#hello').addClass('blue');
    // attach click event to #submit
    $('#submit').on('click', handleSubmit);
    //attaching click event to .extraBtn via descendent selector
    $('#wrapper').on('click', '.extraBtn', handleClick);
    $('#peopleList').on('click', '.deleteBtn', deleteItem);
}

function deleteItem() {
    console.log('in delete');
}


// 1st event code runs at
console.log("hello");

function handleClick() {
    console.log("button clicked!!");
    $(this).toggleClass('blue');
}

let personArray = [];

function handleSubmit() {
    // let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    // getter
    let personObject = {
        firstName: $('#firstName').val(),
        lastName: lastName,
    }
    // take the firstName and lastName vals, and create a person object with those
    // console.log("this is the person object", personObject);
    personArray.push(personObject);
    // push personObject to an array that persists
    console.log('this the the array', personArray);
    $('#firstName').val('');
    $('#lastName').val('');
    // setter
    // $('#wrapper').append('<button class="extraBtn">click me</button>');
    displayPeople(personArray);
}

function displayPeople(arrayParam) {
    $('#peopleList').empty();
    console.log("in displayPeople");
    for (let i = 0; i < arrayParam.length; i++) {
        $('#peopleList').append(`
        <li>${arrayParam[i].firstName} 
            <button class="deleteBtn">delete</button>
        </li>`)
    }
}

function deleteItem() {
    console.log('in delete');
    $(this).parent().remove();
    //remove that person from the DOM on DELETE ITEM.
}