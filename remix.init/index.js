const inquirer = require("inquirer");

const main = async ({ rootDirectory }) => {
  const answers = await inquirer.prompt([
    {
      name: "projectName",
      message: "Qual é o nome do projeto?",
    },
    {
      name: "restApiUrl",
      message: "Qual é o endpoint da API REST?",
    },
    {
      name: "graphqlApiUrl",
      message: "Qual é o endpoint da API Graphql?",
    },
  ]);

  console.log(rootDirectory);
  console.log(answers);
};

module.exports = main;
