import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsListItem({ product }) {
  return (
    <li key={product.goodsno}>
      <ProductsListItemLink to={`/products/${product.goodsno}`}>
        <img src={product.img_i} alt={product.goodsnm} />
        <h3>{product.brandnm}</h3>
        <GoodsName>{product.goodsnm}</GoodsName>
        <p>
          {product.price} <span>{product.sale_percent}</span>
        </p>
      </ProductsListItemLink>
    </li>
  );
}

export default ProductsListItem;

const ProductsListItemLink = styled(Link)`
  display: block;
  color: black;
  img {
    width: 100%;
  }
`;

const GoodsName = styled.p`
  width: 100%;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
