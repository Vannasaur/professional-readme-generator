// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return ''
  } else {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache_2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;
    case 'GNU_GPL_v3':
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'BSD_2_Clause':
      return `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'BSD_3_Clause':
      return `https://opensource.org/licenses/BSD-3-Clause`;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined) {
    return ''
  } else {
    return `This project is covered by ${license} License. Please refer to the LICENSE in the repo.`
  }
}

// TODO: Create a function to generate markdown for README 
// Call renderLicenseBadge and renderLicenseSection in generateMarkdown function
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

Link to deployed application: ${data.deployedApp}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Please refer to my profile for additional projects: https://github.com/${data.username}

If you have any questions please email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
