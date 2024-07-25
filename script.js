// Body
let body = document.querySelector("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

// Grid
let grid = document.createElement("div");
grid.classList.add("main-container");

grid.style.display = "flex";
grid.style.flexDirection = "column";

body.appendChild(grid);

for (let i = 1; i <= 16; i++) {
    
    // Grid Rows
    let gridRow = document.createElement("div");
    gridRow.style.display = "flex";
    gridRow.classList.add("grid-row");
    gridRow.classList.add(`${i}`);

    grid.appendChild(gridRow);

    for (let j = 1; j <= 16; j++) {
        
        // Grid Squares
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.classList.add(`${j}`);
        
        gridElement.style.borderStyle = "solid"
        gridElement.style.borderColor = "black";
        gridElement.style.borderWidth = "thin";
        gridElement.style.width = "35px";
        gridElement.style.height = "35px";

        gridRow.appendChild(gridElement);
    }
}

