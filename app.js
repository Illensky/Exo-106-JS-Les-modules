import * as utils from "./HTML";

const result = document.querySelector("#result");

result.appendChild(utils.createDiv("blabla", "osef"));
result.appendChild(utils.createLabel("mail", "E-mail : ", "osef"));
result.appendChild(utils.createInput("email", "adress@mail.fr", "osef", "mail"));
result.appendChild(utils.createLabel("pass", "Mot de passe : ", "osef"));
result.appendChild(utils.createInput("password", "****", "osef", "pass"));