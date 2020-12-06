//utilize constants to create methods
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = [
  {
    type: "input",
    message: "What is the name of your employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the id of your employee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of your employee?",
    name: "email",
  },
];

let managerQuestion = [
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
]

let internQuestion = [
    {
        type: "input",
        message: "What is the school your intern attends?",
        name: "school",
      },
]

let engineerQuestion = [
    {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "github",
      },
]

let typeQuestion = [
    {
        type: "list",
        message: "Which type of employee would you like to add?",
        name: "type",
        choices: ["Intern", "Engineer", "Manager"],
      },
]

let endQuestion = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "type",
        choices: ["Yes", "No"],
      },
]

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

let response;
let collectingData = true;

let employees = [];

function employeeGenerator() {
    return inquirer.prompt(typeQuestion).then(function(response){
        if (response = "") {
            collectingData = false;
        }   else if (response == "Manager") {
            inquirer.prompt(questions).prompt(managerQuestion).prompt(endQuestion).then(function(response){
                if (response = "Yes") {
                    employees.push(new Manager(name, id, email));
                    //loop
                    } else {
                        employees.push(new Manager(name, id, email));
                        inquirer.then(fsFunction());
                    }
                })
            }
    }) 
}

function fsFunction() {
fs.writeFile(fileName, markdown, (error) =>
    error ? console.log(error) : console.log())
}

while (collectingData) {
   response = inquirer.prompt("What type of Employee are you looking to add? [Manager, Engineer, Intern] (Leave blank to skip)")
//
//   if (response = "") {
//     collectingData = false;

//     let name =
//     let id =
//     let email =
//     employees.push(new Manager(name, id, email))
//   } else if (response == "Engineer") {
//
//   }
// }

//let employees = [new Manager(), new Intern(), new Engineer()];

let html = render(employees);

console.log(html);
