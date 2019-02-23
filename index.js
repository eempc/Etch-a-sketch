//Generate a 16x16 div grid

const container = document.querySelector("#container");

function generateGrid(x) {
    deleteGrid();

    for (var i = 0; i < x; i++) {
        var node = document.createElement("div");
        node.classList.add("column0-label");
        var numString = (i < 10) ? "0" + i: i;
        node.appendChild(document.createTextNode("row: " + numString));
    
        for (var j = 0; j < x; j++) {
            var node2 = document.createElement("div");
            node2.classList.add("grid-cell");
            node2.appendChild(document.createTextNode(j));
            node.appendChild(node2);
        }
    
        container.appendChild(node); 
    }
}

function deleteGrid() {
    var currentGrid = document.querySelectorAll(".grid-cell");
    currentGrid.forEach(e => e.parentNode.removeChild(e));

    var currentLabels = document.querySelectorAll(".column0-label");
    currentLabels.forEach(e => e.parentNode.removeChild(e));
}

generateGrid(16);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetGrid)

function resetGrid (){
    var size = prompt("enter size", 5);
    generateGrid(size);
}

class formatDigits {

}
