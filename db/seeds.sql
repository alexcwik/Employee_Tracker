USE workplace_data_db;

INSERT INTO department (department_name)
VALUES 

('Sales')
('Engineering')
('Finance')
('Legal')

INSERT INTO roles (title, salary, department_id)
VALUES

('Salesperson', 65000, 001)
('Lead Engineer', 100000, 002)
('Software Engineer', 88000, 002)
('Accountant', 70000, 003)
('Legal Team Lead', 98000, 004)
('Lawyer', 180000, 004)

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES

('Thomas', 'LaGrassa', 001, 002)
('Karen', 'Lavery', 002, 002)
('Rachel', 'Kirk', 003, 002)
('Bill', 'Nissius', 004, 002)
('Marian', 'Hossa', 002, 002)
('Dick', 'Butkus', 004, 002)
