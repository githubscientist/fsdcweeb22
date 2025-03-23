// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // input handling
    let rows = Number(userInput[0]);

    for (let row = 1; row <= rows; row++) {
        // for each of the row
        let line = [];
        for (let col = 1; col <= rows - row + 1; col++) {
            if (row === 1 || row === rows) {
                line.push(col);
            } else {
                // for the rest of the rows
                if (col === 1 || col === rows - row + 1) {
                    line.push(col);
                } else {
                    // for the rest of the cols
                    line.push(' ');
                }
            }
        }
        console.log(line.join(''));
    }
});