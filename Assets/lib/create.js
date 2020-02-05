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
                console.log("New Role added : " + resp);
                options();
            })
    })

};

const addEmployee = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the First Name of the new Employee?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the Last Name of the new Employee?"
            },
            {
                name: "rol_id",
                type: "input",
                message: "What is the Role ID for new Employee?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the Department ID for new role?",
                default: "null"
            }
        ]).then(function(answer){

            let qry , data;

            if(answer.manager_id === "null"){
                qry = `INSERT INTO employee (first_name,last_name,rol_id) VALUES (?,?,?)`
                data = [answer.first_name, answer.last_name, answer.rol_id]
            }
            else {
                qry =`INSERT INTO employee (first_name,last_name,rol_id,manager_id) VALUES (?,?,?,?)`
                data = [answer.first_name, answer.last_name, answer.rol_id, answer.manager_id]
            }

        console.log(answer);
        connection.query(qry, data, function(err, resp){
            if(err){
                throw err;
                console.log("Error : " + err);
            }
            console.log("New Role added : " + resp);
            options();
        })
    })

};

module.exports = {addDepartment, addRole, addEmployee};

