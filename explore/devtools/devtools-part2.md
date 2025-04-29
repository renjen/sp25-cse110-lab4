
### DevTools Debugging Answers
1. **What was the bug?**  
   The values of `num1` and `num2` were being treated as strings, so the `+` operator did string concatenation (e.g., `"3" + "4"` resulted in `"34"` instead of `7`).

2. **How would you fix it?**  
   Convert `num1` and `num2` to numbers before adding:
   ```js
   let result = Number(num1) + Number(num2);