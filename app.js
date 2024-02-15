document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("Product-Cards");
        const CartItemsContainer = document.getElementById("Cart-Items");
        const ProductList = {}; // Object to store cart items and their quantities
  
        ProductCardsContainer.classList.add("Card-Group"); // Adding card-group class to productCardsContainer
  
        data.products.forEach(Product => {
          const Card = document.createElement("div");
          Card.className = "Card";