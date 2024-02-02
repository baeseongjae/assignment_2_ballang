import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 64px;
  background-color: #fff;
  color: red;
`;

function Header() {
  return <StyledHeader>헤더입니다</StyledHeader>;
}

export default Header;
