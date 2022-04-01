const inquirer = require('inquirer');
const { generatePage, writeFile } = require('./src/generatePage');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const init = () => {
    const managerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter the name of the Manager:',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name for the manager!');
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter Manager ID:',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID!')
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter the email address for the Manager:',
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address!');
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'officeNo',
                message: 'Enter their office number:',
                validate: officeNo => {
                    if(officeNo) {
                        return true;
                    } else {
                        console.log('Please enter the office number!');
                        return false;
                    };
                }
            }
        ]).then(manager => {
            const team = new Manager(
                manager.managerName,
                manager.managerId,
                manager.managerEmail,
                manager.officeNo
                );
            employees.push(team);
            teamGen();
        });
    };

    const teamGen = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: `What kind of employee do you want to add to the team?`,
                choices: ['Engineer', 'Intern', 'Finished!']
            }
        ]).then(input => {
            switch(input.role) {
                case 'Engineer':
                    engineerGen();
                    break;
                case 'Intern':
                    internGen();
                    break;
                default:
                    writeFile(generatePage(employees));
            };
        });
    };

    const engineerGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the name of the Engineer:',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name for the Engineer!');
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Engineer ID:',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID!')
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the email address for the Engineer:',
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address!');
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter their GitHub username:',
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log('Please enter the GitHub username!');
                        return false;
                    };
                }
            }
        ]).then(engineer => {
            const team = new Engineer(
                engineer.engineerName,
                engineer.engineerId,
                engineer.engineerEmail,
                engineer.github
                );
            employees.push(team);
            teamGen();
        });
    };

    const internGen = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter the name of the Intern:',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name!');
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Intern ID:',
                validate: idInput => {
                    if(idInput) {
                        return true;
                    } else {
                        console.log('Please enter the ID for the Intern')
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: `Enter the Intern's email address?`,
                validate: emailInput => {
                    if(emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Intern's email address`);
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter which school the Intern attends:',
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log('Please enter the school!');
                        return false;
                    };
                }
            }
        ]).then(intern => {
            const team = new Intern(
                intern.internName,
                intern.internId,
                intern.internEmail,
                intern.school
                );
            employees.push(team);
            teamGen();
        });
    };
    managerGen();
};

init();