var licenses = {
  Apache: {
    markdown: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    url: "https://opensource.org/licenses/Apache-2.0"
  },
  Boost: {
    markdown: "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
    url: "https://www.boost.org/LICENSE_1_0.txt"
  },
  BSD: {
    markdown: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    url: "https://opensource.org/licenses/BSD-3-Clause"
  },
  MIT: {
    markdown: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    url: "https://opensource.org/licenses/MIT"
  },
  Eclipse: {
    markdown: "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
    url: "https://opensource.org/licenses/EPL-1.0"
  },
  GNU: {
    markdown: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    url: "https://www.gnu.org/licenses/gpl-3.0"
  }
}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {

  
  if (!license) {
    return '';
  }

  return `
  ${licenses[license].markdown}
  `
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `
  ${licenses[license].url}
  `
}

// Function that generates markdown for README
const generateMarkdown = data => {
  const { license } = data;

  return `# ${data.title}

  ${renderLicenseBadge(license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#License)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}


  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## License

  Licensed under the [${data.license}](${renderLicenseLink(license)}) license.


  ## Questions

  Do you have any questions? 

  You can find my github profile here: [${data.github}](https://github.com/${data.github})
  
  Or you can email me here: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
