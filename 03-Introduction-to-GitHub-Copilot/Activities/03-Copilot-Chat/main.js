const {
  MINIMUM_VEHICLE_AGE,
  MAXIMUM_AGE_IN_DAYS,
  INFLATION_PERCENTAGE,
  MINIMUM_WAGE,
  MAXIMUM_LOAN_AMOUNT,
  TAX_RATE,
  DISCOUNT_RATE,
  INTEREST_RATE,
} = require('./constants');

function shouldInsureCar(vehicleAgeInDays, loanAmount) {
  if (vehicleAgeInDays < MINIMUM_VEHICLE_AGE * 365 || vehicleAgeInDays > MAXIMUM_AGE_IN_DAYS) {
    return false;
  }

  const discountedLoanAmount = loanAmount * (1 - DISCOUNT_RATE);
  const taxedLoanAmount = discountedLoanAmount * (1 + TAX_RATE);
  const totalLoanAmount = taxedLoanAmount * (1 + INTEREST_RATE);

  if (totalLoanAmount > MAXIMUM_LOAN_AMOUNT) {
    return false;
  }

  const replacementCostInThreeYears = loanAmount * Math.pow(1 + INFLATION_PERCENTAGE / 100, 3);

  if (replacementCostInThreeYears > MINIMUM_WAGE * 3) {
    return false;
  }

  return true;
}

// Example usage:
const vehicleAgeInDays = 500; // Example vehicle age
const loanAmount = 20000; // Example loan amount in USD

console.log(shouldInsureCar(vehicleAgeInDays, loanAmount)); // Output: true or false
