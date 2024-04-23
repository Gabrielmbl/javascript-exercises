const findTheOldest = function (people) {
    people.map(person => {
        if (isNaN(person.yearOfDeath)) {
            person.yearOfDeath = new Date().getFullYear()
        }
    })

    return people
        .sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
