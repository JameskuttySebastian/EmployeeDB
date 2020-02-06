-- drop database if exists
-- DROP DATABASE IF EXISTS employeeDB;

-- create database
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
dep_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE `role` (
rol_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,0) NOT NULL,
dep_id INT NOT NULL,
FOREIGN KEY (dep_id) REFERENCES department(dep_id)
);

CREATE TABLE employee (
emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
rol_id INT NOT NULL,
manager_id INT NULL,
FOREIGN KEY (rol_id) REFERENCES role(rol_id),
FOREIGN KEY (manager_id) REFERENCES employee(emp_id)
);

INSERT INTO department (dep_name)
VALUES ('Production'), ('RnD'), ('Engineering'), ('Equipment'), ('Maintenance');

-- select * from department

INSERT INTO role (title, salary, dep_id)
VALUES 
    ('Prod Manager', 90000, 1),
    ('Production Engineer', 75000, 1),
    ('Production Assistant', 45000, 1),
    ('RnD Manager', 170000, 2),
    ('Rnd Engineer', 120000, 2),
    ('RnD Scientist', 160000, 2),
    ('Equipment Manager', 120000, 4),
    ('Equipment Engineer', 100000, 4),
    ('Equipment Technician', 75000, 4),
    ('Maintenance Manager', 120000, 5),
    ('Maintenance Engineer', 100000, 5),
    ('Maintenance Technician', 75000, 5);
    
    select * from `role`
    
    INSERT INTO employee (first_name, last_name, rol_id, manager_id)
VALUES
    ('Roland', 'Boomer', 1, NULL),
    ('Chai', 'Ping Ping', 2, 1),
    ('Thomas', 'Yoe', 3, 1),
    ('Charlotte', 'Pang', 3, 1),
    ('Julie', 'Robert-Loid', 3, 1),
    ('Mervin', 'Attaru', 4, NULL),
    ('Adaar', 'Popot', 5, 6),
    ('Margorine', 'Mendoza', 6, 6),
    ('Arun', 'Koshy', 7, NULL),
    ('Ryan', 'Leong', 8, 9),
    ('Ryan', 'Chew', 9, 9),
    ('Wei', 'Leong', 10, NULL),
    ('Sebastian', 'Tey', 11, 12),
    ('Rohan', 'Philips', 12, 12) ;
