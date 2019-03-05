# Lambda School, Day 2 Notes, 2/28/19


## PM and Team Mtg:
- More weeks of CSS ahead of us before we get to JS
- Keep practicing your JS because it comes back around. 
    - It's not necessarily a start from the beginning with JS; prepare to hit the ground running. 
- Advice: ake notes in .md
- Try Live Server (this lets you open an index.html as if it were a browser)


## Instructor Codepen/Project Link:
- [https://codepen.io/arturolei/pen/vPXdXo?editors=1100](https://codepen.io/arturolei/pen/vPXdXo?editors=1100)

## General Observations/New Things Learned/Things to Review:
- Instructor is reading a book called "Refactoring UI"
- Recap of Display Options:
    -  `inline` vs `inline-block`; `'inline` respects 
    -   `block` elements are difficult to center vertically
    -  It's difficult to center vertically with `inline-block`


## Flexbox Intro:
- Lesson followed the path outlined by [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Flexbox is very new (see [caniuse.com/#search=flexbox](caniuse.com/#search=flexbox))
    - We're going to assume that for now Flexbox is okay. 
    - This is a very recent shift. 
    - Bootstrap did not use Flexbox until recently. 
    - A small percentage of the internet will have problems with FlexBox (IE6-IE9)
- Flexbox is a "module" (for CSS, a collection of styles/properties)
    - `display: flex` pulls in a module. 

---

## Flexbox Container
### Flexbox Layout (default)
- Main Axis: Left to right
- Cross-axis: top to bottom
- Cross Start: top
- Cross End: bottom of div
- Note that the defaults are row, left to right
- Flexbox still reflects the box model
- Careful with `flex-direction` because you can really make the order off. 
    - Careful with this for readability
    - Using `reverse` might come up in weird use cases. 
- Flex Containers only going down one level. 
    - You can "nest flex" however whatever you do will only go one level down. 

### `flex-wrap`: where the oveflow goes
- Determines what will happen with overflow
- Default is nowrap
- `wrap-reverse`: kind of mind-bending

### `flex-flow` (`flex-direction` + `flex-wrap`):
- Just a combo of the two

### `justify`: content along main axis
- Defines the content along main exis. 
    - Ex: `flex-end` uses main end
- `space-between` will always have item at start and end
- `space-around` will distribute items evenly with the main axis, items at the endpoints have half spaces, items in middle have double
- `space-evenly` will distribute spacing evenly across all item

### `align-items`: when you have a single row
- `align-items` controls items on cross-axis
- `stretch` is default; unless height/cross-axis is specified items will take up whole space, stretching across cross axis and bounded by parent element 
- Only when you have one row. 

### `align-contents`: when you have to wrap
- How to align on cross-axis when there is only one line of items
- Only works when you have a situation where things are compressed
- This might involve media queries. 

---

## Flex Items

### `order` 
- `order` property controls the order
- Use this to explicitly defy source order; this can be bad (accesibility, the HTML will no longer reflect the display order)

### `flex-grow`
- Default order for how children grow, scales
- 1 = everything grows evenly, scales evenly, default value

### `flex-shrink`
- Default order for how children shrink

## align-self
- Overwrite flex orientation along cross-axiss




## 
```
@media (condition, e.g. max-width:520px){
    p{
        color:red;
    }
}
```
