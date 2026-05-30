import "./Cart.css";

function Cart({ cart, setCart }) {
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add your favorite chai and snacks from the menu.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <div className="cart-icon">☕</div>

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price} each</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <div className="item-total">
              ₹{item.price * item.quantity}
            </div>

            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items</span>
          <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>

        <div className="summary-row">
          <span>Total</span>
          <strong>₹{total}</strong>
        </div>

        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
