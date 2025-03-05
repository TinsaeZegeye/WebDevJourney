// Get references to the order quantity input and total price field
const orderQuantity = document.getElementById('order-quantity');
const unitPrice = document.getElementById('unit-price').value.replace('ETB', '') * 1; // Extract numeric value
const totalPriceField = document.getElementById('total-price');

// Function to update the total price
function updateTotalPrice() {
    const quantity = parseInt(orderQuantity.value) || 1; // Ensure at least 1 order
    const totalPrice = quantity * unitPrice;
    totalPriceField.value = `${totalPrice}ETB`; // Update total price with "ETB" suffix
}

// Add an event listener to the order quantity input
orderQuantity.addEventListener('input', updateTotalPrice);

// Initialize the total price on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice(); // Set initial total price
});