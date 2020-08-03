const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title.',
            validate: titleName => {
                if (titleName) {
                    return true;
                } else {
                console.log('You must enter a title for your project.');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Enter your Table of Contents',
            validate: tocInput => {
                if (tocInput) {
                    return true;
                } else {
                    console.log('A Table of Contents is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Installation Instructions',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Proper Usage',
            default: false
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Detail contributers to this project, if any.',
            default: false
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Provide any relevant testing information.',
            default: false
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Additional Questions',
            default: false
        }
        
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
questions()
