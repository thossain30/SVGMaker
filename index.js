const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { default: Choice } = require('inquirer/lib/objects/choice');
const questions = [
    {
        type: "input",
        message: "What text would you like? (Up to 3 characters)",
        name: "text",
        maxLength: 3
    },
    {
        type: "input",
        message: "Enter a color for your text",
        name: "textcolor"
    },
    {
        type: "list",
        message: "Choose a shape",
        choices: [
            "Rectangle",
            "Circle",
            "Triangle"
        ],
        name: "shape"
    },
    {
        type: "input",
        message: "Enter a color for your shape",
        name: "shapecolor"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Success, the svg image has been generated")
        }
    });
}

// function init() {
//     inquirer.prompt(questions)
//     .then(answers => {
//         writeToFile("./examples/logo.svg");
//     })
// }