// for user input collection
const inquirer = require('inquirer');

const addDepartment = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "Enter new Department name?"
            }
        ]).then(function (answer){
        connection.query("insert into department (dep_name) values (?)",[answer.department],function(err, res){
            if(err){
                throw err;
                console.log("connection error");
            }
            console.log("New department added");
            options();
        })
    })

};

const addRole = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the new Role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the Salary for new Role?"
            },
            {
                name: "dep_id",
                type: "input",
                message: "What is the Department ID for new role?"
            }
        ]).then(function(answer){
            console.log(answer);
            connection.query("insert into role set ?", answer, function(err, resp){
                if(err){
                    throw err;
                    console.log("Error : " + err);
                }
                console.log("New Role aded : " + resp);
                options();
            })
    })

};

const addEmployee = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the new Role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the Salary for new Role?"
            },
            {
                name: "dep_id",
                type: "input",
                message: "What is the Department ID for new role?"
            }
        ]).then(function(answer){
        console.log(answer);
        connection.query("insert into role set ?", answer, function(err, resp){
            if(err){
                throw err;
                console.log("Error : " + err);
            }
            console.log("New Role aded : " + resp);
            options();
        })
    })

};

module.exports = {addDepartment, addRole, addEmployee};

