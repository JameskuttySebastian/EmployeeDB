
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
        const qry = "select role.rol_id as `Role_ID`, role.title as `Title`, role.salary as `Salary`, department.dep_name as `Department`, " +
            "department.dep_id as `Department_ID` from role inner join department on department.dep_id = role.dep_id";
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
        const qry = "select employee.emp_id as `Employee_ID`, CONCAT_WS(', ',  last_name, first_name) as `Name`, `role`.title as `Title`," +
            "mgr.Name as `Manager` from employee inner join `role` on employee.rol_id = role.rol_id" +
            "inner join (select emp_id, CONCAT_WS(', ',  last_name, first_name) as `Name` from employee) as mgr" +
            "on employee.manager_id = mgr.emp_id";
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
    try{
        const qry = "select c.dep_name, sum(salary) from employee a\n" +
            "inner join role b on a.rol_id = b.rol_id\n" +
            "inner join department c on b.dep_id = c.dep_id group by c.dep_name"
        connection.query(qry, function(err, res) {
            console.table(res);
            options();
        });
    }
    catch (err){
        console.log("ERR:  "+ err);
    }
}

const viewDepartmentTable = (connection) => {
    return new Promise(function (resolve, reject){
        try{
            const qry = "select dep_id as `Department_ID`, dep_name as `Department_Name` from department";
            connection.query(qry, function(err, res) {
                console.table(res);
                resolve();
            });
        }
        catch (err){
            reject (console.log("ERR:  "+ err));
        }

    })

}

const viewRoleTable = (connection) => {
    return new Promise(function (resolve, reject) {
        try {
            const qry = "select role.rol_id as `Role_ID`, role.title as `Title`, role.salary as `Salary`, department.dep_name as `Department` " +
                "from role inner join department on department.dep_id = role.dep_id";
            connection.query(qry, function (err, res) {
                resolve(console.table(res));
            });
        } catch (err) {
            reject(console.log("ERR:  " + err));
        }
    })
}

const viewEmployeeTable = (connection) => {
    return new Promise(function (resolve, reject) {
        try {
            const qry = "select employee.emp_id as `Employee_ID`, CONCAT_WS(', ',  last_name, first_name) as `Name`, `role`.title as `Title`," +
                "`role`.rol_id as `Role_id`, employee.manager_id as `Manager_ID` from employee inner join `role` on employee.rol_id = role.rol_id";
            connection.query(qry, function (err, res) {
                resolve(console.table(res));
            });
        } catch (err) {
            reject(console.log("ERR:  " + err));
        }
    })
}


module.exports = {viewDepartment, viewRole, viewEmployee, viewEmployeesByManager, viewTotalBudgetOfDepartment, viewDepartmentTable, viewRoleTable, viewEmployeeTable };
