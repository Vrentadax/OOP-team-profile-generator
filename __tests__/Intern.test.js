const Intern = require('../lib/Intern');

// test to set values
it('can set school', () => {
    const testSchool = 'School of Awesome';
    const test = new Intern('John Doe', 123, 'email@email.com', testSchool);
    expect(test.school).toBe(testSchool);
});

// tests to see if functions can be used to return values
it('can use getSchool() to return school', () => {
    const testSchool = 'School of Awesome';
    const test = new Intern('John Doe', 123, 'email@email.com', testSchool);
    expect(test.getSchool()).toBe(testSchool);
});

it(`can use getRole() to return 'Intern'`, () => {
    const role = 'Intern';
    const test = new Intern('John Doe', 123, 'email@email.com', 'School of Awesome');
    expect(test.getRole()).toBe(role);
});