import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Page from "../../components/Pages/Page";
import api from "../../apis/api";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products
      .getProducts("products")
      .then((productsReceived) => setProducts(productsReceived));
  }, []);

  return (
    <Page>
      <h2>상품리스트</h2>
      <ul>
        {products.map((product) => (
          <li key={product.goodsno}>
            <Link>
              <img src={product.img_i} alt={product.goodsnm} />
              <h3>{product.brandnm}</h3>
              <p>{product.goodsnm}</p>
              <p>
                {product.price} <span>{product.sale_percent}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
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
