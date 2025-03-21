// Array of colors to cycle through
const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#a55eea", "#ff6b81", "#3742fa"];
let currentIndex = 0;

// Get button and add event listener
const button = document.querySelector("button");

button.addEventListener("click", () => {
    // Change background color on button click
    document.body.style.backgroundColor = colors[currentIndex];
    
    // Move to the next color in the array
    currentIndex = (currentIndex + 1) % colors.length;
});
