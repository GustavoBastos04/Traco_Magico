// Body
let body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.gap = "15px";
body.style.alignItems = "center";
body.style.justifyContent = "center";

// User Grid Size Input
let inputPanel = document.createElement("div");

inputPanel.style.display = "flex";
inputPanel.style.alignItems = "center";
inputPanel.style.gap = "10px";
inputPanel.style.fontSize = "20px";
inputPanel.style.fontWeight = "bold";

let span = document.createElement("span");
span.textContent = "Type grid size:";

let input = document.createElement("input");
input.type = "number";
input.min = "1";
input.max = "100";
input.placeholder = "1 to 100";
input.style.fontSize = "20px";

let button = document.createElement("button");
button.textContent = "Change";
button.style.borderRadius = "15px";
button.style.fontWeight = "bold";
button.style.fontSize = "20px";

inputPanel.appendChild(span);
inputPanel.appendChild(input);
inputPanel.appendChild(button);

body.appendChild(inputPanel);

// Grid
let grid = document.createElement("div");
grid.classList.add("main-container");

grid.style.display = "flex";
grid.style.flexDirection = "column";
grid.style.borderStyle = "solid"
grid.style.borderColor = "black";
grid.style.borderWidth = "thin";

grid.style.width = "600px";
grid.style.height = "600px";

body.appendChild(grid);

// Change number of Squares
function addSquares(numOfSqrs){

    for(let i = 1; i <= numOfSqrs; i++) {

        // Grid Rows
        let gridRow = document.createElement("div");
        gridRow.style.display = "flex";

        gridRow.style.width = "100%";
        gridRow.style.height = "100%";

        gridRow.classList.add("grid-row");
        gridRow.classList.add(`${i}`);

        grid.appendChild(gridRow);

        for (let j = 1; j <= numOfSqrs; j++) {

            // Grid Squares
            let gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.classList.add(`${j}`);

            gridElement.style.width = "100%";
            gridElement.style.height = "100%";

            gridRow.appendChild(gridElement);
        }
    }
}

function removeSqrs(mainGridDiv) {
    while (mainGridDiv.firstChild) {
        mainGridDiv.removeChild(mainGridDiv.lastChild)
    }
}

button.onclick = function changeGrid(){

    removeSqrs(grid);
    
    let value = document.querySelector("input").value;
    addSquares(value);
}

// Function to Generate the initial Sketchpad
addSquares(16);
