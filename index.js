const container = document.querySelector("#container");

function makeSquareGrid(x) {
    // Clear the current grid first
    deleteGrid();

    // Set up the grid-template via JS instead of the CSS, requires display: grid
    container.style.gridTemplateColumns = "repeat(" + x + ", 1fr)"; // e.g. repeat(8, 1fr)
    container.style.gridTemplateRows = "repeat(" + x + ", 1fr)";

    // Some nice gaps to separate the boxes (aesthetic, unnecessary)
    container.style.gridColumnGap = "2px";
    container.style.gridRowGap = "2px";
    
    // Retrieve the container width in pixels
     let containerWidth = container.offsetWidth;

    for (var i = 0; i < x*x; i++) {
        // Create cell
        var newDiv = document.createElement("div");
        newDiv.classList.add("grid-cell");
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

function addChangeColourEvent() {
    var cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            // Check which radio button is checked to determine which colour
            if (document.getElementById("red-radio").checked)
                e.target.style.backgroundColor = "hsl(0,100%,50%)";
            else if (document.getElementById("random-radio").checked)
                e.target.style.backgroundColor = randomColour();
            else if (document.getElementById("darken-radio")) {
                          
            }
        });

        // cell.addEventListener('click', function(e) {
        //     let currentRGB = e.target.style.backgroundColor;      
        //     console.log(currentRGB);
        // });

        // cell.addEventListener('mouseout', function(e) {
        //     e.target.style.backgroundColor = "aqua";
        // });
    });
}

makeSquareGrid(12);
addChangeColourEvent();

function deleteGrid() {    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newGrid() {
    var size = prompt("Choose an integer");
    if (Number.isInteger(parseInt(size)) && size > 0 && size <= 64) {
        makeSquareGrid(size);
    }
    else {
        alert("Please enter an integer between 1 and 64 inclusive");
    }
}

function resetColours() {
    var cells = document.querySelectorAll(".grid-cell");
    cells.forEach()
}

function randomInt(lower, upper) {
    //Inclusive of lower and upper
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function randomColour() {
    return "hsl(" + randomInt(0,360) + "," + randomInt(0,100) + "%," + randomInt(0,100) + "%)";
    //Will return a string e.g. "rgb(10,222,33)"
}

function regexExtraction(str, start, end) {

}

function testFunction() {
    var redButton = document.getElementById("red-radio").checked;
    var randomButton = document.getElementById("random-radio").checked;
    console.log(redButton + " " + randomButton);
}