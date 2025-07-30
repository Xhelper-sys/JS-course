/*
Challenge Exercises
Setup: in the Amazon project, update the cart to 2 basketballs (20.95 each)
with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.
*/

// 3k. Using interpolation, create the first line 
// of text (use math to calculate the numbers 4 and 57.88).
`Items (${2 + 2}): $${((20.95 * 2) * 100 + (7.99 * 2) * 100) * 0.01}`

// 3l. Create second line of text:'Shipping & handling: $9.98' (use math).
'Shipping & handling: $' + ((4.99 * 100 * 2) * 0.01)

// 3m. Create tird line:'Total before tax:$67.86' (use math).
`Total before tax: $${((20.95 * 2) * 100 + (7.99 * 2) * 100) * 0.01 + ((4.99 * 100 * 2) * 0.01)}`

// 3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math
// and Math.round(...); to calculatethz exact number)
`Estimated tax (10%): ${Math.round((((20.95 * 2) * 100 + (7.99 * 2) * 100) * 0.01 + ((4.99 * 100 * 2) * 0.01))*10)*10/1000}`

// Finish change the cart back to 1 basketball, 1 t-shirt (both free shipping).