/*
Author: Paul Marte
Title: Functions
Date: 02/13/2024
*/


/**
 * Logs value to the console
 * @param {any} obj the object to log to the console
 */
function l(obj) {
    console.log(obj);
}

/**
 * This is a declarative function with no params and nothing returned
 */
function doWork() {
    l('I do stuff but have nothing to contribute or accept');
}

doWork();

let x = add(7, 8);

l(x);

//let y = subtract(9, 6);

//l(y);

/**
* Adds two values together. Declarative function. Declarative functions are hoisted.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} the sum of value1 and value2
 */
function add(value1, value2) {
    return value1 + value2;
}



/**
 * Subtracts two values. This is a function expression.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} produces the difference between value1 and value2.
 */
const subtract = function (value1, value2) {
    return value1 - value2;
}

/**
 * Multiplies two values. This is an arrow function.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} produces the product of value1 and value2
 */
const multiply = (value1, value2) => {
    return value1 * value2;
}

/**
 * Divides two numbers. This is an arrow function.
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number|infinity} the dividend for value1 and value2
 */
const divide = (value1, value2) => value1 / value2;

l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
l('Addition');

let a = add(2, 3);

l(a);

l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
l('Subtraction');
let b = subtract(5, 4);

l(b);

l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
l('Multiplication');

let c = multiply(3, 4);
l(c);

l('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
l('Division');

let d = divide(63, 9);

l(d);