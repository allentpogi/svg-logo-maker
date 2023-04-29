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
const writeTofile = (logoTemplate) => {
    fs.writeFile('logo.svg', logoTemplate, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg!')
    );
};


// Function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers.shape)

            if (answers.shape === 'square') {

            } else if (answers.shape === 'circle') {

            } else if (answers.shape === 'oblong') {

            } else if (answers.shape === 'triangle') {
                
            }

            const logoTemplate = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="green" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          
            </svg>

            `;

            writeTofile(logoTemplate);

        });
};


// Function call to initialize app
init();