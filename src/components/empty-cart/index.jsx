import { useNavigate } from "react-router";

import cartIcon from "../../assets/images/empty-cart.png";
import "./style.scss";
const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <img src={cartIcon} alt="Empty Cart" />
      <h2>Your cart is empty</h2>
      <p>Start from the productspage — use search to find what you need or browse collections.</p>
      <button onClick={() => navigate("/products")}>Go to Productspage</button>
    </div>
  );
};

export default EmptyCart;