// TODO: Include packages needed for this application
// const generate = import("./utils/generateMarkdown.js");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");
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
        name: "licence",
        message: "What is the licence for your project?",
        choices: ["MIT", "Clause", "BSD-2"],
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
    fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        generate.generateMarkdown(data);
        writeToFile(`${data.title}`, data);
    });
}

// Function call to initialize app
init();
