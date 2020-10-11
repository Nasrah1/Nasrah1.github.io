var inquirer = require("inquirer");
var connection = require("./db/connection");

function start() {
    inquirer
        .prompt({
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: [
                "Add Employees",
                "Add Role",
                "Add Department",
                "View Employees",
                "View Roles",
                "View Department",
                "Update Employee Roles",
            ],
        })
        .then((answer) => {
            if (answer.choices === "Add Employees") {
                addEmployees();
            }
            if (answer.choices === "View Employees") {
                getEmployee();
            }
            if (answer.choices === "Add Role") {
                addRole();
            }
        });
}

start();

async function addEmployees() {
    inquirer.prompt([{
            type: "input",
            name: "first_name",
            message: "What is your first name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is your last name?",
        },
        {
            type: "input",
            message: "What is your role id number?",
            name: "role_id",
        },
        {
            type: "input",
            message: "What is your manager id?",
            name: "managerId",
        },
    ]);

    await connection.query("INSERT INTO employee SET ?", {
        first_name: answers.first_name,
        last_name: answers.last_name,
        role_id: answers.role_id,
        manager_id: answers.managerId,
    });
}

async function addRole() {

    let employeeList = await getEmployee()
    console.log(employeeList)

    inquirer.prompt([{
        type: "list",
        name: "choices",
        message: "Which employee would you like to add a role for?",
        choices: [
            ...employeeList
        ]
    }, ]);
}


async function getEmployee() {
    let employees = [];

    connection.query("SELECT * FROM employee", (err, result) => {
        if (err) throw err;

        let results = Object.values(result)

        for (employee of results) {
            employees.push(employee.first_name)

        }
        return employees
    });
}

// use inquirer to ask for the name of the department
// insert the new department in the database use mysql connection 2
// call the start function