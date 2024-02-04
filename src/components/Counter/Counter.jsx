import React, { useState } from "react";

import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <CounterWrapper>
      <A11yHidden>카운터</A11yHidden>
      <MinusButton onClick={() => setCount(count - 1)}>-</MinusButton>
      <span>{count}</span>
      <PlusButton onClick={() => setCount(count + 1)}>+</PlusButton>
    </CounterWrapper>
  );
}

export default Counter;

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

  span {
    font-size: 16px;
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
