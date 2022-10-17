// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const { default: inquirer } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project:'

}, {
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project:'
}, {
    type: 'input',
    name: 'installation',
    message: 'Please enter any installation instructions(N/A if none):'
}, {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:',
}, {
    type: 'input',
    name: 'credits',
    message: 'Please enter the names of any contributors:'
}, {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions(N/A if none):'
}, {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username:'
}, {
    type: 'input',
    name: 'url',
    message: 'Please enter the url for your GitHub profile:'
}, {
    type: 'input',
    name: 'email',
    message: 'Please enter your email:'
}, {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: ['MIT', 'Mozilla Public License 2.0', 'IBM Public License', 'Eclipse Public License 1.0', 'The Hippocratic License 3.0', new inquire.Separator(),'None']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = generateMarkdown(data);

    fs.writeFileSync(`./${fileName}`, readme, err => {
        err ? console.error(err) : console.log("README has succesfully been generated!");
    });
}

// TODO: Create a function to initialize app
function init() {
    const startQuestion = {
        type: 'confirm',
        name: 'start',
        message: 'Would you like to start generating your README?',
    }

    console.log('Welcome!');
    console.log('This application will generate a professional README file for you!');
    console.log('All you have to do is apply the information you would like to have in your README.');

    const initPrompt = inquire.createPromptModule()
    initPrompt(startQuestion)
    .then(answer => {
        if(answer.start){
            askPrompts();
        } else {
            console.clear();
            console.log('If you would like to end the application press control c.');
            init();
        }
    });
}

function askPrompts() {

    inquire.prompt(questions)
    .then(answers => writeToFile('README.md', answers))
    .catch(err => console.error(err));

}

// Function call to initialize app
init();
