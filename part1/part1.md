1. At line 11, console.log(i) will print out the value at i to the console, which will be prices.length, because i is declared as var, and therefore has no block scope
   
2. At line 12, console.log(discountedPrice) will print out the value of the final discounted price to the console, which will be the discounted price of the last item in the price array. This is because discountedPrice is declared as var, and therefore has no block scope
   
3. At line 13, console.log(finalPrice) will print out the value of the last discounted price rounded to the nearest hundreth of a decimal place to the console. In otherwords, it will print the value of discountedPrice rounded to 2 decimal places. This is because finalPrice is declared as var, and therefore has no block scope.

4. The function will return an array with the values 50, 100, 150. This is because the function calculates the correct discounted price of all the numbers of the price array and returns them as an array.
   
5. At line 11, console.log(i) will produce an error because the variable i is declared as let, and therefore is limited in scope to only inside the for loop.
   
6. At line 12, console.log(discountedPrice) will produce an error because the variable discountedPrice is declared as let inside the for loop, and thus is limited in scope to only inside the for loop.
   
7. At line 13, console.log(finalPrice) will print out the very last discounted price of the price array, rounded to the second decimal place. This is because while defined as let, it is declared inside the overall function, and therefore its scope spans the entire function
   
8. The function will return an array with the values 50, 100, 150. This is because the function calculates the correct discounted price of all the numbers of the price array and returns them as an array.
   
9. At line 11, console.log(i) will produce an error because the variable i is declared as let, and therefore is limited in scope to only inside the for loop.
    
10. At line 12, console.log(discountedPrice) will produce an error because the variable discountedPrice is declared as const inside the for loop, and thus is limited in scope to only inside the for loop. Additionally, during the runtime of the function, an error would be produced each time an attempt to reassign discountedPrice occurs.
    
11. At line 13, console.log(finalPrice) will print to console the value 0 because the variable is declared as a const, and therefore cannot be reassigned after being assigned once. This also means that each time finalPrice is reassigned inside the for loop, an error will occur because it is impossible to reassign a const variable.
    
12. In actuality, the variable reassignments to const variables would throw errors. However, if we ignore those errors and assume the reassignment was successful, then the function would return an array [0, 0, 0] because the variable finalPrice is const, and each time the value is pushed to the array, the array gains another 0.
    
13. 
    1. student.name;
    2. student[Grad Year];
    3. student.greeting;
    4. student[Favorite Teacher].name;
    5. student.courseLoad[0];
    
14. 
    
15. 
    
16. 
    
17. 
    
18. 
    
19. 
    
20. 
    
21. 
