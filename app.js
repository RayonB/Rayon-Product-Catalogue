document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("Product-Cards");
        const CartItemsContainer = document.getElementById("cart-items");
        const ProductList = {}; // Object to store cart items and their quantities
  
        ProductCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer
  
        data.products.forEach(Product => {
          const card = document.createElement("div");
        