const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let rows = Number(userInput);
    let reverse = false;

    // execute rows number of times
    for (let row = 1; row <= rows; row++) {
        let line = [];

        if (!reverse) {
            // for each of the row, start from 1 to N
            for (let col = 1; col <= rows - row + 1; col++) {
                line.push(col);
            }
        } else {
            // for each of the row, start from N to 1
            for (let col = rows - row + 1; col >= 1; col--) {
                line.push(col);
            }
        }

        reverse = !reverse;

        console.log(line.join(''));
    }
});