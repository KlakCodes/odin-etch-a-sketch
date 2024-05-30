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

        const cells = document.querySelectorAll(".cell");

        // Color the cell black when the mouse enters the cell
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", () => {

                function randCol () {
                    function randNum (max) {
                      return Math.floor(Math.random() * max);
                    }
                  
                    return `rgba(${randNum(256)}, ${randNum(256)}, ${randNum(256)}, 1)`
                  }

                cell.style.backgroundColor = randCol();
            });
        });
    }

    function clearGrid() {
        const cells = document.querySelectorAll(".cell");

        cells.forEach((cell) => {
            cell.remove();
        });
    }

    createGrid(16);

    const gridButton = document.querySelector(".gridButton");
    console.log(gridButton);

    // When button is pressed, the user is prompted for the size of the new grid and the old one is cleared
    gridButton.addEventListener("click", () => {
        const invalid = true;

        while (invalid) {
            const userGridCount = prompt("How many columns and rows? (Min: 1 - Max: 100)");

            if (userGridCount && (userGridCount > 0 && userGridCount <= 100)) {
                clearGrid();
                createGrid(userGridCount);
                invalid = false;
            } else if (userGridCount === null) {
                invalid = false;
            }
        }
    })
})