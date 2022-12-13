import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import figlet from "figlet";

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
    figlet.text(
      "Sysgaming",
      {
        font: "ANSI Shadow",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      },

      function (err, data) {
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
  });
