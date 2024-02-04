import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/auth.context";

import styled from "styled-components";

function Nav() {
  const { isLoggedIn, logOut, userId } = useAuth();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    logOut();
    navigate("/");
  };

  let menuItemLinkLog = <MenuItemLink to={`/sign-in`}>로그인</MenuItemLink>;
  let menuItemUserId = (
    <li>
      <span>{userId}님 </span>
    </li>
  );

  if (isLoggedIn) {
    menuItemLinkLog = (
      <MenuItemLogOutButton onClick={handleClickLogout}>
        로그아웃
      </MenuItemLogOutButton>
    );
  }

  if (!userId) {
    menuItemUserId = null;
  }

  return (
    <StyledNav>
      <NavInner>
        <span>럭셔리하도다 그이름, 발랑</span>
        <span>Online luxury boutique</span>
        <MenuList>
          {menuItemUserId}
          <li>{menuItemLinkLog}</li>
          <li>
            <MenuItemLink>마이페이지</MenuItemLink>
          </li>
          <li>
            <MenuItemLink>주문배송</MenuItemLink>
          </li>
          <li>
            <MenuItemLastLink>고객센터</MenuItemLastLink>
          </li>
        </MenuList>
      </NavInner>
    </StyledNav>
  );
}

export default Nav;

// --------------- 스타일링 ------------------

const StyledNav = styled.nav`
  height: 1.75rem;
  font-size: 14px;
  background-color: black;
  color: white;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  > li {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const NavInner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span,
  ${MenuList} {
    flex: 1;
  }

  > span {
    &:nth-child(2) {
      text-align: center;
    }
  }
`;

const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 10px;
  display: inline-block;
  border-right: 1px solid white;
`;

const MenuItemLastLink = styled(MenuItemLink)`
  border: none;
`;

const MenuItemLogOutButton = styled.button`
  text-decoration: none;
  color: white;
  padding: 0 10px;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-right: 1px solid white;

  &:hover {
    cursor: pointer;
  }
`;
