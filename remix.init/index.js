const clear = require("clear");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

async function main({ rootDirectory }) {
  clear();

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

  figlet.text(
    "Sysgaming",
    {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    (err, data) => {
      if (err) {
        console.log("😵 Ops.. algo saiu mal.");
        return;
      }
      console.log(chalk.blue(data));

      console.log("Nome do projeto:", chalk.green(answers.projectName));
      console.log("API REST:", chalk.cyan(answers.restApiUrl));
      console.log("API Graphql:", chalk.magenta(answers.restApiUrl));
    }
  );

  console.log(rootDirectory);
  console.log(answers);
}

module.exports = main;
