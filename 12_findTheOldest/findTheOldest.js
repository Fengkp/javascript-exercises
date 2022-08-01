const findTheOldest = function(people) {
    let oldestPerson = people[0];

    people.forEach(person => {
        if (getAge(person) > getAge(oldestPerson))
            oldestPerson = person;
    });
    return oldestPerson;
};

function getAge(person) {
    if (person.hasOwnProperty('yearOfDeath'))
        return person.yearOfDeath - person.yearOfBirth;
    else
        return new Date().getFullYear() - person.yearOfBirth;    
}

// Do not edit below this line
module.exports = findTheOldest;
