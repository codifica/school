## Week 6 Notes
##
### Explain use cases of callback functions versus regular functions
### Explain how to capture web page events and user actions and respond to them using callback functions
### Use callback functions to filter, sort, and map arrays and objects in JavaScript
### Use string manipulation functions
### Discuss use of callback functions and asynchronous programming
### 
### If you write a filter function as a callback, you can allow users of your API more flexibility in how they filter their data, since you probably can't anticipate all the possibly ways they will want to do this. 


Template strings - backticks 

` ` 
${} JS expressions wrapped in this

Array Methods

forEach doesn't change the original array and doesn't return anything, so you can't chain it with other methods.

similar to a for loop, and forEach is ES6 standard.

.map is also something to use instead of forEach

.filter
.reduce reduces an array to a single value, probably used in e-commerce cart totals.

String.replaceAll() using an empty string. Once can replace all commas with an empty string.

In VSCode, highlight something and press command + D to highlight them all and change them at the same time.

.sort 

Callback functions lend flexibility to when we execute certain code. It means we can code a setup and then pass in some of the unknowns later. 

A regular function expression is a function that's assigned to a variable, which enables it to be passed into another function.


Callback functions take a whole function and make it able to be run elsewhere in the code, a way called ayschronously. It means functions can be declared earlier in the code and be run later.


