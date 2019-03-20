# Lambda School, Day 6 Notes, 14 March 2019: Responsive Design II


## PM and Team Mtg Notes:
- Nothing noted so far. 


## Instructor Codepen/Project Link/Resources:
- [Lambda School Training Kit Link](https://learn.lambdaschool.com/fsw/module/reculybhiykuobrqh)
- [Codepen.io, Less Mini Challenge, My Fork](https://codepen.io/arturolei/pen/jJpBmZ?editors=1100)
- [Codepen.io, Preprcessing I, Starter, My Fork](https://codepen.io/campope/pen/PLBpBK?editors=1100)
- [Github Project I for Preprocessing Page](https://github.com/LambdaSchool/Preprocessing-Part-I)
- [Official less Page](http://lesscss.org/)

## Notes/Observations
### What the Hell is a Preprocessor?:
- It reads through a type of file and writes out CSS files based on that. 
- It just lets you write CSS in a convenient, more human readable way and then it writes CSS in another way. 
- Consequence: We no longer should directly modify the CSS. If you use a pre-processor, it just overwrites everything.

### Case Study: bootstrap variables
- See what bootstrap did with .text-primary (NB: they use primary, secondary, rather than colors-->accessibility and semantics)

### Mixins make life easier:
- NB: the presence or absence of () will affect whether the mixin appears in the JS as a class or not. 
- MIXINS CAN BE PARAMETRIC!!! you can put variables into mixins, variables with default values even!


### When do we use mixins?
- When we find ourselves writing the same damn things over and over?
- Kind of generic and repeating

### Misc Observations:
- [less uses "lazy evaluation"; order of declaration does not really make any sense](http://lesscss.org/features/#variables-feature-lazy-loading)
- Javascript is hella-vital 


### NESTING!!!
- Nesting really helps us organize our CSS
- Great with specificity 
- Specifity helps us nest things together.
- Careful about nesting; you might have break the nest
- **General Rule**: Only go five deep
- Nesting: Every selector should be nested inside the main container. Avoid having global styles unless they are element level.
- NB: `&` will mean whatever is up above, so to create `.class1.class2` inside `.class1`, you just say `&.class2`
- You can use this for media queries (very powerful), e.g. set a variable like `@phone: max-width:515px` and then say `@media(@phone)`


## Notes on LESS:
- To create a variable, `@` + `variablename`
- To create a mixin, see below example:
```
.some-class {
    color: red;
    font-size: 14px;
}

.example-mixin {
    text-align: center;
    .some-class;
}
```
- Nesting exists in LESS and is amazing:
```
.parent {
  color: black;
  font-size: 12px;

  .child {
    color: red;
    font-size: 16px;
  }  
} // parent
```
which compiles to:
```
.parent {
  color: black;
  font-size: 12px;
}
.parent .child {
  color: red;
  font-size: 16px;
}
```