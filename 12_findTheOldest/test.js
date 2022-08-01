function findTheOldest(people) {
    let oldestPerson = people[0];

    people.forEach(person => {
        if (person.yearOfDeath - person.yearOfBirth > 
            oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)
            oldestPerson = person;
    });
    return oldestPerson.name;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

let test = findTheOldest(people);
console.log(test)