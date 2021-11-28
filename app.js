const inquirer = require('inquirer');

const fs = require('fs');

const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your poject.(required)',
            validate: descriptionInput => {
               if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'If applicable enter installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('If no instructions enter n/a.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter instructions for use.(required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If applicable enter the names of anyone who contributed to the project.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('If no contributors enter n/a.');
                    return false;
                }
            }
        },
        {
            type: 'inputs',
            name: 'tests',
            message: 'If applicable enter tests for your project along with examples to run them.',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('If no tests enter n/a.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'Licence',
            message: 'What licence applies to your project?',
            choices: ['license1', 'license2', 'license3', 'license4', 'license5']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please a valid email!');
                    return false;
                }
            }
        },
    ])
        .then((answers) => {
            console.log(answers)

            fs.writeFile("output.txt", JSON.stringify(answers, null, '\t'), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success!');
                }

            })
        })
};


promptUser()