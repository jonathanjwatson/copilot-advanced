// Function to calculate the difference in years between two dates
function calculateYearDifference(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  return Math.abs(year1 - year2);
}

// Function to reverse a string
function reverseString(name) {
  return name.split("").reverse().join("");
}

// Function to determine if a year is a leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// TODO: Add a new function that randomly generates a number between 1 and 10.
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}


// TODO: add a new function that takes in a single integer parameter and returns the factorial of that number.
function factorial(number) {
  // run a type check to ensure the parameter is of type number
  if (typeof number !== "number") {
    return "Please provide a valid number";
  }
  // run a check to ensure the parameter is actually an integer
  // if the number is not an integer, convert it to an integer

  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}


// Example usage
const date1 = new Date("2000-01-01");
const date2 = new Date("2020-01-01");
console.log(calculateYearDifference(date1, date2)); // 20

const name = "GitHub Copilot";
console.log(reverseString(name)); // "tolipoC buHtiG"

const year = 2024;
console.log(isLeapYear(year)); // true

console.log(generateRandomNumber()); // Random number between 1 and 10

const number = 5;
console.log(factorial(number)); // 120
