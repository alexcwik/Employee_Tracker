const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
  
  host: 'localhost',
  port: 3001,
  user: 'root',
  password: 'your password',
  database: 'workplace_data'
});

connection.connect(err => {
  if (err) throw err;
  prompt();
});

function useTracker(){
  inquirer
   .prompt({
     type: "list",
     choice: [
       "Add Employee",
       "Add Role",
       "add Department",
       "Show Employees",
       "Show Roles",
       "Show Departments",
       "Update Exiting Employee",
       "Remove Existing Employee",
       "Quit Tracker",
     ]
   }).then(function(){
     switch ()
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