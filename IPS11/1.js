function createTable() {
    let table = document.createElement("table");
    table.border = "1";
    for (let i = 0; i < 3; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            let cell = row.insertCell();
            cell.innerText = `Row ${i+1}, Col ${j+1}`;
        }
    }
    document.body.appendChild(table);
}

function createButton() {
    let button = document.createElement("button");
    button.innerText = "Hover Me";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.onmouseover = function () { button.style.backgroundColor = "green"; };
    document.body.appendChild(button);
}

function createTextbox() {
    let textbox = document.createElement("input");
    textbox.type = "text";
    textbox.style.backgroundColor = "green";
    textbox.onfocus = function () { textbox.style.backgroundColor = "yellow"; };
    textbox.onchange = function () { alert("Hello! You changed the text."); };
    document.body.appendChild(textbox);
}

function createListInput() {
    let input = document.createElement("input");
    let button = document.createElement("button");
    let ul = document.createElement("ul");
    button.innerText = "Add Item";
    button.ondblclick = function () {
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = "";
    };
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(ul);
}

function createKeyCounter() {
    let input = document.createElement("input");
    let counter = document.createElement("input");
    counter.type = "text";
    counter.readOnly = true;
    let count = 0;
    input.onkeypress = function () {
        count++;
        counter.value = count;
    };
    document.body.appendChild(input);
    document.body.appendChild(counter);
}

createTable();
createButton();
createTextbox();
createListInput();
createKeyCounter();
