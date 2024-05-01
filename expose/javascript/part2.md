1. 3 is printed out. i variable - loop counter - is declared with var so it is accessible outside of the for loop. It is initially assigned to 0. There are 3 prices in the input array, so there are 3 iterations of the for loop when i = 0 -> i = 1 -> i = 2. Since the for loop is using post-increment (i++), after the last element is processed at index i = 2, i is incremented to i = 3 and the loop stops at that point. So after the loop i is 3, and that's what gets printed.
2. 150 is printed out. discountedPrice variable in the loop body is declared with var so it is accessible outside of the for loop. discountedPrice stores a price after the discount and is different for each iteration of the loop. 150 gets printed specifically because the last price in the input that we process is 300 that we multiply by 0.5 and store in discountedPrice. This is the last modification of this variable so that's why 150 gets printed.
3. 150 is printed out, similarly to question 2. finalPrice variable is declared with var before the loop so it is accessible inside the loop and after it. finalPrice stores rounded value of discountPrice. The last price in the input that we process is 300 that we multiply by 0.5 and store in discountedPrice. However, since discountPrice is already an integer, the calculation does not change the value so 150 is also stored in finalPrice. This is the last modification of this variable so that's why 150 gets printed.
4. [ 50, 100, 150 ] is returned. discounted is an array created before the for loop with var. After calculations that happen to each price in prices array mentioned above in questions 2 and 3, the dicounted values (finalPrice) get pushed into the discounted array. The prices are [ 100, 200, 300 ], the discount is 0.5 so the return value is discounted array with all prices halved [ 50, 100, 150 ].
5. ReferenceError: i is not defined. i is declared with let in the for loop, so it is not visible outside of the for loop, and line 12 that is trying to access i is outside of the loop.
6. ReferenceError: discountedPrice is not defined. Similarly to question 5, discountedPrice is declared with let in the for loop, so it is not visible outside of the for loop, and line 13 that is trying to access discountedPrice is outside of the loop.
7. 150 is printed out. finalPrice is declared with let outside of the for loop, so its scope is the function body. That is why finalPrice can be modified in the for loop (the loop is in the function body) and line 14 can print it out. And the reason why it is specifically 150 was described more in question 3, it works similar in this case.
8. [ 50, 100, 150 ] is returned. discounted was created with let before the for loop, so its scope is the function body, so in this case declaration with var vs let did not affect the final return result. The explanation for why these values specifically are returned is the same as in question 4.
9. ReferenceError: i is not defined. i is declared with let in the for loop, so it is not visible outside of the for loop, and line 11 that is trying to access i is outside of the loop.
10. 3 is printed out. length is a variable with the scope of the function body, so there is no access problems in this case. It is assigned a value of 3 in the beginning as prices.length is 3 (3 elements in the array), it isn't changed (cannot be changed) in the function.
11. [ 50, 100, 150 ] is returned. discounted was created with const before the for loop, so its scope is the function body. const does not have problems with push as the array as an object itself is not changed, the only thing changing is the content. In this case declaration with var vs let vs const did not affect the final return result. The explanation for why these values specifically are returned is the same as in question 4.
12. 
```
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student.['Favorite Teacher'].name
    E. student.courseLoad[0]
```  
13. 
``` 
    A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN
```
14. 
```
    A. true
    B. false
    C. true
    D. false
    E. false
    F. true
```
15. '==' or loose equality converts types to be the same before the comparison, this makes the comparison of different data types possible. '===' or strict equality does not perform any conversions, so if the data types of values differ it will return false. 
17. [ 2, 4, 6 ] will be the result. There is a function doSomething. It is passed in modifyArray function and srored in a variable called callback inside modifyArray's scope. In the loop we iterate through each number in the given array and use callback variable to call doSomething function with every number in the array saving the resulting values in our newArr. Then newArr is returned. So the result would be an array with doubled values (of the given array).
19.
```
1
4
3
2
```