const countOutput = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const minimumCount = -10;
let count = 0;

function updateCounter() {
  countOutput.textContent = count;
  decrementButton.disabled = count <= minimumCount;
}

incrementButton.addEventListener("click", () => {
  count += 1;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  count = Math.max(minimumCount, count - 1);
  updateCounter();
});
