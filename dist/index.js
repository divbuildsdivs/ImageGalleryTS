import categoryButtons from "./categoryButtons";
import natureImageData from "./data";
function init() {
    console.log("Initializing the application...");
    const categories = Object.keys(natureImageData);
    console.log("Available categories:", categories);
    categoryButtons(["All", ...categories]);
}
init();
console.log("This is the main entry point of the application.");
