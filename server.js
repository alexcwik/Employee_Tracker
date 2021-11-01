const express = require('express');
const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
  
  host: 'localhost',
  port: 3001,
  user: 'root',
  password: 'Palebloodhunter14!',
  database: 'workplace_data'
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

function prompt(){
  inquirer
  .prompt({
    name: "selection",
    type: "list",
    message: "Where would you like to start?",
    choice: [
      "Add Employee",
      "Add Role",
      "add Department",
      "Show Employees",
      "Show Roles",
      "Show Departments",
      "Update Exiting Employee",
      "Remove Existing Employee",
      "Quit Prompt",
    ]

  }).then(function(response){
    switch (response.selection){
    case "Add Employee":
        addEmployee();
        break;
    case "View Roles":
      viewRoles();
      break;
    case "View departments":
      viewDepartments();
      break;
    case "View Employees":
      viewEmployees();
      break;
    case "Add Department":
      addDepartment();
      break;
    case "add Role":
      viewRoles();
      break;
    }
  })  
};




const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


