function generateMarkdown(data) {

  let renderLicenseOption = `${data.license}`;
  let renderLicenseLink = '';

  if (renderLicenseOption === 'n/a') {
    renderLicenseOption = 'n/a';
    renderLicenseLink = 'https://choosealicense.com/';
  }
  if (renderLicenseOption === 'Apache License 2.0') {
    renderLicenseOption = 'Apache_License_2.0'
    renderLicenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  }
  if (renderLicenseOption === 'GNU AGPLv3') {
    renderLicenseOption = 'GNU_AGPLv3';
    renderLicenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  }
  if (renderLicenseOption === 'GNU GPLv3') {
    renderLicenseOption = 'GNU_GPLv3';
    renderLicenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  }
  if (renderLicenseOption === 'GNU LGPLv3') {
    renderLicenseOption = 'GNU_LGPLv3';
    renderLicenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  }
  if (renderLicenseOption === 'Boost Software License 1.0') {
    renderLicenseOption = 'Boost_Software_License_1.0';
    renderLicenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  }
  if (renderLicenseOption === 'Mozilla Public License 2.0') {
    renderLicenseOption = 'Mozilla_Public_License_2.0';
    renderLicenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }
  if (renderLicenseOption === 'MIT License') {
    renderLicenseOption = 'MIT_License';
    renderLicenseLink = 'https://choosealicense.com/licenses/mit/';
  }
  if (renderLicenseOption === 'The Unlicense') {
    renderLicenseOption = 'The_Unlicense';
    renderLicenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }

  return `
# ${data.projectName}

![License](https://img.shields.io/badge/License-${renderLicenseOption}-blue)

#### By ${data.user}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
    - [GitHub](#github)
    - [Email](#email)
- [License](#license)

## Description

#### ${data.description}

## Installation

#### ${data.installation}

### Usage

#### ${data.usage}

## Contributors

#### ${data.contribute}

## Tests

#### ${data.tests}

## Questions
If you have further questions please reach out via GitHub or Email.
### GitHub:
#### <a href="https://github.com/${data.github}">Github</a>

### Email:
#### ${data.email}

## License

#### ${data.license}

Click [here](${renderLicenseLink}) for more information on the license used in this application.
`;
}
module.exports = generateMarkdown;