const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generate = require('./src/generateHTML');

const teamArray =[];

const teamMngr = () => {
    return(
        inquirer
        .prompt([
            {
                // Prompts for manager's name"
                type: 'input',
                message: 'Enter team manager name.',
                name: 'name',
            },
            {
                // Prompts for manager's employee ID"
                type: 'input',
                message: 'Enter employee ID ',
                name: 'id',
            },
                //prompt for manager's email address
            {
                type: 'input',
                message: "Enter manager's email address",
                name: 'email',
            },
                //prompt for manager's office number
            {
                type: 'input',
                message: "Enter manager's office number",
                name: 'officeNumber',
            },
        ])
    )
    .then(data => {
        const manager= new Manager (data.name, data.id, data.email, data.officeNumber);
        teamArray.push(manager);
    })
}

const addMember = () => {
    return(
        inquirer
        .prompt([
            {
            // Add another employee or finish team"
                type: 'list',
                message: 'Would you like to add another employee, or finish building your team?',
                name: 'menu',
                choices: ['add Engineer', 'add Intern', 'finish building team']
            },
            //if select engineer option (name, email, id, and github)
            {
                type: 'input',
                message: "Enter name",
                name: 'name',
                when: (input) => input.menu === "add Engineer" || input.menu === "add Intern",
            },
            {
                type: 'input',
                message: "Enter email",
                name: 'email',
                when: (input) => input.menu === "add Engineer" || input.menu === "add Intern",
            },
            {
                type: 'input',
                message: "Enter employee id",
                name: 'id',
                when: (input) => input.menu === "add Engineer" || input.menu === "add Intern",
            },
            {
                type: 'input',
                message: "Enter engineer's Github username",
                name: 'github',
                when: (input) => input.menu === "add Engineer",
            },
            //if select intern option (name, email, id, and school)
            {
                type: 'input',
                message: "Enter intern's university/school",
                name: 'school',
                when: (input) => input.menu === "add Intern",
            },
        ])
    )
    //When select to finish team
    .then(
       data => {
           console.log (data.menu)
            if (data.menu === 'add Engineer'){
                const engineer = new Engineer (data.name, data.id, data.email, data.github)
                teamArray.push(engineer)
                addMember();
            } else if (data.menu === 'add Intern'){
                const intern = new Intern (data.name, data.id, data.email, data.school)
                teamArray.push(intern)
                addMember();
            } else {
                console.log(teamArray);
                genFile(generateHTML(teamArray));
            }
        }
    )
};

const genFile = data => {
//  console.log(promptData);  

    fs.writeFile('./dist/index.html', data,
    err => {
        if (err) {
            console.log(err);
        } console.log('Your team is built!')
    })
}

teamMngr()
.then(addMember)
.catch(err => {
    console.log (err);
})