document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const productCardsContainer = document.getElementById("product-cards");
        const cartItemsContainer = document.getElementById("cart-items");
        const cart = {}; // Object to store cart items and their quantities
  
        productCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer
  
        data.products.forEach(product => {
          const card = document.createElement("div");
        