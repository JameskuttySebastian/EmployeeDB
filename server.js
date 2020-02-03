//npm packages
//for mysql connection
var mysql = require("mysql");

// for user input collection
const inquirer = require('inquirer');
var table = require("console.table");



var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employeeDB"
});



function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add departments",
                "Add roles",
                "Add employees",
                "View departments",
                "View roles",
                "View employees",
                "View employees by manager",
                "View the total utilized budget of a department",
                "Update employee roles",
                "Update employee managers",
                "Delete departments",
                "Delete roles",
                "Delete employee",
                "exit"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "Add departments":
                    addDepartment();
                    break;

                case "Add roles":
                    addRole();
                    break;

                case "Add employees":
                    addEmployee();
                    break;

                case "View departments":
                    viewDepartment();
                    break;

                case "View roles":
                    viewRole();
                    break;

                case "View employees":
                    viewEmployee();
                    break;

                case "View employees by manager":
                    viewEmployeesByManager();
                    break;

                case "View the total utilized budget of a department":
                    viewTotalBudgetOfDepartment();
                    break;

                case "Update employee roles":
                    updateEmployeeRole();
                    break;

                case "Update employee managers":
                    updateEmployeeManager();
                    break;

                case "Delete departments":
                    deleteDepartment();
                    break;

                case "Delete roles":
                    deleteRole();
                    break;

                case "Delete employee":
                    deleteRole();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}