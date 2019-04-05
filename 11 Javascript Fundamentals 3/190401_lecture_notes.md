# 190401 JavaScript Fundamentals III

## PM and Team Mtg Notes:
- We will not meet on Mondays, barring extraordinary circumstances. 
-

## Misc Observations:
- Check out what you can do with spread operator

## Instructor Codepen/Project Link/Resources:
- [Lambda School Training Kit Link: JavaScript III](https://learn.lambdaschool.com/fsw/module/rec0awunlezbpit7m)
- [Recommended Video: "WTF is `this`?"](https://youtu.be/zE9iro4r918)
- [Codepen.io, My Fork of Instructor's Work](https://codepen.io/campope/pen/VNwGJJ?editors=0012)
- [Codepen.io, Instructor's Fork, Part I](https://codepen.io/arturolei/pen/BEyeBN?editors=0012)
- [.call() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Array Cheatsheet on Github]()

## Four Principles of `this`
### I. Window/Global Oject Binding
- `this` is the `window` or console object. 
- `window` object is basically the browser window. 
- All things we can do in the window. 
- *It represents the browser's window.*
- "use strict"-->Way of messing things up and having this be undefined. (Depends on the team)

### II. Implicit Binding 
- Whenver a function is called by a preceding dot, the object before the dot is `this`
- "Happens automatically"



### III. `new` Binding: Using a constructor
- Using a consructor, `this` will refer to the specific instance of the opbject that is created and returned

### IV. Explicit Binding
- Using call or apply method in JS, you can explicitly define `this`
- bind, call, apply 
    - .call vs .apply whenever you want to be more specific, can achieve same things
    - "While the syntax of [call()] is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list (individually comma-delimited arguments), while apply() accepts a single array of arguments."

## JS Prototypes
- `__proto__` proto
- DO NOT MESS WITH THE ROOT PROTOTYPES, DON'T MESS WITH ORIGINAL PROTOTYPES

