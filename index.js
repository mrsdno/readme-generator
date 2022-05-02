// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?*',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("You need to provide the project's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining the what, why, and how of your project.*",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("You need to provide the project's name");
                return false;
            }
        }
    }, 
    // {
    //     type: 'confirm',
    //     name: 'confirmInstall',
    //     message: "Does your project require installation?",
    //     default: false
    // },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        // when: ({ confirmInstall }) => {
        //     if (confirmInstall) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your application.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Let other's know how to contribute to your project."
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to associate with your project:',
        choices: ['Apache', 'Boost', 'BSD', 'MIT', 'Eclipse', 'GNU']
    },
    // {
    //     type: 'confirm',
    //     name: 'confirmTest',
    //     message: "Do you have instructions on how to run tests your project?",
    //     default: false
    // },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests on your project.',
        // when: ({ confirmTest }) => {
        //     if (confirmTest) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
]


inquirer
    .prompt(questions)
    .then((data) => {
        return generateMarkdown(data);
    })
    .then(readmeMD =>
        writeToFile(readmeMD));

// TODO: Create a function to write README file
const writeToFile = (fileContent) => {
    fs.writeFile('./dist/readme.MD', fileContent, err => {
        if(err) {
            console.log(err);
        } 

       console.log("readme.MD created!");

    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
