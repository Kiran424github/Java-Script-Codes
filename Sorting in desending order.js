function descendingSort(arr) {
 return arr.sort(function(a, b) {
 return b - a;
 });
}
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
rl.question('Enter numbers separated by spaces: ', (input) => {
 // Split the user input into an array of numbers
 const inputArray = input.split(' ').map(Number);
 if (inputArray.some(isNaN)) {
 console.log('Invalid input. Please enter valid numbers.');
 } else {
 const sortedArray = descendingSort(inputArray);
 console.log('Sorted array in descending order: ' + sortedArray.join(' '));
 }
 rl.close();
});