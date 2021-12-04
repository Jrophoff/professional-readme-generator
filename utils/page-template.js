// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

#### By ${data.user}

<a name='description'></a>
## Description

#### ${data.description}

<a name='installation'></a>
### Installation

#### ${data.installation}

<a name='usage'></a>
### Usage

#### ${data.usage}

<a name='contributors'></a>
### Contribtuors

#### ${data.contribute}

<a name='tests'></a>
### Tests

#### ${data.tests}

<a name='license'></a>
## License

#### ${data.license}

<a name='questions'></a>
## Questions

<a name='github'></a>
### GitHub:
#### <a href="https://github.com/${data.github}">Github</a>

<a name='email'></a>
### Email:
#### ${data.email}

## Table of Contents

- [Desciption](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [Tests](#tests)
- [License](#license)
- [Questions](#questions)
    - [GitHub](#github)
    - [Email](#email)
`;
}
module.exports = generateMarkdown;