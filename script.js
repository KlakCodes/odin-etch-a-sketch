document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector(".grid");

    // Generate the grid with the defined amount of rows and columns
    function createGrid(gridColumns) {
        const gridCells = gridColumns * gridColumns;
        // const cellWidth = (grid.clientWidth / gridColumns) - gridColumns;
        const cellWidth = grid.clientWidth / gridColumns - 2;

        for (let i = 0; i < gridCells; i++) {
            const cell = document.createElement("div");
            cell.classList.toggle("cell");
            cell.style.border = "1px dashed lightgrey";
            cell.style.flex = `1 1 ${cellWidth}px`;
            grid.appendChild(cell);
        }

        // Debug section START

        console.log(`Total cells: ${gridCells}`);
        console.log(`Grid W + H: ${gridColumns}`);
        console.log(`Cell width: ${cellWidth}`);

        console.log(`W: ${document.querySelector(".cell").clientWidth} x H: ${document.querySelector(".cell").clientHeight}`);

        // Debug section END
    }

    createGrid(16);

    const cells = document.querySelectorAll(".cell");

    // Color the cell black when the mouse enters the cell
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black";
        });
    });
})