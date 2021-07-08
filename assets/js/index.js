// TODO: Include packages needed for this application
const generate = require("./assets/js/utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project.",
    },
    {
        type: "input",
        name: "install",
        message: "How does this project get used?",
    },
    {
        type: "input",
        name: "usage",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to your project?",
    },
    {
        type: "input",
        name: "testing",
        message: "What are the testing instructions for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license for your project?",
        choices: ["MIT", "BSD-2", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generate({ ...data }));
    });
}

// Function call to initialize app
init();
