let points = 5;

function addPoints(value) {
    return value + 10;
}

points = addPoints(2);

console.log(points);

/* Answers:
1. 12 is printed

2. 5 is printed

3. The "points" variable is a separate one from the one inside the function. 
Changing it wont change the inner one

4. The variable has the same as the one outside of the function. So the one inside hides the outer one.
The "let points" variable is invisible form the function.

5. Current code is the rewritten one.
*/