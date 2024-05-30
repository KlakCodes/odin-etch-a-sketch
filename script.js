document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector(".grid");

    for (let i = 0; i <= 256; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.toggle("gridSquare");
        grid.appendChild(gridSquare);
    }
})