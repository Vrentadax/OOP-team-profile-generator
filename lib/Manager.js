const Employee = require('./Employee');

// extends Employee
class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super(name, id, email);
        this.officeNo = officeNo;
    }
    
    // adds officenumber
    getOfficeNumber() {
        return this.officeNo;
    }
    
    // getRole() overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;