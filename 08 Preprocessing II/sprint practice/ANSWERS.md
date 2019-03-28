# Self-Study Question Responses for Advanced CSS Module, 22 March 2019

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the difference between an adaptive website and a fully responsive website?
*An adaptive website has fixed settings and layouts for certain devices (predefined layouts for predefined viewports); in other words, it has media queries designed for several possible devices. A fully responsive design is in theory a design that responds to the size of the browser at any given point for any given browser/viewport size; in other words, a responsive design aims to work no matter the screen size*

2. Describe what it means to be mobile first vs desktop first.
*Mobile first means to design the layout with the mobile layout in mind first and then work up to the desktop layout. Desktop first is the opposite*

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
*`font-size:62.5%` in the `html` sets the `font-size` relative to the user's browser; using this value makes calculation of font sizes easier to do with `rem` units, as `rem` units are units relative to that root element value. Using 62.5% for `font-size` allows us, in effect, to have it so that `1rem` can be `10px`*

4. How would you describe preprocessing to someone new to CSS?
*Preprocessing allows us to write CSS rules in a more human readable logical format (sometimes across several files) that is then "compiled" into a single CSS document. Instead of writing long convoluted CSS style rules like `.class1 .class2 selector1 selector2 id` we can nest or group sets of associated rules together, along with media queries. *

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
*My favorite concept in preprocessing is nesting, followed by variables. The concept that gives me the most trouble are mixins; not because I do not understand them and what they do, but I have trouble understanding when strategically to best deploy them*
