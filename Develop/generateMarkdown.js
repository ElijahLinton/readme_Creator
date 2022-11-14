
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = `https://img.shields.io/badge/License-MIT-yellow.svg`
return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
   licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
   return licenseLink ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : ' ';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseSection) {
  
  licenseSection = true
  return (licenseSection ? '##License' : '')
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 ${ renderLicenseBadge(license)}
  # ${data.title}
 
  ## Description
  
  
  
  - [Installation](#Installion)
  - [Usage](#Usage.)
  - [Credits](#project)
  - [License](#Liscense)
  
  ## Installation
  

  
  ## Usage
  
 
  
  ## Credits
  
  
  ${renderLicenseSection(licenseSection)}
  
  ## Table of Contents

  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges

    ${ renderLicenseLink(licenseLink)}
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  
`;
}

module.exports = generateMarkdown;
