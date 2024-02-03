import React, { useEffect, useState } from "react";

import api from "../../apis/api";
import Page from "../../components/Page";
import ProductsList from "../../components/ProductsList";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products
      .getProducts("products")
      .then((productsReceived) => setProducts(productsReceived));
  }, []);

  return (
    <Page>
      <ProductsList products={products} />
    </Page>
  );
}

export default HomePage;
