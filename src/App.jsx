import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import ProductsDetailPage from "./pages/ProductsDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductsDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
