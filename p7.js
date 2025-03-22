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
    let rows = +userInput[0];

    // loop that runs rows number of times
    // when the count reaches the value 5 ~ rows, it means that we have already
    // executed the loop that many number of times
    // stopping condition: count == rows
    // running condition: count != rows
    for (let row = 1; row <= rows; row++) {
        let line = [];
        for (let col = 1; col <= row; col++) {
            line.push(col);
        }
        console.log(line.join(''));
    }
});