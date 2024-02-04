import React from "react";

import Page from "../../components/Page";

import styled from "styled-components";

function CartPage() {
  return (
    <Page>
      <Title>장바구니 페이지 입니다~~~~~</Title>
    </Page>
  );
}

export default CartPage;

const Title = styled.h2`
  text-align: center;
`;
