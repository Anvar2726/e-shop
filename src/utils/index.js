const getUrl = ({ category, search}) => {
  let url = category ? `products/category/${category}` : "products";
  if (search) {
    url = `products/search?q=${search}`;
  }
  return  url
}

export { getUrl};