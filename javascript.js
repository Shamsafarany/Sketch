const container = document.querySelector(".container");
let result = 16;
function create(result) {
    for (let i = 0; i < result * result; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            function rcolor(){
                return Math.floor(Math.random() * 256);
            } 
            square.style.backgroundColor = `rgb(${rcolor()}, ${rcolor()}, ${rcolor()})`;
            let currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.style.opacity = currentOpacity.toFixed(1);
            }
       })
     }
}
create(result);

const gridBtn = document.querySelector(".grid");
gridBtn.addEventListener("click", () => {
    result = prompt("Enter number of squares (up to 100): ");
    while (result >100) {
        result = prompt("please enter a number less than 100!");
    }
    create(result);
})



