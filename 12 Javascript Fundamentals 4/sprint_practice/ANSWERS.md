## Self-Study Questions for JavaScript Fundamentals Sprint, 6 April 2019, 

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
* `.forEach` executes a function on each element in a provided array but does not produce a new array (think of it as running a For Loop on an array), whereas `.map`which can execute a function each element in a provided array will produce a new array.*

2. What is the difference between a function and a method?
*A method is a function that is a property of or associated with an object.* 

3. What is closure?
*Closure is a combination of a function and its lexical environment, lexical environment defined as where the function was declared.*

4. Describe the four rules of the 'this' keyword.
*The four main rules of the `this` keyword are 1) window/global 2)explicit binding 3) implicit binding 4) `new` binding.*
*1) Window/global binding is the sort of the default `this`; in the global scope, `this` is the window object.*
*2) Explicit binding is when `this` is defined explicitly explictly with `.call` `bind`, and `.apply`*
*3) Implicit binding is simply where `this` is what is to the left of the dot. In other words, when a function is called and to the left of the function there is a dot, whatever is left of the dot is `this`.*
*4) `new` binding is what happens when a constructor function is called; `this` refers to the new instance of the object created by the constructor function*;

5. Why do we need super() in an extended class?
*`super()` is used to connect the extended class (specifically in the constructor) to the parent class that the extended class is extended. It allows us to connect to the parent class constructor and also use parent class methods*