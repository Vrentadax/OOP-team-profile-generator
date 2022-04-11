
const Employee = require('./Employee');

// extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    // adds school
    // adds getSchool()
    getSchool() {
        return this.school;
    }
    
    // getRole() overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;