import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue/:id" element={<ItemPage />} />
          {/* <Route path="*" */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
