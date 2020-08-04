const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
            name: 'description',
            message: 'Provide a description of the project:',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('You must describe this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Provide your github username:',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('You must include your github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Provide the repository for this project:',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('You must provide the repository.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation Instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Proper Usage:',
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What is this application built with?',
            choices: [' JavaScript ', ' HTML ', ' CSS ', ' ES6 ', ' jQuery ', ' Bootstrap ', ' Node ']
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Detail contributers to this project, if any.',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Provide any relevant testing information.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Contact Email for Questions',
        }
        
    ];


function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile("./dist/README.md", generateMarkdown(response), err => {
            if (err) {
                throw err;
            }

        })
    })

}

init();
