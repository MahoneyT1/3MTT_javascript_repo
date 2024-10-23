import { createUserInput } from "./modules.js"
import { Product } from "./products.js";

async function main() {
    // main function as entry point

    // Array of products
    const arrOfProducts = [
        "Rice",
        "Yam",
        "Water"
    ];

    console.log("Process your order");

    // captured the input choice
    const result = await createUserInput(arrOfProducts);
    console.log(`Your total price is #200 --> you chose ${result}`);
};

main();