// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'title'
    }, {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username'
    }, {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'
    }, {
        type: 'input',
        message: 'Please provide a description explaining the what, why, and how of your project.',
        name: 'description'
    }, {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running (if applicable).',
        name: 'installation'
    }, {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage'
    }, {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence.',
        name: 'credits'
    }, {
        type: 'list',
        message: 'Please choose the license you are including:',
        name: 'license',
        choices: [
            'Apache_2.0',
            'MIT',
            'GNU_GPL_v3',
            'BSD_2_Clause',
            'BSD_3_Clause'
        ]
    }, {
        type: 'input',
        message: 'Please input the contribution guidelines you would like to apply (if any):',
        name: 'contributing'
    }, {
        type: 'input',
        message: 'Please enter your test command (if any):',
        name: 'tests'
    }, {
        type: 'input',
        message: 'Please enter the link for your deployed application:',
        name: 'deployedApp'
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeToFile = (data) => {
    //const generateMarkdown = generateMarkdown(data);

    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('README.md created')
    })
}

// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    inquirer.prompt(questions)
    .then(writeToFile)
}

// Function call to initialize app
init();
