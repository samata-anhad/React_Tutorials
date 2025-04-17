import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity } from '../../redux/slices/cartSlice';
import './CartItem.css';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  // Check if product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="cart-item-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
        <span>{product.quantity}</span>
        <button onClick={handleAddToCart}>+</button>
      </div>
      <div className="cart-item-price">${(product.price * product.quantity).toFixed(2)}</div>
      <button className="remove-button" onClick={() => dispatch(removeFromCart(product.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
