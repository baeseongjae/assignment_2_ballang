import React from "react";
import { Link } from "react-router-dom";

import Page from "../../components/Page";
import Counter from "../../components/Counter";

import styled from "styled-components";
import Price from "../../components/Price";

function CartPage() {
  return (
    <Page>
      <Title>쇼핑백</Title>
      <CartArticle>
        <CartItemsSection>
          <div>전체선택</div>
          <Line />
          <ul>
            <li>
              <Link>
                <img src="" alt="" />
                <p>아디다스 알파바운스</p>
              </Link>

              <Counter />
              <Price amount="44800" />
            </li>
            <li>
              <Link>
                <img src="" alt="" />
                <p>뉴발란스 반팔</p>
              </Link>
              <Counter />
              <Price amount="30000" />
            </li>
          </ul>
        </CartItemsSection>
        <OrderSection>
          <A11yHidden>결제 예정금액</A11yHidden>
          <ul>
            <li>
              <dl>
                <dt>상품금액</dt>
                <dd>74800원</dd>
              </dl>
              <dl>
                <dt>할인금액</dt>
                <dd>0원</dd>
              </dl>
              <dl>
                <dt>배송비</dt>
                <dd>0원</dd>
              </dl>
              <hr />
              <dl>
                <dt>결제예정금액</dt>
                <dd>74800원</dd>
              </dl>
            </li>
          </ul>
          <OrderButton>주문하기</OrderButton>
        </OrderSection>
      </CartArticle>
    </Page>
  );
}

export default CartPage;

// ------------- 스타일링 --------------

const A11yHidden = styled.h3`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;

const Title = styled.h2`
  text-align: center;
`;

const Line = styled.hr`
  border: 1px solid black;
`;

const CartArticle = styled.article`
  display: flex;
  column-gap: 5rem;
`;

const CartItemsSection = styled.section`
  width: 70%;

  ul li {
    display: flex;
    align-items: center;
    column-gap: 3.5rem;
  }
  a {
    flex: 1;
  }
`;

const OrderSection = styled.section`
  padding-top: 60px;
  text-align: center;

  dl {
    display: flex;
    justify-content: space-between;

    dt {
      margin-left: 20px;
    }
    dd {
      margin-right: 20px;
    }
  }
`;

const OrderButton = styled.button`
  width: 300px;
  font-size: 17px;
  font-weight: 600;
  background-color: black;
  height: 50px;
  border-radius: 50px;
  color: white;
  border-color: transparent;
  margin: 20px 0;

  &:hover {
    background-color: rgb(130, 130, 130);
    cursor: pointer;
  }
`;
