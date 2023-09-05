// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?',

    },

    {
        type: 'input',
        name: 'credits',
        message: 'Who helped develop this your project?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license',
        choices: [
            'Apache',
            'MIT',
            'GPLv3',
            'None',
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to this porject?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'If applicable, please describe the tests that were done for this project',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is you GitHub?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },

];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
        console.log("README.md file has been generated!");
        
    })
    .catch((err) => console.error(err));

};

// Function call to initialize app
init();
