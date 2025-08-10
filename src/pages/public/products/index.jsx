import { FaSearch } from "react-icons/fa";
import { memo, useEffect, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import ReactPaginate from "react-paginate";

import ProductCard from "../../../components/card/product";
import { useGetProductsQuery } from "../../../redux/query/products";
import Loading from "../../../components/loading";

import { LIMIT } from "../../../constants";

import request from "../../../server";
import ProductNotFound from "../../../components/no-product";

import "./style.scss";

const ProductsPage = memo(() => {
  // State variables
  const [showSidebar, setShowSidebar] = useState(false);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const [listCategories, setListCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCategories() {
      const { data } = await request("products/category-list");
      setListCategories(data);
    }
    getCategories();
  }, []);

  const params = { skip, limit: LIMIT };
  const { data, isFetching } = useGetProductsQuery({ params, category, search });
  const products = data?.products;
  const total = data?.total;
  const pageCount = Math.ceil(total / LIMIT);

  // Handlers
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handlePageClick = (event) => {
    let page = event.selected;
    setSkip(page * LIMIT);
  };

  const getCategory = (category) => {
    setCategory(category);
    setShowSidebar(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSkip(0);
  };

  return (
    <section className="products container">
      <div className="products__top">
        <button onClick={toggleSidebar} className="products__category-view">
          <RxHamburgerMenu />
        </button>
        <label htmlFor="product-search" className="products__search-wrapper">
          <FaSearch className="products__search-icon" />
          <input
            onChange={handleSearch}
            id="product-search"
            type="text"
            className="products__search"
            placeholder="Search products..."
            value={search}
          />
        </label>
      </div>
      <div className={`products__sidebar ${showSidebar ? "products__sidebar-active" : " "}`}>
        <ul>
          <li onClick={() => getCategory("")}>All Categories</li>
          {listCategories.map((cat, i) => (
            <li key={i} onClick={() => getCategory(cat)}>
              {cat.replace(/-/g, " ")}
            </li>
          ))}
        </ul>
      </div>
      <div className="products__content">
        {isFetching ? (
          <Loading />
        ) : total === 0 ? (
          <ProductNotFound />
        ) : (
          <div className="products-row">
            {products?.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        )}
        {/*<=== Pagination ===>*/}
        {data?.total > LIMIT ? (
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
          />
        ) : null}
      </div>
    </section>
  );
});

export default ProductsPage;
