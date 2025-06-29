const findTheOldest = function(people) {
    let maxAge = -1;
    let oldestPerson = null;

    for (const person of people) {
        if (isNaN(person.yearOfDeath)) person.yearOfDeath = 2025;
        const age = person.yearOfDeath - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
