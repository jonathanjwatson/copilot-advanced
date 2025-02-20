// TODO: Run the code via Node and see what happens.

function daysUntilChristmas() {
  // TODO: pretend it's December 26th
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  const daysLeft = Math.round((christmas - today) / oneDay);

  return daysLeft;
}

console.log(daysUntilChristmas());
