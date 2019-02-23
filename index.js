const container = document.querySelector("#container");

function makeSquareGrid(x) {
    // Set up the grid-template via JS instead of the CSS, requires display: grid
    container.style.gridTemplateColumns = "repeat(" + x + ", 1fr)"; // e.g. repeat(8, 1fr)
    container.style.gridTemplateRows = "repeat(" + x + ", 1fr)";

    // Some nice gaps to separate the boxes (aesthetic, unnecessary)
    container.style.gridColumnGap = "2px";
    container.style.gridRowGap = "2px";
    
    // Retrieve the container width in pixels
     let containerWidth = container.offsetWidth;

    for (var i = 0; i < x*x; i++) {
        // Essentials for creating the cells
        var newDiv = document.createElement("div");
        newDiv.classList.add(".grid-cell");
        newDiv.appendChild(document.createTextNode(i));
               
        // Aesthetic style section, nothing important here
        newDiv.style.height = containerWidth / x + "px"; // Match the height to the width
        newDiv.style.border = "1px solid red";
        newDiv.style.textAlign = "center";
        newDiv.style.lineHeight = containerWidth / x + "px"; // Required for verticalAlign to work
        newDiv.style.verticalAlign = "middle";

        // Add to the container
        container.appendChild(newDiv);
    }
}

makeSquareGrid(8);