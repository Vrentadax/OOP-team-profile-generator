const Manager = require('../lib/Manager');

// test to set values
test('Can set the office number', () => {
    const officeNo = 1;
    const test = new Manager('John Doe', 123, 'bmilner88@gmail.com', officeNo);
    expect(test.officeNo).toBe(officeNo);
});

// tests to see if functions can be used to return values
test('Can use getOfficeNumber() to return the office number', () => {
    const officeNo = 1;
    const test = new Manager('John Doe', 123, 'bmilner88@gmail.com', officeNo);
    expect(test.getOfficeNumber()).toBe(officeNo);
});

test(`Can use getRole() to return 'Manager'`, () => {
    const role = 'Manager';
    const test = new Manager('John Doe', 123, 'bmilner88@gmail.com', 1);
    expect(test.getRole()).toBe(role);
});