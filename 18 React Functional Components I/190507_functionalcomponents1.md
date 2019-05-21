# React, Part I: Functional Components I, May 7 2019

## Pre-Lecture Discussion:
- Review and master the fundamentals of React.
- **Prepare to spend time reviewing and mastering Redux** 
    - This is apparently a major pain point for a lot of people. 

## Misc Notes:
- Instructor: Brian Kirkby
- We are not trying to control the state of the application. 
- "Event - State" Loop, Virtual DOM
    - It makes changes based on what specifically was updated. 
- We will be using codesandbox
- Transpiler: something takes something in one language (not JS) and then transpiles into JS
- We used codebox. 
- We will be using an npm module call create-react-app (sets up and configures Babbel transpiler, so you can readily write things in JSX which then gets translated into JS which then gets put )
- REACT is about managing application "state" in a declarative way. 
- What is STATE?
    - Every application you have as a "state", a condition
    - Before there were apps, there was hypertext, the web was just a way to link documents, not for apps. 
    - Everything is state, everything that holds data
- REACT allows you to separate things more clearly from backend
- Virtual DOM is arguably not the main reason 
    - Virtual DOM is a layer between your code and the actual DOM that gets displayed.
    - Deals with application states, first update the Virtual DOM and then update the real DOM
    - Managing changes of state before actually pushing out
    - Why this extra layer? It turns out it is surprisingly performant/efficient 
- The big value is how REACT manages state. 
- REACT is easier way to manage state and understand the state of your application. 


## Links:
- [codebox link, my fork](https://codesandbox.io/s/w0nqxwkyq8)