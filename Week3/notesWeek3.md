## Week 3 notes
## 
### Explain how objects are stored in memory while a code is being executed
### Identify whether a variable is in global, local, or block scope
### Identify the parameters (a hard value or a reference to a value) to pass into a function 
### Check the data type of a value stored in a variable
### Implement web animations using JavaScript
### Assign primitive types and object types to variables
### 
### CPU, stack, heap, machine instructions, and input and output. 
### 
### Arrays are passed in as references, not as copies, unlike primitive such as numbers. This can save us from having duplicate copies of large sets of data taking up memory they don't need to.

Variables can be declared in the following scopes:

Global scope to be accessible and changeable anywhere in the program
Local scope to be accessible and changeable anywhere inside of the function they were declared in
Block scope to be accessible and changeable anywhere inside the block they were declared in
Let’s imagine writing a program that tracks students’ grades for a class. Address the following questions in your post to this discussion.

I'd want the students' names and/or IDs in a globally scoped variable. A locally scoped variable could be the weighted grade calculated on percentages of the total grade certain types of assignments of are worth, and a block-scoped variable could be only the points for one student's individual assignment.

### Function declaration (function functionName() {}) vs function expression (var red = functionName(), then declaring function). However, doing const red

### Since var is being deprecated, does that mean hoisting variables is also going out of practice? I'm watching https://classroom.emeritus.org/courses/1697/pages/video-3-11-video-3-12-10-42-model-factory-and-hoisting-functions-and-vars?module_item_id=488254 , and in the last minute or so of the second video, it mentions that var can get hoisted but let and const cannot.