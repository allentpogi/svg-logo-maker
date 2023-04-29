// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Provide a 3-letter text that represents your company.',
      validate: async (input) => {
        if (input.length > 3 || input.length === 0 ) {
           return 'The text must be 1 to 3 characters long.';
        }
  
        return true;
     }
    },
    {
      type: 'input',
      name: 'textColour',
      message: 'What is the colour of the text? You can provide the colour or the hex value.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo.',
      choices: ['square', 'circle', 'ellipse'],
    },
    {
      type: 'input',
      name: 'shapeColour',
      message: 'What is the colour of the shape? You can provide the colour or the hex value.',
    },
];


// Function to write README file
const writeTofile = (svgTemplate) => {
    fs.writeFile('logo.svg', svgTemplate, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg!')
    );
};


// Function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let svgTemplate

            if (answers.shape === 'square') {
                svgTemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="25" rx="20" ry="20" width="160" height="160" fill="${answers.shapeColour}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColour}">${answers.text}</text>
</svg>

`;
            } else if (answers.shape === 'ellipse') {
                svgTemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="150" cy="100" rx="100" ry="50" fill="${answers.shapeColour}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColour}">${answers.text}</text>
</svg>

`;

            } else {
                svgTemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${answers.shapeColour}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColour}">${answers.text}</text>
</svg>

`;
            };

            writeTofile(svgTemplate);

        });
};


// Function call to initialize app
init();