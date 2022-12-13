import { prompt } from "inquirer";
import { text } from "figlet";
import { green, blue, magenta } from "chalk";

import clear from "clear";

clear();

prompt([
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
]).then((answers) => {
  text("Sysgaming", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  });

  console.info("Nome do projeto:", green(answers.projectName));
  console.info("API REST:", blue(answers.restApiUrl));
  console.info("API Graphql:", magenta(answers.restApiUrl));
});
