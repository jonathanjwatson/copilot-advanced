// TODO: Run the code via Node and see what happens.

function daysUntilChristmas() {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
  const today = new Date();
  const currentYear = today.getFullYear();
  let christmas = new Date(currentYear, 11, 25);

  // If today is December 26th or later, calculate for next year's Christmas
  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }

  const daysLeft = Math.round((christmas - today) / oneDay);

  return daysLeft;
}

console.log(daysUntilChristmas());
