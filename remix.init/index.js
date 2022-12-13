const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
const clear = require("clear");

clear();

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    figlet.text("Sysgaming", {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    });

    console.info("Nome do projeto:", chalk.green(answers.projectName));
    console.info("API REST:", chalk.blue(answers.restApiUrl));
    console.info("API Graphql:", chalk.magenta(answers.restApiUrl));
  });
