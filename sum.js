// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// extract and store the command-line arguments
const args = process.argv.slice(2);
// Edge case: We need at least 2 arguments.

console.log('args:', args);

if (args.length < 2) {
  console.error(`Error: please enter at least 2 arguments`);
  process.exit();
}

// validate the inputs
// not a string

// iterate through each number
// c-style for (let i; i < args.length; i++) {} => index only
// for of => the value only, no index
// forEach => value and index
// while, do while
// for in, used mostly for objects. Index

// initialize container variable for the sum
let total = 0;

for (let arg of args) {
  // sum each number (+)
  // Edge case: If any argument is not a number, output an error message.

  if (isNaN(Number(arg))) {
    console.error(`Error: please enter only numbers`);
    process.exit();
  }

  // Edge case: If any argument is not a whole number, skip it.
  // typeof?
  // mod => Number(arg) % 1 === 0

  if (Number.isInteger(Number(arg))) {
    total += Number(arg); // typecasting
  }

  console.log('arg:', arg, 'type of arg:', typeof Number(arg), 'total:', total);
}

// print the total
console.log('Total:', total);
