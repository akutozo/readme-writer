// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${"## DEVELOPED BY: " +  '\n' + "github.com/" + data.gitHubName}
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
  ${'\n' + `![GitHub](https://img.shields.io/github/license/${data.gitHubName}/${data.title})`}
  ${'\n' + `![GitHub followers](https://img.shields.io/github/followers/${data.gitHubName}?label=GitHub%20Followers&logo=Github&?style=social)`}
  ${'\n' + `![GitHub language count](https://img.shields.io/github/languages/count/${data.gitHubName}/${data.title}?logo=GitHub)`}
  ${'\n' + `![GitHub last commit](https://img.shields.io/github/last-commit/${data.gitHubName}/${data.title})`}
  `;
}

module.exports = generateMarkdown;
