const Employee = require('./Employee');

// extends Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    
    // adds github (username)
    // adds getGithub()
    getGithub() {
        return this.github;
    }
    
    // getRole() overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;