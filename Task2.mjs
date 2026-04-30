const user = { name: "Sara", score: 10 };
const backup = { ...user };

backup.score = 25;

console.log(user.score);
console.log(backup.score); 

/* Answers:
1. 25 is printed by the two console.log() calls

2. "Backup = user" doesn't copy the object. Both user and backup point to the same.

3. "Backup" is not a copy, it is just the same object with a new name.

4.Changing the object inside a function also changes the original object outside of it.

5. Fixed version is now the one written on top
*/ 

