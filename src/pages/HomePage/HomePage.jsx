import React, { useEffect, useState } from "react";

import api from "../../apis/api";
import Page from "../../components/Pages/Page";
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

// const productsReceived = api.products.getProducts("products");
// productsReceived.then(([productsReceived]) =>
//   setProducts({ productsReceived })
// );
// useEffect(() => {
//   const productsReceived = api.products.getProducts("products");
//   setProducts({ productsReceived });
// }, []);

export default HomePage;
