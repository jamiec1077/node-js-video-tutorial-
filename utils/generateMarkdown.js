// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';  If there is no license, return an empty string
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
// If there is no license, return an empty string
function renderLicenseLink(license)function renderLicenseBadge(license) {
  if (!license) {
    return ''; // If there is no license, return an empty string
  }

  const badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  // You can modify the license name and URL as needed

  return badge;
} {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;