class Validations {

    isValidFirstName(firstName) {

        if(!this.isValidMessage(firstName)) {
            return false;
        }
        if(firstName.length < 2) {
            return false;
        }
        if(firstName[0].toLowerCase() === firstName[0]){
        return false;
        }
        if(firstName.slice(1).toLowerCase() !== firstName.slice(1)) { 
            return false;
        }
       
        return true;
    }

    isValidLastName(lastName) {
        if(!this.isValidMessage(lastName)) {
            return false;
        }
        if(lastName.length < 2) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        return true;
    }

    isValidMessage(message) {
        if(typeof message !== 'string' || message === '') {
            console.error('ERROR: input has to be a text string');
            return  false;
        }
        return true;
    }

    isValidPhoneNumber(phoneNumber) {

        //ar telefono numeris skaicius?

        if(typeof phoneNumber !== 'number' || phoneNumber === '') {
            console.error('ERROR: Phone Number has to be a number, you cannot leave empty space');
            return false;
        }

        if (phoneNumber.length <= 2)  {
            console.error('ERROR: per trumpas ivestas numeris!');
            return false;
        }

        console.log('teisingai ivestas numeris');
        return true;
    }

    isValidMonth() {
        return true
    }

    isValidWeekDay() {
        return true
    }

    isValidPersonId() {
        return true
    }
}

module.exports = Validations;