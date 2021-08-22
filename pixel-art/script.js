function respondToTheClick(e) {
  const color = document.getElementById("colorPicker").value;
  e.target.style.backgroundColor = color;
}

function makeGrid(height, width) {
  const newTable = document.getElementById("pixelCanvas");

  const old = document.querySelectorAll("tr");

  if (old.length > 0) {
    for (let i = 1; i <= old.length; i++) {
      document.querySelector("tr").remove();
    }
  }

  for (let i = 1; i <= height; i++) {
    const newRow = document.createElement("tr");
    newTable.appendChild(newRow);
    for (let j = 1; j <= width; j++) {
      const newSell = document.createElement("td");

      newSell.addEventListener("click", respondToTheClick);

      newRow.appendChild(newSell);
    }
  }
}

function Submit(event) {
  event.preventDefault();
  const h = document.getElementById("inputHeight").value;
  const w = document.getElementById("inputWidth").value;

  makeGrid(h, w);
}

const form = document.getElementById("sizePicker");
form.addEventListener("submit", Submit);


