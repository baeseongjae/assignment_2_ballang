import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { updateItemCountActionCreator } from "../../store/actions/cart.actions";

function Counter({ product }) {
  const [count, setCount] = useState(0);
  const productsInCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // 프로덕트id와 일치하는 카트리스트아이템 찾기
  const targetIndex = productsInCart.findIndex(
    (item) => item.id === product.id
  );
  const productCount =
    targetIndex !== -1 ? productsInCart[targetIndex].count : 0;

  const handleClickPlusButton = () => {
    const action = updateItemCountActionCreator(product, productCount + 1);
    dispatch(action);
    setCount(productCount + 1);
  };

  const handleClickMinusButton = () => {
    if (count > 0) {
      const action = updateItemCountActionCreator(product, productCount - 1);
      dispatch(action);
      setCount(productCount - 1);
    }
  };

  return (
    <CounterWrapper>
      <A11yHidden>카운터</A11yHidden>
      <MinusButton onClick={handleClickMinusButton}>-</MinusButton>
      <div>{productCount}</div>
      <PlusButton onClick={handleClickPlusButton}>+</PlusButton>
    </CounterWrapper>
  );
}

export default Counter;

// -------------- 스타일링 -----------------

const A11yHidden = styled.h2`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 17px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin: 5px;
  border: 1px solid transparent;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    color: rgb(189, 189, 189);
  }
`;

const MinusButton = styled(Button)`
  font-size: 28px;
  transform: translateY(-2px);
`;

const PlusButton = styled(Button)`
  transform: translateY(1px);
`;
