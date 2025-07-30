/*
Lesson 2 Exercises - Nimber and Math
Note: do these exercises in the Console (rigth-click > Inspect > Console)
*/

// 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and
// 1 ice cream for $5. Use Javascript to calculate the cose=t of the order.
10 + 3 * 8 + 5

// 2b. You're at a restaurant with 2 friends (3 people in total) and make the
// same order as 2a. Caculate how much each person pays.
(10 + 3 * 8 + 5) / 3

// 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts (7.50 each).
18.50 + 2 * 7.50

// 2d. Calculate a 10% tax for total in exercise 2c.
(18.50 + 2 * 7.50) * 10/100

// 2e. Calculate a 20% tax for the total in 2c. (remember that 1% = 1/100,
// so 20% = 20/100 = 0.2)
(18.50 + 2 * 7.50) * 20/100

/*
Setup: in the Amazon project, go to the home page and add a toaster
(18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster.
Choose $4.99 shipping for the toaster.
*/

// 2f. Calculate the cost of the products (before shipping and taxes).
// Hint: calculate in cnets to avoid inaccuracies.
(2095 + 799 + 1899) * 0.01

// 2g. Calculate the Total before tax.
(2095 + 799 + 1899 + 499) * 0.01
(4793 + 499) * 0.01

// 2h. Calculate the 10% tax exactely
// Hint: use Math.round()
(5292) * 0.1
Math.round(529.2) * 0.01

// 2i. Calculate Order total at the bottom
((52.92 + 5.29) * 100) * 0.01

// Finish: after finishing 2i remove the toaster from your cart.


// 2j. Let's say we want to always round a number down (2.8 => 2)
// Using Google or an A.I. tool, search for the code to do this 
Math.floor()
Math.floor(2.8)

//2k. Let's always round a number up (2.2 => 3). Search how to do this 
Math.ceil()
Math.ceil(2.2)
