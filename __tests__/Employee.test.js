const Employee = require('../lib/Employee');

it('can create the Employee object', () => {
    const test = new Employee();
    expect(typeof(test)).toBe('object');
});

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