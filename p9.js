const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let rows = Number(userInput[0]);

    for (let row = 1; row <= rows; row++) {
        let line = [];
        // for each row, print rows number of times 1
        for (let col = 1; col <= rows; col++) {
            line.push(1);
        }
        console.log(line.join(''));
    }
});