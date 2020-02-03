// const { options } = require("../../server.js")


const viewDepartment = (connection, options) => {
    try{
        const qry = "select dep_id as `Department_ID`, dep_name as `Department_Name` from department";
        connection.query(qry, function(err, res) {
            console.table(res);
            options();
        });
    }
    catch (err){
            console.log("ERR:  "+ err);
        }
}

const viewRole = (connection, options) => {
    try{
        const qry = "select role.rol_id as `Role_ID`, role.title as `Title`, role.salary as `Salary`, department.dep_name as `Department` " +
            "from role inner join department on department.dep_id = role.dep_id";
        connection.query(qry, function(err, res) {
            console.table(res);
            options();
        });
    }
    catch (err){
        console.log("ERR:  "+ err);
    }
}

const viewEmployee = (connection, options) => {
    try{
        const qry = "select employee.emp_id as `Employee_ID`, CONCAT_WS(', ',  last_name, first_name) as `Name`, `role`.title as `Title`" +
        "from employee inner join `role` on employee.rol_id = role.rol_id";
        connection.query(qry, function(err, res) {
            console.table(res);
            options();
        });
    }
    catch (err){
        console.log("ERR:  "+ err);
    }
}

const viewEmployeesByManager = (connection, options) => {
    try{
        const qry = "select a.emp_id as `Employee_ID`, CONCAT_WS(', ',  a.last_name, a.first_name) as `Name`,  \n" +
            "c.title as `Title` , CONCAT_WS(', ',  b.last_name, b.first_name) as `Manager`\n" +
            "from (\n" +
            "(select * from employee where manager_id is not null) a \n" +
            "inner join (select * from employee) b on a.manager_id = b.emp_id\n" +
            "inner join (select * from `role`) c on a.rol_id = c.rol_id) "
        connection.query(qry, function(err, res) {
            console.table(res);
            options();
        });
    }
    catch (err){
        console.log("ERR:  "+ err);
    }
}

const viewTotalBudgetOfDepartment = (connection, options) => {

}

module.exports = {viewDepartment, viewRole, viewEmployee, viewEmployeesByManager, viewTotalBudgetOfDepartment};
