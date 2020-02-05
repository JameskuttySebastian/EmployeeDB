const inquirer = require('inquirer');

const deleteDepartment = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "dep_id",
                type: "input",
                message: "Enter Department ID to delete?"
            }
        ]).then(function (answer){
        connection.query("delete from department where dep_id = ? ",[answer.dep_id],function(err, res){
            if(err){
                throw err;
                console.log("connection error", res);
            }
            console.log("Department deleted", res);
            options();
        })
    })
};

const deleteRole = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "rol_id",
                type: "input",
                message: "Enter Role ID to delete?"
            }
        ]).then(function (answer){
        connection.query("delete from role where rol_id = ? ",[answer.rol_id],function(err, res){
            if(err){
                throw err;
                console.log("connection error", res);
            }
            console.log("Role deleted", res);
            options();
        })
    })
};

const deleteEmployee = (connection, options) => {
    inquirer
        .prompt([
            {
                name: "emp_id",
                type: "input",
                message: "Enter Employee ID to delete?"
            }
        ]).then(function (answer){
        connection.query("delete from employee where emp_id = ? ",[answer.emp_id],function(err, res){
            if(err){
                throw err;
                console.log("connection error", res);
            }
            console.log("Employee deleted", res);
            options();
        })
    })
};

module.exports = {deleteDepartment, deleteRole, deleteEmployee};