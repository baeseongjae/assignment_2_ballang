import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Page from "../../components/Page";
import Counter from "../../components/Counter";
import Price from "../../components/Price";

import styled from "styled-components";

function CartPage() {
  const productsInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const discountAmount = useSelector((state) => state.cart.discountAmount);
  const amountToPay = useSelector((state) => state.cart.amountToPay);

  return (
    <Page>
      <Title>쇼핑백</Title>
      <CartArticle>
        <CartItemsSection>
          <div>전체선택</div>
          <Line />
          <ul>
            {productsInCart.map((item) => (
              <li>
                <Link>
                  <img src={item.img_i} alt={item.goodsnm} />
                  <p>{item.goodsnm}</p>
                </Link>
                <Counter product={item} isDirectUpdate={true} />
                <Price amount={item.price * item.count} />
              </li>
            ))}
          </ul>
        </CartItemsSection>
        <OrderSection>
          <A11yHidden>결제 예정금액</A11yHidden>
          <ul>
            <li>
              <dl>
                <dt>상품금액</dt>
                <dd>
                  <Price amount={totalPrice} />
                </dd>
              </dl>
              <dl>
                <dt>할인금액</dt>
                <dd>
                  - <Price amount={discountAmount} />
                </dd>
              </dl>
              <dl>
                <dt>배송비</dt>
                <dd>0원</dd>
              </dl>
              <hr />
              <dl>
                <dt>결제예정금액</dt>
                <dd>
                  <Price amount={amountToPay} />
                </dd>
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
    display: flex;
    align-items: center;
    column-gap: 20px;
    color: black;
    img {
      width: 100px;
      height: 120px;
    }
  }
  span {
    width: 90px;
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
