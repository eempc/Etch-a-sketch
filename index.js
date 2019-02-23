const container = document.querySelector("#container");



function makeSquareGrid(x) {
    for (var i = 0; i < x*x; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add(".cell");
        var numStr = (i < 10) ? "0" + i: i;
        newDiv.appendChild(document.createTextNode(numStr)); 
        container.appendChild(newDiv);
    }
}

makeSquareGrid(8);