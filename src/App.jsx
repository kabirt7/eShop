import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";
import CartPage from "./pages/CartPage/CartPage";
import FeaturedPage from "./pages/FeaturedPage/FeaturedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
