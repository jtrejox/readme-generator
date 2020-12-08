const lic = require('./licenses.js');
const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [ {
    type: `list`,
    message: `What license would you like to use?`,
    name: `license`,
    choices: ['MIT', 'GNU'],
    },
    {
        type: `input`,
        message: `What Title would you like to use for your README file?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Please write a description of your project`,
        name: `description`,
    },
    {
        type: `input`,
        message: `What Technologies and Languges did you use for this project?`,
        name: `languages`,
    },
    {
        type: `input`,
        message: `What is your project's Live URL?`,
        name: `lUrl`,
    },
    {
        type: `input`,
        message: `What is your project's GitHub URL?`,
        name: `gUrl`,
    },
    {
        type: `input`,
        message: 'Please begin writing the User Story. AS A',
        name: `ASA`,
    },
    {
        type: `input`,
        message: 'Please begin writing the User Story. I WANT',
        name: `IWANT`,
    },
    {
        type: `input`,
        message: 'Please begin writing the User Story. SO THAT I',
        name: `SOTH`,
    },
    {
        type: `input`,
        message: 'Please write the Table of Contents',
        name: `table`,
    },
    {
        type: `input`,
        message: 'Please write your Acceptance Criteria',
        name: `acceptCrit`,
    },
    {
        type: `input`,
        message: 'Please write your Installation Instructions',
        name: `Iinstructions`,
    },
    {
        type: `input`,
        message: 'Please write your Usage Instructions',
        name: `Uinstructions`,
    },
    {
        type: `input`,
        message: 'Please write your Credits Section',
        name: `credits`,
    },
    {
        type: `input`,
        message: 'WHat is your Live URL',
        name: `lURL`,
    },
    {
        type: `input`,
        message: 'What is your Project URL',
        name: `pURL`,
    }
]

const quiz = (e) =>
inquirer
.prompt(questions)
.then ((r) => {
    let license
    if (r.license === 'MIT'){
        license = lic.MIT
    }
    else{
        license = lic.GNU
    }
    const readme = `# ${r.title}

# Description
${r.description}

# User Story
${r.ASA}
${r.IWANT}
${r.SOTH}

## Table of Contents
${r.table}

## Acceptance Criteria
${r.acceptCrit}

##Technology
${r.languages}

## Installation
${r.Iinstructions}

## Usage
${r.Uinstructions}

## Credits
${r.credits}

## License
${license}

## Review
${r.lURL}
${r.pURL}


`
// ${lic.r.license}
fs.writeFile(`NEWREADME.md`, readme, (err) =>{console.log('error')}) 

})
// function to initialize program
function init() {
    quiz()
    }

// function call to initialize program
init();

