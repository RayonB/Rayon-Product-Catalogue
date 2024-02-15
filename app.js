document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const productCardsContainer = document.getElementById("product-cards");
        const cartItemsContainer = document.getElementById("cart-items");
        const ProductList = {}; // Object to store cart items and their quantities
  
  