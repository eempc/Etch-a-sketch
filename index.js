//Generate a 16x16 div grid

const container = document.querySelector("#container");

for (var i = 0; i < 16; i++) {
    var node = document.createElement("div");
    node.classList.add("column0-label");
    node.appendChild(document.createTextNode("row: " + i));

    for (var j = 0; j < 16; j++) {
        var node2 = document.createElement("div");
        node2.classList.add("grid-cell");
        node2.appendChild(document.createTextNode(j));
        node.appendChild(node2);
    }

    container.appendChild(node);
    
}


