// const theButton = document.querySelector(".button");
const theButton = document.getElementById("button");

theButton.addEventListener("click", () => {
  theButton.classList.add("button--loading");

  setTimeout(() => {
    theButton.classList.remove("button--loading");
  }, 5000);
});
