document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("product-cards");
        const cartItemsContainer = document.getElementById("cart-items");
        const ProductList = {}; // Object to store cart items and their quantities
  
ProductCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer

    data.products.forEach(Product => {
        const card = document.createElement("div");
            <img src="${product.product_image}" class="card-img-top" alt="${Product.Product_Name}">
            <div class="card-body">
            <h5 class="card-title">${Product.Product_Name}</h5>
            <p class="card-text">${Product.Product_Description}</p>
  