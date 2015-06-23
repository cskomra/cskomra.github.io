## Website Performance Optimization portfolio project

As web applications become increasingly interactive and accessed on different devices there are a variety of opportunities in which performance issues can hinder the user experience. In this project, I identify a number of those performance issues and showcase my skills in fixing them.

### Getting started

####Part 1: Optimize `index.html`  
The `index.html` file and other resources of this website have been modified to achieve a target PageSpeed score of above 90 for both desktop and mobile devices.

#####*To check PageSpeed Insights for index.html:*

1. [Open PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/ "PageSpeed Insights") 
1. Insert the following URL:  
 ```http://cskomra.github.io/projects/frontend-nanodegree-mobile-portfolio/index.html
  ```
2. Check the scores for both desktop and mobile


####Part 2: Optimize Frames per Second in `pizza.html`

The `views/js/main.js` file of this website has been edited to include the following optimization- and perforance-related changes such that `pizza.html` will run at 60 frames per second or better:

#####OPTIMIZATIONS for `updatePostions()`
1. Use `getElementsByClassName` rather than `querySelectAll`
2. Move the sliding background pizzas based on a *cached* scroll position
3. Use 1 of 5 *offset* values (0, 1, 2, 3, or 4) to calculate 5 `phase[offset]`s

#####OPTIMIZATIONS for `DOMContentLoaded` EventListener
1. Create 40 pizzas rather than 200 (5 rows, 8 cols).  
Five rows of eight columns will cover all screen sizes.  The bottom row, img top calculates to 1024px.  
See table:  [Global Stats Screen Sizes, 2015](http://www.hobo-web.co.uk/wp-content/uploads/G-ww-mar-may-2015.jpg "Global Statistics on Screen Sizes, 2015")  


#####*To check frames per second:*
1. Open `views/pizza.html` in Google Chrome:  
[http://cskomra.github.io/projects/frontend-nanodegree-mobile-portfolio/views/pizza.html](http://cskomra.github.io/projects/frontend-nanodegree-mobile-portfolio/views/pizza.html "pizza.html")
2. Go to the Timeline Tab in Developer Tools
3. Click to Record
4. Scroll down for a couple of seconds
5. Stop recording
6. View recorded results

####Part 3: Optimize Resizing Pizzas in `pizza.html`

Changes have been made in `main.js` so that the time it takes to resize pizzas on `pizza.html` is less than 5ms (as shown in the browser console).

#####OPTIMIZATIONS for `changePizzaSizes()`
1. Use `getElementsByClassName` to get and cache all `randomPizzaContainer` objects
2. Pull vars `dx`, `newwidth` outside for loop

#####OPTIMIZATIONS for transforming `.mover` class
1. Add `willChange` style attribute with custom-ident, `width`.

#####*To check resizing pizzas:*
1. Open `views/pizza.html` in Google Chrome:  
[http://cskomra.github.io/projects/frontend-nanodegree-mobile-portfolio/views/pizza.html](http://cskomra.github.io/projects/frontend-nanodegree-mobile-portfolio/views/pizza.html "pizza.html")
2. Open the Console Tab in Developer Tools
3. Scroll Down to the Pizza Lever Slider on the page
4. Use the lever to resize pizzas
5. Check the console for "Time to resize pizzas"

### Viewing Optimization Comments in `main.js`
The main.js file that runs with this project has been minified and therefore has no comments.  However, you may access a version which includes inline comments about each of the above optimizations [here](https://github.com/cskomra/cskomra.github.io/blob/master/projects/frontend-nanodegree-mobile-portfolio/views/js/main-withComments.js "main.js with optimization comments"). 