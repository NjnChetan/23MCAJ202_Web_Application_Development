document.getElementById("image").addEventListener("mouseover", function() {
    this.src = "cat2.jpg";  // Change image on hover
    document.getElementById("text").innerText = "Image changed... Hover out to revert.";
});

document.getElementById("image").addEventListener("mouseout", function() {
    this.src = "cat1.jpg";  // Revert to original image
    document.getElementById("text").innerText = "Hover over the image to change it";
});
