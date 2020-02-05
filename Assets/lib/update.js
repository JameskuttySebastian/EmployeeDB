const inquirer = require('inquirer');

const updateEmployeeRole = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "emp_id",
                type: "input",
                message: "What is the Employee ID of employee to update role?"
            },
            {
                name: "rol_id",
                type: "input",
                message: "Enter new Role ID to update?"
            }
        ]).then(function (answer){
        connection.query("update employee set  rol_id = ? where emp_id = ? ",[answer.rol_id, answer.emp_id],function(err, res){
            if(err){
                throw err;
                console.log("connection error", res);
            }
            console.log("Role deleted", res);
            options();
        })
    })
}

const updateEmployeeManager = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "emp_id",
                type: "input",
                message: "What is the Employee ID of employee to update Manager?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "Enter new Employee ID of new Manager?",
                default: "null"
            }
        ]).then(function (answer){

        let data;

        if(answer.manager_id === "null"){
            data = [ null , answer.emp_id];
        }
        else {
            data = [answer.manager_id, answer.emp_id];
        }



        connection.query("update employee set  manager_id = ? where emp_id = ? ",data,function(err, res){
            if(err){
                throw err;
                console.log("connection error", res);
            }
            console.log("Role deleted", res);
            options();
        })
    })
}

module.exports = {updateEmployeeRole, updateEmployeeManager};