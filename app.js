document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const ProductCardsContainer = document.getElementById("product-cards");
        const cartItemsContainer = document.getElementById("cart-items");
        const ProductList = {}; // Object to store cart items and their quantities
  
ProductCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer

data.products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.product_image}" class="card-img-top" alt="${product.product_name}">
      <div class="card-body">
        <h5 class="card-title">${product.product_name}</h5>
        <p class="card-text">${product.product_description}</p>
        <p class="card-text">Price: $${product.product_price.toFixed(2)}</p>
        <p class="card-text"><small class="text-body-secondary">Date Added: ${product.product_dateAdded}</small></p>
        <p class="card-text"><small class="text-body-secondary">Expiration Date: ${product.product_ExpirationDate}</small></p>
        <button class="btn btn-primary add-to-cart" data-product="${product.product_name}">Add to Cart</button>
      </div>
    `;
    ProductCardsContainer.appendChild(card);
  });



    // Event listener for Add to Cart buttons
    ProductCardsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart")) {
            const ProductName = event.target.getAttribute("data-product");
            if (ProductList[ProductName]) {
                ProductList[ProductName]++;
            } else {
                ProductList[ProductName] = 1;
            }
            updateProductListDisplay();
          }
        });

        // Function to update the ProductList display
        function updateProductListDisplay() {
            ProductListItemsContainer.innerHTML = "";

          Object.keys(ProductList).forEach(ProductName => {
            const quantity = ProductList[ProductName];
            const li = document.createElement("li");
            li.textContent = `${ProductName}: ${quantity}`;
            ProductListItemsContainer.appendChild(li);
        });