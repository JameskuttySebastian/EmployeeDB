//npm packages
//for mysql connection
const mysql = require("mysql");

const {addDepartment, addRole, addEmployee} = require('./Assets/lib/create');
const {deleteDepartment, deleteRole, deleteEmployee} = require('./Assets/lib/delet');
const {viewDepartment, viewRole, viewEmployee, viewEmployeesByManager, viewTotalBudgetOfDepartment, viewDepartmentTable, viewRoleTable, viewEmployeeTable } = require('./Assets/lib/view');
const {updateEmployeeRole, updateEmployeeManager} = require('./Assets/lib/update');

// for user input collection
const inquirer = require('inquirer');


let userOption = '';

const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "employeeDB"
});


const options = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            // choices: ["Add roles"]
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
                "Delete employee",
                "Delete roles",
                "Delete departments",
                "exit"
            ]
        })
        .then(async function (answer) {
            userOption = answer.action;
            switch (answer.action) {

                case "Add departments":
                    await viewDepartmentTable(connection);
                    addDepartment(connection, options);
                    break;

                case "Add roles":
                    await viewRoleTable(connection);
                    addRole(connection, options);
                    break;

                case "Add employees":
                    await viewEmployeeTable(connection);
                    addEmployee(connection, options);
                    break;

                case "View departments":
                    viewDepartment(connection, options);
                    break;

                case "View roles":
                    viewRole(connection, options);
                    break;

                case "View employees":
                    viewEmployee(connection, options);
                    break;

                case "View employees by manager":
                    viewEmployeesByManager(connection, options);
                    break;

                case "View the total utilized budget of a department":
                    viewTotalBudgetOfDepartment(connection, options);
                    break;

                case "Update employee roles":
                    updateEmployeeRole(connection, options);
                    break;

                case "Update employee managers":
                    updateEmployeeManager(connection, options);
                    break;

                case "Delete employee":
                    await viewEmployeeTable(connection);
                    deleteEmployee(connection, options);
                    break;

                case "Delete roles":
                    await viewRoleTable(connection);
                    deleteRole(connection, options);
                    break;

                case "Delete departments":
                    await viewDepartmentTable(connection);
                    deleteDepartment(connection, options);
                    break;

                case "exit":
                    connection.end();
                    break;
            }
            // if(userOption!=="exit"){
            //     options();
            // }
        });
}

// Printing a home screen
function displayBoard() {
    const str = `
         ________                                                                 
        |  ______|
        | |         ___    ___   ______   _        ___   _     _   _____   _____ 
        | |___     |   \\  /   | |  __  | | |      / _ \\  \\ \\  / / |  ___| |  ___|
        |  ___|    | |\\ \\/ /| | | |__| | | |     | / \\ |  \\ \\/ /  | |_    | |_
        | |        | | \\__/ | | |  ____| | |     | | | |   \\  /   |  _|   |  _|
        | |______  | |      | | | |      | |___  | \\_/ /   | |    | |___  | |___ 
        |________| |_|      |_| |_|      |_____|  \\___/    |_|    |_____| |_____| 
                                     ______    ______ 
                                    |  ___ \\  |  ___ \\
                                    | |   \\ | | |   \\ |
                                    | |   | | | |___/ /
                                    | |   | | |  ___ |
                                    | |   | | | |   \\ \\
                                    | |___/ | | |___/ |
                                    |______/  |______/
                                    `
    console.log(str);

}

const main = () => {
    displayBoard();
    options();
}

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    main();
});

// exports.queryOptions = options;


