import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsList({ products }) {
  return (
    <div>
      <Title>상품리스트</Title>
      <StyledProductsList>
        {products.map((product) => (
          <li key={product.goodsno}>
            <ProductsListItemLink>
              <img src={product.img_i} alt={product.goodsnm} />
              <h3>{product.brandnm}</h3>
              <GoodsName>{product.goodsnm}</GoodsName>
              <p>
                {product.price} <span>{product.sale_percent}</span>
              </p>
            </ProductsListItemLink>
          </li>
        ))}
      </StyledProductsList>
    </div>
  );
}

export default ProductsList;

const Title = styled.h2`
  text-align: center;
`;

const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 2rem;

  li img {
    width: 100%;
  }
`;

const ProductsListItemLink = styled(Link)`
  display: block;
  color: black;
`;

const GoodsName = styled.p`
  width: 100%;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
