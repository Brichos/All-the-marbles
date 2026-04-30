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

2. The loop used i <= prices.length - makes it go 1 too far and then reads undefined
this makes the result NaN.

3. price[i] needs to be prices[i] because price is not defined
*/

//B

let highScore = 0;
let players = [];

function updateScores(name, points) {
    players.push(name);

    if (points > highScore)
        highScore = points;

    return name + " now has " + points += 10;
}

console.log(updateScores("Tony", 40));
console.log(updateScores("Tony", 50));
console.log(updateScores("Rony", 150));
console.log(players);
console.log(highScore);
//C
