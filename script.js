 const products = [
    {
        name: "iphone16promax",
        amazon: 150000,
        flipkart: 69500,
        croma: 71000
    },
    {
        name: "samsung",
        amazon: 50000,
        flipkart: 48000,
        croma: 51000
    },
    {
        name: "redmi",
        amazon: 15000,
        flipkart: 14500,
        croma: 15500
    }
];
 
function searchProduct() {

    const input = document.getElementById("product").value.toLowerCase();
    const result = document.getElementById("result");

    let found = false;

    for(let i = 0; i < products.length; i++) {

        if(products[i].name === input) {

            result.innerHTML =
            "Showing results for: " + input + "<br>" +
            "Amazon: ₹" + products[i].amazon + "<br>" +
            "Flipkart: ₹" + products[i].flipkart + "<br>" +
            "Croma: ₹" + products[i].croma;

            found = true;
            break;
        }
    }

    if(!found) {
        result.innerHTML = "Product not found.";
    }
}
 


