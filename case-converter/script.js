const input = document.querySelector("textarea");

document.getElementById("upper-case").addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", () => {
  input.value = input.value
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(" ");
});

document.getElementById("sentence-case").addEventListener("click", () => {
  input.value = input.value
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
});

function download(filename, text) {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", () => {
  download("text.txt", input.value);
});
