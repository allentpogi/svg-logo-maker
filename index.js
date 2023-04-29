// Dependencies needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const SquareLogo = require('./lib/square');
const CircleLogo = require('./lib/circle');
const EllipseLogo = require('./lib/ellipse');
const TriangleLogo = require('./lib/triangle');

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
      choices: ['square', 'circle', 'ellipse', 'triangle'],
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

// Function to initialise the application. This will start the inquirer application and ask questions to users.
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {

            // Declare variable for the contents of the svg file
            let svgTemplate
            

            // Check what shape the user selected and then create the object using the applicable class
            if (answers.shape === 'square') {
                const newSquareLogo = new SquareLogo (
                    answers.text,
                    answers.textColour,
                    answers.shapeColour
                );
                svgTemplate = newSquareLogo.generateSquarelogo()
            } else if (answers.shape === 'circle') {
                const newCirclelogo = new CircleLogo (
                    answers.text,
                    answers.textColour,
                    answers.shapeColour
                );
                svgTemplate = newCirclelogo.generateCirclelogo()
            } else if (answers.shape === 'ellipse') {
                const newEllipselogo = new EllipseLogo (
                    answers.text,
                    answers.textColour,
                    answers.shapeColour
                );
                svgTemplate = newEllipselogo.generateEllipselogo()
            } else {
                const newTrianglelogo = new TriangleLogo (
                    answers.text,
                    answers.textColour,
                    answers.shapeColour
                );
                svgTemplate = newTrianglelogo.generateTrianglelogo()
            }

            // Call the function to write the template into the file
            writeTofile(svgTemplate);

        });
};


// Function call to initialize app
init();