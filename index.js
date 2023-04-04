const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { default: Choice } = require('inquirer/lib/objects/choice');

const {Shape, Circle, Rectangle, Triangle, Square} = require("./lib/shapes");
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
            "Square",
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

function generateSVG(text, textcolor, shape, shapecolor) {
    let svg = '';
    switch(shape) {
        case "Circle":
            const circle = new Circle(text, textcolor, shapecolor);
            svg = circle.RenderSVG();
            break;
        case "Triangle":
            const triangle = new Triangle(text, textcolor, shapecolor);
            svg = triangle.RenderSVG();
            break;
        case "Square": 
            const square = new Square(text, textcolor, shapecolor);
            svg = square.RenderSVG();
            break;
        default:
            break;
    }

    return svg;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Success, the logo svg has been generated")
        }
    });
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let logoText = answers.text;
        let logoTextColor = answers.textcolor;
        let logoShape = answers.shape;
        let logoShapeColor = answers.shapecolor;
        
        let logoSVG = generateSVG(logoText, logoTextColor, logoShape, logoShapeColor);
        writeToFile("./examples/logo.svg", logoSVG);
    })
}

init();