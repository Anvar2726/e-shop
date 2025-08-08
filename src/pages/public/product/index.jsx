import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { useGetProductQuery } from "../../../redux/query/products";
import { addToCart, decreaseQuantity, increaseQuantity } from "../../../redux/slice/cart-products";

import "./style.scss";
import Comments from "../../../components/card/comments";

const ProductPage = () => {
  const { productId: Id } = useParams();
  const { data: product } = useGetProductQuery(Id);
  const {cartProducts} = useSelector((state) => state.cartProducts);
  
  const dispatch = useDispatch();
  const isinCart = cartProducts.find((el) => el.id === product?.id);


  const [img, setImg] = useState("");

  const handleImg = (e) => {
    setImg(e.target.src);
  };

  return (
    <section className="product container">
      <h1 className="product__title">{product?.title}</h1>
      <div className="product__content-box">
        <div className="product__img-box">
          <div className="product__gallery">
            {product?.images?.map((img, i) => (
              <img key={i} onClick={handleImg} width="" src={img} alt={product?.title} />
            ))}
          </div>
          <img className="product__main-img" width="" src={img || product?.thumbnail} alt="img2" />
        </div>
        <div className="product__info">
          <p className="product__description">{product?.description}</p>
          <p className="product__category">
            Category: <span>{product?.category}</span>
          </p>
          <p className="product__brand">
            Brand: <span>{product?.brand}</span>
          </p>
          <p className="product__price">$ {product?.price.toFixed()}</p>

          <div className="product__tags">
            {product?.tags.map((tag, i) => (
              <span key={i} className="product__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="product__control">
            {!isinCart ? (
              <button className="product__btn" onClick={() => dispatch(addToCart(product))}>
                Add to cart <BsCartPlus />
              </button>
            ) : (
              <div>
                <button onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                <span>{isinCart?.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product__comments">
        <h2 className="product__comments-title">Customer reviews</h2>
        {product?.reviews?.map((review, i) => (
          <Comments {...review} key={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
