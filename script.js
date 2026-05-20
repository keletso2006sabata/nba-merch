// ===== CART SYSTEM =====

// Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item to cart
function addToCart(name, price) {
  let cart = getCart();

  cart.push({
    name: name,
    price: price
  });

  saveCart(cart);
  updateCartCount();

  alert(name + " added to cart!");
}

// Update cart count in navbar
function updateCartCount() {
  let cart = getCart();
  let count = cart.length;

  let cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
  }
}

// Display cart items (ONLY on cart.html)
function displayCart() {
  let cart = getCart();
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="card p-3 mb-2">
        <h5>${item.name}</h5>
        <p>BWP ${item.price}</p>
        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  });

  cartTotal.innerHTML = `<h5>Total: BWP ${total}</h5>`;
}

// Remove item
function removeItem(index) {
  let cart = getCart();

  cart.splice(index, 1);

  saveCart(cart);
  displayCart();
  updateCartCount();
}

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
  updateCartCount();
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  displayCart();
});



// ===== FEEDBACK FORM =====

function handleFeedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm");
  const successMessage = document.getElementById("successMessage");

  if (!feedbackForm) return;

  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.style.display = "block";

    feedbackForm.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
  });
}

// Run feedback form
document.addEventListener("DOMContentLoaded", () => {
  handleFeedbackForm();
});

// ===== FEEDBACK FORM =====

function handleFeedbackForm() {
  const form = document.getElementById("feedbackForm");
  const success = document.getElementById("successMessage");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    success.classList.remove("d-none");

    form.reset();

    setTimeout(function() {
      success.classList.add("d-none");
    }, 4000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  displayCart();
  handleFeedbackForm();
});



// ===== CONTACT FORM =====

function handleContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    success.classList.remove("d-none");

    form.reset();

    setTimeout(function() {
      success.classList.add("d-none");
    }, 4000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  handleContactForm();
});