const button = document.querySelector("#size");
// let size;
const container = document.querySelector(".grid-container");
createGrid(16);

button.addEventListener("click", function() {
    let size;
    do {
        size = prompt("Enter a size");
    } while (size > 100 || size <= 0);
    createGrid(size);
});


function createGrid(size) {
    container.innerHTML = '';
    let cellSize = 950 / size;
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", `row${i + 1}`);
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            grid.style.height = `${cellSize}px`;
            grid.style.width = `${cellSize}px`;
            grid.addEventListener("mouseenter", draw);
            row.appendChild(grid);
        }
    }
}


function draw() {
    this.style.backgroundColor = "grey";
}


container.setAttribute("style", "border: 4px black solid;");