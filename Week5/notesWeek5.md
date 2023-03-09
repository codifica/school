## Week 5 Notes
##
### Manipulate arrays and strings in JavaScript
### Explain how to use string literals in JavaScript
### Create and use anonymous functions in JavaScript
### Identify the different JavaScript syntax variations
### Debug JavaScript code and confirm that your JavaScript variables have the correct data
### Describe how to import and export JavaScript modules
### Manipulate JSON data using JavaScript code
### 
## Array Methods
### https://www.w3schools.com/js/js_array_methods.asp
###
## String Template Literals
### 
### SPLICE - delete items in an array or string; changes original. 
### 
#### At position 2, add new items, and remove 1 item:

  `const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 1, "Lemon", "Kiwi");`
### 
### SLICE - pull certain items from an array or string;changes original.
### 
### SPLIT - can be used to turn a string into an array of words, and does not change the original string.
### 
### PUSH - add a value to the end of an array
### 
### POP - remove value from end of an array
### 
### INDEXOF - find what position something is in
### 
### I have several polished stones on a shelf. They are:
### - labradorite
### - amethyst
### - rose quartz
### - rainbow obsidian
### - tiger eye
### - flint
### 
### 
### I can remove the amethyst and rose quartz entirely from the original shelf to my desk next to my keyboard via SPLICE.
### The shelf now contains labradorite, rainbow obsidian, tiger eye, and flint.
### 
### I can put the amethyst and rose quartz on a new shelf, AND still have them on the old shelf, using SLICE.
### The original shelf now contains labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, and flint.
### The new shelf also contains amethyst and rose quartz.
### 
### I can also get new objects from this by using SPLIT on the rose quartz, rainbow obsidian, and tiger eye.
### The original shelf contains labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, and flint.
### I now also have another shelf with a rose, a quartz, a rainbow, an obsidian, a tiger, and an eye.
### 
### I can also put a new rock, malachite, on the shelf using PUSH.
### The original shelf contained labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, and flint.
### The original shelf now contains labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, flint, and malachite.
### 
### I can also take that rock back off the shelf using POP.
### The original shelf contained labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, flint, and malachite.
### Now the original shelf contains labradorite, amethyst, rose quartz, rainbow obsidian, tiger eye, and flint. The malachite is on my desk next to my keyboard.
### 
### Finally, I can tell you what position the amethyst is in using INDEXOF. It's in Index 1, ie place #2 on the shelf.
### 
### 
### 
### Anonymous Functions and fat arrow notation - 
### let add - function (a,b) {
###   return a + b;
### }
### 
### setTimeout(function(){
###   console.log('Hey')}, 1000)
### 
### let add = (a, b) => {
###   return a + b
### }
### Reviewed block scope of variables. 

### Passing functions to other functions. 
### also, exporting and importing modules:
### Example, in your main.js file:
#### import {
####     hello,
####     funcs,
####     f1,
####     f2
#### } from "./module.js";
### 
### To run a web server, npc http-server in the folder where the index file is I want to test.
### 
### 
## Anonymous Functions in Module Creation
### 
### (function(){
###   console.log('hey);
### })()
People to look up: Sara Soueidan, Ethan Marcotte, John Resig

Progressive web applications that work just as well on mobile as on computer. 

Apple's website is, according to Carolina, very interactive and good. 

Memphis design is a rejection of minimalism: colorful, approachable, and adventurous.

Visible borders -- look up more of this

Learn Sass (haha)

Put READMEs on all projects on my GitHub

Put the keywords for the positions you want in your resume.

Website: https://www.remote.io

