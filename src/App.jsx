import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import ("./components/layout/wrapper"));
const HomePage = lazy(() => import ("./pages/public/home"));
const FavoritePage = lazy(() => import ("./pages/public/favorite"));
const AboutPage = lazy(() => import ("./pages/public/about"));
const ProductPage = lazy(() => import ("./pages/public/product"));
const ProductsPage = lazy(() => import ("./pages/public/products"));
const CartPage = lazy(() => import ("./pages/public/cart"));
const NotFoundPage = lazy(() => import ("./pages/not-found"));

function App() {
  return (
    <Suspense >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<ProductPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
