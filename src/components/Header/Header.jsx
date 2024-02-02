import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Nav from "../Nav";

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <HeaderInnerContents>
        <ul>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
        </ul>
        <Logo>
          <StyledLink to="/">Ballang</StyledLink>
        </Logo>
        <InputAndCart>
          <input type="text" />
          <button>검색</button>
          <Link>장바구니</Link>
        </InputAndCart>
      </HeaderInnerContents>
      <HeaderInnerCategory>
        <CategoryInnerWrapper>
          <CategoryList>
            <li>
              <CategoryItemLink to="#">NEW IN</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">의류</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">슈즈</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">가방</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">액세서리</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">주얼리</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">SALE</CategoryItemLink>
            </li>
            <li>
              <CategoryItemLink to="#">DESIGNERS</CategoryItemLink>
            </li>
          </CategoryList>
        </CategoryInnerWrapper>
      </HeaderInnerCategory>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header``;

const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
`;

const HeaderInnerContents = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 117px;

  > ul {
    display: flex;
    list-style: none;
    height: 100%;

    > li {
      height: 100%;
      display: flex;
      align-items: center;
      > a {
        color: black;
        border-right: 1px solid #5a5a5a;
        padding: 0 5px;
      }
    }

    > li:last-child a {
      border: none;
    }
  }

  ul,
  ${Logo}, div {
    flex: 1;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;

const InputAndCart = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// ----------- 카테고리 ------------
const HeaderInnerCategory = styled.section`
  border-bottom: 5px solid black;
`;

const CategoryInnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryItemLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-weight: 600;
  color: black;
`;
