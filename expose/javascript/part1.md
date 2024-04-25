1. values added:  20
2. final result:  20
3. values added:  20
4. ReferenceError: result is not defined. result  variable created with let is defined inside of the if-block. Print statement that is trying to access result variable on line 13 is outside of that block, so the variable is not visible for it, thus, we get an error.
5. TypeError: Assignment to constant variable. result variable is initialized with the value of 0 when it's first created. const keyword prevents result from being reassigned, that is why we see an error even before reachinig line 9. If we were to comment out line 7, we would see the line 9 print out "values added:  0"
6. ReferenceError: result is not defined. const has the same scope as let so we have the same error as in question 4. Specifically, result variable created with const is defined inside of the if-block. Print statement that is trying to access result variable on line 13 is outside of that block, so the variable is not visible for it.