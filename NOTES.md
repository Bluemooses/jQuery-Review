***WHAT IS jQUERY***

jQuery - a library of code that's built with javascript that let's us utilize the power of javascript in a much quicker and efficient way.

There are several different ways to source jQuery

Using the CDN - GOOGLE.  The way we source it through the jQuery 
IT IS IMPORTANT TO SOURCE IN THE jQUERY before WE SOURCE in THE JS file which is utilizing some jQuery.  The computer reads top down.


***jQUERY EVENTS***
Once the DOM is loaded we can use $ which creates a jQuery object so to break it down we
$ => creates our jQuery object.'
**(   )** => selector.  We can **select by ID '#some-id' by class: ('.some-class') by desendants 
**ID:** '#some-id'
**CLASS:** '.some-class' 
**Descendents:** $('ul li') => this selects all list items in our unordered LIST
**Multiple Elements:** $('.mic', '.check').append('test'); => 
**Find Elements:** $('#solid').find('.rock');


**DOM TRAVERSAL**
Parents and Children help us access different parts of the DOM
**parent element** - $('.child').parent();
parent
    child
        grandchild
            great

**first-level children** - $('.parent').children();

**DOM MANIPULATION**
These are manipulators:
**.addClass**
**.

**GETTERS AND SETTERS**
These are getters and setters:
**.val()**
**.text()**
**.data()**
**.google**

**Descendent selector**


**THIS**
**$(this):**  A different kind of selector. 


