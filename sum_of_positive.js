// Aaron Ireland
// Sum of Positive
// September 6, 2018

// Array and sum variable declared
let numbers = [2, 5, -4, 8, -11, 13, 20];
let badNumbers = [];
let sum = 0;

// positives function determines if a value is negative, or odd
function positives(numbers) {

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < 0 || numbers[i] % 2 != 0) {
        // numbers that fit either criteria are placed in the badNumbers array
        badNumbers.push(numbers[i]);
    }
    else {
      // numbers that don't fit the criteria are added to the sum
      sum += numbers[i];
    }
  }
  console.log("Negative or odd numbers are: " + badNumbers + "\n");
  return sum;
}

let sumArray = positives(numbers);
console.log("Sum of positive even numbers: " + sumArray);
