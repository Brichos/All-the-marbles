//A
function calcTotal(prices){
    let total = 0;
    for(let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return Number (total.toFixed(2));
};

/* Explanation: 
1. For loop starts at 1 instead of 0. 
The total will always miss the first items price because arrays start at 0

2. The loop used "i <= prices.length" - makes it go 1 too far and then reads undefined
this makes the result NaN.

3. "price[i]"" needs to be prices[i] because price is not defined
*/

//B

let highScore = 0;
let players = [];

function updateScores(name, points) {
    const total = points + 10;

    if (!players.includes(name)) {
        players.push(name);
    }

    if (total > highScore) {
        highScore = total;
    }
    return name + " now has " + total;
}

console.log(updateScores("Tony", 40));
console.log(updateScores("Tony", 50));
console.log(updateScores("Rony", 150));
console.log(players);
console.log(highScore);

/* Explanation
1. using "points += 10" inside the return makes the script crash because of invalid syntax

2. Same name gets added in every call making "players" get duplicates

3. highScore doesn't include the +10 points so the numbers won't match the message given.
*/

//C

 const presentCount = 0;
 const defaultStatus = { present: false };

 function registerAttendance (students) {
    return students.map((student) => {
    if (!student.status) {
    student.status = defaultStatus;
    }

    if ((student.status.present = true)) {
    presentCount++;

    }

        return student.name + " is present";
    });
 }
 
 const students = [
    { name: "Ava" },
    { name: "Noah", status: { present: false } },
    { name: "Mia", status: { present: true } },
 ];

console.log(registerAttendance (students));
console.log(presentCount);
console.log(students);

