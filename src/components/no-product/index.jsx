import React from "react";

import NotFoundImage from "../../assets/images/no-products.svg";
import "./style.scss";

 const ProductNotFound = () => {
  return (
    <div className="product-notfound">
      <img src={NotFoundImage} alt="Product Not Found" className="product-notfound__image" />
      <h2 className="product-notfound__title">Product Not Found</h2>
      <p className="product-notfound__text">We couldn’t find any products matching your search.</p>
    </div>
  );
}

export default ProductNotFound;