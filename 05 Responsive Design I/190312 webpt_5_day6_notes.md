# Lambda School, Day 6 Notes, 12 March 2019: Responsive Design I


## PM and Team Mtg Notes:
- Nothing noted so far. 


## Instructor Codepen/Project Link/Resources:
- [Lambda School Training Kit Link](https://learn.lambdaschool.com/fsw/module/recudrqsgpwcepcms)
- [Interneting is Hard Content on Responsive Design](https://internetingishard.com/html-and-css/responsive-design/)
- [MDN Page on Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Google Dev Page on Responsive Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
- [CSS Tricks Stuff on Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [Codepen.io, my fork](https://codepen.io/arturolei/pen/gEXzLy?editors=1100)
- [Codepen.io, official](?)


## Things to Remember about Responsive Design:

### Fixed, Fluid, Adaptive, and Responsive Notes:
#### Fixed 
- Layout is usually built for only one view
- Units are usually hard coded and not responsive
- Cheapest and fastest to get into production; you only build things once
- Not industry standard anymore (thanks, mobile devices!)

#### Fluid - You only build
- Site has no constraints (no max-width)
- Usually media queries are not used in favor of a layout that is elastic in all devices
- Not commonly seen anymore, used to be popular

#### Adaptive 
- Website adjusts to breakpoint (media queries)
- Layout may still be hard coded widths
- Will still see this approach in many sites to this day 
- Any time something looks bad, you end up with a lot of media queries

#### Responsive 
- Uses both breakpoints and responsive units
- A blend of all the positive traits of fixed, fluid, and adaptive
- Industry standard

### `<meta>` Tags
-  Meta tags are not visible to the end user; things like linking, SEO things. 
-  Meta tags describe the pages content, e.g. copyright
- `viewport` is basically the browser
- `<meta name="viewport" content="width=device-width, initial-scale=1.0"> ` 
    - `viewport` = browser
    - `device-width` = the width will follow the screen-wdith of the device
    - `initial-scale=1.0` set ths initial zoom level when the page is first loaded
    - You want to use the above tag for media queries to be able to fully function. 
    - Even if you don't understand this now, JUST PUT THIS TAG in your code. 
        - No need to memorize it. 



## What Went Well/Break throughs
- Getting the hang of it
- Focused on MVP
- This is really fun; I love the puzzle element of it. Reminds me of math major days

## Challenges: 
- Nitpicking again
- Atoning for my past sins when it came to the desktop version
- I still need to take time to be confident about distinguishing what max-width, min-width (greater than, less than)
- I am still working out what the difference is between adaptive vs responsive (no hard-corded widths)?
- I accidentally used browser zoom; it threw everything off.
