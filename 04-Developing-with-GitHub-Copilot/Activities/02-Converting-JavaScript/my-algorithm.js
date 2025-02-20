function processPeopleList(people) {
  // Sort by birthdate
  people.sort(function (a, b) {
    return new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime();
  });
  // Filter out objects whose favoriteColor is purple
  var filteredPeople = people.filter(function (person) {
    return person.favoriteColor.toLowerCase() !== "purple";
  });
  // Calculate age and add it to the object
  var today = new Date();
  filteredPeople.forEach(function (person) {
    var birthdate = new Date(person.birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDifference = today.getMonth() - birthdate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdate.getDate())
    ) {
      age--;
    }
    person.age = age;
  });
  return filteredPeople;
}
// Example array of people objects
var peopleList = [
  {
    createdAt: new Date("2023-01-01"),
    firstName: "Alice",
    favoriteColor: "blue",
    birthdate: new Date("1990-05-15"),
  },
  {
    createdAt: new Date("2022-12-15"),
    firstName: "Bob",
    favoriteColor: "purple",
    birthdate: new Date("1985-10-20"),
  },
  {
    createdAt: new Date("2023-02-20"),
    firstName: "Charlie",
    favoriteColor: "green",
    birthdate: new Date("1995-07-30"),
  },
  {
    createdAt: new Date("2023-01-10"),
    firstName: "David",
    favoriteColor: "red",
    birthdate: new Date("2000-03-25"),
  },
  {
    createdAt: new Date("2022-11-05"),
    firstName: "Eve",
    favoriteColor: "yellow",
    birthdate: new Date("1992-12-10"),
  },
];
console.log(processPeopleList(peopleList));
