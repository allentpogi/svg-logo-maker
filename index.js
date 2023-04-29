// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please provide a 3-letter text that represents your company. You can enter up to 3 characters.',
    },
    {
      type: 'input',
      name: 'colour',
      message: 'Please enter the name or the hexadecimal code of the colour that you want for your company text.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo.',
      choices: ['square', 'circle', 'oblong', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'Please enter the name or the hexadecimal code of the colour that you want for the shape of your logo.',
    },
];


// Function to write README file
const writeTofile = (readMetemplate) => {
    fs.writeFile('README.md', readMetemplate, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
};


// Function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMetemplate = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Video recording](#video-recording)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email address](#email-address)
- [Github username](#github-username)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Screenshot
![screenshot](${answers.screenshot})

## Video recording
You can visit this link to view the application in action: ${answers.video}

## Credits
${answers.credits}

## License
${answers.license}

## Badges
![badge image](${answers.badges})

## Features
${answers.features}

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Email address
${answers.email}

## Github username
${answers.username}

            `;

            writeTofile(readMetemplate);

        });
};


// Function call to initialize app
init();