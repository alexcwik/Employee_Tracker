DROP DATABASE IF EXISTS workplace_data_db;
CREATE DATABASE workplace_data_db;

USE workplace_data_db;

CREATE TABLE department (
    PRIMARY KEY (id),
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  PRIMARY KEY (id),
  title VARCHAR (30) NOT NULL,
  salary DECIMAL INT NOT NULL,
  FOREIGN KEY (department_id),
  REFERENCES department (id)
);

CREATE TABLE employee (
   PRIMARY KEY (id),
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   FOREIGN KEY (roles_id),
   REFERENCES roles(id),
   manager_id INT
)

