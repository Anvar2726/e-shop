import React from "react";
import { useSelector } from "react-redux";
import CartProductsCard from "./../../../components/card/cart-product/index";
import EmptyCart from "./../../../components/empty-cart/index";

import payme from "../../../assets/images/payme.png";
import click from "../../../assets/images/click.png";
import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";

import "./style.scss";
const CartPage = () => {
  const { cartProducts } = useSelector((state) => state.cartProducts);
  let sum = 0;

  for (const {quantity, price} of cartProducts) {
   sum += quantity * price;
  }
  
  
  return (
    <section className="cart container">
      {cartProducts.length > 0 ? (
        <div className="cart__box">
          <div className="cart__products-row">
            <h1 className="cart__title"> {cartProducts.length} items in your cart</h1>
            {cartProducts.map((product) => (
              <CartProductsCard {...product} key={product.id} />
            ))}
          </div>
          <div>
            <div className="cart-summary-card">
              <h2>Summary</h2>

              <div className="summary-item">
                <span>Total items:</span>
                <span>{cartProducts.length} pcs</span>
              </div>
              <div className="summary-item">
                <span>Total price:</span>
                <span>$ {sum.toFixed()}</span>
              </div>

              {/* Coupon input */}
              <div className="coupon-box">
                <input
                  type="text"
                  placeholder="Enter your coupon code"
                  // value={coupon}
                  // onChange={(e) => setCoupon(e.target.value)}
                />
                <button>Apply</button>
              </div>

              {/* Checkout button */}
              <button className="checkout-btn">Place Order</button>

              {/* Payment methods */}
              <div className="payment-methods">
                <p>Payment methods:</p>
                <div className="logos">
                  <img src={payme} alt="Payme" />
                  <img src={click} alt="Click" />
                  <img src={visa} alt="Visa" />
                  <img src={mastercard} alt="MasterCard" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default CartPage;
