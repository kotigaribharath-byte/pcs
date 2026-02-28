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
 
