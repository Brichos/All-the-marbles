const LIGHTS = {
    RED:    { message: "STOP", duration: 3, next: "RED" },
    GREEN:  { message: "GO",   duration: 4, next: "GREEN" },
    YELLOW: { message: "SLOW", duration: 1, next: "YELLOW" },
};

let currentLight = "RED";
let ticksInLight = 0;

function tick() {
    const light = LIGHTS[currentLight];

    if (!light) {
        console.log("BROKEN");
        currentLight = "YELLOW";
        ticksInLight = 0;
        return;
    }

    console.log(light.message);
    ticksInLight++;

    if (ticksInLight >= light.duration) {
        currentLight = light.next;
        ticksInLight = 0;
    }
}

for (let i = 0; i < 8; i++) tick();

/* Explanation:
The names; a,b,c are gone and replaced by: currentLight, ticksInLight and tick.

Data instead of if/else functions. Everything is in the LIGHTS object;
how long the lights last, what comes next and a message according to the light color.

The code has been shortened significantly by only using "lookup and transition check"

Easy to add more color or effects to the lights

It is a loop instead of the "x();". Makes it easier to change the ticks to whatever you want.

Changed the "broken" light to yellow to match the real world.
*/