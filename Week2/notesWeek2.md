### Computers take certain amounts of labor off the user. They make it easier to write faster and calculate numbers. They enable us to access billions of hours of information from almost anywhere in the world. They connect people. They enable commerce of goods and ideas. They store vast amounts of information.

### Border radius percentage in divs changes the shape: less is more square, more is more round.

### ES6 no longer used var, but rather const and let. Best practice is now to use const and let, though var is not currently wrong.

## Notes from office hours:

### Use "typeof" to check what type of information is stored in a variable.

### Array.isArray(name) can verify that JS is parsing an array as an array.

### Array.prototype.push() to add new additional info to array.

### Conditional statements: if, else if, else, switch (uses cases)

### && is how to notate that both conditions must be met

### When calling functions, they always need to be called with () even if they do not take any parameters.

### Book rec: O'Reilly Javascript Definitive Guide

### Math.random - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random "The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user."

### Console.log is for development, Return is for showing to the user.

Comparison Operators
Comparison Operators
As seen in earlier examples, comparison operators are used to compare two variables. The result of this comparison is either a true or false. Here’s a list of available comparison operators:

==	equal to	“1” == 1	true

===	equal value and equal type	“1” === 1	false

!=	not equal	1 != 2	true

!==	not equal value or not equal type	1 != 1	false

>	greater than	1 > 2	false

<	less than	1 < 2	true

>=	greater than or equal to	1 >= 1	true

<=	less than or equal to	2 <= 1	false


### What is the benefit of this:

function sayHello() {
  console.log("Hello world!")
}

setInterval(sayHello, 3000);

### vs this:

setTimeout(function sayHello(){
  console.log("Hello World!");
}, 3000);







