import categoryButtons from "./categoryButtons.js";
import natureImageData from "./data.js";
function init() {
    console.log("Initializing the application...");
    const data = natureImageData;
    const categories = Object.keys(data);
    console.log("Available categories:", categories);
    categoryButtons(["All", ...categories]);
}
init();
console.log("This is the main entry point of the application.");
