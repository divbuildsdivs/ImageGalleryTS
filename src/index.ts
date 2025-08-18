import categoryButtons from "./categoryButtons.js";
import natureImageData from "./data.js";
import type { NatureImageData } from "./types";

function init(): void {
    console.log("Initializing the application...");
    
    const data:NatureImageData = natureImageData;
    const categories: string[] = Object.keys(data);
    console.log("Available categories:", categories);
    
    categoryButtons(["All", ...categories]);
}


init();

console.log("This is the main entry point of the application.");

