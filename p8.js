const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let rows = +userInput[0];
    for (let row = 1; row <= rows; row++) {
        let line = [];
        // for each of the row, need to print 'row' number of stars
        for (let stars = 1; stars <= row; stars++) {
            line.push('*');
        }
        console.log(line.join(' '));
    }
});