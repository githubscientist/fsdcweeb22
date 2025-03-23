// let numbers = [3, 7, 1, 4, 2];

// to find the squares of the numbers
// [9, 49, 1, 16, 4]

// without map method

// create an empty array to hold the squares of the values from numbers array
// let squares = [];

// // iterate or traverse the original numbers array
// for (let index = 0; index <= numbers.length - 1; index++) {
//     squares.push(numbers[index] ** 2);
// }

// console.log(squares);
// function squarer(value) {
//     return value ** 2;
// }


// let squares = numbers.map(squarer);
// console.log(squares);


// console.log(numbers.map(value => value ** 2));

// let numbers = [3, 7, 1, 4, 2];

// // to get the sum of all the numbers from the array
// let sum = 0;

// for (let number of numbers) {
//     sum += number;
// }

// console.log(sum);

/*
    previousValue = 3
    currentValue = 7
        return value from the first execution

    previousValue = 10
    currentValue = 1

    previousValue = 11
    currentValue = 4

    previousValue = 15
    currentValue = 2

    17
*/

// let numbers = [3, 7, 1, 4, 2];

// let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

// console.log(sum);

let userInput = ['23 64'];

console.log(
    userInput[0]
        .split(' ')
        .map(value => Number(value))
        .reduce((pv, cv) => pv < cv ? pv : cv)
);