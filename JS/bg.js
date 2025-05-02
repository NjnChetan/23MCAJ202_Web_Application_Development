// colors to cycle 
const colors = ["red", "yellow", "purple", "green", "blue", "orange"];
let currentIndex = 0;

// Get button and add event listener
    const button = document.querySelector("button");

button.addEventListener("click", () => {
   
    //change button color
    document.body.style.backgroundColor = colors[currentIndex];
    button.style.backgroundColor = colors[currentIndex];
    
    // Move to the next color 
    currentIndex = (currentIndex + 1) % colors.length;
});

