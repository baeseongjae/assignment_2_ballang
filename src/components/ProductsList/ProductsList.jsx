import React from "react";
import styled from "styled-components";
import ProductsListItem from "../ProductsListItem";

function ProductsList({ products }) {
  return (
    <div>
      <Title>상품리스트</Title>
      <StyledProductsList>
        {products.map((product) => (
          <ProductsListItem product={product} />
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
`;
