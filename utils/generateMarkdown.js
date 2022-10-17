// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license){
    case 'MIT' :
      const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      return mit;
    case 'Mozilla Public License 2.0':
      const mpl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      return mpl;
    case 'IBM Public License':
      const ibm = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      return ibm;
    case 'Eclipse Public License 1.0':
      const epl = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      return epl;
    case 'The Hippocratic License 3.0':
      const thl = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
      return thl;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license){
    case 'MIT' :
      const mit = 'https://opensource.org/licenses/MIT';
      return mit;
    case 'Mozilla Public License 2.0':
      const mpl = 'https://opensource.org/licenses/MPL-2.0';
      return mpl;
    case 'IBM Public License':
      const ibm = 'https://opensource.org/licenses/IPL-1.0';
      return ibm;
    case 'Eclipse Public License 1.0':
      const epl = 'https://opensource.org/licenses/EPL-1.0';
      return epl;
    case 'The Hippocratic License 3.0':
      const thl = 'https://firstdonoharm.dev';
      return thl;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const tempLicense = license.toLowerCase();

  if(tempLicense === 'none') {
    return `
## License

N/A`;
  } else {
    return `
## License

${license}: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, credits, tests, username, url, email, license}) {
  return `# ${title}  ${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`

## Credits

${credits}

## Tests

${tests}

## Questions

For any questions you can reach me here:

-Email: ${email}

-GitHub: ${username} - ${url}
` + renderLicenseSection(license);
}

module.exports = generateMarkdown;
