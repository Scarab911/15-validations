const Validations = require('./js/Validations');

const v = new Validations();

// console.log(v.isValidMessage('Laba diena'), true);
// console.log(v.isValidMessage(1514), false);


console.log(v.isValidFirstName('Vardenis'), true);
console.log(v.isValidFirstName('vardenis'), false);
console.log(v.isValidFirstName('VarDenis'), false);
console.log(v.isValidFirstName('Var denis'), false);
console.log(v.isValidFirstName('Vardenis7'), false);
// console.log(v.isValidFirstName(24124), false);
// console.log(v.isValidFirstName(''), false);
// console.log(v.isValidFirstName('P'), false);
// console.log(v.isValidFirstName([]), false);

// console.log(v.isValidLastName('Pavardenis'), true);
// console.log(v.isValidLastName(24124), false);
// console.log(v.isValidLastName(''), false);
// console.log(v.isValidLastName('P'), false);
// console.log(v.isValidLastName([]), false);

// console.log(v.isValidPhoneNumber(+37069937865), true);
// console.log(v.isValidPhoneNumber(11), false);
// console.log(v.isValidPhoneNumber(''), false);
// console.log(v.isValidPhoneNumber(869937865), true);
// console.log(v.isValidPhoneNumber('labas'), false);
// console.log(v.isValidPhoneNumber(112), true);


// console.log(v.isValidEmail('email@email.com'), true);


// console.log(v.isValidMonth('Sausis'), true);
// console.log(v.isValidMonth('January'), true);
// console.log(v.isValidWeekDay('Ketvirtadienis'), true);
// console.log(v.isValidWeekDay('Thursday'), true);
// console.log(v.isValidPersonId(37601250013), true);