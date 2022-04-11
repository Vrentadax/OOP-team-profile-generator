// parent class
// includes: name, id, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // methods: getName(), getId(), getEmail(), getRole()
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    // getRole() returns 'Employee'
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;