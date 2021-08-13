CREATE TABLE IF NOT EXISTS department (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(30)
);

CREATE TABLE IF NOT EXISTS role (
    id int AUTO_INCREMENT PRIMARY KEY,
    title varchar(30),
    salary decimal,
    department_id int,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE IF NOT EXISTS employee (
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int,
    FOREIGN KEY (role_id) REFERENCES role(id)
);