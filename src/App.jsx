import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./components/layout/wrapper"
import HomePage from "./pages/public/home";
import FavoritePage from "./pages/public/favorite";
import AboutPage from "./pages/public/about";
import ProductPage from "./pages/public/product";
import ProductsPage from "./pages/public/products";
import CartPage from "./pages/public/cart";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
