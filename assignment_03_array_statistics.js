// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} numbers 
 * @returns {number}
 */
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

/**
 * Calculates the average of elements in an array.
 * @param {number[]} numbers 
 * @returns {number}
 */
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

/**
 * Finds the maximum value in an array manually without Math.max().
 * @param {number[]} numbers 
 * @returns {number}
 */
function findMaximum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

/**
 * Finds the minimum value in an array manually without Math.min().
 * @param {number[]} numbers 
 * @returns {number}
 */
function findMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

/**
 * Main execution function
 */
function main() {
    const count = readlineSync.questionInt('How many numbers? ');

    // Validate that count is a positive integer
        console.log('Error: Please enter a positive number greater than 0.');
        return;
    }

    const numbers = [];

    
    for (let i = 1; i <= count; i++) {
        const num = readlineSync.questionInt(`Enter number ${i}: `);
        numbers.push(num);
    }

    
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMaximum(numbers);
    const min = findMinimum(numbers);

    
    console.log('\nResults:');
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${max}`);
    console.log(`Minimum: ${min}`);



main();
