### Question 1
Line 9 prints: "values added: 20"  
Explanation: `var` is function scoped, so `result` is accessible even outside the `if` block.

### Question 2
Line 13 prints: "final result: 20"  
Explanation: No error because `var result` is a global variable. 

### Question 3
`var` should generally be avoided because it is **function scoped**, not block scoped.  
This means variables declared with `var` are accessible outside the block they're defined in (like inside an `if` statement), which can cause unexpected behavior and bugs.

It is also hoisted, meaning the declaration is moved to the top of the function, but not the assignment — which can also lead to confusion.  
Instead, you should use `let` (for reassignable variables) or `const` (for constants) since they are block scoped.


### Question 4
Line 9 prints: `values added: 20`  
Explanation: `let` is block scoped, and line 9 is inside the `if` block, so `result` exists and prints correctly.

### Question 5
Line 13 causes a **ReferenceError**: `result is not defined`  
Explanation: Since `result` was declared using `let` inside the `if` block, it is **not accessible outside the block**, so it can't be used in `console.log` at line 13.


### Question 6
Line 9 causes a **TypeError**: Assignment to constant variable.  
Explanation: `const` variables cannot be reassigned after declaration.  
Line 6 tries to change `result` from `0` to `num1 + num2`, which is illegal for `const`.

### Question 7
Line 13 causes an error.  
Explanation: `const` cannot be reassigned. Line 7 attempts to reassign `result`.