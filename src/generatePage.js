const fs = require('fs');

const teamGen = team => {
    // create html with provided info from manager obj into a 'card'
    const managerGen = manager => {
        return `
                <div class="card">
                    <div class="card-header bg-primary">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title">${manager.getRole()} <span class="oi oi-person"></span></h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${manager.getId()}</li>
                            <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li>Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    // create html with provided info from engineer obj into a 'card'
    const engineerGen = engineer => {
        return `
                <div class="card">
                    <div class="card-header bg-primary">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title">${engineer.getRole()} <span class="oi oi-monitor"></span></h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${engineer.getId()}</li>
                            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
        `;
    };

    // create html with provided info from intern obj into a 'card'
    const internGen = intern => {
        return `
                <div class="card">
                    <div class="card-header bg-primary">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title">${intern.getRole()} <span class="oi oi-info"></span></h3>
                    </div>
                <div>
                    <div class="card-body">
                        <ul>
                            <li>ID: ${intern.getId()}</li>
                            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li>School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const html = [];

    // joins each generated 'card' to be inserted into base html
    team.forEach(employee => {
        switch(employee.getRole()) {
            case 'Manager':
                html.push(managerGen(employee));
                break;
            case 'Engineer':
                html.push(engineerGen(employee));
                break;
            case 'Intern':
                html.push(internGen(employee));
                break;
        };
    });
    return html.join('');
};

// blueprint of the base html
const generatePage = arr => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="container">
        <div class="col-12 jumbotron mb-3 bg-danger text-white">
            <h1 class="text-center">My Team</h1>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center ">
                ${teamGen(arr)}
            </div>
        </div>
    </div>
</body>
</html>
`;
};

// writes finished page to an 'index.html' file under /dist
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            console.log('File Created!');
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = { generatePage, writeFile };