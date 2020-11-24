const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
<<<<<<< HEAD
        message: 'What is your name?'
=======
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
>>>>>>> feature/questions
      },
      {
        type: 'input',
        name: 'github',
<<<<<<< HEAD
        message: 'Enter your GitHub Username'
=======
        message: 'Enter your GitHub Username (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub Username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
>>>>>>> feature/questions
      },
      {
        type: 'input',
        name: 'about',
<<<<<<< HEAD
        message: 'Provide some information about yourself:'
=======
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
>>>>>>> feature/questions
      }
    ]);
};



const promptProject = portfolioData => {
    // If there's mp 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
<<<<<<< HEAD
        message: 'What is the name of your project?'
=======
        message: 'What is the name of your project (Required)',
        validate: projectName => {
          if (projectName) {
            return true;
          } else {
            console.log('Please enter the name of your project.');
            return false;
          }
        }
>>>>>>> feature/questions
      },
      {
        type: 'input',
        name: 'description',
<<<<<<< HEAD
        message: 'Provide a description of the project (Required)'
=======
        message: 'Provide a description of the project (Required)',
        validate: projectDiscription => {
          if (projectDiscription) {
            return true;
          } else {
            console.log('Please enter the description of the project.');
            return false;
          }
        }
>>>>>>> feature/questions
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
<<<<<<< HEAD
        message: 'Enter the GitHub link to your project. (Required)'
=======
        message: 'Enter the GitHub link to your project. (Required)',
        validate: projectLink => {
          if (projectLink) {
            return true;
          } else {
            console.log('Please enter the link to your project.');
            return false;
          }
        }
>>>>>>> feature/questions
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } 
        else {
          return portfolioData;
        }
      });
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
});