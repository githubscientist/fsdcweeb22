const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInput = [];

rl.on("line", (data) => {
    userInput.push(data);
});

rl.on("close", () => {
    // write your logic
    console.log(userInput);
});