# Lambda School, Day 6 Notes, 14 March 2019: Responsive Design II


## PM and Team Mtg Notes:
- Nothing noted so far. 


## Instructor Codepen/Project Link/Resources:
- [Lambda School Training Kit Link](https://learn.lambdaschool.com/fsw/module/rece3iqptdxavi0dw)
- [Codepen.io, my fork for RWD II](https://codepen.io/arturolei/pen/jJzNyM?editors=1100)
- [Codepen.io, my fork for RWD II, Version II with `rem`](https://codepen.io/arturolei/pen/qvoBMO?editors=1100)
- [Codepen.io, Instructor Final Version](https://codepen.io/campope/pen/YgaKpB?editors=1100)
- [MDN Page on Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Cheese Bread](https://www.splendidtable.org/recipes/spicy-cheese-bread)


## Review of What We Learned:
- Reminder: 
    - Fixed: Everything is set
    - Fluid: Everything is in percentage
    - Adaptive: Every single breakpoint, only media queries 
    - Responsive: is taking mix of fluid and adaptive 
- **Normalize vs Reset** Normalize adds some styles back in (e.g. h1>h2)

## Responsive Design
### Objectives 
- Responsive design and accessibility
- Responsive units
- Percentage based design

## px, rem, em
### `px` or pixels
    - responsive to a browser zoom but not to a user's design 
    - can be used in box model
    - mainly used in fonts and generally across the board, most common measurement employed
    - pixel is a point of light/dot 

### `em`
    - takes its parents font-size and reacts to that
    - Responsive unit, 
    - can be used in the box model
    - ems are responsive
    - compounding effects (2em, 2em or 0.5 em.... so much math, guys)
        - Try this: 
        ``` ul { font-size: 1.4em; }
           ul li { font-size: 1em; } /* same calculated size as the parent */
        ```
```
```
### `rem`: root em
    - responsive unit
    - takes root element's font-size
    - Determined by html font-size

### vw :`viewport width` AND vh: `viewport height`
    - Responds to the view port not font-sizes
    - up to 100
    - use sparingly (hard to predict)
    - Note 100% is 100% OF THE PARENT, 100vw is the viewport, independent of the parent; what ever the unit is.
    - When would we use vh? 
        - 

### Random Observations
- It really depends where you work and what works best for you in that situation.
- Cross browser testing---> Nothing better than using that damned browser
- Setting width to 100% and having a max-width might help


## Projects
### MVP Requirements
- Identify the responsive units
- Customize the templates to you (pick one, lot of these are really clean)
- This might be a fun project