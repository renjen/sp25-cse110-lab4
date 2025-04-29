
### Part 2 - JavaScript Analysis

#### Question 1
**What will happen at line 12 and why?**
print 3;  `i` is declared with `var`, which is function-scoped. After the `for` loop ends, `i` still exists and is accessible at line 12. So `console.log(i)` prints `3`.

#### Question 2 ######## RED FLAG
**What will happen at line 13 and why?**
`console.log(discountedPrice)` will cause a `ReferenceError` because `discountedPrice` was declared with `var` inside the `for` loop, and is function-scoped. Since it was not declared in the global scope, it is not accessible at line 13.

#### Question 3 
**What will happen at line 14 and why?**
`console.log(finalPrice)` will print `150`, the last calculated price. `finalPrice` is declared with `var`, so it's available throughout the function and retains the final loop-assigned value.

#### Question 4 #####RED FLAG CHECK THE CALUCALTIONG 
**What will this function return?**
It returns `[150, 250, 350]`. The loop calculates discounted prices for each element using `1 - discount`, rounds it, and pushes into the `discounted` array, which is then returned.

#### Question 5
**What will happen at line 12 and why?**
`console.log(i)` will cause a `ReferenceError`. Since `i` was declared using `let`, it's block-scoped and cannot be accessed outside the `for` loop.

#### Question 6
**What will happen at line 13 and why?**
`console.log(discountedPrice)` will also cause a `ReferenceError` because `discountedPrice` is declared with `let` inside the loop block, making it inaccessible outside.

#### Question 7
**What will happen at line 14 and why?**
`console.log(finalPrice)` will print `0`, because `finalPrice` is block-scoped due to `let` and the `console.log` is inside the block. The last assigned value was 0 in the last iteration.

#### Question 8 ######CHECK CLAUCLAKTIONS RED FLAG 
**What will this function return?**
It returns `[150, 250, 350]`, same as Q4. All variable scoping is proper, and the loop runs as expected.

#### Question 9
**What will happen at line 11 and why?**
Line 11 will throw a `SyntaxError`. `discountedPrice` is declared using `const` inside the `for` loop, and it is trying to redeclare it on each loop iteration. `const` does not allow redeclaration.

#### Question 10
**What will happen at line 12 and why?**
Line 12 works fine. `length` is declared using `const`, but it's never reassigned. `discountedPrice` is declared with `let`, so it's safe to reassign per loop iteration.

#### Question 11 ###RED FLAG 50, 1000, 150
**What will this function return?**
It will return `[150, 250, 350]`. No errors occur. `const` is used for `length`, which is okay since it's not changed. `let` is used for loop vars.

#### Question 12
**Object Access Notation**
A. `student.name`  
B. `student["Grad Year"]`  
C. `student.greeting()`  
D. `student["Favorite Teacher"].name`  
E. `student.courseLoad[0]`

#### Question 13: Arithmetic Type Conversion
A. `'3' + 2` → `'32'` (string concatenation)  
B. `'3' - 2` → `1` (string converted to number)  
C. `3 + null` → `3` (null becomes 0)  
D. `'3' + null` → `'3null'` (concatenation)  
E. `true + 3` → `4` (true becomes 1)  
F. `false + null` → `0` (false is 0, null is 0)  
G. `'3' + undefined` → `'3undefined'` (concatenation)  
H. `'3' - undefined` → `NaN` (undefined cannot convert to number)

#### Question 14: Comparison
A. `2 > 1` → `true`  
B. `'2' < '12'` → `false` (string comparison)  
C. `2 == '2'` → `true` (type coercion)  
D. `2 === '2'` → `false` (strict equality checks both type and value)  
E. `true == 2` → `false`  
F. `true === Boolean(2)` → `true`

#### Question 15
**Explain the difference between == and ===:**  
`==` compares values after **type coercion**, so `'2' == 2` is true.  
`===` compares both value **and type**, so `'2' === 2` is false.

#### Question 16
Refer the `part2-question16.js` file 

#### Question 17
The result will be: `[2, 4, 6]`
**Explanation:**  
- `modifyArray` takes in an array and a callback.
- It loops through each array element and applies the `callback`.
- The `doSomething` function multiplies the number by 2.
- So the returned array is:
  - `1 * 2 = 2`  
  - `2 * 2 = 4`  
  - `3 * 2 = 6`  
Final result: `[2, 4, 6]`

#### Question 18  
**Modify the code to print the current time every second.**
refer the `part2-question18.js` file

#### Question 19
The output will be:
1  
4  
3  
2
**Explanation:**
- `console.log(1)` runs first.
- `setTimeout(..., 1000)` schedules `2` to print after 1 second.
- `setTimeout(..., 0)` schedules `3` to print **after the current call stack is clear**.
- `console.log(4)` runs immediately.
- So:
  - 1 prints
  - 4 prints
  - 3 prints after a tiny delay (from the event queue)
  - 2 prints after 1 second
