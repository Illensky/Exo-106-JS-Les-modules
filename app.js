import {createDiv,createLabel,createInput} from "./HTML.js";

const result = document.querySelector("#result");

result.appendChild(createDiv("blabla", "osef"));
result.appendChild(createLabel("mail", "E-mail : ", "osef"));
result.appendChild(createInput("email", "adress@mail.fr", "osef", "mail"));
result.appendChild(createLabel("pass", "Mot de passe : ", "osef"));
result.appendChild(createInput("password", "****", "osef", "pass"));