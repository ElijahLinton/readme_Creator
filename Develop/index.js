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
const writeToFile = ({readName, description,installation_instructions,
usage,table_contents,contributions,test_instructions}) => {`
#${readName}

## Description
${description}



- [Installation](#Installion)
- [Usage](#Usage.)
- [Credits](#project)
- [License](#Liscense)

## Installation

${installation_instructions}

## Usage



## Credits

N/A

##License



---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`}

// TODO: Create a function fo initialize app
function init() {}

// Function call 