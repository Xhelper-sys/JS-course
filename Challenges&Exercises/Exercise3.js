/*
Lesson 3 Exercises - Strings
Note: do these exercises in the Console (right click > Inspect > Console)
*/

// 3a. Create the text 'My name is:' as a string.
'My name is:'

// 3b. Create your name a string (for example:'Simon').
'Mustafa'

// 3c. Using concatenation add the 3 string from 3a and 3b together
// to create the text: 'My name is:___' (replace ___ with your name).
'My name is:'+'Mustafa'

// 3d. At a restaurant, you oder 1 coffee ($5) and 1 bagel ($3). Using math; 
// calculate the total cost, and using concatenation, create the text:
// 'Total cost: $___' (replace ___with the total you calculated).
'Total cost: $' + (5 + 3)

// 3e. Do the same thing as 3d, but use a template string and interporation.
`Total cost: $${5 + 3}`

// 3f. Display the text from 3e in a popup using alert(...);
alert(`Total cost: $${5 + 3}`);

// 3g. You order 1 cofee ($5.99) and 1 bagel ($2.95). Using math, calculate
// the total cost and using concatenation, create the text:
// 'Total cost: $___' (hint: calculate in cents to avoid inaccuracies)
'Total cost: $' + (Math.round(((5.99 + 2.95) * 100)) * 0.01)

// 3h. Do the same thing as 3g, but use a template sting and interpolation.
`Total cost: $${Math.round(((5.99 + 2.95) * 100)) * 0.01}`

// 3i. Display the text from 3h in a popup.
alert(`Total cost: $${Math.round(((5.99 + 2.95) * 100)) * 0.01}`);

// 3j. Using a multi-line string, create the text from 3h and add a line of text 
// underneath: 'Thank you, come again!'. Display both lines in a popup.
alert(`Total cost: $${Math.round(((5.99 + 2.95) * 100)) * 0.01}\nThank you, come again!`);

