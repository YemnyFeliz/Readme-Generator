// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    None: '',
  }
  return badges[license]
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    None: '',
  }
  return links[license]
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ${renderLicenseBadge(data.license)}
  
   

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project please contact me:
  - GitHub: [@${data.GitHub}](https://github.com/${data.GitHub})
  - Email: ${data.email}


`;
}

module.exports = generateMarkdown;
