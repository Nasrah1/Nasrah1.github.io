const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils/generateMarkdown");

// const writeFileAsync = util.promisify(fs.writeFile);

//Array of question for users
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            message: "Project name is?",
            name: "Title",
        },
        {
            type: "input",
            message: "Project Description",
            name: "Description",
        },
        {
            type: "input",
            message: "Installation Instructions",
            name: "Install",
        },
        {
            type: "input",
            message: "Instruction on use of app",
            name: "Usage",
        },
        {
            type: "checkbox",
            message: "Which license are you using",
            name: "License",
            choices: ["Apache", "MIT", "GVL GPL", "NONE"],
        },
        {
            type: "input",
            message: "Any Contributors?",
            name: "Contributors",
        },
        {
            type: "input",
            message: "How do you test app?",
            name: "Test",
        },
        {
            type: "input",
            message: "Any Questions?",
            name: "Questions",
        },
        {
            type: "input",
            message: "What is your Github Username?",
            name: "Username",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email",
        },
    ]);
}

//Function to write file
function init() {
    promptUser()
        .then((inquirerResponse) => {
            console.log("Making ReadMe");
            fs.writeFileSync("ReadMe.md", utils(inquirerResponse), "utf8");
        })
        .catch((err) => {
            console.log(err);
        });
}
init();