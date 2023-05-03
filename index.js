// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [  
  {    
    type: 'input',    
    name: 'title',    
    message: 'What is the title of your project?',  
  },  
  {    
    type: 'input',    
    name: 'description',    
    message: 'Provide a brief description of your project:',  
  },  
  {    
    type: 'input',    
    name: 'installation',    
    message: 'What are the installation instructions for your project?',  
  },  
  {    
    type: 'input',    
    name: 'usage',    
    message: 'Provide instructions and examples for use:',  
  },  
  {    
    type: 'input',    
    name: 'contributing',    
    message: 'How can others contribute to this project?',  
  },  
  {    
    type: 'input',    
    name: 'tests',    
    message: 'Provide examples on how to run tests for your project:',  
  },  
  {    
    type: 'list',    
    name: 'license',    
    message: 'Choose a license for your project:',    
    choices: ['MIT', 'Apache', 'GPL', 'BSD'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  const readmeTemplate = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at https://github.com/${answers.username}.
`;
  writeToFile('README.md', readmeTemplate);
}

// Function call to initialize app
init();