export {createDiv, createLabel, createInput};

function createDiv (htmlContent, cssClass) {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    div.classList = cssClass;
    return div
}

function createInput (type, value, cssClass, id) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    input.classList = cssClass;
    input.id = id;
    return input
}

function createLabel (idFor, labelText, cssClass) {
    const label = document.createElement("label");
    label.innerHTML = labelText;
    label.setAttribute("for", idFor);
    label.classList = cssClass;
    return label
}