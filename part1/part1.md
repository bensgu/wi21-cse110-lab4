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
    A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher'].name;
    E. student.courseLoad[0];
    
      
14. 
    A. '32' is printed because the first operand is a string and so the second operand is casted to string and concatenated with the + sign
    B. 1 is printed because '3' is converted to a number and subtracted with 2
    C. 3 is printed because null is converted to a value of 0
    D. '3null' is printed because one of the operands is a string and so the other operand is casted to string and concatenated with the + sign
    E. 4 is printed because true has a numerical value of 1
    F. 0 is printed because both false and null are converted to numerical values of 0
    G. '3undefined' is printed because one of the operands is a string and so the other operand is casted to string and concateneated with the + sign
    H. NaN is printed out because undefined is converted to a numerical value, but it has none and therefore is Not a Number

15. 
    A. true, because the string 2 is converted to a number and evaluated properly
    B. false, because when comparing the strings via their ASCII value, the 2 has a larger value than the 1 of 12, and no further comparison is done
    C. true, because the string is converted to its numerical value and compared properly
    D. false, because the operator === compares the types as well, and if they are not equal it returns false
    E. false, because true has a numerical value of 1, and is evaluated properly
    F. true, because Boolean(2) has a boolean value of true, and true === true returns true
    
16. === will check equality without type casting, whereas == will check equality with type casting. Therefore, with ===, if the objects have different types, it will evaluate as false
    
17. How are you? is printed because 2 == true is false, but the second condition is true because 2 has a boolean value of true
    
18. 
    
19. 
    
20. 
    
21. 
