const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// inp.on("close", () => {
//     console.log(userInput[0].split(' '));
// });

// Method 1
// inp.on("close", () => {
//     console.log(userInput[0].split(' ').join('\n'));
// });

// // Method 2
// inp.on("close", () => {
//     userInput[0].split(' ').forEach(value => console.log(value));
// });

// // Method 3
// inp.on("close", () => {
//     let numbers = userInput[0].split(' ');
// //  while loop
//     let index = 0;
//     while (index < numbers.length) {
//         console.log(numbers[index]);
//         index++;
//     }
// });

// Method 3: 2
inp.on("close", () => {
    let numbers = userInput[0].split(' ');

    // for loop
    // for (let index = 0; index < numbers.length; index++) {
    //     console.log(numbers[index]);
    // }

    // do...while loop
    // let index = 0;
    // do {
    //     console.log(numbers[index]);
    //     index++
    // } while (index < numbers.length);

    // for...in loop
    // index -> 0 to numbers.length - 1
    // for (let index in numbers) {
    //     console.log(numbers[index]);
    // }

    // for...of loop
    for (let number of numbers) {
        console.log(number);
    }
});

/*
    count = 0

    ['2.3', '4.5', '7.8']
    count = 1

    ['2.3', '4.5', '7.8']
    count = 2

    ['2.3', '4.5', '7.8']
    count = 3

    stop: count = 3
    stop: count > 3
    stop: count >= 3

    run: count < 3

    numbers[0]; count = 0
    numbers[1]; count = 1
    numbers[2]; count = 2
*/