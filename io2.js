// Getting input via STDIN
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on("line", (data) => {
    userInput.push(data);
});

rl.on("close", () => {
    console.log(userInput[0]);
});