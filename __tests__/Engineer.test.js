const Engineer = require('../lib/Engineer');

it('can set GitHub', () => {
    const testGithub = 'link';
    const test = new Engineer('John Doe', 123, 'email@email.com', testGithub);
    expect(test.github).toBe(testGithub);
});

it('can use getGithub() to return the GitHub username', () => {
    const testGithub = 'link';
    const test = new Engineer('John Doe', 123, 'email@email.com', testGithub);
    expect(test.getGithub()).toBe(testGithub);
});

it(`can use getRole() to return 'Engineer'`, () => {
    const role = 'Engineer';
    const test = new Engineer('John Doe', 123, 'email@email.com', 'link');
    expect(test.getRole()).toBe(role);
});