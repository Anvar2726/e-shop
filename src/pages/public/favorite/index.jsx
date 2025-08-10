import React, { memo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/card/product";
import EmptyCart from "../../../components/empty-cart";

import "./style.scss";
const FavoritePage = memo(() => {
  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);

  return (
    <section className="favorite container">
      <h2 className="favorite__title">Your Favorites</h2>
      {favoriteProducts.length > 0 ? (
        <div className="favorite__products-row">
          {favoriteProducts.map((product) => <ProductCard {...product} key={product.id} />)}
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
});

export default FavoritePage;
