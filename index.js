const IncreaseButton = document.getElementById("Increase");
const DecreaseButton = document.getElementById("Decrease");
const CountField = document.getElementById("NumBox");
let count = 0;
CountField.innerText = count;
IncreaseButton.addEventListener("click", () => {
  count++;
  CountField.innerText = count;
});
DecreaseButton.addEventListener("click", () =>{
    count--;
    CountField.innerText = count;
})