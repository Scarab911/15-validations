const Validation = require('./Validations')

const v = new Validation();


Test('neduotas vardas', () => {
    expect(v.isValidFirstName()).toBe(false)
});