const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

function grid() {

    div.innerHTML = "";

    const size = parseInt(prompt("Enter the size of grid"));

    if (size > 0 && size <= 100) {
        const total = size * size;

        for (let i = 1; i <= total; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            div.appendChild(box);

            box.addEventListener("mouseenter", () => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        }

        const width = 640 / size;
        const height = 640 / size;
        const target = document.querySelectorAll(".box");

        for (const box of target) {
            box.style.width = `${width}px`;
            box.style.height = `${height}px`;
        }
    }

    else {
        alert("Please enter a valid size, which is less than 100!");
    }
}

document.querySelector("button").addEventListener("click", grid);
