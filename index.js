// Write your code here!

// Remove main
document.querySelector("main").remove();

let newHeader = document.createElement("h1");

newHeader.id = "victory";
newHeader.textContent = "LARRY KIPKURUI  is the champion";

// Append the new
document.body.append(newHeader);