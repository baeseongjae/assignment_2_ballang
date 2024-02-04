import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import ProductsDetailPage from "./pages/ProductsDetailPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products/:productId"
              element={<ProductsDetailPage />}
            />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
