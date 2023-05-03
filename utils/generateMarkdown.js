// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';  
  }

  let badge = '';
  switch (license.toLowerCase()) {
    case 'apache 2.0':
      badge = '![![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      break;


  }

  return badge;
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license || typeof license !== 'string') {
    throw new Error('Invalid license parameter');
  }

    return ''; // If there is no license, return an empty string
  }

  const badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';{


  return badge;
} { }

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) { }

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;