import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

import CartProductsCard from "./../../../components/card/cart-product/index";
import EmptyCart from "./../../../components/empty-cart/index";

import payme from "../../../assets/images/payme.png";
import click from "../../../assets/images/Click.png";
import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";

import "./style.scss";

const CartPage = () => {
  const apiUrl = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_ID}/sendMessage`;

  const { cartProducts } = useSelector((state) => state.cartProducts);

  const couPonRef = useRef("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [apply, setApply] = useState(true);
  const [totalSum, setTotalSum] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [paymentType, setPaymentType] = useState("cash");

  useEffect(() => {
    let sum = 0;
    for (const { quantity, price } of cartProducts) {
      sum += quantity * price;
    }
    setTotalSum(sum);
  }, [cartProducts]);

  const handleCoupon = (e) => {
    setCoupon(e.target.value.trim());
  };

  const handlePaymentType = (e) => {
    setPaymentType(e.target.value);
    if (e.target.value === "cash") {
      toast.info("You have selected cash payment.");
    } else {
      toast.info(`You have selected ${e.target.value} payment.`);
    }
  };

  const applyCoupon = () => {
    if (coupon.trim() === "") {
      toast.error("Please enter a coupon code.");
      couPonRef.current.focus();
    } else if (coupon.toUpperCase() === "BESTSHOP") {
      if (apply) {
        toast.success("Coupon applied successfully! You get a 20% discount.");
        setTotalSum((prev) => prev * 0.8);
        setApply(false); // Reset apply state to allow re-application
      }
    } else {
      toast.error("Invalid coupon code. BESTSHOP is the only valid code.");
    }
  };

  const sendProductsToTelegram = async () => {
    if (cartProducts.length > 0) {
      const productsList = cartProducts
        .map(({ title, quantity, price }, i) => `${i + 1}) ${title} - ${quantity} pcs - $${price}`)
        .join("\n");

      const message = `New order:\n\nProducts:\n${productsList} \n\n Coupon: ${
        coupon ? coupon : "no coupon"
      } \n Discount: ${
        apply ? "no discount" : "20% discount"
      } \n Payment-type: ${paymentType} \nTotal: $${totalSum.toFixed(2)}`;

      try {
        setBtnLoading(true);
        await axios.post(apiUrl, {
          chat_id: import.meta.env.VITE_CHAT_ID,
          text: message,
        });
      } catch (error) {
        setBtnLoading(false);
        toast.error("Failed to send order to Telegram. Please try again later." + error.message);
      }finally{
        setBtnLoading(false);
        toast.success("Your order has been successfully placed!");
        couPonRef.current.value = "";
        setCoupon("");
        setApply(true);
      }
    }
  };

  return (
    <section className="cart container">
      {cartProducts.length > 0 ? (
        <div className="cart__box">
          <div className="cart__products-row">
            <h1 className="cart__title"> {cartProducts.length} products in your cart</h1>
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
                <span>$ {totalSum.toFixed()}</span>
              </div>

              {/* <=== COUPON INPUT ===> */}
              <div className="coupon-box">
                <input
                  ref={couPonRef}
                  type="text"
                  placeholder="Enter your coupon code"
                  value={coupon}
                  onChange={handleCoupon}
                />
                <button onClick={applyCoupon}>Apply</button>
              </div>
              {/* <=== PAYMNET TYPE ===> */}
              <div className="payment-card">
                <label htmlFor="paymentType" className="payment-card__label">
                  Payment Type
                </label>
                <div className="payment-card__select-wrap">
                  <select
                    id="paymentType"
                    className="payment-card__select"
                    value={paymentType}
                    onChange={handlePaymentType}
                    aria-label="Select payment type"
                  >
                    <option value="cash">Select payment method</option>
                    <option value="cash">Cash</option>
                    <option value="click">Click</option>
                    <option value="payme">Payme</option>
                    <option value="visa">Visa / Card</option>
                  </select>

                  {/* optional icon slot */}
                  <span className="payment-card__icon" aria-hidden="true">
                    ▾
                  </span>
                </div>

                <p className="payment-card__hint">Choose how you want to pay</p>
              </div>
              {/* Checkout button */}
              <button disabled={btnLoading} className={`checkout-btn ${btnLoading ? "checkout-disabled" : " "} `} onClick={sendProductsToTelegram}>
                Place Order {btnLoading ? <span className="loading-btn"></span> : " "}
                
              </button>

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
