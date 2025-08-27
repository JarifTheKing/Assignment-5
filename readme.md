
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**ANS:** - The difference between -{getElementById, getElementsByClassName}- is we can get an single element by declare its ID and use it very easily and add event listener.

Using -"getElementsByClassName"- we can get all elements which have same class name as well and give us htmlCollection , also "querySelectorAll" work like this - that we can get every elements of same class name but it is static.

But "querySelector" this can give us just the 1st element of a class tag name .






2. How do you **create and insert a new element into the DOM**?

**ANS:** - Creating a new element into DOM is easy and it has 2 ways =
   1st - we can create an element by using this - 'document.createElement()' after that we can set its text, classes, id, attributes and other      properties.
   2nd - we can create just like html file using html string but we have to use - `` - this and insert in into DOM . 


   Inserting this - we can use - appendChild, prepend, insertAdjacentElement- and it depends on where we want the element to set. 





3. What is **Event Bubbling** and how does it work?

**ANS:** - **Event Bubbling** it's work in DOM. When we create an event of an element like -'click', it first work on that element after that it goes to the parent of that element. Just like that it goes to the main parent element until it is stop. 



4. What is **Event Delegation** in JavaScript? Why is it useful?

**ANS:**- **Event Delegation** is a shorter uses of event listener. We can avoid to add event listener in every child element instead of we can use an event listener to their parents. When an event happens on a child, it goes to their parent, and we can handle it there.

It is very useful because it decrease memory usage, making the code simple and works dynamically and add elements that were not present in the DOM when the listener was added.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

**ANS:**- **preventDefault() and stopPropagation()** use for event handling.
    preventDefault() - it works for form- form tag had an action atribute and it's refresh the page every time but - preventDefault()- stop the refreshment  and prevent the default action of an element. 

    And - stopPropagation()- it stops an event from bubbling or capturing in the DOM. opposite of event bubbling. it stops the event to go to the document parent

