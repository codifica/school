### CPU, stack, heap, machine instructions, and input and output. 

### Arrays are passed in as references, not as copies, unlike primitive such as numbers. This can save us from having duplicate copies of large sets of data taking up memory they don't need to.

Variables can be declared in the following scopes:

Global scope to be accessible and changeable anywhere in the program
Local scope to be accessible and changeable anywhere inside of the function they were declared in
Block scope to be accessible and changeable anywhere inside the block they were declared in
Let’s imagine writing a program that tracks students’ grades for a class. Address the following questions in your post to this discussion.

I'd want the students' names and/or IDs in a globally scoped variable. A locally scoped variable could be the weighted grade calculated on percentages of the total grade certain types of assignments of are worth, and a block-scoped variable could be only the points for one student's individual assignment.