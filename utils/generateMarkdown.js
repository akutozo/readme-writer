// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${"## DEVELOPED BY: " +  '\n' + "github.com/" + data.gitHub}
  ${"## Table of Contents" }
  * [Description](#description:)
  * [Languages](#languages-used:)
  * [Installation](#installation:)
  * [Contributing Developers](#contributing-developers:)
  * [Questions](#questions:)
  * [License(s)](#license(s):)
  
  ${"## DESCRIPTION:"+ '\n' + data.description}
  ${"## LANGUAGES USED:" + '\n' + data.languages}
  ${"## INSTALLATION:" + '\n' + data.installation}
  ${"## CONTRIBUTING DEVELOPERS:" + '\n'  + data.contributors}
  ${"## QUESTIONS:" + '\n' + "For questions, contact: " + data.email}
  ${"## LICENSE(S)" + '\n'}
  ${'\n' + `![GitHub](https://img.shields.io/github/license/${data.gitHub}/${data.repo})`}
  ${'\n' + `![GitHub followers](https://img.shields.io/github/followers/${data.gitHub}?label=GitHub%20Followers&logo=Github&?style=social)`}
  ${'\n' + `![GitHub language count](https://img.shields.io/github/languages/count/${data.gitHub}/${data.repo}?logo=GitHub)`}
  ${'\n' + `![GitHub last commit](https://img.shields.io/github/last-commit/${data.gitHub}/${data.repo})`}
  `;
}

module.exports = generateMarkdown;
