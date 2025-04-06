document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");
  let cart = [];
  let totalPrice = 0;

  // Add to cart
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productEl = event.target.parentElement;
      const id = productEl.getAttribute("data-id");
      const name = productEl.getAttribute("data-name");
      const price = parseFloat(productEl.getAttribute("data-price"));

      cart.push({ id, name, price });
      totalPrice += price;
      updateCart();
    });
  });

  // Remove from cart
  function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
  }

  // Update cart
  function updateCart() {
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.innerHTML = `${item.name} - ₹${item.price} <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>`;
      cartList.appendChild(li);
    });

    totalPriceEl.textContent = totalPrice;
  }

  // Expose removeFromCart to global scope
  window.removeFromCart = removeFromCart;
});
