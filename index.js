const fs = require("fs");
const inquirer = require("inquirer");

let question = [
  {
    type: "input",
    name: "name",
    message: "what is your name?",
  },
  {
    type: "input",
    name: "city",
    message: "where are you from?",
  },
  {
    type: "input",
    name: "food",
    message: "what is your favorite food?",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github?",
  },
  {
    type: "input",
    name: "phone",
    message: "what is your phone number?",
  },
];
function generateCard({ name, city, food, github, phone }) {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Portfolio Generator</title>
    <style>
        body article {
            margin: 20% auto;
            width: 50%;

        }
    </style>
</head>

<body>
    <article class="message is-info">
        <div class="message-body">
            <h3>My Name is ${name}</h3>
            <h4>I am from ${city}</h4>
            <p>My favorite food is ${food}</p>
            <p>My GitHub is: <a href="https://github.com/${github}">https://github.com/${github}</a></p>
            <p>Contact Me: ${phone}</p>
        </div>
    </article>
</body>

</html>
    `;
}

inquirer.prompt(question).then((response) => {
  console.log("Creating your card");
  fs.writeFile("mycard.html", generateCard(response), (err) => {
    err ? console.log(err) : console.log("Success!");
  });
});
