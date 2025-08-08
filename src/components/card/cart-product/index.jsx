import React from "react";
import { useDispatch } from "react-redux";
import { Link,  } from "react-router";
import {
  decreaseQuantity,
  deleteProductInCart,
  increaseQuantity,
} from "../../../redux/slice/cart-products";

import "./style.scss";
const CartProductsCard = (product) => {
  const dispatch = useDispatch();
  const quantity = product.quantity
  const totalPrice = product.price.toFixed(1) * quantity;
  return (
    <div className="cart-product">
      <Link to={`/products/${product.id}`}>
        <img className="cart-product__img" src={product.thumbnail} alt={product.description} />
      </Link>
      <div className="cart-product__info-box">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className="cart-product__category">{product.category}</span>
        <div className="cart-product__tags">
          {product.tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </div>
        <div className="cart-product__control-box">
          <div>
            <h3>Brand: {product.brand} </h3>
            <h3>Price: {totalPrice}$</h3>
          </div>
          <div className="cart-product__btns-box">
            <button
              disabled={quantity === 1}
              className={quantity === 1 ? "btn-disabled" : ""}
              onClick={() => dispatch(decreaseQuantity(product))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
          </div>
        </div>
      </div>
      <button
        className="cart-product__del-btn"
        onClick={() => dispatch(deleteProductInCart(product.id))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
          <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.796625 6 11.086453 6.9162188 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.913547 6.9162187 35.202375 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 8.9726562 18 L 11.125 38.085938 C 11.425 40.887937 13.77575 43 16.59375 43 L 31.40625 43 C 34.22325 43 36.574 40.887938 36.875 38.085938 L 39.027344 18 L 8.9726562 18 z" />
        </svg>
        Delete cart
      </button>
    </div>
  );
};

export default CartProductsCard;
