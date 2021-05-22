const Validations = require('./js/Valitations');

const v = new Validations();

console.log(v.Validations('Vardenis'), true);
console.log(v.Validations('Pavardenis'), true);
console.log(v.Validations('email@email.com'), true);
console.log(v.Validations('Laba diena'), true);
console.log(v.Validations(+37069937865), true);
console.log(v.Validations('Sausis'), true);
console.log(v.Validations('January'), true);
console.log(v.Validations('Ketvirtadienis'), true);
console.log(v.Validations('Thursday'), true);
console.log(v.Validations(37601250013), true);