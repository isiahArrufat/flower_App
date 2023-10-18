const item = require('./data/flowersList.json');





const cart = {
    shopping_cart: [],
};

const addItemToCart = (itemId, quantity) => {
  const existingItem = cart.shopping_cart.find((cartItem) => cartItem.item.id === itemId);
  if (existingItem) {
      existingItem.quantity += quantity;
  } else {
      const flower = item.find((flower) => flower.id === itemId);
      if (flower) {
          cart.shopping_cart.push({ item: flower, quantity });
          console.log("Item added to the shopping cart.");
      } else {
          console.log("Item not found in the inventory.");
      }
  }
}
  


function calculateTotalPrice() {
    
}

function calculateTotalQuantity() {
    // Calculate and return the total quantity of each item in the cart
}

function displayCart() {
  if (cart.shopping_cart.length === 0) {
      console.log("Currently, your shopping cart is empty.");
  } else {
      console.log("My Cart:");
      cart.shopping_cart.forEach((cartItem) => {
          console.log(`Item ID: ${cartItem.item.id}, Name: ${cartItem.item.flower_name}, Quantity: ${cartItem.quantity}`);
      });
  }
}



function removeItemFromCart(itemId) {
    // Remove an item from the cart based on its ID
}

module.exports = {
    addItemToCart,
    calculateTotalPrice,
    calculateTotalQuantity,
    displayCart,
    removeItemFromCart,
};
