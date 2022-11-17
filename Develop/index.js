// TODO: Include packages needed for this application
   const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const  fs  = require('fs')


const questions = () => {
   return inquirer.prompt([
    {
    name: 'title',
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
   },

   {
      name:'MIT_link',
      type:'input',
      message: 'would you like a liscene? type one of the follwing("MIT","MPL","ISC")'
   },
   
   
   {
      name:'github_name',
      type:'input',
      message: 'please list your github name'
   },

   {
      name:'email',
      type:'input',
      message: 'what is a good email to contact you'
   },
]);


}
// TODO: Create a function to write README file
const generateMarkdown = require('./generateMarkdown')
generateMarkdown

const  writeFile = data =>{fs.writeFile('README.md', data, err => {
   
   switch (err) {
      case err:
       console.log(err);
       break;
   
   } 
})

} 
// TODO: Create a function to initialize app
const init = () => {
   questions()
   .then(answers => generateMarkdown(answers))
   .then((index) => writeFile(index));
   

};

// Function call 
init()
