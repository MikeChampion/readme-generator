// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}, 
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    I. Description
    II. Install Instructions
    III. Usage Information
    IV. Contribution Guidelines
    V. Testing Instructions
    VI. Contact

    ## Description
    ${data.description}
    ## Install Instructions
    ${data.install}
    ## Usage Information
    ${data.usage}
    ## Contribution Guidelines
    ${data.contribute}
    ## Testing Instructions
    ${data.testing}
    ## Contact
    ### email
    ${data.email}
    ### GitHub
    ${data.github}
    
    `;
}

module.exports = generateMarkdown;
