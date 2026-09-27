const countOutput = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
let count = 0;

incrementButton.addEventListener("click", () => {
  count += 1;
  countOutput.textContent = count;
});
