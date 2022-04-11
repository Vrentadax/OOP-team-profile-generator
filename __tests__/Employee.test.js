const Employee = require('../lib/Employee');

// test for creating object
it('can create the Employee object', () => {
    const test = new Employee();
    expect(typeof(test)).toBe('object');
});

// tests for setting values
it('Can set the name', () => {
    const testName = 'John Doe';
    const test = new Employee(testName);
    expect(test.name).toBe(testName);
});

it('Can set the ID number', () => {
    const testId = 123;
    const test = new Employee('John Doe', testId);
    expect(test.id).toBe(testId);
});

it('Can set the email address', () => {
    const testEmail = 'email@email.com';
    const test = new Employee('John Doe', 123, testEmail);
    expect(test.email).toBe(testEmail);
});

// tests to see if functions can be used to return values
it('Can use getName() to return the name', () => {
    const testName = 'John Doe';
    const test = new Employee(testName);
    expect(test.getName()).toBe(testName);
});

it('Can use getId() to return the ID', () => {
    const testId = 123;
    const test = new Employee('John Doe', testId);
    expect(test.getId()).toBe(testId);
});

it('Can use getEmail() to return the email address', () => {
    const testEmail = 'email@email.com';
    const test = new Employee('John Doe', 123, testEmail);
    expect(test.getEmail()).toBe(testEmail);
});

it(`Can use getRole() to return 'Employee'`, () => {
    const role = 'Employee';
    const test = new Employee('John Doe', 123, 'email@email.com');
    expect(test.getRole()).toBe(role);
});