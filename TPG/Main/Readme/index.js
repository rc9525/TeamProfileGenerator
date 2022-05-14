
function init() {

  const fs = require("fs");
  const inquirer = require("inquirer");
  const generateMarkdown = require("./utils/generateMarkdown.js")


  inquirer
    .prompt([

      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
      },
      {
        type: "list",
        message: "What kind of license do you want for the project?",
        name: "license",
        choices: ["MIT", "Gpl-3.0", "Unlicense", "Apache-2.0", "None"],
      },
      {

        type: "input",
        message: "How can the user run tests for your project?",
        name: "tests",
      },
      {
        type: "input",
        message:
          "How can a user contributes to your poject?",
        name: "contributing",
      },
      {
        type: "input",
        message:
          "What is your GitHub username?",
        name: "input",
      },
      {
        type: "input",
        message:
          "What is your e-mail?",
        name: "input",
      },

    ])
    .then((data) => {
      console.log(data);
      fs.writeFile('README.md', generateMarkdown(data),
        (error) => {
          if (error) {
            console.log('Input your data')
          }
          console.log('Success README generated')

        }
      )
    }
    )
}

init()



