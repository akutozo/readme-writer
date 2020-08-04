// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${"## DEVELOPED BY: " +  '\n' + "github.com/" + data.gitHub}
  ${"## Table of Contents" }
  * [Description](#description:)
  * [Languages](#languages:)
  * [Installation](#installation:)
  * [Contributors](#contributors:)
  * [Questions](#questions:)
  * [License(s)](#license(s):)
  
  ${"## Description: "+ '\n' + data.description}
  ${"## Languages: " + '\n' + data.languages}
  ${"## Installation: " + '\n' + data.installation}
  ${"## Contributors: " + '\n'  + data.contributors}
  ${"## Questions? " + '\n' + "Contact me at " + data.email}
  ${"## License(s) " + '\n' + "" + data.license}

  ${'\n' + `![Following the Author](https://img.shields.io/github/followers/${data.gitHub}?label=GitHub%20Followers&logo=Github&?style=social)`}
  ${'\n' + `![Most Recent Update](https://img.shields.io/github/last-commit/${data.gitHub}/${data.repo})`}
  `;
}

module.exports = generateMarkdown;
