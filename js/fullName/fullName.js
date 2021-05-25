function fullName(firstName, lastName) {
    if (typeof firstName !== 'string' ||
        typeof lastName !== 'string' ||
        firstName === '' ||
        lastName === '') {
        return false;
    }
    if (firstName.includes(' ') || lastName.includes(' ')) {
        return false
    }
    if (firstName === firstName.toLocaleLowerCase ||
        lastName === lastName.toLocaleLowerCase) {
        return false
    }

    return firstName + ' ' + lastName;
}

module.exports = fullName;