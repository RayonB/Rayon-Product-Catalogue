document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("product-cards");
        const cartItemsContainer = document.getElementById("cart-items");
        const ProductList = {}; // Object to store cart items and their quantities
  
ProductCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer

    data.products.forEach(Product => {
        const Card = document.createElement("div");
        Card.className = "Card";
        Card.innerHTML = `
            <img src="${Product.Product_image}" class="card-img-top" alt="${Product.Product_Name}">
            <div class="card-body">
            <h5 class="card-title">${Product.Product_Name}</h5>
            <p class="card-text">${Product.Product_Description}</p>
            <p class="card-text">Price: $${Product.Product_Price.toFixed(2)}</p>
            <p class="card-text"><small class="text-body-secondary">Date Added: ${Product.Product_Date_Added}</small></p>
            <p class="card-text"><small class="text-body-secondary">Expiration Date: ${Product.Product_Expiration_Date}</small></p>
            <button class="btn btn-primary add-to-cart" data-product="${{Product.Product_Name}">Add to Cart</button>
          </div>
        `;
        ProductCardsContainer.appendChild(Card);
    });

    // Event listener for Add to Cart buttons
    ProductCardsContainer.addEventListener("click", function(event) {