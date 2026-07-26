// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');



/**
 * Reads a matrix of dimensions (rows x cols) from the user line by line.
 * @param {number} rows 
 * @param {number} cols 
 * @param {string} matrixName 
 * @returns {number[][]} 2D Array representing the matrix
 */
function readMatrix(rows, cols, matrixName = 'Matrix') {
    console.log(`\nEnter values for ${matrixName} (${rows}x${cols}):`);
    const matrix = [];
    
    for (let i = 0; i < rows; i++) {
        let valid = false;
        while (!valid) {
            const input = readlineSync.question(`Enter row ${i + 1}: `);
            const parsedRow = input.trim().split(/\s+/).map(Number);

            if (parsedRow.length === cols && !parsedRow.some(isNaN)) {
                matrix.push(parsedRow);
                valid = true;
            } else {
                console.log(`Error: Please enter exactly ${cols} space-separated numbers.`);
            }
        }
    }
    return matrix;
}

/**const readlineSync = require('rea
 * Prints a 2D matrix in a clean grid format.
 * @param {number[][]} matrix 
 */
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

/**
 * PART A: Computes the transpose of an M x N matrix (Result is N x M).
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let c = 0; c < cols; c++) {
        const newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

/**
 * PART B: Computes the sum of two matrices of the same dimensions (M x N).
 * @param {number[][]} matrixA 
 * @param {number[][]} matrixB 
 * @returns {number[][]}
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const sumMatrix = [];

    for (let r = 0; r < rows; r++) {
        const rowSum = [];
        for (let c = 0; c < cols; c++) {
            rowSum.push(matrixA[r][c] + matrixB[r][c]);
        }
        sumMatrix.push(rowSum);
    }
    return sumMatrix;
}

/**
 * PART C: Computes the product of matrix A (M x N) and matrix B (N x P).
 * Result dimensions: M x P
 * @param {number[][]} matrixA 
 * @param {number[][]} matrixB 
 * @returns {number[][]}
 */
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const resultRow = [];
        for (let j = 0; j < colsB; j++) {
            let dotProduct = 0;
            for (let k = 0; k < colsA; k++) {
                dotProduct += matrixA[i][k] * matrixB[k][j];
            }
            resultRow.push(dotProduct);
        }
        result.push(resultRow);
    }
    return result;
}

/**
 * Main Execution Loop
 */
function main() {
    console.log("=== MATRIX OPERATIONS PROGRAM ===");

    
    console.log("\n--- PART A: TRANSPOSE A MATRIX ---");
    const rowsA = readlineSync.questionInt('Enter number of rows: ');
    const colsA = readlineSync.questionInt('Enter number of columns: ');
    const matrixA = readMatrix(rowsA, colsA, 'Matrix A');

    console.log("\nOriginal Matrix A:");
    printMatrix(matrixA);

    const transposedA = transposeMatrix(matrixA);
    console.log("\nTransposed Matrix:");
    printMatrix(transposedA);

    
    console.log("\n--- PART B: ADD TWO MATRICES ---");
    console.log(`Entering Matrix B with matching dimensions (${rowsA}x${colsA})...`);
    const matrixB = readMatrix(rowsA, colsA, 'Matrix B');

    const sumResult = addMatrices(matrixA, matrixB);
    console.log("\nMatrix Addition (A + B):");
    printMatrix(sumResult);

    
    console.log("\n--- PART C: MULTIPLY TWO MATRICES ---");
    console.log(`To multiply A x C, Matrix C must have ${colsA} rows.`);
    const colsC = readlineSync.questionInt('Enter number of columns for Matrix C: ');
    const matrixC = readMatrix(colsA, colsC, 'Matrix C');

    const productResult = multiplyMatrices(matrixA, matrixC);
    console.log("\nMatrix Multiplication (A x C):");
    printMatrix(productResult);
}


main();