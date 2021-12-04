const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/page-template');

const questions = () => {

    inquirer.prompt([
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
            name: 'user',
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
            type: 'list',
            name: 'license',
            message: 'What license applies to your project?',
            choices: ['n/a', 'Apache License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'MIT License', 'The Unlicense']
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
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
    ]) 
    .then(function(info) {
        var dataString = generateMarkdown(info)
        console.log(dataString);
        writeToFile('output.md', dataString);
    })
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('success!')
        }
    })
}



// Function call to initialize app

questions();
