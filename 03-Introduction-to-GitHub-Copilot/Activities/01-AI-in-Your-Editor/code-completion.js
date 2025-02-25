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


// Example usage
const date1 = new Date("2000-01-01");
const date2 = new Date("2020-01-01");
console.log(calculateYearDifference(date1, date2)); // 20

const name = "GitHub Copilot";
console.log(reverseString(name)); // "tolipoC buHtiG"

const year = 2024;
console.log(isLeapYear(year)); // true
