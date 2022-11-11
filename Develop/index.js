// TODO: Include packages needed for this application
   const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
    name: 'readName',
    type: 'input',
    message:'what is title of your app'
},

   {
    name: 'description',
    type: 'input',
    message: 'provide a short description of your app'
   },

   {
      name: 'table_contents',
      type: 'confirm',
      message: 'would you need a table contents?'
   },
    {
      name:'installation_instructions',
      type: 'input',
      message:'provide a short guide on how to install your app'
    },

   {
      name: 'usage',
      type:'input',
      message:'Provide details on how will this app be used'
   },

   {
      name: 'contributions',
      type:'input',
      message:'list any contributors on you application'
   },
   {
      name:'test_instructions',
      type:'input',
      message: 'provide instructions on how to test application'
   }
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function fo initialize app
function init() {}

// Function call 