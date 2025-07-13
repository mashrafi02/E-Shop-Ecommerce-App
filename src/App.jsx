import { Route, Routes } from "react-router-dom";
import Layout from "./Pagelayouts/Layout"
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Layout2 from "./Pagelayouts/Layout2";


function App() {
  return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route element={<Layout2 />}>
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
  )
}

export default App
