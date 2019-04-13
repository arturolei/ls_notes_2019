# April 11, 2019 Lecture Notes, DOM-II

# Useful Links 
- [Lambda School Training Kit](https://learn.lambdaschool.com/fsw/module/recjwv3rifa4nfxbn)
- [Codepen.io My Fork](https://codepen.io/arturolei/pen/rbwMqW)
- [Codepen.io Instructor Codepent](https://codepen.io/lambdaschool/pen/pBwExJ)
- [Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)


## Misc Observations 
- Big diff inter .getElementsByClassName and querySelector -- one returns 
- What is the difference is HTMLCollection and a NodeList?
    - Both of them are Array-like objects
    - Only important difference is NodeList has .forEach. 
    - HTMLCollection also has HTML
- We can use Array.from to turn things
- JavaScript as something created for the purpose of making pages interactive. JS as a scripting language. 
- Arrow functions--> Careful about using them, regular function declaration in .addEventListener will make `this` the function, implicit binding, but arrow function will have `window` as `this`. 
- Functions/handlers if you need trefuse remember to be careful how you input, 
- Your event object does not always need to be `event` in your callback
- Why do we use getElements or querySelector? More specific versus general
- event.code if used with keydown gives us the key pressed

## `event` Object
- What information does it contain?  Info about the event (most importantly)
- `target` the element that triggered the event, the element that the click happened. 

## Propagation
- Propagation is a very difficult concept. 
- Important for concept of bubbling
- `event` object itself has a method called .stopPropagation();
- Stop things at the child level
- `margin` is part of the element if you we are using box-sizing

## Bubbling
- Adding listening 